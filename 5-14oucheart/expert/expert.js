const app = getApp();
Component({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    TabCur: 0,
    scrollLeft: 0,
    headurl: getApp().globalData.HeadUrl,
    datalist: [{
      name: "王老师",
      occu_info: {
        entryTime: 2,
        option: "国家二级心理咨询师"
      },
      price: { price: "100", min: "50" },
      service_type: "面询/远程",
      tags: ["个人成长，抑郁，情感困惑，人生意义探索"],
      thumb: {
        little: "/public/upload/expert/2019/02-20/b70c11e39bc5a32c242bf80819d21e54.jpg",
        big: "/public/upload/expert/2019/02-20/b70c11e39bc5a32c242bf80819d21e54.jpg"
      }
    }, {
      name: "张老师",
      occu_info: {
        entryTime: 2,
        option: "国家一级心理咨询师"
      },
      price: { price: "120", min: "50" },
      service_type: "面询/远程",
      tags: ["真诚、包容、启发"],
      thumb: {
        little: "/public/upload/expert/2019/03-19/24d689a8f6522eb8b2dc61439521d848.jpg",
        big: "/public/upload/expert/2019/03-19/24d689a8f6522eb8b2dc61439521d848.jpg"
      }
    }],
    scrollLeft: 0
  },
  methods: {
    tabSelect(e) {
      console.log('切换顶部导航栏到: '+e.currentTarget.dataset.id);
      this.setData({
        TabCur: e.currentTarget.dataset.id,
        scrollLeft: (e.currentTarget.dataset.id - 1) * 60
      })
    }
  },
  
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' && this.getTabBar()) {
        this.getTabBar().setData({
          selected: 1
        })
      }
    }
  }
})