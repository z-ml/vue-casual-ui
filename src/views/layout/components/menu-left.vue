<template>
  <div class="container-nav">
    <div class="side-nav">
      <ul>
        <li class="nav-item">
          <router-link
            :to="{ name: 'changelog' }"
            :class="getNavClass('changelog')"
            >{{ $t('layout.menuLeft.ChangeLog') }}</router-link
          >
        </li>
        <li class="nav-item">
          <a>{{ $t('layout.menuLeft.' + developmentGuide.label) }}</a>
          <ul
            v-for="(item, index) in developmentGuide.componentList"
            :key="index"
          >
            <li class="nav-item">
              <router-link
                :to="{ name: item.value }"
                :class="getNavClass(item.value)"
                >{{ $t('layout.menuLeft.' + item.label) }}</router-link
              >
            </li>
          </ul>
        </li>
        <li class="nav-item" v-for="(item, index) in groupList" :key="index">
          <a>{{ $t('layout.menuLeft.Components') }}</a>
          <div class="nav-group">
            <div class="group-title">
              {{ item.label }}
            </div>
            <ul v-for="(itm, index) in item.componentList" :key="index">
              <li class="nav-item">
                <router-link
                  :to="{ name: itm.value }"
                  :class="getNavClass(itm.value)"
                  >{{ $t('layout.menuLeft.' + itm.label) }}</router-link
                >
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'menu-left',
  props: {},
  data() {
    return {
      developmentGuide: {
        label: 'Development',
        componentList: [
          {
            label: 'Installation',
            value: 'installation',
          },
          {
            label: 'QuickStart',
            value: 'quickstart',
          },
        ],
      },
      groupList: [
        {
          label: 'Navigation',
          componentList: [
            {
              label: 'Menu',
              value: 'menu',
            },
          ],
        },
      ],
    }
  },
  created() {},
  methods: {
    getNavClass(name) {
      return this.$route.name === name ? 'active' : ''
    },
  },
  watch: {},
  components: {},
}
</script>
<style lang="scss" scoped>
.container-nav {
  width: 240px;
  position: fixed;
  top: 0;
  bottom: 0;
  margin-top: 80px;
  transition: padding-top 0.3s;
  .side-nav {
    height: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    padding-right: 0;
    .nav-item {
      a {
        font-size: 16px;
        color: #333;
        line-height: 40px;
        height: 40px;
        margin: 0;
        padding: 0;
        text-decoration: none;
        display: block;
        position: relative;
        transition: 0.15s ease-out;
        font-weight: 700;
        &.active {
          color: #409eff;
        }
      }
      .nav-item {
        a {
          display: block;
          height: 40px;
          color: #444;
          line-height: 40px;
          font-size: 14px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-weight: 400;
          &:hover {
            color: #409eff;
          }
          &.active {
            color: #409eff;
          }
        }
      }
      .group-title {
        font-size: 12px;
        color: #999;
        line-height: 26px;
        margin-top: 15px;
      }
    }
  }
}
</style>
