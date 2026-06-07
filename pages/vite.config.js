import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    vue({
      template: {
        // img src 등 에셋 URL을 모듈로 변환하지 않음
        // → public/ 폴더의 파일을 그냥 경로 문자열로 사용
        transformAssetUrls: false
      }
    })
  ],
  base: '/ai-video-course/',
  build: {
    emptyOutDir: false
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
