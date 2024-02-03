import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base:'luke-actions-demo',
  plugins: [react()],
  test:{
    globals: true,
    environment: "jsdom",
    coverage: {
      include: ['src/js/**/*.js'],
    }
  }
})
