import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
const path = require("path"); //引入path模块


const BASE_URL: string = '/api'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')//设置别名
    }
  },
  server: {
    host: '0.0.0.0',
    open: true,
    port: 2333,
    proxy: {
      [BASE_URL]: {
        target: 'http://localhost:8082',	//实际请求地址
        changeOrigin: false,//true 发送请求头中host会设置成target
        rewrite: (path) => path.replace(/^\/api/, '')//重写
      }
    }
    //  proxy: {
    //     // 跨域简单写法写法
    //     '/api': 'http://123.56.85.24:5000'//代理网址
    //   },
  }
})
