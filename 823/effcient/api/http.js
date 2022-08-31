import axios from 'axios'
import {getToken} from '../src/untils/auth'
import {MessageBox} from 'element-ui'
// import { Message } from 'element-ui' //在js文件中，需单独引入提示

//axios常用封装有哪些？
const http = axios.create({
	baseURL: '/effect', //根路径
	// baseURL:'http://101.132.181.9/api',
	timeout: 5000, //超时时间
	withCredentials: true,
		// headers: {
		// 	'Content-Type': 'application/json; charset=utf-8'
		// }
})

//请求拦截器-接口请求的前置拦截，主要放一些请求头协议
http.interceptors.request.use(config => {
	//放请求头协议
	// let token=localStorage.getItem('token')
	// if(token){
	//     config.headers.Authorization=token
	// }
	config.headers['token'] = getToken()
	return config

}, error => {
	//用pormise把失败的结果导出去，
	return Promise.reject(error)
})


//响应拦截器-接口的响应结果，主要放一些常见错误代码处理
http.interceptors.response.use(res => {
	return res
}, error => {
	//用pormise把失败的结果导出去，
	Promise.reject(error)
})

// http.interceptors.response.use(res => {

// 	return response
// }, error => {
// 	let title = ''
// 	let message = ''
// 	if (error && error.response) {
// 		message = error.response.data.message
// 		// 401, token失效
// 		// if (error.response.data.status === 2) {
// 		//   router.push({
// 		//     name: 'login'
// 		//   })
// 		// }
// 		switch (
// 			error.response.status // 跨域存在获取不到状态码的情况
// 		) {
// 			case 400:
// 				title = '错误请求'
// 				break
// 			case 401:
// 				title = '资源未授权'
// 				break
// 			case 403:
// 				title = '禁止访问'
// 				break
// 			case 404:
// 				title = '未找到所请求的资源'
// 				break
// 			case 405:
// 				title = '不允许使用该方法'
// 				break
// 			case 408:
// 				title = '请求超时'
// 				break
// 			case 500:
// 				title = '内部服务器错误'
// 				break
// 			case 501:
// 				title = '未实现'
// 				break
// 			case 502:
// 				title = '网关错误'
// 				break
// 			case 503:
// 				title = '服务不可用'
// 				break
// 			case 504:
// 				title = '网关超时'
// 				break
// 			case 505:
// 				title = 'HTTP版本不受支持'
// 				break
// 			default:
// 				title = error.response.status
// 		}
// 		return MessageBox.alert(message, title, {
// 			type: 'warning'
// 		})
// 	} else {
// 		// 跨域获取不到状态码或者其他状态进行的处理
// 		return MessageBox.alert('请联系系统管理员, 或稍后再试!', '未知错误', {
// 			type: 'error'
// 		})
// 	}
// 	//用pormise把失败的结果导出去，
// 	// Promise.reject(error)
// })

export default http

































// const server = axios.create({
//     baseURL: 'http://127.0.0.1:8888/api/private/v1',
//     // baseURL: process.env.VUE_APP_API,
//     timeout: 5000
// })
// //请求拦截
// server.interceptors.request.use(config => {
//     //给请求头统一加token，不用每次进后台，每个页面都加了
//     // if (localStorage.getItem('token')) {
//     //     config.headers.Authorization = localStorage.getItem('token');
//     // }
//     return config
// }, error => {
//     Promise.reject(error)
// })
// //响应拦截
// server.interceptors.response.use(res => {
//     //根据自己后端返回状态码，设置统一的错误提醒
// //   if (res.data.meta.status !== 200) {
// //     Message.error({
// //       duration:2000,
// //       message: res.data.meta.msg
// //     })
// //   }
//   return res.data

// }, error => {
//     Promise.reject(error)
// })
// export default server