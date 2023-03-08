<template>
  <!-- 动态的类样式使用计算属性当读取到指定属性时去映射对象中找指定属性值 -->
  <i class="iconfont icon-container" :class="iconName" />
</template>

<script>
const classMap = {
  home: "iconzhuye",
  success: "iconzhengque",
  error: "iconcuowu",
  close: "iconguanbi",
  warn: "iconjinggao",
  info: "iconxinxi",
  blog: "iconblog",
  code: "iconcode",
  about: "iconset_about_hov",
  weixin: "iconweixin",
  mail: "iconemail",
  github: "icongithub",
  qq: "iconsign_qq",
  arrowUp: "iconiconfonticonfonti2copy",
  arrowDown: "iconiconfonticonfonti2",
  empty: "iconempty",
  chat: "iconliuyan",
};
export const classMapName = Object.keys(classMap);
export default {
  computed: {
    iconName() {
      return classMap[this.type];
    },
  },
  props: {
    type: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
@import "//at.alicdn.com/t/font_2164449_nalfgtq7il.css";
i {
  font-size: inherit;
}
</style>>
  
