<template>
	<view>
		<div class="top">
			<span class="iconfont icon-xiazai6" @click="to"></span>
			<input type="text" class="iconfont icon-search" placeholder="搜索你想要的内容" />
			<span @click="to">取消</span>
		</div>
	</view>
</template>

<script>
	import {reactive,toRefs} from 'vue'
	export default {
		setup() {
			let data= reactive({
			})
			let to=()=>{
				uni.navigateBack({})
			}
			return {...toRefs(data),to}
		}
	}
</script>

<style lang="scss">

	.top{
		width: 100%;
		height: 80rpx;
		border-bottom: 1rpx solid #cccs;
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 0 15rpx;
		box-sizing: border-box;
		.icon-search{
			width: 70%;
			height: 60rpx;
			line-height: 60rpx;
			background-color: #f0f1f2;
			border-radius: 50rpx;
			box-sizing: border-box;
			padding-left: 10rpx;
			color: #ccccce;
			display: flex;
		}
	}
</style>
