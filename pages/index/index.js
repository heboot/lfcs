//index.js
//获取应用实例
var app = getApp()
var news = getApp().globalData.news
Page({
  data: {
    imgUrls: [
      '../images/ban1.jpg',
      '../images/ban2.png',
      '../images/ban3.jpg'
    ],
    news:news,
    navs: [{ icon: "../images/icon-new-list1.png", name: "工商注册", typeId: 0 },
    { icon: "../images/icon-new-list2.png", name: "代理记账", typeId: 1 },
    { icon: "../images/icon-new-list3.png", name: "资质办理", typeId: 2 },
    { icon: "../images/icon-new-list4.png", name: "商标专利", typeId: 3 },
    { icon: "../images/icon-new-list4.png", name: "环评服务", typeId: 4 },
    { icon: "../images/icon-new-list4.png", name: "关于我们", typeId: 5 }],
  
    
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
  },

  gszcTap:function(e){
    wx.navigateTo({
 
      url: '/pages/servies/gszc',
    })
  },

  dljzTap: function (e) {
    wx.navigateTo({

      url: '/pages/servies/dljz',
    })
  },

  zzblTap: function (e) {
    wx.navigateTo({

      url: '/pages/servies/zzbl',
    })
  },

  sbzlTap: function (e) {
    wx.navigateTo({

      url: '/pages/servies/sbzl',
    })
  },

  hpTap: function (e) {
    wx.navigateTo({

      url: '/pages/servies/hp',
    })
  },

  aboutTap:function(e){
     
      wx.navigateTo({

        url: '/pages/about/about',
      })
    
  }, 

  newsTap:function(e){
    
    app.currentNewsId = e.currentTarget.dataset.id
    
    console.log(app.currentNewsId);
    wx.navigateTo({
      
      url: '/pages/news/news',
    })
  }



})
