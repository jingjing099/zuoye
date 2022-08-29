import Mock from 'mockjs'
Mock.mock('/getServeData', 'get', function () {
  // 返回的数据
  const data = Mock.mock({
    'list|1-1': [
      {
        'id|+1': 1,
        icon: "el-icon-c-scale-to-original",
        title: "图书管理",
        path: "/book",
      },
      {
        'id|+1': 2,
        icon: "el-icon-edit-outline",
        title: "后台管理",
        path: "/back",
      },
      {
        'id|+1': 3,
        icon: "el-icon-s-flag",
        title: "国际化",
        path: "/country",
      },
      {
        'id|+1': 4,
        icon: "el-icon-c-scale-to-original",
        title: "基础表格",
        path: "/table",
      },
      {
        'id|+1': 5,
        icon: "el-icon-s-promotion",
        title: "tab选项卡",
        path: "/tab",
      }
    ]
  })
  return data
})