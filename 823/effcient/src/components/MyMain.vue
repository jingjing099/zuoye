<template>
	<div class="body">
		<el-container>
			<el-aside :width="isCollapse ? '55px':'200px'">
				<MyAside @to="to" ></MyAside>
			</el-aside>
			<div class="content">
				<el-header>
					<MyHeader></MyHeader>
				</el-header>
				<el-main>
					<router-view></router-view>
				</el-main>
			</div>
		</el-container>
	</div>
</template>

<script>
// import HomeMain from './HomeMain'
import MyHeader from './MyHeader'
import MyAside from './MyAside'
export default {
	name: 'MyMain',
	components: {
		// HomeMain,
		MyHeader,
		MyAside
	},
	data() {
		return {
			isCollapse: false
		}
	},
	methods: {
		to(val) {
			this.isCollapse = val
		}
	},
	computed: {},
	created() {},
	mounted() {}
}
</script>
<style scoped lang="scss">
.body {
	height: 100vh;
	overflow: hidden;
}
.el-header {
	background-color: #fff;
	color: #333;
	text-align: center;
	// line-height: 60px;
	// height: 10vh;
}
.content {
	position: relative;
	flex: 1;
}
.el-aside {
	overflow: visible;
	background-color: #7aabf6;
	color: #333;
	text-align: center;
	height: 100vh;
}

.el-main {
	position: absolute;
	width: 100%;
	top: 60px;
	left: 0;
	bottom: 0;
	overflow: scroll;
	background-color: #fff;
	color: #333;
	text-align: center;
	height: 100vh;
}
</style>
