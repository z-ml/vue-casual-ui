<template>
  <cl-table :table-columns="attrColmuns"></cl-table>
</template>
<script>
import { attributesColmuns } from './config'
export default {
  name: 'attrList',
  props: {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'attr',
    },
  },
  data() {
    return {
      attrColmuns: [],
    }
  },
  created() {
    switch (this.type) {
      case 'attr':
        this.attrColmuns = attributesColmuns
        break
    }
  },
  methods: {},
  watch: {},
  components: {
    clTable: () => import('@/components/table/src/table.vue'),
  },
}
</script>
<style lang="scss" scoped></style>
