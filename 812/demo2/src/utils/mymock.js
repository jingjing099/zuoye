import Mock from 'mockjs'
Mock.mock('/getServeData', 'get', function () {
  // 返回的数据
  const data = Mock.mock({
    'list|1-1': [
      {
        'id|+1': 1,
        icon:'el-icon-s-home',
        title:'首页',
        path:'/index'
      },{
        'id|+1': 2,
        icon:'el-icon-user-solid',
        title:'会员管理',
        path:'/vip'
    },{
      'id|+1': 3,
        icon:'el-icon-s-cooperation',
        title:'供应商管理',
        path:'/supplier'
    },{
      'id|+1': 4,
        icon:'el-icon-s-goods',
        title:'商品管理',
        path:'/goods'
    },{
      'id|+1': 5,
        icon:'el-icon-user',
        title:'员工管理',
        path:'/staff'
    }
    ]
  })
  return data
})
