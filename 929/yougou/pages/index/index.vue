<template>
	<view class="content">
		<!-- 搜索框 -->
		<button>搜索</button>
	</view>
	<view class="wrap">
		<u-swiper :list="list"></u-swiper>
	</view>
</template>

<script lang="ts" setup>
	import { getSwiper } from '@/api/api.ts'
	getSwiper().then(res => {
		console.log(res);
	})
	let title: string = '你好'
</script>

<style lang="scss">

</style>
