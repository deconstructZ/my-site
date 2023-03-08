import banner from "./banner.js"
import setting from "./setting.js"
import about from "./about.js"
import project from "./project.js"
import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {
        banner,
        setting,
        about,
        project
    },
    strict: true
})
window.store = store
export default store