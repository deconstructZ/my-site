
<template>
  <div>
    <div v-for="n in classMapName" :key="n">
      <Icon :type="n" />
      <label for="">{{ n }}</label>
    </div>
  </div>
</template>
  <script>
import Icon from "./";
import { classMapName } from "./index.vue";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      classMapName,
    };
  },
};
</script>
  
  <style scoped>
/* 有时候可能需要子组件配合子组件进行动态的布局，样式等，这样就可以使用scoped影响子组件 */
.iconfont {
  font-size: 25px;
  color: #abcdef;
}
</style>
  