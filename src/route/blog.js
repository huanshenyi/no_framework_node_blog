const {getList} = require("../controller/blog")
const {SuccessModel,ErrorModel} = require("../model/resModel")
const handleBlogRouter = (req,res)=>{
    const method = req.method //GET POST 

    // ブログのリスト
    if (method === 'GET' && req.path === '/api/blog/list'){
        const author = req.query.author || ''
        const keyword = req.query.keyword || ''
        const listData = getList(author,keyword)
        return new SuccessModel(listData)
    }
    // blogの詳細を取得 
    if (method === 'GET' && req.path === '/api/blog/detail'){
        return {
            msg: 'bolg詳細のapi'
        }
    }

    // 新規blog
    if(method === 'POST' && req.path === '/api/blog/new'){
        return {
            msg: '新規blogのapi'
        }
    }
     // 更新blog
     if(method === 'POST' && req.path === '/api/blog/update'){
        return {
            msg: '新規blogのapi'
        }
    }
     // 削除blog
     if(method === 'POST' && req.path === '/api/blog/del'){
        return {
            msg: '削除blogのapi'
        }
    }
}
module.exports = handleBlogRouter