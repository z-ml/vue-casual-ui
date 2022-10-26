<template>
  <div class="page-content">
    <h2 :id="title.id">{{ $t('layout.component.Nav.' + title.label) }}</h2>
    <p>{{ $t('layout.component.Nav.' + title.describe) }}</p>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'pageContent',
  props: {
    title: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {}
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
      this.metaHeight = this.isExpand ? 'auto' : 0
    },
  },
  watch: {},
  components: {},
}
</script>
<style lang="scss" scoped>
.page-content {
  h2 {
    font-size: 28px;
  }
  h2,
  h3,
  h4,
  h5 {
    font-weight: 400;
    color: #1f2f3d;
  }

  p {
    font-size: 14px;
    color: #5e6d82;
    margin: 14px 0;
    line-height: 21px;
  }
}
</style>
