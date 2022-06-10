// 批量注册文件夹下的组件
const components = import.meta.globEager('../UI/*.vue')
export default function install(app: any) {
  for (const [key, value] of Object.entries(components)) {
    const name = key.slice(key.lastIndexOf('/') + 1, key.lastIndexOf('.'));
    app.component(name, value.default)
  }
}
