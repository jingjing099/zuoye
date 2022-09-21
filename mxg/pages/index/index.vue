<template>
	<view class="container">
		<searchbox :str="str"></searchbox>
		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="swiperbox"
			@change="changeAutoplay" :style="{'background':`-webkit-linear-gradient(${str} , #f8f9fb)`}">
			<swiper-item>
				<img class="img" src="../../static/images/banner1.jpg" alt="">
			</swiper-item>
			<swiper-item>
				<img class="img" src="../../static/images/banner2.jpg" alt="">
			</swiper-item>
			<swiper-item>
				<img class="img" src="../../static/images/banner3.jpg" alt="">
			</swiper-item>
		</swiper>
		<!-- 分类区域 -->
		<view class="classify">
			<view class="classitem" v-for="item,index in assort.slice(0,7)">{{item.name}}</view>
			<view class="classitem">全部分类</view>
		</view>

		<!-- 热门推荐 -->
		<titles>
			<template v-slot:aaa>
				热门推荐
			</template>
			<template v-slot:hot>
				HOT
			</template>
		</titles>
		<!-- 列表 -->
		<scroll-view scroll-x="true" class="scrollbox" scroll-left="900" @scroll="scroll" show-scrollbar="false">
			<view class="scrollitem">
				<template v-for="item,index in list.slice(0,5)" :key="index">
					<swiper-course :item="item"></swiper-course>
				</template>
			</view>
			<!-- <view class="scrollitem">
				<template v-for="item,index in list.slice(5,9)" :key="index">
					<swiper-course :item="item"></swiper-course>
				</template>
			</view> -->
		</scroll-view>

		<!-- 近期上新 -->
		<titles>
			<template v-slot:aaa>
				近期上新
			</template>
			<template v-slot:hot>
				NEW
			</template>
		</titles>
		<!-- 列表 -->
		<scroll-view scroll-x="true" class="recentbox">
			<view class="recentitem">
				<squarelist v-for="(item,index) in recentlist" :key="index" :item="item"></squarelist> 
			</view>
		</scroll-view>
		
		<!-- 免费精选 -->
		<titles>
			<template v-slot:aaa>
				免费精选
			</template>
			<template v-slot:hot>
				FREE
			</template>
		</titles>		
		<scroll-view scroll-x="true" class="scrollbox" scroll-left="900" @scroll="scroll" show-scrollbar="false">
			<view class="scrollitem">
				<template v-for="item,index in freeslist.slice(0,5)" :key="index">
					<swiper-course :item="item"></swiper-course>
				</template>
			</view>
		</scroll-view>
		
		<!-- 付费精品 -->
		<titles>
			<template v-slot:aaa>
				付费精品
			</template>
			<template v-slot:hot>
				NICE
			</template>
		</titles>	
	</view>
</template>

<script>
	import {
		reactive,
		toRefs,
		ref
	} from 'vue';
	import {
		fenglei,
		detail,
		recent,
		frees
	} from '@/api/api.js'
	export default {
		setup() {
			let data = reactive({
				autoplay: 0,
				str: '#45328c',
				assort: [], // 分类的图片
				list: [],
				deatilpage: {
					current: 1,
					size: 10
				},
				recentpage: {
					current: 1,
					size: 10
				},
				recentlist: [],
				freespage:{
					current:1,
					size:10
				},
				freeslist:[]
			})
			let changeAutoplay = (e) => {
				data.autoplay = e.detail.current
				if (data.autoplay == 0) {
					data.str = '#45328c'
				} else if (data.autoplay == 1) {
					data.str = '#006c00'
				} else {
					data.str = '#0072b7'
				}
			}
			fenglei().then((res) => {
				// console.log(res);
				data.assort = res.data.data
			})
			detail({
				current: data.deatilpage.current,
				size: data.deatilpage.size
			}).then(res => {
				// console.log(res);
				data.list = res.data.data.records
			})
			recent({
				current: data.recentpage.current,
				size: data.recentpage.size
			}).then(res => {
				// console.log(res);
				data.recentlist = res.data.data.records
			})			
			frees({
				current: data.freespage.current,
				size: data.freespage.size
			}).then(res => {
				console.log(res);
				data.freeslist = res.data.data.records
			})
			return {
				...toRefs(data),
				changeAutoplay,
				scroll
			}
		}
	}
</script>

<style lang="scss">
	.recentitem{
		display: flex;
		padding: 0 0 0 20rpx;
	}
	.recentbox {
		width: 100%;
		height: 350rpx;
		margin-bottom: 80rpx;
	}

	.scrollitem {
		display: flex;
		flex-direction: column;
		// width: 100%;
		// padding: 0 20rpx;
		// border-bottom: 1rpx solid #F1F1F1;
		// margin-bottom: 20rpx;
	}

	.scrollbox {
		width: 100%;
		height: 920rpx;
		margin-bottom: 30rpx;
		white-space: nowrap;
		display: flex;
		// flex-direction: row;
	}

	.classify {
		width: 100%;
		height: 170rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		box-sizing: border-box;
		padding: 10rpx 0 0;
		margin-bottom: 15rpx;

		// align-items: center;
		.classitem {
			width: 170rpx;
			height: 70rpx;
			background-color: #f8f9fb;
			text-align: center;
			line-height: 70rpx;
			border-radius: 20rpx;
		}
	}

	.img::v-deep {
		width: 100%;
		height: 320rpx;
		border-radius: 20rpx;
	}

	.swiperbox {
		width: 100%;
		height: 360rpx;
		padding: 20rpx;
		box-sizing: border-box;
		background: -webkit-linear-gradient(#45328c, #f5f4f9);
		margin-top: 88rpx;

		>swiper-item {
			width: 100%;
			height: 100%;
		}
	}

	.container {
		font-size: 14rpx;
		line-height: 24rpx;
		background-color: white;
	}
</style>
