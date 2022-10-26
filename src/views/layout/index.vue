<template>
  <div class="layout">
    <menu-header
      :nav-list="navList"
      :version-list="versionList"
      :language-list="languageList"
      @selectVersion="selectVersion"
    ></menu-header>
    <section class="main">
      <div class="component">
        <div class="container">
          <menu-left></menu-left>
          <router-view class="content"></router-view>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      navList: [
        {
          name: 'component',
        },
      ],
      versionList: [
        {
          label: '0.0.1',
          value: '0.0.1',
        },
      ],
      languageList: [
        {
          label: '中文',
          value: 'zh',
        },
        {
          label: 'English',
          value: 'en',
        },
      ],
    }
  },
  created() {},
  methods: {
    selectVersion(version) {
      this.$message('选中了版本 ' + version)
    },
  },
  watch: {},
  computed: {},
  components: {
    menuHeader: () => import('./components/menu-header.vue'),
    menuLeft: () => import('./components/menu-left.vue'),
  },
}
</script>
<style lang="scss" scoped>
.layout {
  height: 100%;
  .main {
    padding: 0;
    margin-top: 0;
    height: 100%;
    min-height: auto;
    .component {
      height: calc(100% - 80px);
      margin-top: 80px;
      overflow: hidden;
      position: relative;
      .container {
        width: 1140px;
        height: 100%;
        margin: 0 auto;
        .content {
          padding-left: 270px;
          padding-bottom: 100px;
          padding-top: 50px;
          overflow-y: auto;
          height: calc(100% - 150px);
        }
      }
    }
  }
}
</style>
