const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    isCard: 0,
    showcnt:"0",//已加载的文章数
    articleList: [],
    play:"/images/play-btn-start.png",
    isPlay:false,
    currentPlayId:0,
  },

tolower:function(e){
  console.log("上滑")
  this.getData()
},

play:function(e){
  console.log(e)
  var id = e.currentTarget.dataset.id
  var id2 = this.data.currentPlayId
  if(id!=id2){
    this.data.articleList[id2].play = "/images/play-btn-start.png"
    this.data.articleList[id].play = "/images/play-btn-stop.png"
    this.data.articleList[id].isPlay = true
    this.data.articleList[id2].isPlay = false
    var list1 = 'articleList[' + id + '].play'
    var list2 = 'articleList[' + id2 + '].play'
    this.setData({
      [list1]:this.data.articleList[id].play,
      [list2]: this.data.articleList[id2].play,
      currentPlayId:id
    })
  }
  else if(this.data.articleList[id].isPlay){
    this.data.articleList[id].play = "/images/play-btn-start.png"
    this.data.articleList[id].isPlay = !this.data.articleList[id].isPlay
    var list = 'articleList[' + id + '].play'
    this.setData({
      [list]: this.data.articleList[id].play,
    })
  }
  else {
    this.data.articleList[id].play = "/images/play-btn-stop.png"
    this.data.articleList[id].isPlay = !this.data.articleList[id].isPlay
    var list = 'articleList[' + id + '].play'
    this.setData({
      [list]: this.data.articleList[id].play,
    })
  }
},

getData:function(){
  var that = this
  wx.request({
    url: 'https://www.clearn.site/wxapi/getArticle.php',
    method:"GET",
    data: {
      id:that.data.showcnt
    },//此处传入showcnt标志已有的数据，加载已有数据编号后的数据

    success: function (res) {
      //此处处理数据中的tags，将其转换为json
      console.log(res)
      if (res.data == null){
        console.log("没有了...")
        return
      }
      if(res.data=="获取失败")
        return
      var len = res.data.length
      for (let i = 0; i < len; i++) {
        var uni = []
        for (let k = 0; k < res.data[i].tags.length; k++) {
          var str = res.data[i].tags[k]
          uni.push(JSON.parse(str))
          res.data[i]["play"] = "/images/play-btn-start.png"
          res.data[i]["isPlay"] = false
        }
        res.data[i].tags = uni
      }
      var cnt = that.data.showcnt + res.data.length
      that.data.articleList = that.data.articleList.concat(res.data)
      that.setData({
        articleList: that.data.articleList,
        showcnt: cnt
      })
    }
  })
},

  todetail:function(e){
    var articleId = e.currentTarget.dataset.articleId;
    wx.navigateTo({
      url: '/pages/article-detail/article-detail?articleId='+articleId,
    })
  },

  onLoad: function (options) {
    this.getData()
  },

  back() {
    wx.navigateBack()
  },
  isCard(e) {
    this.setData({
      isCard: e.detail.value
    })
  },
});