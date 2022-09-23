<template>
	<view class="course-item">
		<div class="left">
			<h3>{{item.title}}</h3>
			<p>{{item.summary}}</p>
			<div>
				<span>{{item.nickName}}</span>
				<span>&nbsp;·&nbsp;{{item.updateDate}}&nbsp;·&nbsp;</span>
				<span>{{item.viewCount}}赞</span>
			</div>
		</div>
		<div class="right">
			<img :src="item.imageUrl" alt="">
		</div>
	</view>
</template>

<script>
	export default {
		name: "swiperlist",
		props:['item'],
		setup() {
		}
	}
</script>

<style lang="scss">
	.course-item{
		width: 100%;
		box-sizing: border-box;
		padding: 20rpx;
		display: flex;
		justify-content: space-around;
		align-items: top;
		.left{
			width: 60%;
			p{
				font-size: 28rpx;
				color: #9c9c9c;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				margin: 20rpx 0;
			}
			div{
				font-size: 28rpx;
				span:first-of-type{
					color: #222222;
				}
				span:nth-of-type(2){
					color: #9c9c9c;
				}
				span:nth-of-type(3){
					color: #9c9c9c;
				}
			}
		}
		.right{
			height: 40%;
			img{
				width: 200rpx;
				height: 130rpx;
				border-radius: 20rpx;
			}
		}
	}
</style>
