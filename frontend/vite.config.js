import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Online-Learning/',  // 👈 add this line
  plugins: [react()],
})
