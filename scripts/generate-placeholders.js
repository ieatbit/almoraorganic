const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

const products = [
  { name: 'turmeric', color: '#FFA500' },
  { name: 'honey', color: '#FFD700' },
  { name: 'salt', color: '#FFC0CB' }
];

const width = 1200;
const height = 600;

products.forEach(product => {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Fill background
  ctx.fillStyle = product.color;
  ctx.fillRect(0, 0, width, height);

  // Add text
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 60px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(product.name.toUpperCase(), width / 2, height / 2);

  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(
    path.join(__dirname, '..', 'public', 'images', 'placeholders', `${product.name}.jpg`),
    buffer
  );
}); 