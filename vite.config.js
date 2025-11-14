import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vercel은 루트 경로, GitHub Pages는 /portfolio/ 경로 사용
  base: process.env.VERCEL ? '/' : (process.env.NODE_ENV === 'production' ? '/portfolio/' : '/'),
  server: {
    host: true, // localhost에서 접속 가능하도록 설정
    port: 5175, // 포트 5175로 고정
    strictPort: false, // 포트가 사용 중이면 다른 포트 시도
  },
})
