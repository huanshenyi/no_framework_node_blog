const getList = (author, keyword)=>{
  //moceデータを返す
  return [
      {
          id: 1,
          title: 'タイトルA',
          content: '内容A',
          crtateTime: 2019,
          author: 'zhangsan'
      },
      {
        id: 2,
        title: 'タイトルB',
        content: '内容B',
        crtateTime: 2019,
        author: 'haha'
    }
  ]
}

module.exports = {
    getList
}