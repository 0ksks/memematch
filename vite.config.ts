import { defineConfig } from 'vite'

export default defineConfig({
  base: '/memematch/',
  build: {
    rollupOptions: {
      external: ['/memematch/demo.mp4']
    }
  }
})
