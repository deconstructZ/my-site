//混入
export default function (defaultDataValue) {
    return {
        data() {
            return {
                isLoading: true,
                data: defaultDataValue //远程数据
            }
        },
        async created() {
            this.data = await this.getFetchData() //需要提供一个函数来获取远程数据
            this.isLoading = false
            // console.log(this.data)
        },
       
    }
}