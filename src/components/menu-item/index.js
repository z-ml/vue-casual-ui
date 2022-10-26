// 导入的组件必须在vue文件中声明 name, 否则组件无法注册使用
import ClMenuItem from '../menu/src/menu-item'

// 为组件提供 install 安装方法，供按需引入
ClMenuItem.install = Vue => {
    Vue.component(ClMenuItem.name, ClMenuItem)
}

// 默认导出组件
export default ClMenuItem