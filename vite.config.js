import babel from 'vite-plugin-babel';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { reactRouter } from "@react-router/dev/vite";

const ReactCompilerConfig = { /* ... */ };
const repoName = '/jaeryungchung.github.io/'


export default defineConfig({
  // ✅ base 경로를 루트(/)로 설정
  base: '/',
  plugins: [react()],
});
