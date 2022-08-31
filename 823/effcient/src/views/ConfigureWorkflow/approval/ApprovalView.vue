<template>
	<div>
		<div class="approval-top">
			<el-button type="primary" icon="el-icon-plus" @click="dialogVisible = true">添加审批流程</el-button>
		</div>
		<!-- 表格 -->
		<template>
			<el-table :data="tableData" border style="width: 100%" stripe>
				<el-table-column prop="id" label="id"> </el-table-column>
				<el-table-column prop="process_type" label="流程名称"> </el-table-column>
				<el-table-column prop="state" label="状态">
					<template slot-scope="scope">
						<el-tag :type="scope.row.state == '启用' ? 'success' : 'danger'">{{ scope.row.state }}</el-tag>
					</template>
				</el-table-column>
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
		<!-- 审批流程类型 -->
		<el-dialog title="审批流程" :visible.sync="dialogVisible" width="30%" align="left">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="类型模型" prop="region">
					<el-select v-model="ruleForm.region" placeholder="请假流程">
						<el-option label="请假流程" value="qingjia"></el-option>
						<el-option label="出差流程" value="chuchai"></el-option>
						<el-option label="出差流程" value="chuchai"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="状态" prop="resource">
					<el-radio-group v-model="ruleForm.resource">
						<el-radio label="启用"></el-radio>
						<el-radio label="禁用"></el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="流程说明" prop="desc">
					<el-input type="textarea" v-model="ruleForm.desc"></el-input>
				</el-form-item>

				<el-form-item>
					<el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
					<el-button @click="resetForm('ruleForm')">取消</el-button>
				</el-form-item>
			</el-form>
		</el-dialog>
	</div>
</template>

<script>
import { getApprovalprocess } from '../../../../api/api'
export default {
	name: 'ApprovalView',
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
		handleEdit(index, row) {
			console.log(index, row)
		},
		handleDelete(index, row) {
			console.log(index, row)
		}
	},
	computed: {},
	created() {
		getApprovalprocess().then((res) => {
			console.log(res.data.approvalprocessData)
			this.tableData = res.data.approvalprocessData
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
