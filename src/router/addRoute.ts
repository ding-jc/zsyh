import { RouteRecordRaw } from 'vue-router';

interface AddRoute { (one: Record<string, { [key: string]: any }>): Array<RouteRecordRaw> }

// 注入.vue文件  文件名为路由路径名
export const addRouters: AddRoute = (file) => {
  return Object.keys(file).map(key => {
    let name = key.replace(/(\.\/|\.vue)/g, '').split('/').pop() + ''
    return {
      path: '/' + name,
      name,
      component: file[key].default
    }
  })
}