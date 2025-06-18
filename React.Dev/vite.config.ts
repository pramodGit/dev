import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'React',
  // test: /\.module\.css$/,
  // use: [
  //   'style-loader',
  //   {
  //     loader: 'css-loader',
  //     options: {
  //       modules: true,
  //     },
  //   },
  // ]
})
