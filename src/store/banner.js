import {
    getBanners
} from "@/api/getBanners"
export default {
    state: {
        loading: false,
        data: []
    },
    namespaced: true,
    mutations: {
        setLoading(state, payload) {
            state.loading = payload
        },
        setData(state, payload) {
            state.data = payload
        }
    },
    actions: {
        async fetchBanner(ctx, payload) {
            if (ctx.state.data.length) {
                return
            }
            ctx.commit("setLoading", true);
            const resp = await getBanners()
            ctx.commit("setData", resp)
            ctx.commit("setLoading", false);
        }
    }
}