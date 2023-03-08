<template>
  <ul class="right-list-container">
    <li v-for="(item, i) in list" :key="i">
      <span @click="handleClick(item)" :class="{ selected: item.isSelected }">{{
        item.name
      }}</span>
      <span
        v-if="item.aside"
        class="aside"
        :class="{ selected: item.isSelected }"
        @click="handleClick(item)"
        >{{ item.aside }}</span
      >
      <RightList :list="item.children" @selected="handleClick" />
    </li>
  </ul>
</template>

<script>
export default {
  //组件递归
  name: "RightList",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleClick(item) {
      //自己处理不了抛给父组件
      //选中以后做什么事？
      if (!item.isSelected) {
        this.$emit("selected", item);
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.right-list-container {
  list-style: none;
  padding: 0;

  .right-list-container {
    margin-left: 1em;
  }
  li {
    min-height: 40px;
    line-height: 40px;
    cursor: pointer;
  }

  .selected {
    color: @warn;
    font-weight: bold;
  }
}
.aside {
  font-size: 12px;
  margin-left: 1em;
  color: @gray;
}
</style>