<template>
  <div class="home-container" ref="container">
    <h1>{{ num }}</h1>
    <button @click="num++">click</button>
  </div>
</template>

<script>
// import { showMessage } from "../../../utils/index.js";

export default {
  data() {
    return {
      banners: [],
      num: 0,
    };
  },
  methods: {},
  beforeCreate() {
    //创建实例后，将数据注入实例前会运行beforCreate 所以此时得不到数据
    console.log("beforeCreate", this.banners);
  },
  created() {
    //将数据注入实例后会得到数据
    console.log("created", this.banners);
  },
  beforeMount() {
    //渲染虚拟DOM树后 运行beforeMount,所以此时得不到真实的DOM节点
    console.log("beforeMount", this.$refs.container);
  },
  mounted() {
    //渲染真实DOM树后运行，可以得到
    console.log("mounted", this.$refs.container);
  },
  beforeUpdate() {
    //挂载后等待用户操作，数据在变化后重新渲染之前运行
    console.log("beforeUpdate", this.$refs.container.innerText, this.num); //数据已经更新，界面还没更新
  },
  updated() {
    //updated之后界面重新渲染
    console.log("updated", this.$refs.container.innerText, this.num); //得到的时之前的数据
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed"); //vue router切换页面之前的就会销毁掉
  },
};
</script>

<style>
.home-container {
}
</style>