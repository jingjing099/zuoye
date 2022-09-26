<template>
	<view>
		<div class="header" @click="shut">
			X
		</div>
		<view class="fir-box">
			欢迎回来！
		</view>
		<view class="tel-box">
			<view class="">
				手机号码
			</view>
			<input type="text" placeholder="请输入手机号码" v-model="moddle">
		</view>
		<view class="code-box">
			<view class="">
				验证码
			</view>
			<view class="right">
				<input type="text" placeholder="请输入手机验证码" v-model="code">
				<view class="code" @click="countdown">
					{{msg}}
				</view>
			</view>
		</view>
		<view class="login-btn" @click="login">
			登录
			<view class="judge" v-if="flag">
				{{str}}
			</view>
		</view>

		<view class="bottom">
			<view class="icon">
				v
			</view>
			<view class="text">
				请认真阅读并同意
				<a href="">《用户服务协议》</a>
				<a href="">《隐私权政策》</a>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		reactive,
		toRefs
	} from 'vue'
	export default {
		setup() {
			let data = reactive({
				call: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/,
				moddle: '',
				flag: false,
				num: 60,
				msg: '获取验证码',
				str: '请输入有效的手机号',
				code: ''
			})
			let shut = () => {
				uni.navigateBack({})
			}
			let login = () => {
				if (data.moddle == '' || !data.call.test(data.moddle)) {
					setTimeout(function fn() {
						data.flag = true
						data.str = '请输入有效的手机号'
					})
					setTimeout(function fn() {
						data.flag = false
					}, 2000)
					return
				} else {
					if (data.code == '' || data.code != '123456') {
						setTimeout(function fn() {
							data.flag = true
							data.str = '验证码输入错误'
						})
						setTimeout(function fn() {
							data.flag = false
						}, 2000)
						return
					}else{
						sessionStorage.setItem('login',data.moddle)
						uni.navigateBack({})
					}
				}
			}

			let lock = true

			let countdown = () => {
				if (data.moddle == '' || !data.call.test(data.moddle)) {
					setTimeout(function fn() {
						data.flag = true
						data.str = '手机号码格式不正确'
					})
					setTimeout(function fn() {
						data.flag = false
					}, 1000)
					return
					return
				}
				if (lock) {
					lock = false
					setTimeout(function fn() {
						data.flag = true
						data.str = '发送成功'
					})
					setTimeout(function fn() {
						data.flag = false
					}, 2000)
					let t = setInterval(function() {
						if (data.num == 0) {
							clearInterval(t)
							data.msg = '获取验证码'
							data.num = 60

							lcok = true
						} else {
							data.msg = `${data.num}s`
							data.num--
						}
					}, 1000)
				}
			}
			return {
				shut,
				login,
				countdown,
				...toRefs(data)
			}
		}
	}
</script>

<style lang="scss">
	.judge {
		width: 300rpx;
		height: 70rpx;
		line-height: 70rpx;
		background-color: rgba(0, 0, 0, 0.7);
		border-radius: 5rpx;
		color: white;
		position: absolute;
		top: -100rpx;
		left: 50%;
		margin-left: -120rpx;
		font-size: 25rpx;
	}

	.bottom {
		width: 90%;
		margin-left: 5%;
		font-size: 25rpx;
		display: flex;
		align-items: center;
		position: absolute;
		bottom: 3%;
		padding: 0 2%;
		box-sizing: border-box;
		left: 0;

		.icon {
			width: 40rpx;
			height: 40rpx;
			text-align: center;
			line-height: 40rpx;
			border-radius: 50%;
			color: white;
			background-color: #345dc2;
			margin: 0 1%;
		}
	}

	a {
		font-style: normal;
		text-decoration: none;
		color: #4ca2e8;
	}

	.header {
		width: 100%;
		height: 150rpx;
		padding: 5%;
		box-sizing: border-box;
	}

	.login-btn {
		width: 80%;
		margin-left: 10%;
		height: 90rpx;
		background-color: #345dc2;
		color: white;
		text-align: center;
		line-height: 90rpx;
		font-size: 40rpx;
		border-radius: 10rpx;
		position: relative;
	}

	.tel-box,
	.code-box {
		width: 86%;
		margin-left: 7%;
		margin-bottom: 7%;
		padding: 2% 4%;
		box-sizing: border-box;
		height: 120rpx;
		background-color: #f8f6fc;
	}

	input {
		margin: 2% 0;
	}

	.code-box {
		.right {
			width: 100%;
			display: flex;
			justify-content: space-between;

			.code {
				width: 32%;
				text-align: center;
				font-size: 25rpx;
				height: 56rpx;
				line-height: 56rpx;
				border-radius: 10rpx;
				color: white;
				background-color: #345dc2;
			}
		}
	}

	.fir-box {
		width: 100%;
		height: 160rpx;
		line-height: 160rpx;
		font-size: 50rpx;
		padding: 0 10%;
	}
</style>
