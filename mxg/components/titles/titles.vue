<template>
	<view>
		<view class="top">
			<view class="left">
				<text>
					<slot name="aaa">
					</slot>
				</text>
				<view class="hot">
					<slot name="hot">
					</slot></view>
			</view>
			<text>全部></text>
		</view>
	</view>
</template>

<script>
	export default {
		name: "titles",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.top {
		width: 100%;
		height: 80rpx;
		box-sizing: border-box;
		padding: 0 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.left {
			display: flex;

			text {
				font-size: 35rpx;
			}

			.hot {
				width: 70rpx;
				height: 30rpx;
				border-radius: 50rpx 50rpx 50rpx 0rpx;
				background: -webkit-linear-gradient(top right, #fa2e25, #fb8155);
				color: white;
				text-align: center;
				line-height: 30rpx;
				margin-left: 5rpx;
			}
		}

		>text {
			color: #9ca3ab;
			font-size: 25rpx;
		}
	}
</style>
