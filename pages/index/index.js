//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    scrollId : 'red',
    isScrollX: true,
    bannerList  : [
      {
        url :　"../../images/banner_1.jpg"
      },{
        url :  "../../images/banner2.jpg"
      },{
        url :  "../../images/banner_3.jpg"
      }
    ],
    activeBannerIndex : 0,
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindChange : function(e){
      this.setData({activeBannerIndex : e.detail.current});
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    console.log(app.globalData);
    this.setData({'windowWidth' : app.globalData.windowWidth});
  }
})
