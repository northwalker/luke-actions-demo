import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import * as child from 'child_process';

const commitHash = child
  .execSync('git rev-parse --short HEAD')
  .toString()
  ?.replace(/\n/g, '');
console.log('commitHash', commitHash);

// https://vitejs.dev/config/
export default defineConfig({
  // eslint-disable-next-line no-undef
  base: process.env.NODE_ENV === 'production' ? 'luke-actions-demo' : '',
  plugins: [react()],
  define: {
    'import.meta.env.__COMMIT_HASH__': JSON.stringify(commitHash),
  },
});
