import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import viteCompression from 'vite-plugin-compression';
import VueI18n from "@intlify/vite-plugin-vue-i18n";
import DefineOptions from "unplugin-vue-define-options/vite";
import { resolve } from "path";
export function getPluginsList() {
  return [
    vue(),
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [resolve("locales/**")]
    }),
    // jsx、tsx语法支持
    vueJsx(),
    DefineOptions(),
    viteCompression()
  ];
}
