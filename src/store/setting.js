import {
    getSetting
} from "@/api/setting"
import titleControler from "../../utils/titleControler"
export default {
    namespaced: true,
    state: {
        loading: false,
        data: null
    },

    mutations: {
        setLoading(state, payload) {
            state.loading = payload
        },
        setData(state, payload) {
            state.data = payload
        }
    },
    actions: {
        async fetchSetting(ctx, payload) {
            ctx.commit("setLoading", true);
            const resp = await getSetting()

            if (resp.favicon) {
                // <link rel="shortcut icon" href="1.png" type="image/x-icon" />

                const link = document.createElement("link")
                link.rel = "shortcut icon"
                link.type = "image/x-icon"
                link.href = resp.favicon
                document.querySelector("head").appendChild(link)
            }
            //或取全局设置之后设置网站标题
            titleControler.siteTitle(resp.siteTitle)
            ctx.commit("setData", resp)
            ctx.commit("setLoading", false);
        }
    }
}