<template>
  <div class="demo-content">
    <h3 :id="demoData.id">
      {{ $t('layout.component.Nav.' + demoData.label) }}
    </h3>
    <p v-if="demoData.describe">
      {{ $t('layout.component.Nav.' + demoData.describe) }}
    </p>
    <div
      @mouseenter="mouseenter"
      @mouseleave="mouseleave"
      :class="['demo', isEnter ? 'hover' : null]"
    >
      <div class="source" v-if="$slots.content">
        <slot name="content"></slot>
      </div>
      <div class="meta" ref="meta" :style="{ height: metaHeight }">
        <div class="description">
          <slot name="description"></slot>
        </div>
        <div class="highlight">
          <slot name="meta"></slot>
        </div>
      </div>
      <div class="demo-control">
        <i
          :class="[
            isExpand ? 'el-icon-caret-top' : 'el-icon-caret-bottom',
            isEnter ? 'hovering' : null,
          ]"
        ></i>
        <transition name="text-slide">
          <span v-show="isEnter" @click="expand">{{
            isExpand ? $t('layout.content.Hide') : $t('layout.content.Expand')
          }}</span>
        </transition>
        <el-tooltip
          class="item"
          effect="dark"
          placement="right"
          :content="$t('layout.content.Run')"
        >
          <transition name="text-slide">
            <el-button
              class="control-button"
              v-show="isEnter"
              type="text"
              size="small"
            >
              {{ $t('layout.content.TryIt') }}
            </el-button>
          </transition>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'demo',
  props: {
    demoData: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      href: window.location.href,
      isEnter: false,
      isExpand: false,
      metaHeight: 'auto',
    }
  },
  created() {},
  methods: {
    mouseenter() {
      this.isEnter = true
    },
    mouseleave() {
      this.isEnter = false
    },
    expand() {
      this.isExpand = !this.isExpand
      let height = 0
      this.$refs.meta.childNodes.forEach((node) => {
        height += node.clientHeight
      })
      this.metaHeight = this.isExpand ? height + 'px' : 0
    },
  },
  watch: {},
  components: {},
}
</script>
<style lang="scss" scoped>
.demo-content {
  h2 {
    font-size: 28px;
  }
  h3 {
    font-size: 22px;
  }
  h2,
  h3,
  h4,
  h5 {
    font-weight: 400;
    color: #1f2f3d;
  }
  > h3 {
    margin: 55px 0 20px;
  }

  p {
    font-size: 14px;
    color: #5e6d82;
    margin: 14px 0;
    line-height: 21px;
  }
  .demo {
    margin-bottom: 24px;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: 0.2s;
    &.hover {
      box-shadow: 0 0 8px 0 rgb(232 237 250 / 60%),
        0 2px 4px 0 rgb(232 237 250 / 50%);
    }
    .source {
      padding: 24px;
    }
    .meta {
      background-color: #fafafa;
      border-top: 1px solid #eaeefb;
      overflow: hidden;
      height: 0;
      transition: height 0.2s;
    }
    .description {
      padding: 20px;
      box-sizing: border-box;
      border: 1px solid #ebebeb;
      border-radius: 3px;
      font-size: 14px;
      line-height: 22px;
      color: #666;
      word-break: break-word;
      margin: 10px;
      background-color: #fff;
      color: #5e6d82;
      p {
        margin: 0;
        line-height: 26px;
      }
      ::v-deep code {
        color: #5e6d82;
        background-color: #e6effb;
        margin: 0 4px;
        display: inline-block;
        padding: 1px 5px;
        font-size: 12px;
        border-radius: 3px;
        height: 18px;
        line-height: 18px;
      }
    }
    .highlight {
      code {
        &.hljs {
          margin: 0;
          border: none;
          max-height: none;
          border-radius: 0;
        }
      }
    }
    .demo-control {
      border-top: 1px solid #eaeefb;
      height: 44px;
      box-sizing: border-box;
      background-color: #fff;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      text-align: center;
      margin-top: -1px;
      color: #d3dce6;
      cursor: pointer;
      position: relative;
      &:hover {
        color: #409eff;
        background-color: #f9fafc;
      }
      .control-button {
        line-height: 26px;
        position: absolute;
        top: 0;
        right: 0;
        font-size: 14px;
        padding-left: 5px;
        padding-right: 25px;
      }
      i {
        font-size: 16px;
        line-height: 44px;
        transition: 0.3s;
        &.hovering {
          transform: translateX(-40px);
        }
      }
      span {
        position: absolute;
        transform: translateX(-30px);
        font-size: 14px;
        line-height: 44px;
        transition: 0.3s;
      }
      .text-slide-enter,
      .text-slide-leave-to {
        opacity: 0;
        transform: translateX(10px);
      }
    }
  }
}
</style>
