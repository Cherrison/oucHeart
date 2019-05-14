//index.js
//获取应用实例
import * as echarts from '../../../ec-canvas/echarts';

const app = getApp();

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    backgroundColor: "#ffffff",
    color: ["#37A2DA", "#FF9F7F"],
    tooltip: {},
    xAxis: {
      show: false
    },
    yAxis: {
      show: false
    },
    radar: {
      // shape: 'circle',
      indicator: [{
        name: '忧伤',
        max: 500
      },
      {
        name: '抑郁',
        max: 500
      },
      {
        name: '开心',
        max: 500
      },
      {
        name: '幸福',
        max: 500
      },
      {
        name: '孤独',
        max: 500
      },
      {
        name: '失落',
        max: 500
      }
      ]
    },
    series: [{
      name: '预算 vs 开销',
      type: 'radar',
      data: [{
        value: [430, 340, 500, 300, 490, 400],
        name: '预算'
      },
      {
        value: [300, 430, 150, 300, 420, 250],
        name: '开销'
      }
      ]
    }]
  };

  chart.setOption(option);
  return chart;
}
Page({
  data: {
    data: [//储存所有问题的数据，包括问题内容，选项内容，不同选项的得分

    ],
    select: {//储存每个问题的选择

    },
    score: 0,
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 500,
    isComplete: false,//标志是否完成答题
    current: 0,
    isFinal: false,//标志是否到了最后一页
    currentIndex: 0,
    show_result:false,
    ec: {
      onInit: initChart
    }
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  result: function (e) {//用于计算得分
    var sum = 0
    var data = this.data.data
    var select = this.data.select
    var len = select.length
    for (let i = 0; i < len; i++) {
      sum = sum + data[i][2][select[i]] + 1 - 1
    }
    this.setData({
      score: sum,
      show_result: true
    })
    console.log(sum)
  },

  back() {
    wx.navigateBack()
  },

  change: function (e) {//每次页面改变的时候触发

    // if (this.data.current == this.data.data.length-1)
    //   this.setData({
    //     isFinal: true
    //   })
    // else
    //   this.setData({
    //     isFinal: false
    //   })

    this.setData({
      currentIndex: e.detail.current
    })
    if (e.detail.current<20){
      this.setData({
        current: e.detail.current * 1 + 1
      })
    }
    console.log("current:" + this.data.current)
  },

  choose: function (e) {//单击选项的时候触发，用来将选择保存在select中
    var str = 'select[' + e.currentTarget.dataset.id + ']'
    this.setData({
      [str]: e.currentTarget.dataset.index
    })
    if (this.data.select.length == this.data.data.length) {
      console.log(this.data.select.length)
      this.setData({
        isComplete: true,
        isFinal: true
      })
    }
    if (this.data.currentIndex < this.data.data.length-1)
      this.setData({
        currentIndex: this.data.currentIndex + 1
      })
    console.log(this.data.select)
  },

  showinfo:function(e){
      

  },

  onLoad: function (options) {
    this.setData({
      currentIndex: 0
    })
    var that = this
    wx.setNavigationBarTitle({
      title: options.title
    })
    wx.request({
      url: 'https://www.clearn.site/wxapi/getTest.php',
      method: "POST",
      data: {
        title: options.title,
      },
      success: function (res) {
        console.log(res)
        var data = res.data
        for (let i = 0; i < data.length; i++) {//这里将选项和得分转换成json格式
          data[i][1] = JSON.parse(data[i][1])
          data[i][2] = JSON.parse(data[i][2])
        }
        that.setData({
          data: data
        })
        console.log(that.data.data)
      },
      fail: function (res) {
        console.log(res)
      },
      complete: function (res) {
        console.log("完成")
      }
    })
  }
})
