const fs = require('fs');
const path = require('path');

// Define the source and destination directories
const sourceDir = path.join(__dirname, 'images');
const destDir = path.join(__dirname, 'public', 'images');

// Create the destination directory if it doesn't exist
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
  console.log(`Created directory: ${destDir}`);
}

// List of images to copy
const images = [
  'smart-manufacturing.jpg',
  'healthcare.jpg',
  'financial-services.jpg',
  'about-section.jpg'
];

// Copy each image
images.forEach(image => {
  const sourcePath = path.join(sourceDir, image);
  const destPath = path.join(destDir, image);
  
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, destPath);
    console.log(`Copied: ${image}`);
  } else {
    console.log(`Warning: Image not found: ${image}`);
  }
});

console.log('Image copy process completed.'); 