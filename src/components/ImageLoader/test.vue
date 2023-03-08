<template>
  <div class="test-container">
    <ImageLoader
      :placeholder="placeholder"
      :src="src"
      :duration="3000"
      @load="handleLoad"
    />
  </div>
</template>

<script>
import ImageLoader from "./";
export default {
  components: {
    ImageLoader,
  },
  data() {
    return {
      placeholder:
        "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100",
      src: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304",
    };
  },
  methods: {
    handleLoad() {
      console.log("ImageLoader完毕");
    },
  },
};
</script>

<style>
.test-container {
  width: 400px;
  height: 600px;
  border: 1px solid #000;
  border-radius: 4px;
  margin: 0 auto;
  overflow: hidden;
}
</style>