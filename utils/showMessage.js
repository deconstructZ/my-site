import getComponentRootDom from "./getComponentRootDom.js"
import Icon from "@/components/Icon/index.vue"
import styles from "./showMessage.module.less"
/**
 * 
 * @param {String} content 消息内容 
 * @param {String} type 消息类型 info error success warn
 * @param {HTMLElement} container 容器 消息会显示到该容器正中，若没传，则显示到页面正中
 * @param {Number}duration 多久后消失 0为不消失
 */
export default function (options = {}) {
    const content = options.content || ""
    const type = options.type || "info"
    const duration = options.duration || 2000
    const container = options.container || document.body
    const div = document.createElement("div")
    const iconDom = getComponentRootDom(Icon, {
        type,
    })
    // console.log(iconDom.outerHTML)
    div.innerHTML = `<span class=${styles.icon}>${iconDom.outerHTML}</span><div>${content}</div>`
    if (getComputedStyle(container).position === "static") {
        container.style.position = "relative"
    }
    div.className = `${styles.message} ${styles["message-"+type]} `
    // console.log(styles)

    container.appendChild(div)
    //强制重新渲染
    div.clientHeight;
    div.style.transform = "translate(-50%, -50%) "
    div.style.opacity = 1
    //等一段时间消失
    setTimeout(() => {
        div.style.transform = "translate(-50%, -50%) translateY(-20px) "
        div.style.opacity = 0

        //动画消失后：
        div.addEventListener("transitionend", () => {
            div.remove()
            options.callback && options.callback()
        }, {
            once: true
        })
    }, duration);

}