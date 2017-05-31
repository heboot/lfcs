//app.js
var currentNewsId
App({
  data: {

  },
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度  
      success: function (res) {


      }
    })
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  telTap: function (e) {
    wx.makePhoneCall({
      phoneNumber: '037169888198' //仅为示例，并非真实的电话号码
    })
  },

  phoneTap: function (e) {
    wx.makePhoneCall({
      phoneNumber: '15838111315' //仅为示例，并非真实的电话号码
    })
  },
  addressTap: function (e) {

    wx.openLocation({
      latitude: 34.532289,
      longitude: 113.362872,
      name: "立方财税",
      address: "新密市大鸿路与栖霞路交叉口栖凤苑（世豪公馆）6楼606号",
      scale: 28
    })


  },
  globalData: {
    userInfo: null,
    news: [
      {
        id: 1, image: "http://oqt6hm3qt.bkt.clouddn.com/news12_small.png", title: "“多证合一”究竟怎么“合”，这张图来告诉你", time: "2017-5-22",  content: " 商事制度改革是李克强总理上任以来不断推进的一项重要工作。2017年5月12日，国务院办公厅正式发布《关于加快推进“多证合一”改革的指导意见》，并明确提出要确保在10月1日之前，将“多证合一”改革落到实处。从“三证合一”到“五证合一”，再到“多证合一”，总理今年力推的“多证合一”究竟怎么“合”？它又和“三证合一”、“五证合一”有何不同？这一张图来告诉你。<br/><img  src='http://oqt6hm3qt.bkt.clouddn.com/640'></img>"
      },
      {
        id: 2, image: "http://oqt6hm3qt.bkt.clouddn.com/news22_small.png", title: "会计人员不容忽视做账过程中的“证据链”", time: "2017-5-22",   content: "<br/><img  src='http://oqt6hm3qt.bkt.clouddn.com/news1.jpeg'></img>"
      },
    ],
  }
})