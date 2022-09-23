<template>
	<view class="body">
		<div class="my-box">
			<div class="login" @click="to">
				<div class="head"></div>
				<h2>请登录</h2>
				<p>></p>
			</div>
			<div class="my-item">
				<div class="my">
					<img src="/static/fonticon/dingdan.png" alt="">
					<div>我的订单</div>
					<p>></p>
				</div>
				<div class="my">
					<img src="/static/fonticon/chesuo.png" alt="">
					<div>我的余额</div>
					<p>></p>
				</div>
				<div class="my">
					<img src="/static/fonticon/jiangpai.png" alt="">
					<div>我的学习</div>
					<p>></p>
				</div>
			</div>
			<div class="my-item">
				<div class="my">
					<img src="/static/fonticon/shezhi.png" alt="">
					<div>设置</div>
					<p>></p>
				</div>
				<div class="my">
					<img src="/static/fonticon/labagonggao.png" alt="">
					<div>意见反馈</div>
					<p>></p>
				</div>
			</div>
			<div class="my-item">
				<div class="my">
					<img src="/static/fonticon/guanyuwomen.png" alt="">
					<div>关于我们</div>
					<p>></p>
				</div>
			</div>
		</div>
	</view>
</template>

<script>
	export default {
		setup() {
			let to=()=>{
				uni.navigateTo({
					url:'../loginView/loginView'
				})
			}
			return {to}
		}
	}
</script>

<style lang="scss">
.my-item{
	margin: 30rpx 0;
	.my{
		display: flex;
		align-items: center;
		background-color: #fff;
		padding: 25rpx;
		border-bottom: 1rpx solid #eee;
		img{
			width: 45rpx;
			height: 45rpx;
			margin: 0 20rpx;
		}
		p{
			position: absolute;
			right: 30rpx;
			font-size: 40rpx;
			color: #aaa;
		}
	}
}
.body{
	overflow: hidden;
	height: 100vh;
	background-color: #345dc2;
	.my-box{
		margin-top: 150rpx;
		background-color:#f8f9fb;
		height: 100vh;
		border-radius: 50rpx 50rpx 0 0;
		.login{
			padding: 40rpx;
			display: flex;
			align-items: center;
			background-color: #fff;
			border-radius: 50rpx 50rpx 0 0;
			
			.head{
				width: 150rpx;
				height: 150rpx;
				background-image: url('/static/images/logo-black.png');
			}
			h2{
				font: 1;
				text-align: left;
				margin-left: 20rpx;
			}
			p{
				position: absolute;
				right: 30rpx;
				font-size: 40rpx;
				color: #aaa;
			}
		}
	}
}
</style>
