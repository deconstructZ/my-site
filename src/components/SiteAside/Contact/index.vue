<template>
  <ul class="contact-container">
    <li>
      <a :href="data.github" target="_blank">
        <div class="icon">
          <Icon type="github" />
        </div>
        <span>{{ data.githubName }}</span>
      </a>
    </li>

    <li>
      <a href="mailto:1844254923@qq.com">
        <div class="icon">
          <Icon type="mail" />
        </div>
        <span>{{ data.mail }}</span>
      </a>
    </li>
    <li>
      <a
        href="tencent://message/?Menu=yes&uin=1844254923&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45"
      >
        <div class="icon">
          <Icon type="qq" />
        </div>
        <span>{{ data.qq }}</span>
      </a>
      <div class="pop">
        <img :src="data.qqQrCode" alt="" />
      </div>
    </li>
    <li>
      <a href="">
        <div class="icon">
          <Icon type="weixin" />
        </div>
        <span>{{ data.weixin }}</span>
      </a>
      <div class="pop">
        <img :src="data.weixinQrCode" alt="" />
      </div>
    </li>
  </ul>
</template>

<script>
import { mapState } from "vuex";
import Icon from "@/components/Icon/index.vue";
export default {
  components: {
    Icon,
  },
  computed: {
    ...mapState("setting", ["data"]),
  },
};
</script>


<style lang="less" scoped>
@import "~@/styles/var.less";
@item-height: 30px;
.contact-container {
  list-style: none;
  padding: 20px;
  margin: 0;
  color: @gray;
  li {
    position: relative;
    height: @item-height;
    line-height: 30px;
    margin: 14px 0;
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
  }
  a {
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: 12px;
  }
  .pop {
    position: absolute;
    bottom: @item-height;
    padding: 15px 10px 3px;
    border-radius: 4px;
    background: #fff;
    transform: scale(0);
    transform-origin: center bottom;
    transition: 0.3s;
    img {
      width: 150px;
      height: 150px;
    }
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: -4px;
      transform: translateX(-50%) rotate(45deg);
      width: 8px;
      height: 8px;
      background: #fff;
    }
  }
  .icon {
    font-size: 26px;
    width: 36px;
    &.weixin {
      font-size: 32px;
      text-indent: -3px;
    }
  }
}
</style>