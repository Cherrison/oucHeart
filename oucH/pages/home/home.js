// pages/about/about.js
var t = getApp(), a = t.globalData.bgAudio;
const util = require('../../utils/util.js')
Component({

  /**
   * 页面的初始数据
   */
  data: {
    inter:"",
    startTime:"0:00",
    endTime:0,
    sliderBar:0,
    userinfo: "",
    nickName: '',
    imageurl: '',
    StatusBar: t.globalData.StatusBar,
    CustomBar: t.globalData.CustomBar,
    cardCur: 0,
    stickyNote: {
      friend_id: 55,
      user_id: 12,
      virtual_name: "只懂你心",
      content: "我很好奇为什么我喜欢的男生（ 他不喜欢我， 而且他知道我喜欢他） 一直躲避我的目光， 很无语， 我又怎么才能让他知道我不喜欢他了呢?",
      bg_id: 12,
      bg_img: "https://www.52hertalk.cn/public/upload/friendBg/2018/12-11/62b2933ea6013dd694a5a7404670708c.jpg",
      like_num: 125,
      dislike_num: 3,
      like_status:1
    },
    card:{
      bg: "gradual-blue",
      name: "只懂你心",
      color: "我很好奇为什么我喜欢的男生（ 他不喜欢我， 而且他知道我喜欢他） 一直躲避我的目光， 很无语， 我又怎么才能让他知道我不喜欢他了呢?"
    },
    bgAudioState: {
      starttime: "00: 00",
      endtime: "03: 21",
      offset: 42,
      max: 100,
      playState: 0
    },
    playing: {
      starttime: "00: 00",
      endtime: "03: 21",
      offset: 42,
      max: 100,
      playState: 1
    },
    pause: {
      starttime: "00: 00",
      endtime: "03: 21",
      offset: 42,
      max: 100,
      playState: 0
    },
    listenList: {
      id: 74,
      head_img: "https://www.52hertalk.cn/public/upload/listen/2019/01-14/e179a432d232e209ef84a5d0dd437ac0.png",
      song_name: "“单身多年， 你孤独吗？",
      author: "小海",
      boutique: 1,
      classify: 1,
      listen_url: "http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46",
      rank: 0,
      hot: 28293
    },
    articleList: [{
      articleId: '1',
      title: '这里有个戏精铲屎官，主子了解一下？',
      image: 'https://image.weilanwl.com/img/4x3-3.jpg',
      description: '这是一个伪铲屎官为了给自己的程序凑字数瞎几把乱写的一堆文字，了解一下就OK！ヾ(=･ω･=)o',
      content: "",
      views: "123",
      author: "小海",
      picUrl: "https://www.52hertalk.cn/public/upload/article/2019/05-05/bd0442b85c9130330a4972ffb3d60530.jpg",
      tags: [{
        short: "假装有猫",
        color: "red"
      },
      {
        short: "戏精",
        color: "blue"
      },
      {
        short: "心灵治愈",
        color: "green"
      }
      ]
    },
    {
      articleId: '2',
      title: '这里有个戏精铲屎官，主子了解一下？',
      image: 'https://image.weilanwl.com/img/4x3-3.jpg',
      description: '这是一个伪铲屎官为了给自己的程序凑字数瞎几把乱写的一堆文字，了解一下就OK！ヾ(=･ω･=)o',
      content: "",
      views: "122",
      author: "问问",
      picUrl: "https://www.52hertalk.cn/public/upload/article/2019/04-09/1653021b9401babfc14183541a64a919.jpg",
      tags: [{
        short: "假装有猫",
        color: "red"
      },
      {
        short: "戏精",
        color: "blue"
      },
      {
        short: "心灵治愈",
        color: "green"
      }
      ]
    },
    {
      articleId: '3',
      title: '这里有个戏精铲屎官，主子了解一下？',
      image: 'https://image.weilanwl.com/img/4x3-3.jpg',
      description: '这是一个伪铲屎官为了给自己的程序凑字数瞎几把乱写的一堆文字，了解一下就OK！ヾ(=･ω･=)o',
      content: "",
      views: "321",
      author: "来听歌",
      picUrl: "",
      tags: [{
        short: "假装有猫",
        color: "red"
      },
      {
        short: "戏精",
        color: "blue"
      },
      {
        short: "心灵治愈",
        color: "green"
      }
      ]
    },
    {
      articleId: '4',
      title: '这里有个戏精铲屎官，主子了解一下？',
      image: 'https://image.weilanwl.com/img/4x3-3.jpg',
      description: '这是一个伪铲屎官为了给自己的程序凑字数瞎几把乱写的一堆文字，了解一下就OK！ヾ(=･ω･=)o',
      content: "",
      views: "",
      author: "",
      picUrl: "",
      tags: [{
        short: "假装有猫",
        color: "red"
      },
      {
        short: "戏精",
        color: "blue"
      },
      {
        short: "心灵治愈",
        color: "green"
      }
      ]
    },
    {
      articleId: '5',
      title: '这里有个戏精铲屎官，主子了解一下？',
      image: 'https://image.weilanwl.com/img/4x3-3.jpg',
      description: '这是一个伪铲屎官为了给自己的程序凑字数瞎几把乱写的一堆文字，了解一下就OK！ヾ(=･ω･=)o',
      content: "",
      views: "",
      author: "",
      picUrl: "",
      tags: [{
        short: "假装有猫",
        color: "red"
      },
      {
        short: "戏精",
        color: "blue"
      },
      {
        short: "心灵治愈",
        color: "green"
      }
      ]
    }
    ],
    linearList: [
      {
        bg: "gradual-red",
        name: "魅红",
        color: "#f43f3b , #ec008c"
      },
      {
        bg: 'gradual-orange',
        name: '鎏金',
        color: '#ff9700 , #ed1c24'
      },
      {
        bg: 'gradual-green',
        name: '翠柳',
        color: '#39b54a , #8dc63f'
      },
      {
        bg: 'gradual-blue',
        name: '靛青',
        color: '#0081ff , #1cbbb4'
      },
      {
        bg: 'gradual-purple',
        name: '惑紫',
        color: '#9000ff , #5e00ff'
      },
      {
        bg: 'gradual-pink',
        name: '霞彩',
        color: '#ec008c , #6739b6'
      },
    ]

  },
  methods: {
    onLoad: function (options) {
      var app = getApp()
      app.setMusic("单身", this.data.listenList.head_img, "海", "单身", this.data.listenList.listen_url)
      var that = this
      t.getUserInfo(function (usercb) {
        that.setData({
          userinfo: usercb,
          nickName: usercb.nickName,
          imageurl: usercb.avatarUrl
        })
        console.log('用户名称: ', usercb)
        console.log('用户名称1: ', that.data.userinfo)
      })
    },
    onReady:function(options){
      console.log("ready")
      var app = getApp()
      var length = app.getDuration()
      var m = parseInt(length / 60)
      var s = parseInt(length % 60)
      this.setData({
        endTime: m + ":" + s
      })
      app.pauseMusic()
    },
    endTime(that){
      clearInterval(that.data.inter)
    },
    setTime:function(that){
      var app = getApp()
      var current = app.getCurrentTime()
      var m = parseInt(current/60)
      var s = parseInt(current%60)
      that.setData({
        maxTime:app.getDuration(),
        sliderBar:app.getCurrentTime(),
        startTime:m+":"+s
      })
    },
    // 轮播图
    // cardSwiper
    cardSwiper(e) {
      this.setData({
        cardCur: e.detail.current
      })
    },
    // 头部便签部分
    toNoteDetail: function (e) {
      console.log('跳转到详情界面!')
      // wx.navigateTo({
      //   url: '',
      // })

    },
    clickLike: function (e) {
      var noteChange = this.data.stickyNote
      switch (noteChange.like_status) {
        case 0: {
          noteChange.like_status = 1;
          noteChange.like_num += 1
          break;
        }
        case 1: {
          noteChange.like_status = 0;
          noteChange.like_num -= 1
          break;
        }
      }
      this.setData({
        stickyNote: noteChange
      })
      if (noteChange.like_status) console.log('点了个赞')
      else console.log('取消了点赞')
    },
    loadStickyNote:function(e){
        console.log('已切换便签!')
    },

    // 播放器部分
    sliderChange: function (e) {
      var playing;
      playing = util.totime(e.detail.value, this.data.bgAudioState.endtime);
      var playChange = this.data.bgAudioState;
      playChange.starttime=playing;
      playChange.offset = e.detail.value;

      this.setData({
        bgAudioState: playChange
      })
      getApp().setTime(playing)
      console.log('切换到 '+ playing +' 处');
    },
    play: function (t) {
      var app = getApp()
      if (this.data.bgAudioState.playState==0){
        console.log('播放')
        this.setData({
          bgAudioState: this.data.playing
        })
        this.data.inter = setInterval(this.setTime, 1000, this)
        app.playMusic()
      }else{
        console.log('暂停')
        app.pauseMusic()
        this.setData({
          bgAudioState: this.data.pause
        })
        this.endTime(this)
      }
    },

    lastSong:function(e){
      console.log('切换到上一首')
    },

    nextSong:function(e){
      console.log('切换到下一首')
    },


    toArticleDetail:function(e){
      var articleId=e.currentTarget.dataset.articleId
      console.log('跳转到文章详情页: '+articleId)
    },

     onShow: function () {
      
    }
  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' && this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        })
      }
    }
  }
})