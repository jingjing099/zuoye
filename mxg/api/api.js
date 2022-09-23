import http from './http.js'
// 首页 分类
const fenglei = (msg) => {
	return http.get('/article/api/category/label/list', msg)
}
// 分类跳转
const jump=(msg)=>{
	return http.post(`/course/api/course/search/?content=null&sort=null&isFree=null&labelld=null&categoryId=${msg.categoryId}&current=${msg.current}&size=${msg.size}`)
}
// 热门列表
const detail = (msg) => {
	// console.log('msg', msg)
	return http.post(
		`/course/api/course/search/?content=null&sort="hot"&isFree="null"&categoryld=null&current=${msg.current}&size=${msg.size}`
	)
}
// 近期上新
const recent = (msg) => {
	return http.post(
		`/course/api/course/search/?content=null&sort="hot"&isFree="null"&categoryld=null&current=${msg.current}&size=${msg.size}`
	)
}
// 免费精选
const frees = (msg) => {
	return http.post(
		`/course/api/course/search/?content=null&sort="hot"&isFree=1&categoryld=null&current=${msg.current}&size=${msg.size}`
	)
}
// 付费精品
const pay = (msg) => {
	return http.post(
		`/course/api/course/search/?content=null&sort="hot"&isFree=0&labelld=null&categoryld=null&current=${msg.current}&size=${msg.size}`
		)
}
// 分类
// 分类侧边栏
const slist = (msg) => {
	return http.get('/article/api/category/label/list', msg)
}
// 阅读
// 阅读头部
const reads=(msg)=>{
	return http.get('/article/api/category/label/list',msg)
}
// 推荐
const recommend=(msg)=>{
	return http.post(`/article/api/article/search/?current=${msg.current}&size=${msg.size}`)
}
// 分类
const itemize=(msg)=>{
	return http.post(`/article/api/article/search/?categoryId=2&size=${msg.size}&current=${msg.current}`)
}
// QA
// 热门回答
const popular=(msg)=>{
	return http.post(`/question/api/question/hot/?current=${msg.current}&size=${msg.size}`)
}
// 最新问题
const problem =(msg)=>{
	return http.post(`/question/api/question/new/?current=${msg.current}&size=${msg.size}`)
}
// 等待问题
const wait=(msg)=>{
	return http.post(`/question/api/question/wait/?current=${msg.current}&size=${msg.size}`)
}
export {
	jump,
	wait,
	problem,
	popular,
	itemize,
	recommend,
	reads,
	slist,
	pay,
	frees,
	recent,
	detail,
	fenglei
}
