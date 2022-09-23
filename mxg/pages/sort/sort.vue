<template>
	<view class="sort">
		<view class="top">
			<span>分类</span>
			<span class="iconfont icon-search"></span>
		</view>
		<view class="main">
			<view class="left">
				<scroll-view scroll-y>
					<view v-for="item,index in list" :key="index" @click="change(index)"
						:class="{changes:activeindex==index}">{{item.name}}</view>
				</scroll-view>
			</view>
			<view class="right">
				<view class="rightitem">
					<view v-for="item,index in flist" :key="index">{{item.name}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		slist
	} from '@/api/api.js'
	import {
		reactive,
		toRefs,
		ref
	} from 'vue';
	export default {
		setup() {
			let data = reactive({
				list: [],
				activeindex: 0,
				flist: []
			})
			slist().then(res => {
				console.log(res);
				data.list = res.data.data
				// console.log(data.list[0].labelList);
				data.flist = data.list[data.activeindex].labelList
			})
			let change = (e) => {
				data.activeindex = e
				data.flist = data.list[data.activeindex].labelList
			}
			return {
				...toRefs(data),
				change
			}
		}
	}
</script>

<style lang="scss">
	.main {
		width: 100%;
		height: 86vh;
		display: flex;
		justify-content: space-between;

		.left {
			background-color: #f8f9fb;

			view {
				// margin: 50rpx 0;
				text-align: center;
				width: 130rpx;
				padding: 0 30rpx;
				margin-top: 96rpx;
				color: #9f9f9f;
			}
		}

		.right {
			width: 100%;
			padding: 10rpx 0 0 0;
			.rightitem {
				width: 100%;
				height: 200rpx;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-around;
				align-items: center;

				>view {
					border: 1rpx solid #d2d2d2;
					border-radius: 50rpx;
					text-align: center;
					padding: 10rpx;
					width: 140rpx;
					height: 40rpx;
					font-size: 15rpx;
				}
			}
		}
	}

	.changes {
		color: #345dc2 !important;
		border-left: 5rpx solid #345dc2;
	}

	.top {
		width: 100%;
		height: 90rpx;
		background-color: #345dc2;
		color: #fff;
		text-align: center;
		line-height: 90rpx;
		position: relative;

		span:first-of-type {
			font-weight: 700;
		}

		span:last-of-type {
			position: absolute;
			top: 5rpx;
			right: 8rpx;
			// float: right;
			// margin-right: 10rpx;
		}
	}

	.sort {
		width: 100%;
		// height: 100vh;
		background-color: #fff;
	}
</style>
