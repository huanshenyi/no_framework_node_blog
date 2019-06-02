const handleUserRoute = (req,res) =>{
    const method = req.method //GET POST 

    //ログイン
    if (method === 'POST' && req.path === '/api/user/login'){
        return {
            msg:'ログインのapi'
        }
    }
}
module.exports = handleUserRoute