Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr:['精选','0元课','系统课','面授集训','MBA面试'],
    activeindex:0,
    str:[]
  },
  change(e){
    console.log(e);
    // let index = e.currentTarget.dataset.index
    // this.data.activeindex= index
    this.setData({
      activeindex:e.currentTarget.dataset.index
    })
  },
  // 轮播图
  getBanner(){
    wx.request({
      url: 'https://www.lexuemiao.com/api/app/home/banner/1/4',
      success:res=>{
        // console.log(res);
        this.setData({
          str: res.data.data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getBanner()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.showToast({
      title: '加载中...',
      duration:1000
    })
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
    
  }
})