<template>
	<div>
		<div class="loginoper-top">
			<div>账号名称 <el-input v-model="name" placeholder="请输入姓名"></el-input></div>
			<el-time-picker
				v-model="value1"
				:picker-options="{
					selectableRange: '18:30:00 - 20:30:00'
				}"
			>
			</el-time-picker>
		</div>
		<div class="loginoper-btn">
			<el-button icon="el-icon-search"> 查询</el-button>
			<el-button icon="el-icon-refresh-right"> 重置</el-button>
		</div>
		<!-- 表格 -->
		<template>
			<el-table :data="tableData" border style="width: 100%" stripe>
				<el-table-column prop="id" label="id"> </el-table-column>
				<el-table-column prop="ip" label="登录IP"> </el-table-column>
				<el-table-column prop="account" label="账号名称"> </el-table-column>
				<el-table-column prop="system" label="登录设备"> </el-table-column>
				<el-table-column prop="places" label="登陆地点"> </el-table-column>
				<el-table-column prop="times" label="登录时间"> </el-table-column>
			</el-table>
		</template>
		<!-- 分页 -->
		<el-pagination
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange"
			:current-page="currentPage"
			:page-sizes="[1, 2, 3, 5]"
			:page-size="pagesize"
			layout="total, sizes, prev, pager, next, jumper"
			:total="0"
			align="right"
		>
		</el-pagination>
	</div>
</template>

<script>
import { getLoginslogs } from '../../../../api/api'

export default {
	name: 'LoginOperView',
	components: {},
	data() {
		return {
			name: '',
			tableData: [],
			currentPage: 1,
			pagesize: 1,
			value1: new Date(2016, 9, 10, 18, 40)
		}
	},
	methods: {
		handleSizeChange(val) {
			// console.log(`每页 ${val} 条`)
			this.pagesize = val
		},
		handleCurrentChange(val) {
			// console.log(`当前页: ${val}`)
			this.currentPage = val
		}
	},
	computed: {},
	created() {
		getLoginslogs().then((res) => {
			console.log(res.data.loginslogsData)
			this.tableData = res.data.loginslogsData
		})
	},
	mounted() {}
}
</script>
<style scoped lang="scss">
//第一行
.loginoper-top,
.loginoper-btn {
	display: flex;
	margin-bottom: 20px;
	.el-input {
		width: 400px;
		margin-right: 10px;
	}
}
</style>
