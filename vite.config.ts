import { defineConfig } from 'vite'

export default defineConfig({
  base: '/memematch/',
  assetsInclude: ['**/*.mp4'],
  build: {
    assetsInlineLimit: 0, // 不内联资源，保持为独立文件
  }
})
