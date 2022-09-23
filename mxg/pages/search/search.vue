<template>
	<view class="search">
		<div class="top">
			<span class="iconfont icon-xiazai6" @click="to"></span>
			<input type="text" class="iconfont icon-search" placeholder="搜索你想要的内容" />
			<span @click="to">取消</span>
		</div>
		<div class="main">
			<h3>热门搜索</h3>
			<div class="box">
				<searchmylist v-for="item,index in arr" :key="item" :item="item"></searchmylist>
			</div>
			<h3>历史搜索 <span class="right">清空</span></h3>
			<div class="bot">
				<!-- <searchmylist></searchmylist> -->
			</div>
		</div>
	</view>
</template>

<script>
	import {reactive,toRefs} from 'vue'
	export default {
		setup() {
			let data= reactive({
				arr:['java','python','vue.js','react','springboot','springcloud']
			})
			let to=()=>{
				uni.navigateBack({})
			}
			return {...toRefs(data),to}
		}
	}
</script>

<style lang="scss">
	.right{
		float: right;
		color: #a8a8a8;
	}
	.box{
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 40rpx;
	}
	.main{
		width: 100%;
		box-sizing: border-box;
		padding: 20rpx;
		h3{
			margin-bottom: 20rpx;
			font-weight: 100;
		}
	}
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
	.search {
		width: 100%;
		height: 100%;
		background-color: white;
	}
</style>
