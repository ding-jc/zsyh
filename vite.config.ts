import { fileURLToPath, URL } from 'node:url';

import legacy from '@vitejs/plugin-legacy';
import vue from '@vitejs/plugin-vue';
import { defineConfig, splitVendorChunkPlugin } from 'vite';

import { VantResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    splitVendorChunkPlugin(),
    Components({
      resolvers: [VantResolver()],//vant组件库自动引入
    }),
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ],
  server: {
    host: true,
    port: 4000,
    open: true,
  },
  build: {
    minify: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // 分割带有codemirror名称的包 防止单个文件过大
            if (id.includes('codemirror')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString()
            }
          }
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
