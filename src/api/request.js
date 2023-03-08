//导出拦截器
import axios from "axios";
import showMessage from "../../utils/showMessage.js";
const ins = axios.create({}) //创建axios实例，功能和axios一样，用实例得到的响应先运行拦截器函数，并返回结果
ins.interceptors.response.use(function (resp) { //创建一个拦截器，对响应进行处理
    // console.log("拦截器")
    if (resp.data.code === 0) {
        return resp.data.data
    }
    // console.log(resp.data.data)
    showMessage({
        content: "龙刃出鞘",
        type: "error"
    })
    return null
})
export default ins