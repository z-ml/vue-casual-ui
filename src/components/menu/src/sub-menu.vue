<template>
  <div
    class="sub-menu"
    :class="[isOpen ? 'menu-opened' : '', active ? 'sub-menu-active' : '']"
    ref="subMenu"
    @mouseenter="mouseenter"
    @mouseleave="mouseleave"
  >
    <div class="sub-menu-title" @click="expandSubMenu">
      <slot name="title"></slot>
      <i
        class="icon-font icon-xialazhankai sub-menu-title-icon"
        v-if="!isCollapsed"
      ></i>
      <i class="icon-font icon-xialazhankai vertical-icon" v-else></i>
    </div>
    <cl-menu
      v-if="isCollapsed"
      class="menu-vertical"
      ref="menuVertical"
      :style="verticalStyle"
      @mouseenter.native="mouseenter"
      @mouseleave.native="mouseleave"
    >
      <slot></slot>
    </cl-menu>
    <cl-menu class="menu-inilne" ref="menu" :style="subMenuStyle" v-else>
      <slot></slot>
    </cl-menu>
  </div>
</template>
<script>
export default {
  name: 'ClSubMenu',
  componentName: 'ClSubMenu',
  // props: {
  //   name: {
  //     type: String,
  //     required: true,
  //   },
  // },
  data() {
    return {
      subMenuStyle: {}, //展开菜单样式
      verticalStyle: {}, //垂直菜单样式
      isOpen: false, //是否展开菜单
      active: false, //是否菜单激活
      isCollapsed: false, //是否收缩
      isShow: false, //收缩情况下是否展示弹出菜单
      transitionTime: 200, //动画时间
    }
  },
  created() {},
  mounted() {},
  methods: {
    /**
     * 计算三级菜单距离顶部的距离
     * 通过vnode本身的key和父组件插槽中的key比较
     * 可以找到当前三级菜单属于父组件中的下标
     */
    getVerticalStyle() {
      const index = this.$parent.$slots.default.findIndex(
        (row) => row.key === this.$vnode.key
      )
      this.verticalStyle = {
        left: this.$el.offsetWidth + 'px',
        top:
          this.$parent.$el.getBoundingClientRect().top +
          this.$el.offsetHeight * index +
          'px',
        display: this.isShow ? 'block' : 'none',
      }
    },
    showSubMenu() {
      this.subMenuStyle = {
        display: 'block',
        overflow: 'hidden',
        height: 0,
      }
      setTimeout(() => {
        let height = 0
        // 获取子节点所有高度
        this.$children[0].$children.forEach((row) => {
          height += row.$el.clientHeight
        })
        this.subMenuStyle = {
          display: 'block',
          overflow: 'hidden',
          height: height + 'px',
        }
      })
      setTimeout(() => {
        this.subMenuStyle = {}
      }, this.transitionTime)
    },
    hideSubMenu() {
      let height = 0
      this.$children[0].$children.forEach((row) => {
        height += row.$el.clientHeight
      })
      this.subMenuStyle = {
        display: 'block',
        overflow: 'hidden',
        height: height + 'px',
      }
      setTimeout(() => {
        this.subMenuStyle = {
          display: 'block',
          overflow: 'hidden',
          height: 0,
        }
      })
      setTimeout(() => {
        this.subMenuStyle = {
          display: 'none',
        }
      }, this.transitionTime)
    },
    expandSubMenu() {
      if (this.isCollapsed) return
      this.isOpen = !this.isOpen
      if (this.isOpen) {
        this.showSubMenu()
      } else {
        this.hideSubMenu()
      }
    },
    mouseenter() {
      if (!this.isCollapsed) return
      this.isShow = true
      this.getVerticalStyle()
    },
    mouseleave() {
      if (!this.isCollapsed) return
      this.isShow = false
      this.getVerticalStyle()
    },
  },
  watch: {
    isCollapsed(val) {
      if (val) {
        // 把三级菜单放入body中
        const body = document.querySelector('body')
        this.$nextTick(() => {
          this.getVerticalStyle()
          if (body.append) {
            body.append(this.$refs.menuVertical.$el)
          } else {
            body.appendChild(this.$refs.menuVertical.$el)
          }
        })
      }
    },
  },
  components: {
    clMenu: require('@/components/menu/src/menu.vue').default,
  },
}
</script>
<style lang="scss" scoped>
.sub-menu {
  position: relative;
  .menu {
    ::v-deep > .menu-item {
      height: 40px;
    }
    ::v-deep.menu-item {
      padding-left: 60px;
      background-color: #041129;
      // &:hover {
      //   background-color: #023960;
      //   color: #fff;
      // }
    }
    > .sub-menu {
      .sub-menu-title {
        height: 40px;
        display: flex;
        align-items: center;
        padding-left: 60px;
        background-color: #041129;
      }
      ::v-deep.menu-item {
        padding-left: 70px;
      }
    }
  }
  &.menu-opened {
    > .sub-menu-title {
      .sub-menu-title-icon {
        transform: translateY(-50%) scale(0.5) rotateZ(-180deg);
      }
    }
  }
  &.sub-menu-active {
    > .sub-menu-title {
      background: linear-gradient(90deg, #0a2643 0%, #108dc5 100%);
      @include font_color('font_color_909399_fff');
    }
  }
  .sub-menu-title {
    padding: 13px 20px;
    position: relative;
    cursor: pointer;
    z-index: 1;
    transition: all 0.2s ease-in-out;
    white-space: nowrap;
    text-align: left;
    // &:hover {
    //   color: #fff;
    //   background-color: #073c61;
    // }
    .sub-menu-title-icon {
      position: absolute;
      top: 50%;
      right: 24px;
      transform: translateY(-50%) scale(0.5);
      transition: all 0.2s ease-in-out;
      font-size: 12px;
      opacity: 1;
    }
    .vertical-icon {
      position: absolute;
      top: 50%;
      right: 24px;
      transition: all 0.2s ease-in-out;
      font-size: 12px;
      transform: translateY(-50%) scale(0.5) rotateZ(-90deg);
      opacity: 1;
    }
    span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
.menu-vertical {
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  z-index: 999;
  box-shadow: 5px 5px 12px 0 #041129;
  ::v-deep.menu-item {
    background-color: #041129;
    margin-left: 10px;
    padding: 10px 20px !important;
    width: 160px;
    // &:hover {
    //   color: #fff;
    //   background: #184f8d;
    // }
    &.menu-item-active {
      @include background_color('background_color_transparent_545c64');
      color: #fff;
    }
  }
  .sub-menu {
    .sub-menu-title {
      background-color: #041129;
      padding: 10px 20px !important;
      // &:hover {
      //   color: #fff;
      //   background-color: #184f8d;
      // }
    }
    &.sub-menu-active {
      > .sub-menu-title {
        color: #fff;
        @include background_color('background_color_transparent_545c64');
      }
    }
  }
}
</style>
