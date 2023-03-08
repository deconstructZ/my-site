<template>
    <!-- 子组件抛出的事件进行处理要注册 -->
  <RightList :list="list" @selected="handleSelect"/>
</template>

<script>
import RightList from "./RightList.vue";
export default {
  components: {
    RightList,
  },
  data() {
    return {
      list: [
        { name: "a", isSelected: false },
        { name: "b", isSelected: false },
        {
          name: "c",
          isSelected: false,
          children: [
            { name: "c-1", isSelected: false },
            { name: "c-2", isSelected: false },
            { name: "c-3", isSelected: true,
              children: [
                { name: "c-3-1", isSelected: false },
                { name: "c-3-2", isSelected: false },
                { name: "c-3-3", isSelected: false },
              ],
            },
          ],
        },
        { name: "d", isSelected: false },
      ],
    };
  },
  methods:{
    handleSelect(e){
        // console.log(e)
    }
  }
};
</script>

<style>
</style>