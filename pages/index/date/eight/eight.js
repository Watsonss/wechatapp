// pages/index/date/eight/eight.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    business:
    [
      { businesser: 1, time: 6, num: null }, { businesser: 1,time: 7, num: null },
      { businesser: 1, time: 8, num: null }, { businesser: 1,time: 9, num: null },
      { businesser: 1, time: 10, num: null }, { businesser: 1,time: 11, num: null },
      { businesser: 1, time: 12, num: null }, { businesser: 1, time: 13, num: null },
      { businesser: 1, time: 14, num: null }, { businesser: 1,time: 15, num: null },
      { businesser: 1, time: 16, num: null }, { businesser: 1, time: 17, num: null },
      { businesser: 1, time: 18, num: null }, { businesser: 1,time: 19, num: null },
      { businesser: 1, time: 20, num: null }, { businesser: 1,time: 21, num: null },
      { businesser: 1,time: 22, num: null },
      { businesser:2, time: 6, num: null }, { businesser:2, time: 7, num: null },
      { businesser:2, time: 8, num: null }, { businesser:2, time: 9, num: null },
      { businesser:2, time: 10, num: null }, { businesser:2, time: 11, num: null },
      { businesser:2, time: 12, num: null }, { businesser:2, time: 13, num: null },
      { businesser:2, time: 14, num: null }, { businesser:2, time: 15, num: null },
      { businesser:2, time: 16, num: null }, { businesser:2, time: 17, num: null },
      { businesser:2, time: 18, num: null }, { businesser:2, time: 19, num: null },
      { businesser:2, time: 20, num: null }, { businesser:2, time: 21, num: null },
      { businesser:2, time: 22, num: null },
      { businesser:3, time: 6, num: null }, { businesser:3, time: 7, num: null },
      { businesser:3, time: 8, num: null }, { businesser:3, time: 9, num: null },
      { businesser:3, time: 10, num: null }, { businesser:3, time: 11, num: null },
      { businesser:3, time: 12, num: null }, { businesser:3, time: 13, num: null },
      { businesser:3, time: 14, num: null }, { businesser:3, time: 15, num: null },
      { businesser:3, time: 16, num: null }, { businesser:3, time: 17, num: null },
      { businesser:3, time: 18, num: null }, { businesser:3, time: 19, num: null },
      { businesser:3, time: 20, num: null }, { businesser:3, time: 21, num: null },
      { businesser:3, time: 22, num: null }

    ],
    predict:
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
  getbusinessnum:function(e)
  {
    for(i=6;i<this.data.business.length;i++)
   { if(this.data.business[i].time<11)
    {var random = Math.ceil(Math.random() * 20);
      var str = "business[" + i + "].num";
      this.setDate({[str]:random}) }
  else if(this.data.business[i].time < 14)
    {
      var random = Math.ceil(Math.random() * 100);
      var str = "business[" + i + "].num";
      this.setDate({ [str]: random })  }

  else if(this.data.business[i].time < 18)
    {
      var random = Math.ceil(Math.random() * 60);
      var str = "business[" + i + "].num";
      this.setDate({ [str]: random })  }

  else if(this.data.business[i].time < 20)
    {
      var random = Math.ceil(Math.random() * 100);
      var str = "business[" + i + "].num";
      this.setDate({ [str]: random })
    }
  else (this.data.business[i].time < 22)
  
    {
        var random = Math.ceil(Math.random() * 20);
        var str = "business[" + i + "].num";
        this.setDate({ [str]: random })
    }
    

  }
  }
  ,

  getareanum: function (e)
  {
    
    for (i = 6; i < this.data.area.length; i++)
    {
      this.data.area[i].num=(this.data.business[i]+this.data.business[i+17]+this.data.business[i+34])/3

    }


  }
})
