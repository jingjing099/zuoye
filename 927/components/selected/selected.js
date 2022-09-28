// components/selected/selected.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    list:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getData(){
      wx.request({
        url: 'https://www.lexuemiao.com/api/app/home/marketingCourse/1?classify_id=1',
        method:'GET',
        success:res=>{
          console.log(res);
          this.setData({
            list: res.data.data.course_list
          })
        }
      })
    }
  },
  lifetimes:{
    // 在组件实例进入页面节点树时执行
    attached:function(){
      this.getData()
    }
  }
})
