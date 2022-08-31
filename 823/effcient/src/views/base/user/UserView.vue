<template>
	<div>
		<!-- 姓名   所属部门   手机号 -->
		<div class="user-top">
			<ul>
				<li>姓名: <el-input v-model="name" placeholder="请输入姓名"></el-input></li>
				<li>所属部门 <el-input v-model="phone" placeholder="请输入部门"></el-input></li>
				<li>手机号 <el-input v-model="department" placeholder="请输入手机号"></el-input></li>
			</ul>
		</div>
		<!-- 查询重置     新增用户 -->
		<div class="user-center">
			<div>
				<el-button icon="el-icon-search"> 查询</el-button>
				<el-button icon="el-icon-refresh-right"> 重置</el-button>
			</div>
			<el-button class="added" type="primary" icon="el-icon-circle-plus-outline" @click="add"
				>新增用户</el-button
			>
		</div>
		<!-- 表格 -->
		<template>
			<el-table :data="tableData" border style="width: 100%" stripe>
				<el-table-column prop="id" label="id" width="55"> </el-table-column>
				<el-table-column prop="username" label="用户名称"> </el-table-column>
				<el-table-column prop="account" label="账号"> </el-table-column>
				<el-table-column prop="phone" label="手机号"> </el-table-column>
				<el-table-column prop="role_name" label="所属角色"> </el-table-column>
				<el-table-column prop="rank_name" label="所属职级"> </el-table-column>
				<el-table-column prop="dep_name" label="所属部门"> </el-table-column>
				<el-table-column label="操作">
					<template v-slot="scope">
						<el-button size="mini" type="info" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
						<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
						<el-button size="mini" @click="details(scope.$index, scope.row)">详情</el-button>
					</template>
				</el-table-column>
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
			:total="this.tableData.length"
			align="right"
		>
		</el-pagination>
		<!-- 新增对话框 -->
		<!-- <UserDialog :dialogFormVisible="dialogFormVisible" @close="dialogFormVisible = false"> </UserDialog> -->
		<UserDialog v-if="dialogFormVisible" ref="Dialog" @close="close"> </UserDialog>
	</div>
</template>

<script>
import UserDialog from './UserDialog'
// import { getUsers } from '../untils/api'

import { getUsers } from '../../../../api/api'
export default {
	name: 'UserView',
	components: {
		UserDialog
	},
	data() {
		return {
			/* 姓名 */
			name: '',
			/* 手机号 */
			phone: '',
			/* 部门 */
			department: '',
			tableData: [],
			currentPage: 1,
			pagesize: 1,
			dialogFormVisible: false,
			/* 1 新增  2修改  3详情 */
			flag: 1
		}
	},
	methods: {
		// 新增
		add(){
			this.flag=2
			this.dialogFormVisible=true
			this.$nextTick(()=>{
				this.$refs.Dialog.init()
			})
		},
		/* 删除 */
		handleDelete(index, row) {
			console.log(index, row)
		},
		/* 修改 */
		handleEdit(index,row){
			this.flag=1
			this.
		},

		/* 详情 */
		details(index, row) {
			// console.log(index, row)
			this.flag = 3
			this.dialogVisible = true
			this.ruleForm = row
		},

		handleSizeChange(val) {
			// console.log(`每页 ${val} 条`)
			this.pagesize = val
		},
		handleCurrentChange(val) {
			// console.log(`当前页: ${val}`)
			this.currentPage = val
		},
		getusers() {
			getUsers().then((res) => {
				console.log(res.data.userData)
				this.tableData = res.data.userData
			})
		},
		close(){}
	},
	computed: {},
	created() {
		this.getusers()
	},
	mounted() {}
}
</script>
<style scoped lang="scss">
.user-top {
	ul {
		display: flex;
		justify-content: space-between;
		li {
			width: 30%;
			text-align: left;
		}
	}
}
.user-center {
	display: flex;
	justify-content: space-between;
	margin: 25px 0;
	.added {
		margin-right: 150px;
	}
}
.el-select {
	width: 400px;
}
.el-input {
	width: 400px;
}
</style>
