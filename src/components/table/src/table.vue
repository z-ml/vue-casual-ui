<template>
  <table class="cl-table-header" cellspacing="0" cellpadding="0" border="0">
    <colgroup>
      <col v-for="(item, index) in tableColumns" :key="index" />
    </colgroup>
    <thead>
      <tr>
        <th v-for="(item, index) in tableColumns" :key="index">
          {{ item.title }}
        </th>
      </tr>
    </thead>
  </table>
</template>
<script>
export default {
  name: 'ClTable',
  props: {
    tableColumns: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  data() {
    return {}
  },
  created() {},
  methods: {},
  watch: {},
  components: {},
}
</script>
<style lang="scss" scoped></style>
