<template>
	<div class="header-box">
		<div></div>
		<div class="header-right">
			<el-badge :value="12" class="item">
				<i class="el-icon-s-flag"></i>
			</el-badge>
			<el-badge :value="10" class="item" type="warning">
				<i class="el-icon-message-solid"></i>
			</el-badge>
			<el-badge :value="12" class="item" type="primary">
				<i class="el-icon-document"></i>
			</el-badge>
			<i class="el-icon-rank"></i>
			<div class="demo-type">
				<div>
					<el-avatar icon="el-icon-user-solid"></el-avatar>
				</div>
			</div>
			<el-col :span="12">
				<el-dropdown>
					<span class="el-dropdown-link"> 超级管理员 </span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>修改密码</el-dropdown-item>
						<el-dropdown-item>退出登录</el-dropdown-item>
						<el-dropdown-item>个人中心</el-dropdown-item>
						<el-dropdown-item>选择目录</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
		</div>
	</div>
</template>

<script>
export default {
	name: 'MyHeader',
	components: {},
	data() {
		return {
		}
	},
	methods: {
	},
	computed: {},
	created() {},
	mounted() {}
}
</script>
<style scoped lang="scss">
.header-box {
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
	border-bottom: 1px solid #ccc;
	.header-right {
		display: flex;
		align-items: center;
		.demo-type {
			margin: 0 20px;
		}
		i {
			margin: 0 15px;
			font-size: 22px;
			color: #9a9a9a;
		}
	}
	.fold {
		font-size: 36px;
		color: #9a9a9a;
	}
}
::v-deep .el-badge__content.is-fixed {
	position: absolute;
	top: -3px;
	right: 20px;
	transform: translateY(-50%) translateX(100%);
}
::v-deep .el-badge__content {
	border-radius: 5px;
	color: #fff;
	display: inline-block;
	font-size: 12px;
	height: 24px;
	line-height: 24px;
	padding: 0 6px;
	text-align: center;
	white-space: nowrap;
	border: 1px solid #fff;
}
</style>
