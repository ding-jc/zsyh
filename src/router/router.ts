/**@/router/router.ts */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../components/Home.vue';
import { addRouters } from './addRoute'; //注入一个文件夹.vue文件 

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home,
    children: [
      ...addRouters(import.meta.globEager('../views/home/*.vue'))
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router