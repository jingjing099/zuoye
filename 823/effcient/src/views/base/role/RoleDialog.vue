<template>
	<div>
		<el-dialog :title="flag == 1 ? '新增用户' : flag == 2 ? '修改用户' : '用户详情'" :visible.sync="dialogVisible" width="50%" label-position="right">
			<el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px">
				<el-form-item label="角色名称" prop="name">
					<el-input v-model="ruleForm.name"></el-input>
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
import { getRoles } from '../../../../api/api'
export default {
	components: {},
	data() {
		return {
			ruleForm: {
				name: '',
				comment: ''
			},
			rules: {},
			dialogVisible: false,
			flag:1
		}
	},
	methods: {
	/* 修改 */
	handleEdit(row){
		this.flag=2
		this.dialogVisible=true
		this.ruleForm=row
	},
	/* 新增 */
	init(){
		this.flag=1
		this.dialogVisible=true
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
