import request from '../request/request.js'

// 轮播图
const getSwiper = () => {
	return request('home/swiperdata').then(res => res)
}

export {
	getSwiper
}
