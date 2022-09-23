<template>
	<view class="searchmylist">
		{{item}}
	</view>
</template>

<script>
	export default {
		name:"searchmylist",
		props:['item'],
		setup() {
			
		}
	}
</script>

<style>
.searchmylist{
	padding: 10rpx;
	border: 1rpx solid #bebebe;
	border-radius: 10rpx;
	color: #9b9a99;
	font-size: 30rpx;
	margin-right: 20rpx;
	margin-bottom: 25rpx;
}
</style>