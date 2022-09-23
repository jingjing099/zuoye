<template>
	<view>
		<view class="top" @click="btntop">
			<view class="iconfont icon-huidaodingbu1"></view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "totop",
		setup() {

			let btntop = () => {
				uni.pageScrollTo({
					top: 0
				})
			}
			return {btntop}
		}
	}
</script>

<style>
	.top {
		width: 90rpx;
		height: 90rpx;
		color: #fff;
		background-color: rgba(0, 0, 0, 0.3);
		position: fixed;
		right: 30rpx;
		bottom: 200rpx;
		border-radius: 50%;
		text-align: center;
		line-height: 90rpx;

		>view {
			font-size: 26px;
		}
	}
</style>
