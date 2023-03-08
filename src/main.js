//启动组件
import Vue from 'vue'
import App from './App.vue'
import styles from "./styles/global.less"
import router from "@/router/index.js"
import showMessage from "../utils/showMessage.js"
import "@/mock"
import "@/api/test.js"
import store from './store'
store.dispatch("setting/fetchSetting")//一开始获取全局设置
// showMessage({
//   content: "评论成功",
//   type: "error",
//   duration: 2000,
//   callback: function () {
//     console.log("完成")
//   }
// })
//全局注册自定义指令
import LoadingObj from "@/directives/loading.js"
import lazy from "@/directives/lazy.js"
Vue.directive("loading", LoadingObj) //自定义组件的名字，配置对象
Vue.directive("lazy", lazy)
Vue.prototype.$showMessage = showMessage
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

//test
import * as blogApi from "@/api/blog.js"
// blogApi.getCategory().then(resp => {
//   console.log(resp)
// })
// blogApi.getBlog(1, 10, -1).then(resp => {
//   console.log(resp)
// })
// blogApi.getSingleBlog(123).then(r => {
//   console.log(r)
// })
// blogApi.postComment({
//   nickname: "昵称",
//   content: "评论内容，纯文本",
//   blogId: 123
// }).then(r => {
//   console.log(r)
// })
// blogApi.getComment(123).then(r => {
//   console.log(r)
// })

//测试事件总线
import "./eventBus.js"


// function handler1(data) {
//   console.log("handler1", data)
// }

// function handler2(data) {
//   console.log("handler2", data)
// }
// eventBus.$on("event1", handler1)
// eventBus.$on("event1", handler2)
// eventBus.$on("event2", handler1)

// window.eventBus = eventBus 
// window.handler1=handler1
// window.handler2=handler2
import {
  getSetting
} from './api/setting'
getSetting().then((resp) => {
  console.log(resp)
})