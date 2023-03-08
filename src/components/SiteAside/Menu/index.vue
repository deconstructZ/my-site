<template>
  <div class="menu-container">
    <!-- 为了避免刷新 router-link实际上为它添加了点击事件，内部使用history api更改 -->
    <router-link
      :exact="item.exact"
      v-for="item in items"
      :to="{ name: item.name }"
      :key="item.link"
    >
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{ item.title }}</span>
    </router-link>
  </div>
</template>

<script>
import Icon from "@/components/Icon/index.vue";
export default {
  components: { Icon },
  data() {
    return {
      items: [
        {
          name: "Home",
          icon: "home",
          title: "首页",
          exact: true,
        },
        {
          name: "Blog",
          icon: "blog",
          title: "文章",
          exact: false, //是否要精确匹配，文章不需要精确匹配 因为还有其他页面
        },
        {
          name: "About",
          icon: "about",
          title: "关于我",
          exact: true,
        },
        {
          name: "Project",
          icon: "code",
          title: "项目&效果",
          exact: true,
        },
        {
          name: "Message",
          icon: "info",
          title: "留言板",
          exact: true,
        },
      ],
    };
  },
  // methods: {
  //   isActive(item) {
  //     const path = item.link.toLowerCase();
  //     const curPath = location.pathname; //当前路径
  //     //如果是文章这一要做特殊处理
  //     if (item.startsWith) {
  //       return curPath.startsWith(path);
  //     } else {
  //       return curPath === path;
  //     }
  //   },
  // },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.menu-container {
  color: @gray;
  margin: 24px 0;
  list-style: none;

  a {
    padding: 0 50px;
    display: block;
    display: flex;
    height: 45px;
    align-items: center;
    &:hover {
      color: #fff;
    }
    // &.router-link-exact-active {
    //   background: #2d2d2d;
    // }
    &.router-link-active {
      background: #2d2d2d;
    }
    // router-link-exact-active完全匹配
    // router-link-active匹配
  }
  .icon {
    width: 25px;
  }
}
</style>>

