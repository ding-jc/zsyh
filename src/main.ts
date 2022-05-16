import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
// export default () => {
//   return createSSRApp(App).use(router).mount('#app')
// }
createApp(App).use(router).mount('#app')