// pages/index/date/eight/eight.js
Page({

  /**
   * 页面的初始数据
   */
   data: {
    business:
    [
    { time: 6, num: null }, { time: 7, num: null },
    { time: 8, num: null }, { time: 9, num: null },
    { time: 10, num: null }, { time: 11, num: null },
    { time: 12, num: null }, { time: 13, num: null },
    { time: 14, num: null }, { time: 15, num: null },
    { time: 16, num: null }, { time: 17, num: null },
    { time: 18, num: null }, { time: 19, num: null },
    { time: 20, num: null }, { time: 21, num: null },
    { time: 22, num: null }
    ],
    predict:null,
    area:
    [
      { time: 6, num: null }, { time: 7, num: null },
      { time: 8, num: null }, { time: 9, num: null },
      { time: 10, num: null }, { time: 11, num: null },
      { time: 12, num: null }, { time: 13, num: null },
      { time: 14, num: null }, { time: 15, num: null },
      { time: 16, num: null }, { time: 17, num: null },
      { time: 18, num: null }, { time: 19, num: null },
      { time: 20, num: null }, { time: 21, num: null },
      { time: 22, num: null }
    ]
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
  
  },
  getnum:function(e)
  {
    for(i=6;i<this.data.business.length;i++)
    if(this.data.business[i].time<11)
    var random = Math.ceil(Math.random() * 20)
  else if(this.data.business[i].time < 14)
  var random = Math.ceil(Math.random() * 100) 
  else if(this.data.business[i].time < 18)
  var random = Math.ceil(Math.random() * 60) 
  else if(this.data.business[i].time < 20)
  var random = Math.ceil(Math.random() * 100)
  else (this.data.business[i].time < 22)
  var random = Math.ceil(Math.random() * 20)
  }
})
