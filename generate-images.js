import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, 'public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Function to create a simple SVG image
function createSVGImage(filename, title, description, bgColor, textColor) {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${bgColor};stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1a1a1a;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <rect width="800" height="600" fill="url(#grad)"/>
  
  <!-- Border -->
  <rect width="800" height="600" fill="none" stroke="#444" stroke-width="2"/>
  
  <!-- Title -->
  <text x="50" y="120" font-size="48" font-weight="bold" fill="${textColor}" font-family="Arial, sans-serif">
    ${title}
  </text>
  
  <!-- Description -->
  <text x="50" y="220" font-size="24" fill="${textColor}" font-family="Arial, sans-serif" opacity="0.8">
    ${description}
  </text>
  
  <!-- Decorative elements -->
  <circle cx="650" cy="100" r="40" fill="#0066ff" opacity="0.2"/>
  <circle cx="750" cy="500" r="60" fill="#00ff88" opacity="0.15"/>
  <rect x="100" y="400" width="150" height="150" fill="none" stroke="#0066ff" stroke-width="2" opacity="0.3"/>
  <rect x="550" y="300" width="200" height="200" fill="none" stroke="#00ff88" stroke-width="2" opacity="0.3"/>
  
  <!-- Footer -->
  <text x="50" y="570" font-size="16" fill="${textColor}" font-family="Arial, sans-serif" opacity="0.6">
    Portfolio Project
  </text>
</svg>`;

  fs.writeFileSync(path.join(imagesDir, filename), svg);
  console.log(`✓ Created ${filename}`);
}

// Generate project images
createSVGImage(
  'recursion-visualizer.svg',
  'Recursion Visualizer',
  'Visualize Recursive Execution & Algorithm Flow',
  '#1a3a52',
  '#00ccff'
);

createSVGImage(
  'foziro.svg',
  'Foziro',
  'Canteen Automation System',
  '#2d1b4e',
  '#ff00ff'
);

console.log('\n✓ All project images generated successfully!');
