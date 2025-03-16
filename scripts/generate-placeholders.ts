import { createCanvas } from 'canvas';
import fs from 'fs';
import path from 'path';

const placeholders = [
  {
    name: 'mountains',
    width: 1920,
    height: 1080,
    bgColor: '#964B00',
    text: 'Himalayan Mountains'
  },
  {
    name: 'turmeric',
    width: 800,
    height: 600,
    bgColor: '#FFA500',
    text: 'Turmeric Powder'
  },
  {
    name: 'honey',
    width: 800,
    height: 600,
    bgColor: '#FFD700',
    text: 'Wild Forest Honey'
  },
  {
    name: 'salt',
    width: 800,
    height: 600,
    bgColor: '#FFC0CB',
    text: 'Himalayan Rock Salt'
  },
  {
    name: 'landscape',
    width: 1920,
    height: 1080,
    bgColor: '#964B00',
    text: 'Himalayan Landscape'
  }
];

function generatePlaceholder(
  name: string,
  width: number,
  height: number,
  bgColor: string,
  text: string
) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Fill background
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, width, height);

  // Add text
  ctx.fillStyle = '#ffffff';
  ctx.font = '48px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, height / 2);

  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  const outputPath = path.join(process.cwd(), 'public', 'images', 'placeholders', `${name}.jpg`);
  fs.writeFileSync(outputPath, buffer);
  console.log(`Generated ${outputPath}`);
}

// Create the directory if it doesn't exist
const dir = path.join(process.cwd(), 'public', 'images', 'placeholders');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Generate all placeholders
placeholders.forEach(({ name, width, height, bgColor, text }) => {
  generatePlaceholder(name, width, height, bgColor, text);
}); 