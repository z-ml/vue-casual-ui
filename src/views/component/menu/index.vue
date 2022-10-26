<template>
  <page-content :title="title" :content-list="contentList">
    <demo-content
      v-for="(item, index) in contentList"
      :key="index"
      :demo-data="item"
    >
      <template #content>
        <cl-menu
          :mode="item.propsData.mode"
          :default-active="item.propsData.defaultActive"
          @select="selectNav"
        >
          <cl-menu-item name="home">
            <i class="el-icon-menu"></i>
            <span class="inline vt-middle ml-sm">
              {{ $t('component.Menu.Home') }}
            </span>
          </cl-menu-item>
          <cl-sub-menu>
            <template #title>{{ $t('component.Menu.ModuleOne') }}</template>
            <cl-menu-item name="test1">
              <i class="el-icon-menu"></i>
              <span class="inline vt-middle ml-sm">
                {{ $t('component.Menu.ModuleOne') }}
              </span>
            </cl-menu-item>
          </cl-sub-menu>
          <cl-menu-item name="test1">
            <i class="el-icon-menu"></i>
            <span class="inline vt-middle ml-sm">
              {{ $t('component.Menu.ModuleOne') }}
            </span>
          </cl-menu-item>
        </cl-menu>
      </template>
      <template #description>
        <p v-html="item.description"></p>
      </template>
      <template #meta>
        <pre v-highlight>
            <code class="html" v-html="htmlEncode(item.htmlcode)"></code><code>&lt;script&gt;</code><code class="javascript">{{item.jscode}}</code><code>&lt;/script&gt;</code>
          </pre>
      </template>
    </demo-content>
    <attr-list
      v-for="(item, index) in attributesList"
      :key="index"
      :title="item.title"
      :type="item.type"
    ></attr-list>
  </page-content>
</template>
<script lang="jsx">
import contentList from './content-list'
export default {
  props: {},
  data() {
    return {
      title: {
        id: 'navmenu-dao-hang-cai-dan',
        label: 'NavMenu',
        describe: 'NavMenuDes',
      },
      contentList: contentList,
      attributesList: [
        {
          title: 'Table Attributes',
          type: 'attr',
        },
      ],
    }
  },
  created() {},
  methods: {
    selectNav(name) {
      this.$message(this.$t('component.Menu.SelectedTip') + name)
    },
    htmlEncode(str) {
      let s = ''
      str = str || ''
      if (str.length === 0) return ''
      s = str.replace(/</g, '&lt;').replace(/>/g, '&gt;')
      return s
    },
  },
  watch: {},
  components: {
    pageContent: () => import('@/components/page-content/src/index.vue'),
    demoContent: () => import('@/components/page-content/src/demo-content.vue'),
    clMenu: () => import('@/components/menu/src/menu.vue'),
    clMenuItem: () => import('@/components/menu/src/menu-item.vue'),
    clSubMenu: () => import('@/components/menu/src/sub-menu.vue'),
    attrList: () => import('@/components/attr-list/src/index.vue'),
  },
}
</script>
<style lang="scss" scoped>
.casual-menu {
  padding-left: 55px;
  border-bottom: 1px solid #e6e6e6;
}
</style>
