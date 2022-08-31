import http from './http.js' //导入axios

// 登录
const login = (msg) => {
	let data = http.post('/user/login', msg)
	return data
}
// 用户管理
const getUsers = (msg) => {
	let data = http.get('/api/v1/users', msg)
	return data
}
// 侧边栏管理
const getMenu = (msg) => {
	let data = http.get('/api/v1/menu-bars', msg)
	return data
}
// 所有角色
const getRoles = (msg) => {
	let data = http.get('/api/v1/roles', msg)
	return data
}
// 菜单管理
const getMenus = (msg) => {
	let data = http.get('/api/v1/menus', msg)
	return data
}
// 职级管理
const getRanks = (msg) => {
	let data = http.get('/api/v1/ranks', msg)
	return data
}
// 岗位管理
const getJobs = (msg) => {
	let data = http.get('/api/v1/jobs', msg)
	return data
}
// 部门管理
const getDepartment = (msg) => {
	let data = http.get('/api/v1/department', msg)
	return data
}
// 登录日志
const getLoginslogs = (msg) => {
	let data = http.get('/api/v1/logins-logs', msg)
	return data
}
// 操作日志
const getLogs = (msg) => {
	let data = http.get('/api/v1/logs', msg)
	return data
}
// 所有审批流程
const getApprovalprocess = (msg) => {
	let data = http.get('/api/v1/approval-process', msg)
	return data
}
// 所有审批类型
const getFlowpathtype = (msg) => {
	let data = http.get('/api/v1/flow-path-type', msg)
	return data
}
// 材料管理
const getMaterials = (msg) => {
	let data = http.get('/api/v1/materials', msg)
	return data
}

export{
    login,
	getUsers,
	getMenu,
	getRoles,
	getMenus,
	getRanks,
	getJobs,
	getDepartment,
	getLoginslogs,
	getLogs,
	getApprovalprocess,
	getFlowpathtype,
	getMaterials
}