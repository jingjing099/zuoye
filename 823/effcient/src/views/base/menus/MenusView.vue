<template>
	<div>
		<div class="menus-top">
			<div>菜单名称 <el-input v-model="name" placeholder="请输入姓名"></el-input></div>
			<el-button icon="el-icon-search"> 查询</el-button>
			<el-button icon="el-icon-refresh-right"> 重置</el-button>
			<el-button class="added" type="primary" icon="el-icon-circle-plus-outline" @click="dialogVisible = true"
				>新增菜单</el-button
			>
		</div>
		<!-- 表格 -->
		<template>
			<el-table :data="tableData" border style="width: 100%" stripe>
				<el-table-column prop="m_name" label="菜单名称"> </el-table-column>
				<el-table-column prop="m_route" label="菜单路径"> </el-table-column>
				<el-table-column prop="m_sort" label="排序"> </el-table-column>
				<el-table-column prop="icon" label="菜单图标"> </el-table-column>
				<el-table-column prop="m_typ" label="菜单类型"> </el-table-column>
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
		<!-- 新增菜单对话框 -->
		<el-dialog title="新增菜单" :visible.sync="dialogVisible" width="30%" label-position="right">
			<el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px">
				<el-form-item label="菜单类型" prop="radio">
					<el-radio-group v-model="radio">
						<el-radio :label="3">菜单</el-radio>
						<el-radio :label="6">目录</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="菜单名称" prop="m_name">
					<el-input v-model="ruleForm.m_name"></el-input>
				</el-form-item>
				<el-form-item label="菜单路径" prop="m_route">
					<el-input v-model="ruleForm.m_route"></el-input>
				</el-form-item>
				<el-form-item label="菜单图标" prop="icon">
					<el-input v-model="ruleForm.icon"></el-input>
				</el-form-item>
				<el-form-item label="上级菜单">
					<!-- <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree> -->
				</el-form-item>
				<el-form-item label="排序" prop="m_sort">
					<el-input v-model="ruleForm.m_sort"></el-input>
				</el-form-item>
				<!-- <el-cascader :options="options" :props="{ multiple: true, checkStrictly: true }" clearable></el-cascader> -->
				<el-form-item label="备注" prop="comment">
					<el-input type="textarea" v-model="ruleForm.comment"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm('ruleForm')">新增</el-button>
					<el-button @click="resetForm('ruleForm')">取消</el-button>
				</el-form-item>
			</el-form>
		</el-dialog>
	</div>
</template>

<script>
import { getMenus } from '../../../../api/api'

export default {
	name: 'MenusView',
	components: {},
	data() {
		return {
			name: '',
			tableData: [],
			currentPage: 1,
			pagesize: 1,
			ruleForm: {},
			rules: {},
			dialogVisible: false,
			radio: 3
			// data: [
			// 	{
			// 		label: '一级 1',
			// 		children: [
			// 			{
			// 				label: '二级 1-1',
			// 				children: [
			// 					{
			// 						label: '三级 1-1-1'
			// 					}
			// 				]
			// 			}
			// 		]
			// 	},
			// 	{
			// 		label: '一级 2',
			// 		children: [
			// 			{
			// 				label: '二级 2-1',
			// 				children: [
			// 					{
			// 						label: '三级 2-1-1'
			// 					}
			// 				]
			// 			},
			// 			{
			// 				label: '二级 2-2',
			// 				children: [
			// 					{
			// 						label: '三级 2-2-1'
			// 					}
			// 				]
			// 			}
			// 		]
			// 	},
			// 	{
			// 		label: '一级 3',
			// 		children: [
			// 			{
			// 				label: '二级 3-1',
			// 				children: [
			// 					{
			// 						label: '三级 3-1-1'
			// 					}
			// 				]
			// 			},
			// 			{
			// 				label: '二级 3-2',
			// 				children: [
			// 					{
			// 						label: '三级 3-2-1'
			// 					}
			// 				]
			// 			}
			// 		]
			// 	}
			// ],
			// defaultProps: {
			// 	children: 'children',
			// 	label: 'label'
			// }
		}
	},
	methods: {
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
		// handleNodeClick(data) {
		// 	console.log(data)
		// },
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
		getMenus().then((res) => {
			console.log(res.data.menusData)
			this.tableData = res.data.menusData
		})
	},
	mounted() {}
}
</script>
<style scoped lang="scss">
//第一行
.menus-top {
	display: flex;
	margin-bottom: 20px;
	.el-input {
		width: 400px;
		margin-right: 10px;
	}
}
</style>
