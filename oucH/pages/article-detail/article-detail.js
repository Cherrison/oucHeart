//pages/index.js

const app = getApp();
Page({
  data: {
    //article将用来存储towxml数据
    article: {},
    themepic:[
      "/images/btn/moon--current.png",
      "/images/btn/sun--default.png"
      ],
    currentTheme:0
  },
  onLoad: function (options) {
    const _ts = this;
    console.log(options)
    //请求markdown文件，并转换为内容
    wx.request({
      url: 'https://www.cheery.pro/article/demo' + options.articleId+'.md',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: (res) => {
        //将markdown内容转换为towxml数据
        let data = app.towxml.toJson(
          res.data,               // `markdown`或`html`文本内容
          'markdown'              // `markdown`或`html`
        );

        //前台初始化小程序数据（2.1.2新增，如果小程序中无相对资源需要添加`base`根地址，也无`audio`内容可无需初始化）
        data = app.towxml.initData(data, {
          base: 'https://xxx.com/',    // 需要解析的内容中相对路径的资源`base`地址
          app: _ts                     // 传入小程序页面的`this`对象，以用于音频播放器初始化
        });

        //设置文档显示主题，默认'light'
        data.theme = 'dark';

        //设置数据
        _ts.setData({
          article: data
        });
      }
    });
  },
  
  changeTheme:function(){
    var articletheme=this.data.article;
    
    if(this.data.currentTheme==1){
      articletheme.theme='dark'
      this.setData({
        currentTheme: 0,
        article: articletheme
      })
    }else{
      articletheme.theme = 'light'
      this.setData({
        currentTheme: 1,
        article: articletheme
      })
    }
  },
  back() {
    wx.navigateBack()
  },
})