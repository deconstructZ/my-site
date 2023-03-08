<template>
    <!-- 只有总页数大于1的时候才显示分页 -->
    <div class="pager-container" v-if="pageNumber >= 1">
      <!-- 类样式是动态的，class也可以是一个对象,返回第一页是否有类样式disabled取决于当前页是否为1 -->
      <a @click="handleClick(1)" :class="{ disabled: current === 1 }"
        >|&lt;&lt;</a
      >
      <a @click="handleClick(current - 1)" :class="{ disabled: current === 1 }"
        >&lt;&lt;</a
      >
      <a
        @click="handleClick(n)"
        v-for="(n, i) in numbers"
        :class="{ active: current === n }"
        :key="i"
        >{{ n }}</a
      >
  
      <!-- 返回最后一页和下一页是否有类样式disabled取决于当前页是否为最大页，最大页为总数据量除以每页的页容量 -->
      <a
        @click="handleClick(current + 1)"
        :class="{ disabled: current === pageNumber }"
        >&gt;&gt;</a
      >
      <a
        @click="handleClick(pageNumber)"
        :class="{ disabled: current === pageNumber }"
        >&gt;&gt;|</a
      >
    </div>
  </template>
  
  <script>
  export default {
    props: {
      current: {
        type: Number,
        default: 1,
      },
      total: {
        type: Number,
        default: 10,
      },
      limit: {
        type: Number,
        default: 10,
      },
      visibleNumber: {
        type: Number,
        default: 10,
      },
    },
    computed: {
      //总页数，只是计算数据，不是动作
      pageNumber() {
        return Math.ceil(this.total / this.limit);
      },
      //得到显示出来的页码中最小页数
      minPage() {
        let min = this.current - Math.ceil(this.visibleNumber / 2);
        //最小页不能小于1
        if (min < 1) {
          min = 1;
        }
        return min;
      },
      maxPage() {
        let max = this.minPage + this.visibleNumber - 1;
        // 显示的分页中的最大页码不能大于最大页
        if (max > this.pageNumber) {
          max = this.pageNumber;
        }
        return max;
      },
      numbers() {
        let arr = [];
        for (let i = this.minPage; i < this.maxPage; i++) {
          arr.push(i);
        }
        return arr;
      },
    },
    methods: {
      handleClick(newPage) {
        //对新页码处理
        if (newPage < 1) {
          newPage = 1;
        }
        if (newPage > this.pageNumber) {
          newPage = this.pageNumber;
        }
        if ((newPage === this.current)) {
          return;
        }
        // console.log(newPage)
        //抛出事件，参数一事件名，参数二为相关数据这里为新的页码
        this.$emit("pageChange", newPage);
      },
    },
  };
  </script>
  
  <style lang="less" scoped>
  @import "~@/styles/var.less"; //~@表示src目录
  .pager-container {
    display: flex;
    justify-content: center;
    margin: 20px 0;
    a {
      cursor: pointer;
      color: @primary;
      margin: 0 6px;
      &.disabled {
        color: @lightWords;
        cursor: not-allowed;
      }
      &.active {
        color: @words;
        font-weight: bold;
        cursor: text;
      }
    }
  }
  </style>>
  