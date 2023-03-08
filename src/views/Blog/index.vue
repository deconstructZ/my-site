<template>
  <Layout>
    <BlockList />
    <template #right>
      <BlogCategory />
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/LayOut/index.vue";
import BlockList from "./components/BlogList.vue";
import BlogCategory from "./components/BlogCategory.vue";
export default {
  components: {
    Layout,
    BlockList,
    BlogCategory,
  },
  // created() {
  //   console.log(this.$route);
  // },
};
</script>

<style>
</style>