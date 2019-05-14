// pages/home/heartbar/heartbar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stickyNote: {
      friend_id: 55,
      user_id: 12,
      virtual_name: "只懂你心",
      content: "我很好奇为什么我喜欢的男生（ 他不喜欢我， 而且他知道我喜欢他） 一直躲避我的目光， 很无语， 我又怎么才能让他知道我不喜欢他了呢?",
      bg_id: 12,
    },
    card: [
      {
      card_id: 0,
      bg: "gradual-blue",
      name: "相信自己",
      short: "越活越坚强，我没有靠山，自己就是山，我没有天下，自己打天下，活着就该逢山开路，遇水架桥，生活！你给我压力，我还你奇迹 !",
      bg_img: "https://www.52hertalk.cn/public/upload/friendBg/2018/12-11/62b2933ea6013dd694a5a7404670708c.jpg",
      like_num: 235,
      like_status: 1,
      commemt_num: 212,
      comment_id:"051001"
    },
      {
        card_id: 1,
        bg: "gradual-green",
        name: "努力加油!!!",
        short: "\n别问我为什么这么努力，我只是为了以后我夹菜，没人敢转桌子 !",
        bg_img: "https://www.52hertalk.cn/public/upload/friendBg/2018/12-11/62b2933ea6013dd694a5a7404670708c.jpg",
        like_num: 45,
        like_status: 1,
        commemt_num:325,
        comment_id: "051002"
      },
      {
        card_id: 2,
        bg: "gradual-pink",
        name: "不忘初心",
        short: "\n认定了的路，再痛也不要皱一下眉头，你要知道，再怎么难走都是你自己选的，你没有资格喊疼 !",
        bg_img: "https://www.52hertalk.cn/public/upload/friendBg/2018/12-11/62b2933ea6013dd694a5a7404670708c.jpg",
        like_num: 125,
        like_status: 1,
        commemt_num: 125,
        comment_id: "051003"
      }
    ],
  },
  toNoteDetail:function(e){
    console.log('跳转到卡片详情界面!')
    // wx.navigateTo({
    //   url: '',
    // })

  },

  loadStickyNote: function (e) {
    console.log('已切换便签!')
  },
  clickLike: function (e) {
    console.log(e)
    var cid = e.currentTarget.dataset.cardId
    var noteChange = this.data.card[cid]
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
    var ccard ='card['+cid+']'; // 只改变数组中某一项
    this.setData({
      [ccard]: noteChange
    })
    if (noteChange.like_status) console.log('点了个赞')
    else console.log('取消了点赞')
  },
  back() {
    wx.navigateBack()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})