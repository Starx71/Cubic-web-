# Adding Images to the Website

This document provides instructions on how to add the required images to the website.

## Required Images

The website requires the following images:

1. `smart-manufacturing.jpg` - For the Smart Manufacturing service
2. `healthcare.jpg` - For the Healthcare Solutions service
3. `financial-services.jpg` - For the Financial Services service
4. `about-section.jpg` - For the About Section
5. `logo.jpg` - For the website logo

## How to Add Images

### Option 1: Manual Copy

1. Create a folder named `images` in the root of the project (if it doesn't exist already)
2. Place the five images in this folder with the exact names listed above
3. Run the copy script:
   ```
   node copy-images.js
   ```
   This will copy the images to the `public/images` directory.

### Option 2: Direct Copy

1. Create a folder named `images` inside the `public` directory (if it doesn't exist already)
2. Place the five images directly in the `public/images` folder with the exact names listed above

## Image Requirements

- Format: JPG
- Resolution: At least 800x600 pixels recommended
- File size: Optimize for web (under 500KB per image recommended)
- Logo: Square image recommended (e.g., 200x200 pixels)

## Troubleshooting

If images don't appear on the website:

1. Check that the image files exist in the `public/images` directory
2. Verify that the image filenames match exactly (case-sensitive)
3. Clear your browser cache and refresh the page
4. Check the browser console for any errors related to image loading 