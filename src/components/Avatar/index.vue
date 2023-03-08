<template>
  <!-- style属性要传一个对象 -->
  <img
    :src="url"
    :style="{
      width: size + `px`,
      height: size + `px`,
    }"
    class="avatar-img"
  />
</template>

<script>
export default {
  props: {
    url: {
      type: String, //url属性必须是一个字符串
      required: true, //属性必传
    },
    size: {
      type: Number,
      default: 150, //默认参数
    },
  }, //属性可以是数组也可以是对象
};
</script>

<style>
.avatar-img {
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
</style>