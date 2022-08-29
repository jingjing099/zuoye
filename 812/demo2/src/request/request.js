const BASEURL='http://vue.mengxuegu.com/pro-api'
const request=(params)=>{
    return new Promise((resolve,reject)=>{
        request({
            url:BASEURL+params.url,
            data:params.data || '',
            method:params.method || 'GET',
            success:res=>{
                resolve(res)
            }
        })
    })
}
export default request