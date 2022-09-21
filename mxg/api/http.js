// import axios from 'axios'
// const http = axios.create({
// 	baseURL:'http://m.mengxuegu.com/api',
// 	timeout: 5000,
// 	withCredentials: true
// })
// http.interceptors.request.use((config=>{
// 	return config
// },(error)=>{
// 	return Promise.reject(error)
// }))
// http.interceptors.response.use((res)=>{
// 	return res
// },(error)=>{
// 	Promise.reject(error)
// })
// export default http
import axios from 'axios'
const instance = axios.create({
 // http://m.mengxuegu.com/api
    baseURL:'http://m.mengxuegu.com/api/',
    timeout:8000,//超时时间
})
// 请求拦截
instance.interceptors.request.use((config)=>{
    // console.log('拦截成功');
    return config
},(err)=>{
    return Promise.reject(err)
})
instance.interceptors.response.use((res)=>{
    // console.log(res);//后端响应的数据
    return res
},(err)=>{
    return Promise.reject(err)
})
export default instance