Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    selected: 0,
    list : [
      {
        "pagePath": "/pages/test/home/home",
        "iconPath": "/images/tabbar/home.png",
        "selectedIconPath": "/images/tabbar/home_cur.png",
        "text": "主页"
      },
      {
        "pagePath": "/pages/test/expert/expert",
        "iconPath": "/images/tabbar/expert.png",
        "selectedIconPath": "/images/tabbar/expert_cur.png",
        "text": "咨询"
      },
      {
        "pagePath": "/pages/about/home/home",
        "iconPath": "/images/tabbar/about.png",
        "selectedIconPath": "/images/tabbar/about_cur.png",
        "text": "关于"
      }
    ]
  },
  methods: {
    switchTab(e) {      
      console.log(e)
      
      const url = e.currentTarget.dataset.path
      console.log(url)
      var that = this 
      wx.switchTab({
        url
      })
      
    }
  },
  pageLifetimes: {
  },
})