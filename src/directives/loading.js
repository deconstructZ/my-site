// export default {
//     //只调用一次，指令第一次绑定到元素时调用。
//inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
//     bind(el, binding) { //el:绑定的真实dom，binding：指令的绑定值
//         console.log("bind", el, binding)
//     },
//     //数据发生变化时触发
//     update(el, binding) {
//         console.log("update", el, binding)
//     }
// }
// 如果bind和update干的事一样可以简写为一个函数
//创建图片
import loadingImg from "@/assets/loading.svg"
import styles from "./loading.module.less"
// console.log(styles)

function creatImg() {
    const img = document.createElement("img")
    img.src = loadingImg
    img.className = styles["loading-center"]
    img.dataset.role = "loading"
    return img
}
//检查是否有图片，会触发两次 默认我们把isLoading设成true，指令刚绑到容器上触发一次，
//然后created后加载完成把isLoading设为false，数据变化触发update，
function getLoadingImg(el) {
    return el.querySelector("img[data-role=loading]")
}
export default function (el, binding) {
    //判断有无图片
    //没图片创建图片
    // console.log(binding)
    const curImg = getLoadingImg(el)
    //根据binding.value的值来决定创建或删除元素
    if (binding.value) { //value是应用指令时 js表达式算出来的值这里代表正在加载中
        //如果正在加载中并且没有加载图片，我们就创造一个图片并加到容器内
        if (!curImg) {
            const img = creatImg()
            el.appendChild(img)
        }
    }
    // 如果加载完成（loading=false），并且有加载图，那么把之前创建的加载图片删掉
    else {
        if (curImg) {
            curImg.remove()
        }
    }
}