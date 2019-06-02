const handleBlogRoute = require("./src/route/blog")
const handleUserRoute = require("./src/route/user")
const querystring = require("querystring")

const serverHandle =(req, res)=>{
  //reqのリターン形式json
  res.setHeader('Content-type','application/json')
  //path取得
  const url = req.url
  req.path = url.split('?')[0]

  //解析 query
  req.query = querystring.parse(url.split('?')[0])

  // blogルーターを処理
  const blogData = handleBlogRoute(req, res)
  if (blogData){
      res.end(
          JSON.stringify(blogData)
      )
      return
  }

  // user ルーターの処理
  const userData = handleUserRoute(req,res)
  if (userData){
      res.end(
          JSON.stringify(userData)
      )
      return
  }

  //404処理
  res.writeHead(404, {"Content-type": "text/plain"})
  res.write("404 Not Found\n")
  res.end()
//   const resData = {
//       name:'huasnhenyi000',
//       site:'imooc',
//       //env の変化を観察して、今の実行環境を切り替える,mysql,redisなど
//       env: process.env.NODE_ENV
//   }
//   res.end(
//       JSON.stringify(resData)
//   )

}
module.exports = serverHandle