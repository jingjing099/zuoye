<template>
	<div>
		<div class="aside-header">
			<img src="/icon.png" alt="" />
			<p v-if="!isCollapse">OA管理系统</p>
			<i class="el-icon-s-fold fold" @click="to"></i>
		</div>
		<el-menu
			:default-active="$route.path"
			class="el-menu-vertical-demo"
			@open="handleOpen"
			@close="handleClose"
			background-color="#7aabf6"
			text-color="#fff"
			align="left"
			router
			:collapse="isCollapse"
			unique-opened
		>
			<template v-for="item in menuData">
				<el-submenu v-if="item.isDir" :index="item.path" :key="item.id">
					<template v-slot:title>
						<i :class="item.icon"></i>
						<span>{{ item.name }}</span>
					</template>

					<el-menu-item v-for="child in item.children" :index="child.path" :key="child.id">{{
						child.name
					}}</el-menu-item>
				</el-submenu>

				<el-menu-item v-else :index="item.path" :key="item.id">
					<i :class="item.icon"></i>
					<span slot="title">{{ item.name }}</span>
				</el-menu-item>
			</template>
		</el-menu>
	</div>
</template>

<script>
// import { getMenu } from '../untils/api'

import { getMenu } from '../../api/api'
export default {
	name: 'MyAside',
	components: {},
	data() {
		return {
			isCollapse: false,
			menuData: []
		}
	},
	methods: {
		to() {
			this.isCollapse= !this.isCollapse
			this.$emit('to',this.isCollapse)
		},
		handleOpen() {
			// console.log(key, keyPath)
		},
		handleClose() {
			// console.log(key, keyPath)
		}
	},
	computed: {},
	created() {
		getMenu().then((res) => {
			console.log(res.data.menuData)
			this.menuData = res.data.menuData
		})
	},
	mounted() {}
}
</script>
<style scoped lang="scss">
.aside-header {
	position: relative;
	display: flex;
	align-items: center;
	padding: 20px;
	img {
		width: 36px;
		height: 36px;
		margin-left: -5px;
	}
	p {
		font-size: 20px;
		margin-left: 10px;
		color: #fff;
	}
	i {
		position: absolute;
		top: 20px;
		right: -40px;
		z-index: 90;
		font-size: 28px;
		color: #bbb;
	}
}
.el-menu-item.is-active {
	color: #fff !important;
	background-color: #ffd04b !important;
}

.el-menu-item,
.el-submenu__title {
	i {
		color: #fff;
	}
}
::v-deep .el-submenu__icon-arrow {
	color: #fff;
}
</style>
