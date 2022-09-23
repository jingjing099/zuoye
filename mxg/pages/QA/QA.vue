<template>
	<view class="QA">
		<!-- 搜索框 -->
		<searchbox></searchbox>
		<div class="header">
			<div v-for="item,index in arr" :key="index" @click="change(index)">
				<p :class="{bot1:index==activeindex}">{{item}}</p>
				<p :class="{bot:index==activeindex}"></p>
			</div>
		</div>
		<view class="main">
			<QAlist v-for="item,index in popularlist" :key="index" :item="item" v-if="activeindex==0"></QAlist>
			<QAlist v-for="item,index in prolist" :key="index" :item="item" v-if="activeindex==1"></QAlist>
			<QAlist v-for="item,index in waitlist" :key="index" :item="item" v-if="activeindex==2"></QAlist>
		</view>
		<totop v-if="topscroll>800"></totop>
	</view>
</template>

<script>
	import {
		popular,
		problem,
		wait
	} from '@/api/api.js'
	import {
		reactive,
		toRefs
	} from 'vue'
	export default {
		setup() {
			let data = reactive({
				arr: [
					'热门回答', '最新问题', '等待回答'
				],
				activeindex: 0,
				popularpage: {
					current: 1,
					size: 10
				},
				popularlist: [],
				propage: {
					current: 1,
					size: 10
				},
				prolist: [],
				waitpage: {
					current: 1,
					size: 10
				},
				waitlist: [],
				topscroll:0
			})
			let change = (e) => {
				data.activeindex = e
				if (data.activeindex == 0) {
					getData()
				} else if (data.activeindex == 1) {
					getpro()
				} else {
					getwait()
				}
			}
			let getData = () => {
				popular({
					current: data.popularpage.current,
					size: data.popularpage.size
				}).then(res => {
					// console.log(res);
					if(data.popularpage.current==1){
					data.popularlist = res.data.data.records
					}else{						
						data.popularlist = [...data.popularlist,...res.data.data.records]
					}
				})
			}
			let getpro = () => {
				problem({
					current: data.propage.current,
					size: data.propage.size
				}).then(res => {
					// console.log(res);
					if(data.popularpage.current==1){
					data.prolist = res.data.data.records
					}else{						
						data.prolist = [...data.prolist,...res.data.data.records]
					}
				})
			}
			let getwait = () => {
				wait({
					current: data.waitpage.current,
					size: data.waitpage.size
				}).then(res => {
					// console.log(res);
					if(data.popularpage.current==1){
					data.waitlist=res.data.data.records
					}else{						
						data.waitlist = [...data.waitlist,...res.data.data.records]
					}
				})
			}
			return {
				...toRefs(data),
				change,
				getData,
				getpro,
				getwait
			}
		},
		onLoad() {
			if (this.activeindex == 0) {
				this.getData()
			} else if (this.activeindex == 1) {
				this.getpro()
			} else {
				this.getwait()
			}
		},
		onReachBottom() {
			if (this.activeindex == 0) {
				this.popularpage.current++
				this.getData()
			} else if (this.activeindex == 1) {
				this.propage.current++
				this.getpro()
			} else {
				this.waitpage.current++
				this.getwait()
			}
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

	.bot1 {
		color: #047cff;
	}

	.bot {
		width: 70rpx;
		height: 4rpx;
		background-color: #047cff;
		margin: 0 auto;
	}

	.header {
		width: 100%;
		height: 100rpx;
		font-size: 30rpx;
		background-color: #fff;
		display: flex;
		justify-content: space-around;
		border: 1rpx solid #ccc;
		position: fixed;
		top: 90rpx;
		left: 0;

		>div {
			p:first-of-type {
				margin-top: 30rpx;
				margin-bottom: 20rpx;
			}
		}
	}

	.QA {
		width: 100%;
		height: 100%;
		background-color: #fff;
	}
</style>
