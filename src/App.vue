<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  /**
   *  判断 localStorage 中的 type 是否为空，如果为空的话，就给默认的颜色（页面初始化的颜色），如
   *  果不为空的话就将对应获取到的值给到 data-skin
   **/
  if (localStorage.getItem("type") !== null) {
    window.document.documentElement.setAttribute(
      "data-skin",
      localStorage.getItem("type") || ""
    );
  } else {
    window.document.documentElement.setAttribute("data-skin", "light");
  }
});
</script>

<style lang="scss">
#app {
  height: 100%;
  overflow-y: hidden;
}
</style>
