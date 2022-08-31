<template>
	<div>
		<div class="loginoper-top">
			<div>操作人 <el-input v-model="name" placeholder="请输入姓名"></el-input></div>
			<el-time-picker
				is-range
				v-model="value1"
				range-separator="至"
				start-placeholder="开始时间"
				end-placeholder="结束时间"
				placeholder="选择时间范围"
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
				<el-table-column prop="username" label="操作人"> </el-table-column>
				<el-table-column prop="router" label="操作路径"> </el-table-column>
				<el-table-column prop="operation" label="操作动作"> </el-table-column>
				<el-table-column prop="times" label="操作时间"> </el-table-column>
			</el-table>
		</template>
		<!-- 分页 -->
		<div class="loginoper-bottom">
			<p>时间戳: {{ time }}</p>
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
	</div>
</template>

<script>
import { getLogs } from '../../../../api/api'

export default {
	name: 'OperView',
	components: {},
	data() {
		return {
			name: '',
			tableData: [],
			currentPage: 1,
			pagesize: 1,
			value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
			time: ''
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
		getLogs().then((res) => {
			console.log(res.data.logsData)
			this.tableData = res.data.logsData
		})
		setInterval(() => {
			this.time = new Date().toLocaleString()
		}, 1000)
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
.loginoper-bottom {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 10px 0;
}
</style>
