import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directory to scan for images
const PUBLIC_DIR = path.join(__dirname, '../public');

// We will overwrite the original files to avoid having to change image paths in code.
// The optimization settings prioritize maximum visual quality (lossless or near-lossless)
// while stripping out unnecessary metadata and optimizing the compression encoding.

async function optimizeImage(filePath) {
  try {
    const ext = path.extname(filePath).toLowerCase();
    const statsBefore = await fs.stat(filePath);
    const originalSize = statsBefore.size;

    // Load the image into sharp
    const image = sharp(filePath);
    const tempFilePath = `${filePath}.tmp${ext}`;

    if (ext === '.png') {
      // Optimize PNG
      // compressionLevel: 9 (max zlib compression)
      // adaptiveFiltering: true (better for mixed content)
      await image.png({ compressionLevel: 9, adaptiveFiltering: true, force: true }).toFile(tempFilePath);
    } else if (ext === '.jpg' || ext === '.jpeg') {
      // Optimize JPEG
      // mozjpeg: true (advanced JPEG compression without losing quality)
      // quality: 85 (standard high-quality threshold, visually identical to 100 for web)
      await image.jpeg({ quality: 85, mozjpeg: true, force: true }).toFile(tempFilePath);
    } else if (ext === '.webp') {
      // Re-optimize WebP if any exist
      await image.webp({ quality: 85, lossless: false, force: true }).toFile(tempFilePath);
    } else {
      // Not an image type we are optimizing
      return;
    }

    const statsAfter = await fs.stat(tempFilePath);
    const optimizedSize = statsAfter.size;

    // Only replace if the optimized file is actually smaller
    if (optimizedSize < originalSize) {
      await fs.rename(tempFilePath, filePath);
      const savedKb = ((originalSize - optimizedSize) / 1024).toFixed(2);
      const percent = (((originalSize - optimizedSize) / originalSize) * 100).toFixed(1);
      console.log(`✅ Optimized: ${path.basename(filePath)} | Saved: ${savedKb} KB (${percent}%)`);
    } else {
      // If the original was already highly optimized, discard the temp file
      await fs.unlink(tempFilePath);
      console.log(`⏭️  Skipped: ${path.basename(filePath)} (Already highly optimized)`);
    }
  } catch (err) {
    console.error(`❌ Error optimizing ${path.basename(filePath)}:`, err.message);
  }
}

async function walkDir(dir) {
  const files = await fs.readdir(dir, { withFileTypes: true });
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      await walkDir(fullPath); // Recursive scan
    } else {
      const ext = path.extname(file.name).toLowerCase();
      if (['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) {
        await optimizeImage(fullPath);
      }
    }
  }
}

async function run() {
  console.log('🖼️  Starting image optimization...');
  console.log('Scanning directory:', PUBLIC_DIR);
  
  await walkDir(PUBLIC_DIR);
  
  console.log('✨ Image optimization complete!');
}

run();
