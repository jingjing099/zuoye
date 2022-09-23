<template>
	<view>
		<div class="top">
			<h3>{{item.title}}</h3>
			<div class="box">
				<div>
					<span>{{item.thumhup}}&nbsp;回答&nbsp;·&nbsp;</span>
					<span>{{item.viewCount}}&nbsp;浏览</span>
				</div>
				<div>
					<span>{{item.nickName}}&nbsp;·&nbsp;</span>
					<span>{{item.updateDate}}</span>
				</div>
			</div>
		</div>
	</view>
</template>

<script>
	export default {
		name:"QAlist",
		props:['item']
	}
</script>

<style>
	h3{
		margin-bottom: 15rpx;
	}
	.box{
		display: flex;
		justify-content: space-between;
		color: #a6a6a6;
		font-size: 28rpx;
	}
.top{
	width: 100%;
	box-sizing: border-box;
	padding: 30rpx;
	border-bottom: 1rpx solid #ccc;
}
</style>