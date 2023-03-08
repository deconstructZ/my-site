<template>
  <div class="blog-list-container" v-loading="isLoading" ref="container">
    <ul>
      <li v-for="item in data.rows" :key="item.id">
        <div class="thumb" v-if="item.thumb">
          <router-link
            :to="{
              name: `BlogDetail`,
              params: {
                id: item.id,
              },
            }"
          >
            <img v-lazy="item.thumb" :alt="item.title" :title="item.title" />
          </router-link>
        </div>
        <div class="main">
          <router-link
            :to="{
              name: `BlogDetail`,
              params: {
                id: item.id,
              },
            }"
          >
            <h2>{{ item.title }}</h2>
          </router-link>
          <div class="aside">
            <span>日期：{{ formatDate(item.createDate) }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论{{ item.commentNumber }}</span>
            <router-link
              :to="{
                name: `categoryBlog`,
                params: { categoryId: item.category.id },
              }"
              class=""
              >{{ item.category.name }}</router-link
            >
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <!-- 分页放到这里 -->
    <pager
      v-if="data.total"
      :current="routeInfo.page"
      :total="data.total"
      :limit="routeInfo.limit"
      @pageChange="handlePageChange"
    />
  </div>
</template>
  <script>
import pager from "@/components/pager/index.vue";
import fetchData from "@/mixins/fetchData";
import { getBlog } from "@/api/blog.js";
import { formatDate } from "../../../../utils/";
import setMainScrollTop from "@/mixins/setMainScrollTop.js";
export default {
  components: {
    pager,
  },
  mixins: [fetchData({}), setMainScrollTop("container")],
  methods: {
    async getFetchData() {
      //获取远程数据
      return await getBlog(
        this.routeInfo.page,
        this.routeInfo.limit,
        this.routeInfo.categoryId
      );
    },
    formatDate,
    async handlePageChange(newpage) {
      const query = {
        page: newpage,
        limit: this.routeInfo.limit,
      };
      //改变路由
      //两种情况一种有分类一种没有
      if (this.routeInfo.categoryId === -1) {
        //没分类,
        this.$router.push({ name: "Blog", query }); //命名路由的无刷新跳转
      } else {
        this.$router.push({
          name: "categoryBlog",
          query,
          params: {
            categoryId: this.routeInfo.categoryId,
          },
        });
      }
    },
  },
  computed: {
    //获取路由信息
    routeInfo() {
      const categoryId = +this.$route.params.categoryId || -1;
      const page = +this.$route.query.page || 1;
      const limit = +this.$route.query.limit || 10;
      return {
        categoryId,
        page,
        limit,
      };
    },
  },
  watch: {
    //观察啥作为属性名
    //一旦变化就会调用该函数
    async $route(newVal, oldVal) {
      //监测到路由变化后重新获取远程数据
      this.$refs.container.scrollTop = 0;
      this.isLoading = true;

      this.data = await this.getFetchData();
      this.isLoading = false;
    },
  },
  // created() {
  //   console.log(this.$data);
  // },
};
</script>
  <style scoped lang="less">
@import "~@/styles/var.less";
.blog-list-container {
  scroll-behavior: smooth;
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;
  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;
    img {
      display: block;
      max-width: 200px;
      border-radius: 5px;
    }
  }
  .main {
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .aside {
    font-size: 12px;
    color: @gray;
    span {
      margin-right: 15px;
    }
  }
  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}
</style>
  