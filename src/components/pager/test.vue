
<template>
    <div class="pager-container">
      <h1>App组件</h1>
      <!-- 两种形式可以把方法直接当字面量书写也可调用传入参数$event，$event为子组件传的参数 -->
      <Pager
        :total="total"
        :current="current"
        @pageChange="handlePageChange($event)"
      />
      <!-- vif vshow -->
      <!-- 判断为真，才显示 -->
      <!-- <h1 v-if="score >= 60">及格</h1>
      <h1 v-else>不及格</h1> -->
      <!-- 显示隐藏只需控制数据 只有一条分支也可以用v-show -->
      <!-- <h2 v-if="visible === true">something</h2>
      <button @click="visible = !visible">显示/隐藏</button> -->
    </div>
  </template>
  <script>
  import Pager from "./";
  export default {
    components: {
      Pager,
    },
    // data() {
    //   return {
    //     score: 50,
    //     visible: true,
    //   };
    // },
    data() {
      return {
        current: 1,
        total: 302,
      };
    },
    methods: {
      //父组件对子组件抛出的函数进行处理，可以接收到子组件抛出的参数
      handlePageChange(newPage) {
        // console.log(newPage);
        this.current = newPage;
      },
    },
  };
  </script>
  
  <style>
  </style>
  