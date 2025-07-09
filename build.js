#!/usr/bin/env node

// Build script to inject environment variables into index.html for Vercel
const fs = require('fs');
const path = require('path');

const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '';

console.log('🔧 Building for Vercel deployment...');
console.log('GitHub token available:', GITHUB_TOKEN ? '✅ Yes' : '❌ No');

// Read the original index.html
const indexPath = path.join(__dirname, 'index.html');
let htmlContent = fs.readFileSync(indexPath, 'utf8');

// Inject the GitHub token into the HTML
const tokenInjection = `
<script>
  // Injected by build script for Vercel deployment
  window.VERCEL_GITHUB_TOKEN = '${GITHUB_TOKEN}';
</script>`;

// Insert before the existing scripts
htmlContent = htmlContent.replace(
  '<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>',
  `${tokenInjection}
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>`
);

// Write to dist directory
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

fs.writeFileSync(path.join(distDir, 'index.html'), htmlContent);

// Copy other necessary files
const filesToCopy = ['config.example.js'];
filesToCopy.forEach(file => {
  if (fs.existsSync(file)) {
    fs.copyFileSync(file, path.join(distDir, file));
  }
});

console.log('✅ Build complete! Output in ./dist/'); 