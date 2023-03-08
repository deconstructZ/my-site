<template>
  <div class="about-container" v-loading="loading || !siteLoaded">
    <iframe
      :src="src"
      @load="siteLoaded = true"
      class="about-content"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      siteLoaded: false,
    };
  },
  computed: mapState("about", {
    src: "data",
    loading: "loading",
  }),
  created() {
    this.$store.dispatch("about/fetchAbout");
  },
};
</script>

<style>
.about-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
}
.about-content {
  display: block;
  width: 100%;
  height: 100%;
}
</style>