import { execSync } from 'node:child_process';
import fs from 'node:fs';

// 1. Ensure index.html has the source entry point for Vite during compilation
if (fs.existsSync('index.source.html')) {
  fs.copyFileSync('index.source.html', 'index.html');
}

// 2. Run Vite build
console.log('Running typecheck and Vite build...');
execSync('npx tsc -b && npx vite build', { stdio: 'inherit' });

// 3. Copy dist/ assets and dist/index.html to root for GitHub Pages hosting
console.log('Syncing dist to root for GitHub Pages...');
if (fs.existsSync('dist/index.html')) {
  fs.copyFileSync('dist/index.html', 'index.html');
}
if (fs.existsSync('dist/assets')) {
  fs.cpSync('dist/assets', 'assets', { recursive: true });
}
console.log('Build and deployment preparation complete.');
