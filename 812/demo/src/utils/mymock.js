import Mock from 'mockjs'
Mock.mock('/getServeData', 'get', function () {
  // 返回的数据
  const data = Mock.mock({
    'list|1-1': [
      {
        // 'id|+1': 1,
        title:'用户',
        icon:'el-icon-user-solid'
      },{
        // 'id|+1': 2,
        title:'教学',
        icon:'el-icon-user-solid'
      },{
        // 'id|+1': 1,
        title:'题库',
        icon:'el-icon-user-solid'
      },{
        title:'运营',
        icon:'el-icon-user-solid'
      },{
        title:'营销',
        icon:'el-icon-user-solid'
      },{
        title:'商品',
        icon:'el-icon-user-solid'
      },{
        title:'财务',
        icon:'el-icon-user-solid'
      },{
        title:'统计',
        icon:'el-icon-user-solid'
      },{
        title:'系统',
        icon:'el-icon-user-solid'
      }
    ]
  })
  return data
})

Mock.mock('/mylist', 'get', function () {
  // 返回的数据
  const data = Mock.mock({
    'list|1-1': [
      '学员管理','讲师管理','助教管理'
    ]
  })
  return data
})
