export default function (container) {
    return {
        mounted() {
            this.$refs[container].addEventListener("scroll", this.handleScroll);
            this.$bus.$on("setMainScroll", this.handleSetMainScroll);
        },
        beforeDestroy() {
            this.$bus.$emit("mainScroll"); //
            this.$refs[container].removeEventListener("scroll", this.handleScroll); //组件摧毁就找不到detailContainer了
        },
        methods: {
            handleScroll() {
                //触发事件
                this.$bus.$emit("mainScroll", this.$refs[container]);
            },
            handleSetMainScroll(scrollTop) {
                // console.log(scrollTop)
                this.$refs[container].scrollTop = scrollTop;
            },
        }
    }
}