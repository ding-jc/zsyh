// https://vitejs.dev/config/
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { defineConfig } from 'vite'

const BASE_URL: string = '/api'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    base: '/', // 开发或生产环境服务的 公共基础路径。
    plugins: [
      vue()],
    resolve: {
      alias: {
        '@': resolve('./src'),
        '@img': resolve('./src/assets/img')
      }
    },
    // 打包配置
    build: {
      minify: 'terser',//"esbuild" | "terser"
      // 设置最终构建的浏览器兼容目标。默认值是一个 Vite 特有的值——'modules'，这是指 支持原生 ES 模块的浏览器。
      target: 'es2016',
      // 指定生成静态资源的存放路径（相对于 build.outDir）。
      // outDir: 'dist',
      // 指定生成静态资源的存放路径（相对于 build.outDir）。
      // assetsDir: 'assets',
      /**
       * 构建后是否生成 source map 文件。如果为 true，
       * 将会创建一个独立的 source map 文件。如果为 'inline'，
       * source map 将作为一个 data URI 附加在输出文件中。'hidden' 的工作原理与 'true' 相似
       * ，只是 bundle 文件中相应的注释将不被保留。
       */
      // sourcemap: false,
      terserOptions: {
        /**
         * command 用来判断环境
         */
        compress: {
          drop_console: command !== 'serve',
          // 默认是true
          drop_debugger: command !== 'serve'
        }
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
  }
})

