<template>
  <div
    class="menu-item"
    :class="active ? 'menu-item-active' : ''"
    @click="selectMenu"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'ClMenuItem',
  componentName: 'ClMenuItem',
  props: {
    name: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      active: false,
    }
  },
  created() {},
  methods: {
    selectMenu() {
      let parent = this.$parent
      if (parent) {
        let name = parent.$options.componentName
        while (parent && (!name || name !== 'ClMenu')) {
          parent = parent.$parent
          if (parent) {
            name = parent.$options.componentName
          }
        }
        if (parent) {
          parent.$emit.apply(parent, ['item-click'].concat(this))
        }
      }
    },
  },
  watch: {},
  components: {},
}
</script>
<style lang="scss" scoped>
.menu-item {
  display: flex;
  align-items: center;
  padding: 13px 20px;
  font-size: 14px;
  cursor: pointer;
  white-space: nowrap;
  // &:hover {
  //   background: #023960;
  //   color: #fff;
  // }
  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: all 0.2s ease;
  }
  &.menu-item-active {
    @include background_color('background_color_transparent_545c64');
    color: #fff;
  }
}
</style>
