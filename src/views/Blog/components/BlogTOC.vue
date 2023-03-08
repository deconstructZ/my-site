<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <BlogTOC :list="TOCwithSelect" @selected="handleSelect" />
  </div>
</template>

<script>
import BlogTOC from "./RightList.vue";
import { debounce } from "../../../../utils/index.js";
export default {
  props: {
    cateList: {
      type: Array,
      // required: true,
    },
  },
  components: {
    BlogTOC,
  },
  data() {
    return {
      //当前的hash
      activeAnchor: "",
    };
  },
  methods: {
    handleSelect(e) {
      location.hash = e.anchor;
    },
    //设置activeAnchor为正确值
    setActiveAnchor(scrollDom) {
      if (!scrollDom) {
        return;
      }
      const range = 200;
      this.activeAnchor = ""; // 由于后续要重新设置，先清空之前的状态
      for (const dom of this.doms) {
        if (!dom) {
          continue;
        }
        //存在
        const top = dom.getBoundingClientRect().top;
        //第一种情况，>0 <=200判定为选中
        if (top > 0 && top <= range) {
          this.activeAnchor = dom.id; //确定activeAnchor后后面一定是不选中的
          return;
        }
        //后面一定是不选中的
        else if (top > range) {
          return;
        } else {
          this.activeAnchor = dom.id;
        }
      }
    },
  },
  created() {
    //利用事件总线观察主区域的滚动条变化
    this.setSelectDebounce = debounce(this.setActiveAnchor, 50);
    this.$bus.$on("mainScroll", this.setSelectDebounce);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.setSelectDebounce);
  },

  computed: {
    //根据TOC属性得到带有isSelected的新list
    TOCwithSelect() {
      const getSelectTOC = (toc = []) => {
        return toc.map((it) => ({
          ...it,
          isSelected: it.anchor === this.activeAnchor,
          children: getSelectTOC(it.children),
        }));
      };
      return getSelectTOC(this.cateList);
    },
    //拿到所有toc目录对应的dom
    doms() {
      const doms = [];
      const addToDoms = (toc) => {
        for (const dom of toc) {
          doms.push(document.getElementById(dom.anchor));
          if (dom.children && dom.children.length > 0) {
            addToDoms(dom.children);
          }
        }
      };
      addToDoms(this.TOCwithSelect);
      return doms;
    },
  },
};
</script>

<style lang="less" scoped>
h2 {
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 1em;
  margin: 0;
}
</style> 