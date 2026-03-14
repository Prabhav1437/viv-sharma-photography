import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/cdn': {
        target: 'https://pub-b131111335e14b7aab19585812a6bde9.r2.dev',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/cdn/, '')
      }
    }
  }
})
