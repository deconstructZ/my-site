//导出一个路由对象
import Vue from "vue"
import routes from "./routes.js"
import VueRouter from "vue-router"
import titleControler from "../../utils/titleControler.js"
// console.log(VueRouter)
// Vue.config.productionTip = false
Vue.use(VueRouter) //使用一个vue插件

const router = new VueRouter({
    //配置对象 路径和组件关联 ，放到哪
    routes, //路由匹配规则
    mode: "history" //默认是hash 还有history 内部使用的是history api ; abstract内存中取路径
})
router.afterEach((to, from) => {
    titleControler.routeTitle(to.meta.title)
})
// console.log(router)
export default router