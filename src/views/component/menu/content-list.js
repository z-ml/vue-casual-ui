import i18n from '@/i18n'
const contentCode = {
  Topbar: {
    id: 'ding-lan',
    label: 'Topbar',
    describe: 'TopbarDes',
    propsData: {
      defaultActive: 'home',
      mode: 'horizontal',
    },
    description: `导航菜单默认为垂直模式，通过<code>mode</code>属性可以使导航菜单变更为水平模式。另外，在菜单中通过<code>submenu</code>组件可以生成二级菜单。`,
    htmlcode: `<casual-menu default-active="home" mode="horizontal" @select="selectNav">

  <menu-item name="home">

    <i class="el-icon-menu"></i>

    <span class="inline vt-middle ml-sm"> ${i18n.t(
      'component.Menu.Home'
    )} </span>

  </menu-item>

  <menu-item name="test1">

    <i class="el-icon-menu"></i>

    <span class="inline vt-middle ml-sm"> ${i18n.t(
      'component.Menu.ModuleOne'
    )} </span>

  </menu-item>

</casual-menu>`,
    jscode: ` export default {

    data() {

      return {};

    },

    methods: {

      selectNav(name) {

        console.log(name);

      }

    }

  }`,
  },
  SideBar: {
    id: 'ce-lan',
    label: 'Sidebar',
    describe: 'SidebarDes',
    propsData: {
      defaultActive: 'home',
      mode: 'vertical',
    },
    description: `导航菜单默认为垂直模式，通过<code>mode</code>属性可以使导航菜单变更为水平模式。`,
    htmlcode: `<casual-menu default-active="home" @select="selectNav">

  <menu-item name="home">

    <i class="el-icon-menu"></i>

    <span class="inline vt-middle ml-sm"> ${i18n.t(
      'component.Menu.Home'
    )} </span>

  </menu-item>

  <menu-item name="test1">

    <i class="el-icon-menu"></i>

    <span class="inline vt-middle ml-sm"> ${i18n.t(
      'component.Menu.ModuleOne'
    )} </span>

  </menu-item>

</casual-menu>`,
    jscode: ` export default {

    data() {

      return {};

    },

    methods: {

      selectNav(name) {

        console.log(name);

      }

    }

  }`,
  },
}
export default contentCode