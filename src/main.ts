import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import emitter from './utils/emitter';
import ui from './utils/ui';
const app = createApp(App)
// 注册全局指令
app.directive('go', (el: HTMLElement, cnm) => {
  el.addEventListener('click', () => {
    console.log('点击锚点', cnm.value);
    emitter.emit('jump', cnm.value)
  })
})
// 注册全局指令
app.directive('j', {
  created(el: HTMLElement, cnm) {
    emitter.on('jump', (dnmd) => {
      if (cnm.value === dnmd) {
        console.log('触发锚点', dnmd);
        el.scrollIntoView({
          behavior: "smooth", // 平滑过渡
          block: "start", // 上边框与视窗顶部平齐。默认值
        })
      }
    })
  }
})


app.use(router)
  .use(ui)
  .mount('#app')
console.log(app);
console.log('_context', app._context.components.switch);
