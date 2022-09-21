import http from './http.js'
// 首页 分类
const fenglei=(msg)=>{
	return http.get('/article/api/category/label/list',msg)
}
// 热门列表
const detail=(msg)=>{
	console.log('msg',msg)
	return http.post(`/course/api/course/search/?content=null&sort="hot"&isFree="null"&categoryld=null&current=${msg.current}&size=${msg.size}`)
}
// 近期上新
const recent=(msg)=>{
	return http.post(`/course/api/course/search/?content=null&sort="hot"&isFree="null"&categoryld=null&current=${msg.current}&size=${msg.size}`)
}
// 免费精选
const frees=(msg)=>{
	return http.post(`/course/api/course/search/?content=null&sort="hot"&isFree=1&categoryld=null&current=${msg.current}&size=${msg.size}`)
}
// 热门列表
const slist=(msg)=>{
	return get('/course/api/chapter/section/list/null',msg)
}

export{
	slist,
	frees,
	recent,
	detail,
	fenglei
}