<template>
	<view class="read">
		<!-- 搜索 -->
		<searchbox></searchbox>
		<!-- 标签 -->
		<view class="top">
			<scroll-view scroll-x="true" :show-scrollbar="false">
				<view v-for="item,index in toplist" :key="index" class="scrollitem" @click="change(item,index)"
					:class="{changes:activeindex==index}">{{item.name}}</view>
			</scroll-view>
		</view>
		<view class="main">
			<scroll-view scroll-y="true" v-if="activeindex==0">
				<swiperlist v-for="item,index in recommendlist" :key="index" :item="item"></swiperlist>
			</scroll-view>
			<scroll-view scroll-y="true" v-if="activeindex!=0">
				<swiperlist v-for="item,index in itemizes" :key="index" :item="item"></swiperlist>
			</scroll-view>
		</view>
		<totop v-if="topscroll>800"></totop>
	</view>
</template>

<script>
	import {
		reads,
		recommend,
		itemize
	} from '@/api/api.js'
	import {
		reactive,
		ref,
		toRefs
	} from 'vue'
	export default {
		setup() {
			let data = reactive({
				toplist: [],
				activeindex: 0,
				current: 1,
				size: 10,
				recommendlist: [],
				categoryId: 1,
				itemizes: [],
				topscroll: 0,
				currents: 1
			})
			reads().then(res => {
				data.toplist = res.data.data
				data.toplist.unshift({
					id: 0,
					name: '推荐'
				})
			})
			let change = (id, e) => {
				data.activeindex = e
				data.categoryId = id.id
				getsort()
				// console.log(id.id);
			}
			let getData = () => {
				recommend({
					current: data.current,
					size: data.size
				}).then(res => {
					console.log(res);
					if (data.current == 1) {
						data.recommendlist = res.data.data.records
					} else {
						data.recommendlist = [...data.recommendlist, ...res.data.data.records]
					}
					console.log(data.recommendlist);
				})
			}
			let getsort = () => {
				itemize({
					categoryId: data.categoryId,
					current: data.currents,
					size: data.size
				}).then(res => {
					console.log(res);
					if (data.currents == 1) {
						data.itemizes = res.data.data.records
					} else {
						data.itemizes = [...data.itemizes, ...res.data.data.records]
					}
				})
			}
			return {
				...toRefs(data),
				change,
				getData,
				getsort
			}
		},
		onLoad() {
			this.getData()
			this.getsort()
		},
		onReachBottom() {
			this.current++
			this.getData()
			this.currents++
			this.getsort()

		},
		onPageScroll(e) {
			// console.log(e);
			this.topscroll = e.scrollTop
		}
	}
</script>

<style lang="scss">
	.main {
		margin-top: 100rpx;
	}

	.top {
		width: 100%;
		white-space: nowrap;
		border: 1rpx solid #ccc;
		position: fixed;
		top: 90rpx;
		left: 0;
		background-color: #Fff;
		z-index: 999;

		scroll-view ::-webkit-scrollbar {
			display: none;
			width: 0;
			height: 0;
			color: transparent;
		}

		scroll-view {
			width: 100%;
			height: 100rpx;
			line-height: 88rpx;

			.scrollitem {
				display: inline-block;
				margin: 0 20rpx;
				// padding: 10rpx 0;
			}
		}
	}

	.changes {
		border-bottom: 4rpx solid #345dc2;
		color: #345dc2;
	}

	.read {
		width: 100%;
		height: 100%;
		background-color: #fff;
		position: relative;
	}
</style>
