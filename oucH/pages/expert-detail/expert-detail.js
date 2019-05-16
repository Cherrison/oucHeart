//全局的 getApp() 函数,获取到小程序实例
var app = getApp()
Page({
  data: {
    userInfo: null
  },
  //页面载入，获取全局变量userInfo
  onLoad: function () {
    this.setData({
      userInfo: app.globalData.userInfo
    })
  },
  //表单提交
  formSubmit: function (e) {
    var that = this
    console.log(e)
    var orderno = e.detail.value.orderno
    var orderdate = e.detail.value.orderdate
    var ordername = e.detail.value.ordername
    var ordertel = e.detail.value.ordertel
    var formid = e.detail.formId
    //校验输入
    if (orderno == "" || orderdate == "" || ordername == "" || ordertel == "") {
      wx.showModal({
        title: '提示',
        content: '不能为空！'
      })
    }
    else {
      wx.showToast({
        title: '成功',
        icon: 'success',
        duration: 2000
      }),
        wx.request({
          url: 'https://www.cheery.pro/openid.php', //服务器信息
          data: {
            code: app.globalData.code,
            FORMID: formid,
            date: orderdate,
            no: orderno,
            name: ordername,
            tel: ordertel
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success: function (res) {
            console.log(res.data)
          }
        })
    }
  },
  back() {
    wx.navigateBack()
  },
  //表单重置
  formReset: function () {
    this.setData({
      date: ''
    })
  },
  //日期选择
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
})