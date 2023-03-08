// const listeners = {

// }
// /**
//  * {
//  * event1:[handler1,handler2]
//  * }
//  */

// //事件总线
// export default {
//     //监听事件
//     //监听某个事件，就是往里面加一项
//     $on(eventName, handler) {
//         if (!listeners[eventName]) {
//             listeners[eventName] = new Set()
//         }
//         listeners[eventName].add(handler)

//     },
//     //取消监听
//     $off(eventName, handler) {
//         if (!listeners[eventName]) {
//             return
//         }
//         listeners[eventName].delete(handler)
//     },
//     //触发事件
//     $emit(eventName, ...args) {
//         if (!listeners[eventName]) {
//             return
//         }
//         for (const handler of listeners[eventName]) {
//             handler(...args)
//         }
//     }


// }

import Vue from "vue";
//事件mainSroll 主区域的滚动条，监听dom为undefined表示dom没了
//setMainScroll 设置主区域滚动高度，数据为滚动高度
const vue = new Vue({})
Vue.prototype.$bus = vue
export default vue