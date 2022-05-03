const path = require('path')

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { terser } from "rollup-plugin-terser"; // 压缩代码
import ViteRequireContext from '@originjs/vite-plugin-require-context'; // 支持 require.context 导入文件
// var args = process.argv ? process.argv.slice(2) : [];
// console.log('args', args);
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  /* build: {
    outDir: 'lib',
    lib: {
      entry: path.resolve(__dirname, 'src/components/ComponentDemo.vue'), // 入口文件
      name: 'ComponentDemo',
      // fileName: 'ComponentDemo'
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        },
        assetFileNames: "component-demo.css", // rollup-plugin-styles插件生成的css文件的名称
      }
    }
  }, */
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@c': path.resolve(__dirname, 'src/components'),
      '@css': path.resolve(__dirname, 'src/assets/styles/css'),
      '@scss': path.resolve(__dirname, 'src/assets/styles/scss'),
      '@img': path.resolve(__dirname, 'src/assets/images'),
    }
  },
  css: {
    //css
    preprocessorOptions: {
      scss: {
        // global style
        additionalData: '@import "./src/assets/styles/scss/base.scss";'
      }
    }
  },
  plugins: [
    ViteRequireContext(),
    vue(),
    terser({
      compress: {
        // remove console.log
        pure_funcs: ["console.log"]
      }
    })
  ],
  server: {
    port: 3333,
    proxy: {
      '/apis/': {
        target: 'http://xxxxxx.test.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/apis\//, '')
      },
    },
  }
})
