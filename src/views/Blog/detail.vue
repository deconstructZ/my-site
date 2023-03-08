<template>
  <layout>
    <div ref="detailContainer" class="detail-container" v-loading="isLoading">
      <BlogDetail :blog="data" v-if="data" />
      <BlogComment v-if="!isLoading" />
    </div>
    <template #right>
      <div class="right-list-container" v-loading="isLoading">
        <BlogTOC :cateList="data.toc" v-if="data" />
      </div>
    </template>
  </layout>
</template>

<script>
import layout from "@/components/LayOut/index.vue";
import BlogDetail from "./components/BlogDetail.vue";
import BlogTOC from "./components/BlogTOC.vue";
import fetchData from "@/mixins/fetchData";
import * as blogApi from "@/api/blog.js";
import BlogComment from "./components/BlogComment.vue";
import setMainScrollTop from "@/mixins/setMainScrollTop.js";
export default {
  components: { layout, BlogDetail, BlogTOC, BlogComment },
  data() {
    return {};
  },

  mixins: [fetchData(null), setMainScrollTop("detailContainer")],
  methods: {
    async getFetchData() {
      const id = this.$route.params.id;
      return await blogApi.getSingleBlog(id);
    },
  },

  updated() {
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },
};
</script>

<style lang="less" scoped>
.detail-container {
  overflow-y: scroll;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
.right-list-container {
  width: 300px;
  height: 100%;
  box-sizing: border-box;
  overflow-y: scroll;
  position: relative;
}
</style>