<template>
  <div class="blog-list-container" v-loading="isLoading">
    <h2>文章分类</h2>
    <RightList :list="list" @selected="handleSelected" />
  </div>
</template>

<script>
import RightList from "./RightList.vue";
import fetchData from "@/mixins/fetchData";
import { getCategory } from "@/api/blog";
export default {
  components: {
    RightList,
  },
  mixins: [fetchData([])],
  methods: {
    async getFetchData() {
      return await getCategory();
    },
    handleSelected(item) {
      console.log(item);
      const query = {
        page: 1,
        limit: this.limit,
      };
      //改变路由
      //两种情况一种有分类一种没有
      if (item.categoryId === -1) {
        //没分类,
        this.$router.push({ name: "Blog", query }); //命名路由的无刷新跳转
      } else {
        this.$router.push({
          name: "categoryBlog",
          query,
          params: {
            categoryId: item.id,
          },
        });
      }
    },
  },
  computed: {
    cateId() {
      return +this.$route.params.categoryId || -1;
    },
    limit() {
      return +this.$route.query.limit || 10;
    },
    list() {
      const total = this.data.reduce((a, b) => a + b.articleCount, 0);
      const result = [
        {
          name: "全部",
          id: -1,
          articleCount: total,
        },
        ...this.data,
      ];
      return result.map((item) => ({
        ...item,
        isSelected: item.id === this.cateId,
        aside: `${item.articleCount}篇`,
      }));
    },
  },
 
};
</script>

<style lang="less" scoped>
.blog-list-container {
  position: relative;
  width: 300px;
  padding: 20px;
  box-sizing: border-box;
  font-size: 14px;
  height: 100%;
  overflow-y: auto;
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>