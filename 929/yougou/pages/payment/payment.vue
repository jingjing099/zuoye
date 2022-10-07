<template>
	<view>
		<!-- 收货地址 -->
		<view class="address-box">
			<view>
				<text>韩甜甜</text>
				<text>185****2632</text>
			</view>
			<view>河南省新乡市获嘉县</view>
		</view>
		<!-- 头部 -->
		<view class="title">
			付款
		</view>
		<!-- 主体部分 -->
		<view class="car_box">
			<view class="car_item" v-for="(item,index) in goods" :key="index">
				<view class="left">
					<u-checkbox v-model="item.status" @change="ck(index)" />
				</view>
				<view class="img">
					<image :src="item.url" mode=""></image>
				</view>
				<view class="right">
					<view class="name">{{item.name}}</view>
					<view class="price">￥{{item.price}}</view>
					<view>
						<u-number-box v-model="item.number" :min="1" @change.prevent="valChange(item.number,index)"></u-number-box>
					</view>
				</view>
			</view>
		</view>
		<!-- 尾部 -->
		<view class="footer">
			<view class="checked">
				<u-checkbox v-model="checkedall" @change="cks" />
			</view>
			<view>
				<view>合计:{{num}}</view>
				<view>免运费</view>
			</view>
			<view class="btn">付款({{nums}})</view>
		</view>
	</view>
</template>

<script lang="ts">
	import {
		reactive,
		toRefs,
		computed
	} from "vue"
	export default {
		setup() {
			const data = reactive({
				goods: [],
				checkedall: false,
				num: 0,
				nums:0
			})
			// 总价
			data.num = computed(() => {
				let sum = 0
				data.goods.forEach(item => {
					if(item.status) {
						sum += item.price * item.number
					}
				})
				return sum
			})
			// 总数
			data.nums = computed(() => {
				let sum = 0
				data.goods.forEach(item => {
					if(item.status) {
						sum += item.number
					}
				})
				return sum
			})
			// 反选
			const ck = (index) => {
				data.goods[index].status = !data.goods[index].status
				data.checkedall = data.goods.every(item => item.status)

			}
			// 全选
			const cks = () => {
				data.checkedall = !data.checkedall
				data.goods.forEach(item => {
					item.status = data.checkedall
				})
			}
			// 数量加加
			const valChange = (val:number,index: number) => {
				data.goods[index].number=val
				uni.setStorage({
					key: 'goods',
					data: JSON.stringify(data.goods)
				})
			}

			return {
				ck,
				cks,
				...toRefs(data),
				valChange
			}
		},
		onShow() {
			uni.getStorage({
				key: 'goods',
				success: (res) => {
					this.goods = JSON.parse(res.data)
				}
			})
		}
	}
</script>

<style lang="scss">
	.address-box{
		padding: 20rpx;
		view{
			display: flex;
			justify-content: space-between;
			margin: 10rpx 0;
		}
	}
	.footer {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 80rpx;
		background-color: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		text-align: center;

		.btn {
			background-color: #c00;
			width: 200rpx;
			height: 100%;
			line-height: 80rpx;
			color: white;
		}

		.checked {
			width: 380rpx;
			text-align: left;
			padding-left: 20rpx;
		}
	}

	.car_box {
		padding: 20rpx;
		box-sizing: border-box;

		.car_item {
			display: flex;
			justify-content: space-between;
			height: 180rpx;
			align-items: center;
			margin: 20rpx 0;

			.left {
				width: 10%;
			}

			.img {
				width: 30%;
				height: 100%;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.right {
				width: 55%;

				.name {
					width: 100%;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}

				.price {
					color: #c00;
					margin: 10rpx 0;
				}
			}
		}
	}

	.title {
		padding: 0 20rpx;
		height: 80rpx;
		line-height: 80rpx;
		font-weight: 600;
		border: 1px solid #ccc;
		color: #c00;
	}
</style>
