import request from "./request.js"
/**
 * 
 * @param {*} page 
 * @param {*} limit 
 * @param {*} categoryid 所属分类默认为-1表示全部
 */
export async function getBlog(page = 1, limit = 10, categoryid = -1) {
    return await request.get("/api/blog", {
        params: {
            page,
            limit,
            categoryid
        }
    })
}

export async function getCategory() {
    return await request.get("/api/blogtype")
}

export async function getSingleBlog(id) {
    return await request.get(`/api/blog/${id}`)
}

export async function postComment(CommentInfo) {
    return await request.post("/api/comment", CommentInfo)
}

export async function getComment(blogid, page = 1, limit = 10) {
    return await request.get("/api/comment", {
        params: {
            blogid,
            page,
            limit
        }
    })
}