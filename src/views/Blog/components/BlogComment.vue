<template>
  <div class="blog-comment-container">
    <msgArea
      title="评论列表"
      :subTitle="`(${data.total})`"
      :list="data.rows"
      :isLoading="isLoading"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import msgArea from "@/components/MessageArea/index.vue";
import fetchData from "@/mixins/fetchData";
import { getComment } from "@/api/blog.js";
import { postComment } from "@/api/blog.js";
export default {
  components: {
    msgArea,
  },
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  mounted() {
    // window.fetchMore = this.fetchMore;
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  mixins: [fetchData({ total: 0, rows: [] })],
  computed: {
    hasMore() {
      return this.data.rows.length < this.data.total;
    },
  },
  methods: {
    async getFetchData() {
      return await getComment(this.$route.params.id, this.page, this.limit);
    },
    async handleSubmit(dataForm, callback) {
      console.log(dataForm);
      const resp = await postComment({
        nickname: dataForm.nickName,
        content: dataForm.content,
        blogId: this.$route.params.id,
      });

      this.data.rows.unshift(resp);
      this.data.total++;
      callback("评论成功");
    },
    async fetchMore() {
      if (!this.hasMore) {
        return;
      }
      this.page++;
      this.isLoading = true;
      const resp = await this.getFetchData();
      this.data.total = resp.total;
      this.data.rows = this.data.rows.concat(resp.rows);
      this.isLoading = false;
    },
    async handleScroll(dom) {
     
      if (this.isLoading || !dom) {
        return;
      }
      const range = 200;
      const dis = Math.abs(
        dom.scrollHeight - (dom.scrollTop + dom.clientHeight)
      );
      if (dis < range) {
        await this.fetchMore();
      }
    },
  },
};
</script>

<style lang="less" scoped>
.blog-comment-container {
  margin: 30px 0;
}
</style>