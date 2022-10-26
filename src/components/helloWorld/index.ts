import type { App } from "vue";
// 导入的组件必须在vue文件中声明 name, 否则组件无法注册使用
import helloWorld from './helloWorld.vue'

// 为组件提供 install 安装方法，供按需引入
helloWorld.install = (app: App<Element>) => {
  app.component(helloWorld.name, helloWorld)
}

// 默认导出组件
export default helloWorld