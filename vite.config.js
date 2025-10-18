import babel from 'vite-plugin-babel';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { reactRouter } from "@react-router/dev/vite";

const ReactCompilerConfig = { /* ... */ };
const repoName = '/jaeryungchung.github.io/'


// Use root base for both dev and user-site deployment (user site serves from root)
export default defineConfig({
  // base: '/',
  // base: mode === 'production' ? repoName : '/',
  // plugins: [react()]
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-react-compiler'],
      },
    }),
  ],
})

// export default defineConfig({
//   base: '/',

//   plugins: [
//     reactRouter(),
//     babel({
//       filter: /\.[jt]sx?$/,
//       babelConfig: {
//         presets: ["@babel/preset-typescript"], // if you use TypeScript
//         plugins: [
//           ["babel-plugin-react-compiler", ReactCompilerConfig],
//         ],
//       },
//     }),
//   ],
// });