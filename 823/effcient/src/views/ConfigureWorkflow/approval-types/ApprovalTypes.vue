<template>
	<div>
		<div class="approval-top">
			<el-button type="primary" icon="el-icon-plus" @click="dialogVisible = true">添加审批类型</el-button>
		</div>
		<!-- 表格 -->
		<template>
			<el-table :data="tableData" border style="width: 100%" stripe>
				<el-table-column prop="id" label="id"> </el-table-column>
				<el-table-column prop="type_name" label="流程名称"> </el-table-column>
				<el-table-column prop="last_modifier" label="最后修改人"> </el-table-column>
				<el-table-column prop="last_times" label="最后修改时间"> </el-table-column>
				<el-table-column label="操作">
					<template slot-scope="scope">
						<el-button size="mini" icon="el-icon-edit" type="info" @click="handleEdit(scope.$index, scope.row)"
							>编辑</el-button
						>
						<el-button size="mini" icon="el-icon-delete" type="danger" @click="handleDelete(scope.$index, scope.row)"
							>删除</el-button
						>
					</template>
				</el-table-column>
			</el-table>
		</template>
		<!-- 分页 -->
		<el-pagination background layout="prev, pager, next" :total="90" align="right"> </el-pagination>
		<!-- 添加流程对话框 -->
		<el-dialog title="添加流程类型" :visible.sync="dialogVisible" width="30%">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="类型名称" prop="name">
					<el-input v-model="ruleForm.name" placeholder="借款"></el-input>
				</el-form-item>
				<el-form-item label="类型模型" prop="region">
					<el-select v-model="ruleForm.region" placeholder="请假模板">
						<el-option label="请假模板" value="qingjia"></el-option>
						<el-option label="用户模板" value="yonghu"></el-option>
						<el-option label="借款模板" value="jiekuan"></el-option>
						<el-option label="出差模板" value="chuchai"></el-option>
						<el-option label="报销模板" value="baoxiao"></el-option>
						<el-option label="转正模板" value="zhuanzheng"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item>
					<el-button @click="resetForm('ruleForm')">取消</el-button>
					<el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
				</el-form-item>
			</el-form>
		</el-dialog>
	</div>
</template>

<script>
import { getFlowpathtype } from '../../../../api/api'
export default {
	name: 'ApprovalTypes',
	components: {},
	data() {
		return {
			tableData: [],
			dialogVisible: false,
			ruleForm: {},
			rules: {}
		}
	},
	methods: {
		// 确定
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
		//   取消
		resetForm(formName) {
			this.$refs[formName].resetFields()
		},
		handleEdit(index, row) {
			console.log(index, row)
		},
		handleDelete(index, row) {
			console.log(index, row)
		}
	},
	computed: {},
	created() {
		getFlowpathtype().then((res) => {
			console.log(res.data.flowpathtypeData)
			this.tableData = res.data.flowpathtypeData
		})
	},
	mounted() {}
}
</script>
<style scoped lang="scss">
.approval-top {
	text-align: left;
	margin: 20px 0;
}
.el-pagination {
	margin-top: 20px;
}
.el-select {
	width: 430px;
}
</style>
