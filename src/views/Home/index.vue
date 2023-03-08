<template>
  <div
    v-loading="loading"
    class="home-container"
    ref="container"
    @wheel="handleWheel"
  >
    <ul class="Carousel" :style="{ marginTop }">
      <li v-for="item in data" :key="item.id">
        <Carouselitem :carousel="item" />
      </li>
    </ul>
    <div v-show="index >= 1" class="icon arrow-up" @click="switchTo(index - 1)">
      <Icon type="arrowUp" />
    </div>
    <div
      v-show="index < data.length - 1"
      class="icon arrow-down"
      @click="switchTo(index + 1)"
    >
      <Icon type="arrowDown" />
    </div>
    <ul class="indicator">
      <li
        v-for="(item, i) in data"
        @click="switchTo(i)"
        :class="{
          active: i === index,
        }"
        :key="item.id"
      ></li>
    </ul>
  </div>
</template>

<script>
import Carouselitem from "./Carouselitem.vue";
import Icon from "@/components/Icon/index.vue";
import { mapState } from "vuex";
export default {
  components: {
    Carouselitem,
    Icon,
  },

  data() {
    return {
      index: 0,
      clientHeight: 0,
    };
  },
  computed: {
    marginTop() {
      return -this.index * this.clientHeight + "px";
    },
    ...mapState("banner", ["loading", "data"]),
  },
  methods: {
    //切换轮播图下标
    switchTo(i) {
      this.index = i;
    },
    handleWheel(e) {
      // console.log(e);

      if (e.deltaY === -125 && this.index !== 0) {
        this.switchTo(this.index - 1); //向上滚轮
      } else if (e.deltaY === 125 && this.index < this.data.length - 1) {
        this.switchTo(this.index + 1); //向下滚轮
      }
    },
    handleResize() {
      this.clientHeight = this.$refs.container.clientHeight;
      // console.log(this.$refs.container.clientHeight)
    },
  },
  created() {
    this.$store.dispatch("banner/fetchBanner");
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.clientHeight = this.$refs.container.clientHeight;
    
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
@jumpHeight: 10px;
@keyframes jump-up {
  0% {
    transform: translateY(@jumpHeight);
  }
  50% {
    transform: translateY(-@jumpHeight);
  }
  100% {
    transform: translateY(@jumpHeight);
  }
}
@keyframes jump-down {
  0% {
    transform: translateY(-@jumpHeight);
  }
  50% {
    transform: translateY(@jumpHeight);
  }
  100% {
    transform: translateY(-@jumpHeight);
  }
}
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  // width: 500px;
  // height: 400px;
  // margin: 50px auto;
  // border: 1px solid red;
  // overflow: visible;

  .Carousel {
    padding: 0;
    width: 100%;
    height: 100%;
    transition: 0.5s;
    li {
      width: 100%;
      height: 100%;
    }
  }
  ul {
    margin: 0;
    list-style: none;
  }
  .icon {
    .self-center();
    font-size: 30px;
    cursor: pointer;
    @gap: 15px;
    color: @gray;

    &.arrow-up {
      transform: translateX(-50%);
      top: @gap;
      animation: jump-up 1.5s infinite;
    }
    &.arrow-down {
      top: auto;
      transform: translateX(-50%);
      bottom: @gap;
      animation: jump-down 1.5s infinite;
    }
  }
  .indicator {
    .self-center();
    left: auto;
    right: 15px;
    padding: 0;
    cursor: pointer;
    li {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: @words;
      margin-bottom: 10px;
      border: 1px solid #fff;
      box-sizing: border-box;
      &.active {
        background: #fff;
      }
    }
  }
}
</style>