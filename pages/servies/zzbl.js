// zzbl.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
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
  
  }, telTap: function (e) {
    wx.makePhoneCall({
      phoneNumber: '037169988198' //仅为示例，并非真实的电话号码
    })
  },

  phoneTap: function (e) {

    wx.makePhoneCall({
      phoneNumber: '15238371314' //仅为示例，并非真实的电话号码
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


  }

})