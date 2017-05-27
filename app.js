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
  globalData: {
    userInfo: null,
    news: [
      {
        id: 1, image: "../images/m.jpg", title: "立方财税荣获国家级进步奖", time: "2017-5-22", commentCount: "111", content: "<h2>立方财税荣获国家级进步奖</h2><img  src='../images/m.jpg'></img><p> 立方财税荣获国家级进步奖立方财税荣获国家级进步奖立方财税荣获国家级进步奖立方财税荣获国家级进步奖立方财税荣获国家级进步奖立方财税荣获国家级进步奖立方财税荣获国家级进步奖立方财税荣获国家级进步奖立方财税荣获国家级进步奖</p><p> 立方财税荣获国家级进步奖立方财税荣获国家级进步奖立方财税荣获国家级进步奖立方财税荣获国家级进步奖立方财税荣获国家级进步奖立方财税荣获国家级进步奖立方财税荣获国家级进步奖立方财税荣获国家级进步奖 </p>" },
      { id: 2, image: "../images/icon-new-list1.png", title: "习近平主席今日访问立方财税", time: "2017-5-22", commentCount: "111", content: "<h2>习近平主席今日访问立方财税</h2><img  src='../images/m.jpg'></img><p> 习近平主席今日访问立方财税习近平主席今日访问立方财税习近平主席今日访问立方财税习近平主席今日访问立方财税习近平主席今日访问立方财税习近平主席今日访问立方财税</p><p> 习近平主席今日访问立方财税习近平主席今日访问立方财税习近平主席今日访问立方财税习近平主席今日访问立方财税习近平主席今日访问立方财税习近平主席今日访问立方财税习近平主席今日访问立方财税习近平主席今日访问立方财税习近平主席今日访问立方财税习近平主席今日访问立方财税习近平主席今日访问立方财税 </p>" },
      { id: 3, image: "../images/icon-new-list1.png", title: "立方财税杨志刚出席泛亚太地区工商会议", time: "2017-5-22", commentCount: "111", content: "立方财税杨志刚出席泛亚太地区工商会议", time: "2017-5-22", commentCount: "111", content: "<h2>习近平主席今日访问立方财税</h2><img  src='../images/m.jpg'></img><p> 立方财税杨志刚出席泛亚太地区工商会议立方财税杨志刚出席泛亚太地区工商会议立方财税杨志刚出席泛亚太地区工商会议立方财税杨志刚出席泛亚太地区工商会议立方财税杨志刚出席泛亚太地区工商会议</p><p> 立方财税杨志刚出席泛亚太地区工商会议立方财税杨志刚出席泛亚太地区工商会议立方财税杨志刚出席泛亚太地区工商会议立方财税杨志刚出席泛亚太地区工商会议立方财税杨志刚出席泛亚太地区工商会议立方财税杨志刚出席泛亚太地区工商会议立方财税杨志刚出席泛亚太地区工商会议立方财税杨志刚出席泛亚太地区工商会议 </p>" },
      { id: 4, image: "../images/icon-new-list1.png", title: "立方财税也许是中原地区最6的代理记账机构", time: "2017-5-22", commentCount: "111", content: "<h2>立方财税也许是中原地区最6的代理记账机构</h2><img  src='../images/m.jpg'></img><p> 立方财税也许是中原地区最6的代理记账机构立方财税也许是中原地区最6的代理记账机构立方财税也许是中原地区最6的代理记账机构立方财税也许是中原地区最6的代理记账机构</p><p> 立方财税也许是中原地区最6的代理记账机构立方财税也许是中原地区最6的代理记账机构立方财税也许是中原地区最6的代理记账机构立方财税也许是中原地区最6的代理记账机构 </p>" },],
  }
})