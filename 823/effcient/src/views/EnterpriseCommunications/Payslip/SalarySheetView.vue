<template>
	<div class="user">
		<div class="header">
			<div><span>姓名：</span><el-input v-model="input" placeholder="请输入内容"></el-input></div>
			<div><span>账号:</span><el-input v-model="input2" placeholder="请输入账号"></el-input></div>
			<div><span>手机号:</span><el-input v-model="input3" placeholder="请输入内容"></el-input></div>
		</div>
		<div class="top">
			<el-button icon="el-icon-search">查询</el-button>
			<el-button icon="el-icon-refresh-left">重置</el-button>
			<el-button icon="el-icon-refresh-left" type="info">下载工资条模板</el-button>
			<el-button icon="el-icon-refresh-left">上传</el-button>
			<el-button type="primary" icon="el-icon-circle-plus-outline">新增用户</el-button>
		</div>
		<!-- 表格 -->
		<el-table :data="tableData" class="table" border style="width: 80%">
			<el-table-column type="index" width="50" label="id"> </el-table-column>
			<el-table-column prop="username" label="姓名"> </el-table-column>
			<el-table-column prop="days" label="出勤"> </el-table-column>
			<el-table-column prop="miner_days" label="旷工"> </el-table-column>
			<el-table-column prop="leave_days" label="请假"> </el-table-column>
			<el-table-column prop="baseic_salary" label="基本工资"> </el-table-column>
			<el-table-column prop="post_salary" label="岗位"> </el-table-column>
			<el-table-column fixed="right" label="操作" width="260px">
				<template slot-scope="scope">
					<el-button type="primary" size="small" icon="el-icon-edit">修改</el-button>
					<el-button type="danger" size="small" icon="el-icon-delete">查看</el-button>
					<el-button size="small" icon="el-icon-more-outline">查看</el-button>
				</template>
			</el-table-column>
		</el-table>

		<!-- 新增对话框 -->
	</div>
</template>
<script>
export default {
	data() {
		return {
			input: '',
			input2: '',
			input3: '',
			tableData: [
				// {
				//   username: "", //用户账号
				//   days: "", //工作天数
				//   miner_days: "", //旷工天数
				//   leave_days: "", //请假
				//   basic_salary "", //基本工资
				//   post_salary: "" //岗位工资
				// }
			],
			dialogVisible: false,
			title: '新增用户'
		}
	},
	methods: {},
	created() {}
}
</script>
<style lang="scss" scoped>
::v-deep .table {
	margin-left: 10px;
}
.top {
	width: 100%;
	height: 60px;
	margin-left: -120px !important;
	.el-button {
		&:nth-of-type(1),
		&:nth-of-type(2) {
			margin-left: 10px;
		}
		&:last-of-type {
			margin-left: 650px;
		}
	}
}
.header {
	height: 60px;
	display: flex;
	justify-content: left;
	align-items: center;
	box-sizing: border-box;
	padding-left: 10px;
	> div {
		width: 300px;
		display: flex;
		justify-content: left;
		align-items: center;
		> span {
			width: 100px;
		}
		&:nth-of-type(1),
		&:nth-of-type(2) {
			margin-right: 20px;
		}
	}
}
.user {
	width: 1500px;
	height: 100%;
}
</style>
