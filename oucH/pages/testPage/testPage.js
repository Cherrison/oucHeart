// pages/testPage/testPage.js
Page({
  data: {
    testList:[],

  },


  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'https://www.clearn.site/wxapi/getTest.php',
      method:"POST",
      header:{
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data:{
        type:"getall"
      },
      success:function(res){
        console.log(res)
        that.setData({
          testList:res.data
        })
      },
      fail:function(res){
        console.log(res)
      }
    })
  },


  onReady: function () {

  },


  onShow: function () {

  },


  onHide: function () {

  },

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