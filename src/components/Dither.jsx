/* eslint-disable react/no-unknown-property */
import { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const waveVertexShader = `
precision highp float;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const combinedFragmentShader = `
precision highp float;
uniform vec2 resolution;
uniform float time;
uniform float waveSpeed;
uniform float waveFrequency;
uniform float waveAmplitude;
uniform vec3 waveColor;
uniform vec2 mousePos;
uniform int enableMouseInteraction;
uniform float mouseRadius;
uniform float colorNum;
uniform float pixelSize;

// Simple hash noise for performance
float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
}

float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

// 4x4 Bayer Matrix
const float bayerMatrix4x4[16] = float[16](
  0.0/16.0,  8.0/16.0,  2.0/16.0, 10.0/16.0,
  12.0/16.0, 4.0/16.0, 14.0/16.0, 6.0/16.0,
  3.0/16.0, 11.0/16.0,  1.0/16.0,  9.0/16.0,
  15.0/16.0, 7.0/16.0, 13.0/16.0, 5.0/16.0
);

void main() {
  // 1. Resolution-aware UVs
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec2 aspectUv = uv - 0.5;
  aspectUv.x *= resolution.x / resolution.y;

  // 2. Wave Pattern (Simplified)
  float n = noise(aspectUv * waveFrequency + time * waveSpeed);
  n = pow(n, 2.5);

  // 3. Mouse Interaction
  if (enableMouseInteraction == 1) {
    vec2 mouseNDC = (mousePos / resolution - 0.5) * vec2(1.0, -1.0);
    mouseNDC.x *= resolution.x / resolution.y;
    float dist = length(aspectUv - mouseNDC);
    float effect = 1.0 - smoothstep(0.0, mouseRadius, dist);
    n -= 0.4 * effect;
  }

  // 4. Base Color
  vec3 col = mix(vec3(0.0), waveColor, n);

  // 5. Dither Pass (Integrated)
  vec2 scaledCoord = floor(gl_FragCoord.xy / pixelSize);
  int x = int(mod(scaledCoord.x, 4.0));
  int y = int(mod(scaledCoord.y, 4.0));
  float threshold = bayerMatrix4x4[y * 4 + x] - 0.5;
  
  float levels = colorNum - 1.0;
  col = clamp(col + threshold / levels, 0.0, 1.0);
  col = floor(col * levels + 0.5) / levels;

  gl_FragColor = vec4(col, 1.0);
}
`;

function DitheredWaves({
  waveSpeed,
  waveFrequency,
  waveAmplitude,
  waveColor,
  colorNum,
  pixelSize,
  disableAnimation,
  enableMouseInteraction,
  mouseRadius
}) {
  const mesh = useRef(null);
  const mouseRef = useRef(new THREE.Vector2());
  const { viewport, size, gl } = useThree();

  const uniformsRef = useRef({
    time: { value: 0 },
    resolution: { value: new THREE.Vector2() },
    waveSpeed: { value: waveSpeed },
    waveFrequency: { value: waveFrequency },
    waveAmplitude: { value: waveAmplitude },
    waveColor: { value: new THREE.Color(...waveColor) },
    mousePos: { value: new THREE.Vector2() },
    enableMouseInteraction: { value: enableMouseInteraction ? 1 : 0 },
    mouseRadius: { value: mouseRadius },
    colorNum: { value: colorNum },
    pixelSize: { value: pixelSize }
  });

  useEffect(() => {
    const dpr = gl.getPixelRatio();
    uniformsRef.current.resolution.value.set(size.width * dpr, size.height * dpr);
  }, [size, gl]);

  useFrame(({ clock }) => {
    const u = uniformsRef.current;
    if (!disableAnimation) {
      u.time.value = clock.getElapsedTime();
    }
    u.waveSpeed.value = waveSpeed;
    u.waveFrequency.value = waveFrequency;
    u.waveAmplitude.value = waveAmplitude;
    u.waveColor.value.set(...waveColor);
    u.enableMouseInteraction.value = enableMouseInteraction ? 1 : 0;
    u.mouseRadius.value = mouseRadius;
    u.colorNum.value = colorNum;
    u.pixelSize.value = pixelSize;
    u.mousePos.value.copy(mouseRef.current);
  });

  const handlePointerMove = e => {
    if (!enableMouseInteraction) return;
    const rect = gl.domElement.getBoundingClientRect();
    const dpr = gl.getPixelRatio();
    mouseRef.current.set((e.clientX - rect.left) * dpr, (e.clientY - rect.top) * dpr);
  };

  return (
    <mesh ref={mesh} scale={[viewport.width, viewport.height, 1]} onPointerMove={handlePointerMove}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        vertexShader={waveVertexShader}
        fragmentShader={combinedFragmentShader}
        uniforms={uniformsRef.current}
        transparent
      />
    </mesh>
  );
}

export default function Dither(props) {
  return (
    <Canvas
      className="w-full h-full relative"
      camera={{ position: [0, 0, 1] }}
      dpr={[0.8, 1]} // Dynamic DPR for performance
      gl={{ 
        antialias: false, 
        powerPreference: "high-performance",
        alpha: true,
        stencil: false,
        depth: false
      }}>
      <DitheredWaves {...props} />
    </Canvas>
  );
}
