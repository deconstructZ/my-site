import request from "./request.js"


async function test() {
    return await request.get("/api/banner")
}
test().then((r) => {
    // console.log(r)
})