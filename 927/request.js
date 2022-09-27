const BASEURL='https://www.lexuemiao.com/api/'
const request=(params)=>{
  return new Promise((resolve,reject)=>{
    wx.showToast({
      title: '加载中',
    })
    wx.request({
      url: BASEURL + params.url,
      data:params.data || '',
      method:params.method || 'GET',
      success: res=>{
        resolve(res.data)
        wx.hideLoading({})
      }
    })
  })
}

export default request