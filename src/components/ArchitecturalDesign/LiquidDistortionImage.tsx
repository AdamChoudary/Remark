"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface LiquidDistortionImageProps {
  imageSrc: string;
  alt: string;
  className?: string;
}

export function LiquidDistortionImage({
  imageSrc,
  alt,
  className = "",
}: LiquidDistortionImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;
    let isVisible = true;

    // WebGL Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: false, // Performance optimization
        powerPreference: "high-performance",
        precision: "mediump", // Medium precision shader for GPU speed
      });
      // Cap at 1.5x device pixel ratio for smooth 60fps rendering without GPU overload
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    } catch {
      return;
    }

    const mouse = {
      x: 0.5,
      y: 0.5,
      targetX: 0.5,
      targetY: 0.5,
      vx: 0,
      vy: 0,
      prevX: 0.5,
      prevY: 0.5,
    };
    const hoverState = { value: 0, target: 0 };

    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    // Shery.js Style High-Performance WebGL Shader
    const fragmentShader = `
      precision mediump float;
      uniform sampler2D uTexture;
      uniform vec2 uMouse;
      uniform vec2 uVelocity;
      uniform float uHover;
      uniform float uTime;
      uniform vec2 uResolution;
      uniform vec2 uImageResolution;
      varying vec2 vUv;

      vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
      float snoise(vec2 v){
        const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                 -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod(i, 289.0);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m; m = m*m;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      void main() {
        vec2 st = vUv;
        float screenAspect = uResolution.x / uResolution.y;
        float imageAspect = uImageResolution.x / uImageResolution.y;
        vec2 uvRatio = vec2(1.0);
        if (screenAspect > imageAspect) {
          uvRatio = vec2(1.0, imageAspect / screenAspect);
        } else {
          uvRatio = vec2(screenAspect / imageAspect, 1.0);
        }
        vec2 uv = (st - 0.5) * uvRatio + 0.5;

        // Liquid wave on mouse movement
        vec2 distVec = st - uMouse;
        float dist = length(distVec);

        float speed = length(uVelocity) * 10.0;
        float wave = sin(dist * 14.0 - uTime * 3.0) * exp(-dist * 3.0) * uHover;
        float noiseVal = snoise(st * 4.0 + uTime * 0.2) * uHover * (0.04 + speed * 0.03);

        vec2 offset = normalize(distVec + vec2(0.001)) * (wave * 0.04 + noiseVal);

        // Chromatic RGB dispersion
        float r = texture2D(uTexture, uv + offset * 1.15).r;
        float g = texture2D(uTexture, uv + offset).g;
        float b = texture2D(uTexture, uv + offset * 0.85).b;

        vec4 texColor = vec4(r, g, b, 1.0);

        // 100% Full Opacity on Left, Top, and Bottom. Smooth Right-Side Fade into #0b0d10
        float rightBlend = smoothstep(1.0, 0.45, st.x);
        vec4 bgVoid = vec4(0.043, 0.051, 0.063, 1.0); // #0b0d10

        gl_FragColor = mix(bgVoid, texColor, rightBlend);
      }
    `;

    const textureLoader = new THREE.TextureLoader();
    let material: THREE.ShaderMaterial;
    let mesh: THREE.Mesh;

    textureLoader.load(imageSrc, (texture) => {
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;

      const imageResolution = new THREE.Vector2(
        texture.image.width || 1200,
        texture.image.height || 1200
      );

      const uniforms = {
        uTexture: { value: texture },
        uMouse: { value: new THREE.Vector2(0.5, 0.5) },
        uVelocity: { value: new THREE.Vector2(0.0, 0.0) },
        uHover: { value: 0 },
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(container.clientWidth, container.clientHeight) },
        uImageResolution: { value: imageResolution },
      };

      material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms,
        transparent: true,
      });

      const geometry = new THREE.PlaneGeometry(2, 2);
      mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      setLoaded(true);
      resize();
    });

    const resize = () => {
      if (!container || !renderer || !material) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      if (material.uniforms.uResolution) {
        material.uniforms.uResolution.value.set(width, height);
      }
    };

    window.addEventListener("resize", resize, { passive: true });

    // IntersectionObserver to pause rendering when canvas is offscreen (Saves CPU/GPU)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    let animationFrameId: number;
    let clock = new THREE.Clock();

    const render = () => {
      animationFrameId = requestAnimationFrame(render);
      if (!isVisible) return; // Skip rendering when out of viewport!

      const elapsedTime = clock.getElapsedTime();

      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      mouse.vx = (mouse.targetX - mouse.prevX) * 0.1;
      mouse.vy = (mouse.targetY - mouse.prevY) * 0.1;
      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;

      hoverState.value += (hoverState.target - hoverState.value) * 0.06;

      if (material) {
        material.uniforms.uTime.value = elapsedTime;
        material.uniforms.uMouse.value.set(mouse.x, mouse.y);
        material.uniforms.uVelocity.value.set(mouse.vx, mouse.vy);
        material.uniforms.uHover.value = hoverState.value;
      }

      renderer.render(scene, camera);
    };

    render();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.targetX = (e.clientX - rect.left) / rect.width;
      mouse.targetY = 1.0 - (e.clientY - rect.top) / rect.height;
    };

    const handleMouseEnter = () => {
      hoverState.target = 1.0;
    };

    const handleMouseLeave = () => {
      hoverState.target = 0.0;
      mouse.targetX = 0.5;
      mouse.targetY = 0.5;
    };

    container.addEventListener("mousemove", handleMouseMove, { passive: true });
    container.addEventListener("mouseenter", handleMouseEnter, { passive: true });
    container.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", resize);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
      if (renderer) renderer.dispose();
    };
  }, [imageSrc]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-[500px] lg:min-h-[660px] overflow-hidden ${className}`}
      style={{ transform: "translateZ(0)", willChange: "transform" }}
    >
      {/* WebGL Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover z-0 cursor-pointer"
      />

      {!loaded && (
        <img
          src={imageSrc}
          alt={alt}
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      )}
    </div>
  );
}
