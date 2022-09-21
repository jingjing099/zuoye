<template>
	<view>
		<view class="search-box" :style="{'background':`${str}`}">
			<!-- <input type="text" placeholder="搜索你想要的内容" class="search-input iconfont icon-search"> -->
			<view class="search-input">
				<view class="iconfont icon-search"></view>
				<view class="iconfont icon-geren"></view>
				<view>搜索你想要的内容</view>
			</view>			
		</view>
	</view>
</template>

<script>
	export default {
		name: "searchbox",
		props:['str'],
		setup() {
			
		}
	}
</script>

<style lang="scss">
	.search-box {
		position: fixed;
		left: 0;
		top: 0;
		// top: 30rpx;
		z-index: 9999;
		width: 100%;
		background-color: #0072b7;

		.search-input {
			background-color: #f8f8f8;
			height: 60rpx;
			border-radius: 50rpx;
			margin: 15rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 17rpx;
			color: #9f9d9d;
			&:first-of-type{
				margin-right: 5rpx;
			}
		}
	}
</style>
