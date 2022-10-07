// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: '',
    show: false,
    currentDate: new Date().getTime(),
    minDate: new Date().getTime(),
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      }
      if (type === 'month') {
        return `${value}月`;
      }
      return value;
    },
  },
  opentrue(){
    this.data.show = false
    this.setData({
      show: false
    });    
  },
  openfalse(){
    this.data.show = false
    this.setData({
      show: false
    });    
  },
  open(){
    // console.log(1);
    this.data.show = !this.data.show
    console.log(this.data.show);
    this.setData({
      show: this.data.show
    });
  },
  onClose() {
    this.data.show = false
    this.setData({
      show: false
    });
  },
  onInput(event) {
    this.setData({
      currentDate: event.detail,
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.data.msg = wx.getStorageSync('token')
    this.setData({
      msg: this.data.msg
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})