import defaultLoadingGif from "@/assets/default.gif"
import bus from "@/eventBus.js"
import {
    debounce
} from "../../utils/index.js"

let imgs = []
//希望一调用它就能设置当前应该加载哪些图片(滑倒视野里的才加载，不在视野里先不加载)
function setImage(img) {
    //一开始全部设为默认加载gif
    img.dom.src = defaultLoadingGif
    //处理图片,当图片的top值大于等于负一个自身高度并且小于等于视口高度时代表它在视口范围内
    //在视口范围内的判定
    const rect = img.dom.getBoundingClientRect()
    // console.log(rect)
    const ClientHeight = document.documentElement.clientHeight
    // console.log(rect.height)
    const height = rect.height || 150
    if (rect.top >= -height && rect.top <= ClientHeight) {
        // console.log(img.dom, "在视口范围内")
        const tempImg = new Image()
        tempImg.src = img.src
        tempImg.onload = function () {
            img.dom.src = tempImg.src
        }
        // img.dom.src = img.src

        //已经处理过的就不处理了
        imgs = imgs.filter(i => i !== img)
    }



    // console.log(img)
}

function setImages() {
    // console.log("setImages")
    for (const img of imgs) {
        //循环图片数组(每一项是个对象)，处理单张图片
        setImage(img)
    }
}



bus.$on("mainScroll", debounce(setImages, 50))
export default {
    inserted(el, binding) {
        // console.log(el, binding.value)

        //监听滚动条，运行setImages
        const img = {
            dom: el,
            src: binding.value
        }
        imgs.push(img)
        //图片刚加载到数组时就要立即进行处理一下
        setImage(img)
    },
    unbind(el, binding) {
        // console.log(el)
        // console.log(imgs)
        imgs = imgs.filter(img => img.dom !== el) //切换页面或者跳到指定页数时把之前的数据筛选掉
    }
}