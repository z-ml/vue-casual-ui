<template>
  <header class="header-wrapper">
    <div class="header">
      <div class="container">
        <h1>
          <router-link :to="{ path: '/' }">
            <img src="@/assets/logo.png" alt="casual-logo" class="nav-logo" />
            <span>CasualUi</span>
          </router-link>
        </h1>
        <ul class="nav">
          <li class="nav-item nav-search">
            <el-input
              v-model="docKeyWord"
              size="small"
              :placeholder="$t('layout.menuHeader.Search')"
            ></el-input>
          </li>
          <li class="nav-item" v-for="(item, index) in navList" :key="index">
            <router-link :to="{ name: item.name }" :class="getNavClass(item.name)">
              {{ $t('layout.menuHeader.Component') }}
            </router-link>
          </li>
          <li class="nav-item">
            <el-dropdown class="nav-dropdown" trigger="click" @command="selectVersion">
              <span class="el-dropdown-link">
                {{ docVersion }}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="(item, index) in versionList"
                  :key="index"
                  :command="item.value"
                  >{{ item.label }}</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </li>
          <li class="nav-item">
            <el-dropdown class="nav-dropdown" trigger="click" @command="selectLanguage">
              <span class="el-dropdown-link">
                {{ this.docLanguage }}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="(item, index) in languageList"
                  :key="index"
                  :command="item.value"
                  >{{ item.label }}</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'menuHeader',
  props: {
    navList: {
      type: Array,
      default: [],
    },
    versionList: {
      type: Array,
      default: [],
    },
    languageList: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      docKeyWord: '',
      docVersion: '',
      docLanguage: '',
    }
  },
  created() {},
  methods: {
    getNavClass(name) {
      return this.$route.name === name ? 'active' : ''
    },
    selectVersion(version) {
      this.docVersion = this.versionList.find((row) => row.value === version).label
      this.$emit('selectVersion', version)
    },
    selectLanguage(language) {
      this.docLanguage = this.languageList.find((row) => row.value === language).label
      localStorage.setItem('CASUALUI_LANGUAGE', language)
      this.$i18n.locale = language
    },
  },
  watch: {
    versionList: {
      handler(val) {
        if (val) {
          this.docVersion = this.versionList[0].label
        }
      },
      immediate: true,
    },
    languageList: {
      handler(val) {
        if (val) {
          const language = localStorage.getItem('CASUALUI_LANGUAGE')
          const languageItem = this.languageList.find((row) => row.value === language)
          this.docLanguage = languageItem ? languageItem.label : '中文'
        }
      },
      immediate: true,
    },
  },
  components: {},
}
</script>
<style lang="scss" scoped>
.header-wrapper {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 1500;
  .header {
    height: 80px;
    background-color: #fff;
    color: #fff;
    top: 0;
    left: 0;
    width: 100%;
    line-height: 80px;
    z-index: 100;
    position: relative;
    .container {
      height: 100%;
      box-sizing: border-box;
      border-bottom: 1px solid #dcdfe6;
      width: 1140px;
      padding: 0;
      margin: 0 auto;
      h1 {
        margin: 0;
        float: left;
        font-size: 32px;
        font-weight: 400;
        a {
          color: #333;
          text-decoration: none;
          display: block;
          .nav-logo {
            width: 50px;
            height: 50px;
            vertical-align: sub;
          }
        }
      }
      .nav {
        float: right;
        height: 100%;
        line-height: 80px;
        background: transparent;
        padding: 0;
        margin: 0;
        .nav-item {
          margin: 0;
          float: left;
          list-style: none;
          position: relative;
          cursor: pointer;
          &:last-child {
            margin-left: 34px;
          }
          a {
            text-decoration: none;
            color: #1989fa;
            opacity: 0.5;
            display: block;
            padding: 0 22px;
            &.active {
              opacity: 1;
            }
            &:after {
              content: '';
              display: inline-block;
              position: absolute;
              bottom: 0;
              left: calc(50% - 15px);
              width: 30px;
              height: 2px;
              background: #409eff;
            }
          }
        }
        .nav-dropdown {
          margin-bottom: 6px;
          padding-left: 18px;
          width: 100%;
          span {
            display: block;
            width: 100%;
            font-size: 16px;
            color: #888;
            line-height: 40px;
            transition: 0.2s;
            padding-bottom: 6px;
            user-select: none;
          }
          &:hover {
            span {
              color: #409eff;
            }
          }
        }
      }
    }
  }
}
</style>
