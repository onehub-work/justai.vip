import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/justai.vip/', // 使用您的仓库名称
  plugins: [react()],
})
