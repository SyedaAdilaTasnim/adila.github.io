import { spawn } from 'node:child_process';
import fs from 'node:fs';

// Ensure index.html points to the development entry point /src/main.tsx
if (fs.existsSync('index.source.html')) {
  fs.copyFileSync('index.source.html', 'index.html');
}

// Start vite dev server
const vite = spawn('npx', ['vite'], {
  stdio: 'inherit',
  shell: true,
});

vite.on('exit', (code) => {
  process.exit(code ?? 0);
});

