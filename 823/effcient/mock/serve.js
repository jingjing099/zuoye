let express = require('express') //引入repress
let Mock = require('mockjs')     //引入mock

// 登录页面数据
const login = require('./common/login.json')
//登录操作日志数据
// const loginLog = require('./common/loginLog.json')
// 用户管理数据
const userData = require('./common/user.json')
// 侧边栏数据
const menuData = require('./common/menu.json')
// 侧边栏数据
const rolesData = require('./common/roles.json')
// 菜单管理数据
const menusData = require('./common/menus.json')
// 职级管理数据
const ranksData = require('./common/ranks.json')
// 岗位管理数据
const jobsData = require('./common/jobs.json')
// 部门管理数据
const departmentData = require('./common/department.json')
// 登录日志数据
const loginslogsData = require('./common/loginslogs.json')
// 操作日志数据
const logsData = require('./common/logs.json')
// 所有审批流程
const approvalprocessData = require('./common/approvalprocess.json')
// 所有审批类型
const flowpathtypeData = require('./common/flowpathtype.json')
// 材料管理
const materialsData = require('./common/materials.json')


let app = express()             //实例化express
// 登录
app.use('/user/login',function(req,res){
    res.json(
        Mock.mock({
            status:200,
            msg:'登录成功',
            login
        })
    )
})
// 用户管理
app.use('/api/v1/users', function (req, res) {
	res.json(
		Mock.mock({
			status: 200,
			msg: '数据获取成功',
			userData
		})
	)
})
// 侧边栏
app.use('/api/v1/menu-bars', function (req, res) {
	res.json(
		Mock.mock({
			status: 200,
			msg: '数据获取成功',
			menuData
		})
	)
})
// 所有角色
app.use('/api/v1/roles', function (req, res) {
	res.json(
		Mock.mock({
			status: 200,
			msg: '数据获取成功',
			rolesData
		})
	)
})
// 菜单管理
app.use('/api/v1/menus', function (req, res) {
	res.json(
		Mock.mock({
			status: 200,
			msg: '数据获取成功',
			menusData
		})
	)
})
// 职级管理
app.use('/api/v1/ranks', function (req, res) {
	res.json(
		Mock.mock({
			status: 200,
			msg: '数据获取成功',
			ranksData
		})
	)
})
// 岗位管理
app.use('/api/v1/jobs', function (req, res) {
	res.json(
		Mock.mock({
			status: 200,
			msg: '数据获取成功',
			jobsData
		})
	)
})
// 部门管理
app.use('/api/v1/department', function (req, res) {
	res.json(
		Mock.mock({
			status: 200,
			msg: '数据获取成功',
			departmentData
		})
	)
})
// 登陆日志
app.use('/api/v1/logins-logs', function (req, res) {
	res.json(
		Mock.mock({
			status: 200,
			msg: '数据获取成功',
			loginslogsData
		})
	)
})
// 操作日志
app.use('/api/v1/logs', function (req, res) {
	res.json(
		Mock.mock({
			status: 200,
			msg: '数据获取成功',
			logsData
		})
	)
})
// 所有审批流程
app.use('/api/v1/approval-process', function (req, res) {
	res.json(
		Mock.mock({
			status: 200,
			msg: '数据获取成功',
			approvalprocessData
		})
	)
})
// 所有审批类型
app.use('/api/v1/flow-path-type', function (req, res) {
	res.json(
		Mock.mock({
			status: 200,
			msg: '数据获取成功',
			flowpathtypeData
		})
	)
})
// 材料管理
app.use('/api/v1/materials', function (req, res) {
	res.json(
		Mock.mock({
			status: 200,
			msg: '数据获取成功',
			materialsData
		})
	)
})



app.listen('8000',() => {
    console.log('监听端口 8000');
})