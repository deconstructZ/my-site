<template>
  <div class="blog-detail-container">
    <h1>{{ blog.title }}</h1>
    <div class="aside">
      <span>日期:{{ formatDate(blog.createDate) }}</span
      ><span>浏览:{{ blog.scanNumber }}</span
      ><a href="#data-form-container">评论: {{ blog.commentNumber }}</a>
      <RouterLink
        :to="{
          name: `categoryBlog`,
          params: {
            categoryId: blog.category.id,
          },
        }"
        >{{ blog.category.name }}</RouterLink
      >
    </div>
    <div class="markdown-body" v-html="blog.htmlContent"></div>
  </div>
</template>

<script>
import { formatDate } from "../../../../utils";

import "highlight.js/styles/github.css";
import { RouterLink } from "vue-router";

export default {
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatDate,
  },
  components: { RouterLink },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/markdown.css";

.aside {
  font-size: 12px;
  color: @gray;
  span,
  a {
    margin-left: 12px;
  }
}
</style>