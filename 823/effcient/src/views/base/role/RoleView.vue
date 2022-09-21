<template>
	<div>
		<div class="role-top">
			<div>角色名称 <el-input v-model="name" placeholder="请输入姓名"></el-input></div>
			<el-button icon="el-icon-search"> 查询</el-button>
			<el-button icon="el-icon-refresh-right"> 重置</el-button>
			<el-button class="added" type="primary" icon="el-icon-circle-plus-outline" @click="add">新增用户</el-button>
		</div>
		<!-- 表格 -->
		<template>
			<el-table :data="tableData" border style="width: 100%" stripe>
				<el-table-column prop="id" label="id" width="55"> </el-table-column>
				<el-table-column prop="name" label="角色名称"> </el-table-column>
				<el-table-column prop="comment" label="备注"> </el-table-column>
				<el-table-column label="操作">
					<template v-slot="scope">
						<el-button size="mini" type="info" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
						<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
			:total="0"
			align="right"
		>
		</el-pagination>
		<!-- 新增角色对话框 -->
		<RoleDialog v-if="dialogVisible" ref="visible"></RoleDialog>
	</div>
</template>

<script>
// import {  } from '../untils/api'
import RoleDialog from './RoleDialog.vue'
import { getRoles } from '../../../../api/api'
export default {
	name: 'RoleView',
	components: {
		RoleDialog
	},
	data() {
		return {
			name: '',
			tableData: [],
			currentPage: 1,
			pagesize: 1,
			dialogVisible: false,
			flag: 1
		}
	},
	methods: {
		// 修改
		handleEdit(index,row){
			this.flag=2
			this.dialogVisible=true
			this.$nextTick(()=>{
				this.$refs.visible.handleEdit(row)
			})
		},
		// 新增
		add() {
			// this.flag = 1
			this.dialogVisible = true
			console.log(123);
			this.$nextTick(() => {
				this.$refs.visible.init()
			})
		},
		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					alert('submit!')
				} else {
					console.log('error submit!!')
					return false
				}
			})
		},
		resetForm(formName) {
			this.$refs[formName].resetFields()
		},
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
		getRoles().then((res) => {
			console.log(res.data.rolesData)
			this.tableData = res.data.rolesData
		})
	},
	mounted() {}
}
</script>
<style scoped lang="scss">
//第一行
.role-top {
	display: flex;
	margin-bottom: 20px;
	.el-input {
		width: 400px;
		margin-right: 10px;
	}
}
</style>
