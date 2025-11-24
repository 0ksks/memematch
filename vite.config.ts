import { defineConfig } from 'vite'

export default defineConfig({
  base: '/memematch/',
  build: {
    rollupOptions: {
      external: ['/demo.mp4']
    }
  }
})
