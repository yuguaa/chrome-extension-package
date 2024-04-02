import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import copy from 'rollup-plugin-copy'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  root: 'src/',
  plugins: [
    vue(),
    copy({
      targets: [
        { src: 'manifest.json', dest: 'dist' },
        { src: 'src/icons/**', dest: 'dist/icons' }
      ]
    })
  ],
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        popup: path.resolve(__dirname, 'src/popup/index.html'),
        contentPage: path.resolve(__dirname, 'src/contentPage/index.html'),
        newTab: path.resolve(__dirname, 'src/newTab/index.html'),
        index: path.resolve(__dirname, 'src/index.html'),
        options: path.resolve(__dirname, 'src/options/index.html'),
        content: path.resolve(__dirname, 'src/content/content.js'),
        background: path.resolve(__dirname, 'src/background/service-worker.js')
      },
      output: {
        assetFileNames: 'assets/[name]-[hash].[ext]',
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: chunkInfo => {
          const baseName = path.basename(chunkInfo.facadeModuleId, path.extname(chunkInfo.facadeModuleId))
          const jsArr = ['content', 'service-worker']
          return `[name]/${jsArr.includes(baseName) ? baseName : chunkInfo.name}.js`
        },
        name: '[name].js'
      }
    }
  }
})
