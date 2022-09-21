<template>
	<!-- <view class="course-item" v-for="item,index in list" :key="index"> -->
	<view class="course-item">
		<view class="item-left">
			<image class="course-img" :src="item.mainImage" lazy-load>
			</image>
			<!--时长00:59:59-->
			<view class="course-time">
				{{item.totalTime}}
			</view>
		</view>
		<view class="item-right column">
			<view class="title">{{item.title}}</view>
			<view class="info">
				<view class="nickname iconfont icon-laoshi2">{{item.nickName}}</view>
				<view class="count">
					<view v-if="item.isFree" class="money">免费</view>
					<!--如果有优惠价显示优惠价，否则原价-->
					<view v-else class="money iconfont icon-moneybag">{{item.priceDiscount
	||item.priceOriginal}}</view>
					<view class="iconfont icon-video">{{item.studyTotal}}人在学</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	// import {detail} from '@/api/api.js'
	// import {reactive,toRefs,ref} from 'vue';
	export default {
		name: "swiper-course",
		props:['item'],
		setup() {
			// let data=reactive({
			// 	list:[],
			// 	current:1,
			// 	size:10
			// })
			// detail({current:data.current,size:data.size}).then(res => {
			// 	console.log(res);
			// 	data.list = res.data.data.records
			// })
			// return {...toRefs(data)}
		}
	}
</script>

<style lang="scss">
	.course-item {
		//默认横向布局
		display: flex;
		//纵向布局
		//flex-direction:column;
		width: 100%;
		padding: 0 20rpx ;
		border-bottom: 1rpx solid #F1F1F1;
		margin-bottom: 20rpx;

		.item-left {
			//针对图上时长
			position: relative;
			width: 290rpx;
			height: 160rpx;
			margin-right: 20rpx;

			.course-img {
				width: 290rpx;
				height:
					160rpx;
				border-radius:
					10rpx;
			}

			//时长
			.course-time {
				position: absolute;
				background: rgba(51, 51, 51, 0.4);
				color: #FFFFFF;
				font-size: 22rpx;
				border-radius: 20rpx;
				bottom: 5rpx;
				right: 5rpx;
				padding:
					06rpx;
			}
		}

		.item-right {
			justify-content: space-between;
			height: 160rpx;
			padding-top: 5rpx;
			padding-left: 5rpx;

			.title {
				max-width: 365rpx;
				height: 70rpx;
				line-height: 35rpx;
				font-size: 28rpx;
				font-weight: bold;
				//显示两行，超出部分用...代替
				overflow: hidden; //超出隐藏
				text-overflow: ellipsis; //超出部分显示省略号
				-webkit-line-clamp: 2; //设置显示的行数
				display: -webkit-box; //将对象作为弹性伸缩盒子模型显示
				-webkit-box-orient: vertical; //设置或检索伸缩盒对象的子元素的排列方式纵向
				white-space: normal; //空白会被浏览器忽略
				margin-bottom: 15rpx;
			}

			.info {
				.nickname {
					font-size: 23rpx;
					color: #999;
					margin-bottom: 5rpx;
				}

				.count {
					display: flex;
					align-items: center;

					.iconfont {
						font-size: 23rpx;
						color: #222222;
					}

					.money {
						width: 130rpx;
						color: $mxg-color-orange;
						font-size: 28rpx;
						padding-right: 30rpx;
						align-self: flex-end;
					}
				}
			}
		}
	}
</style>
