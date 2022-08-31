<template>
	<div>
		<div class="materia-top">
			<div>材料名称 <el-input v-model="name" placeholder="请输入姓名"></el-input></div>
			<el-button icon="el-icon-search"> 查询</el-button>
			<el-button icon="el-icon-refresh-right"> 重置</el-button>
			<el-button class="added" type="primary" icon="el-icon-circle-plus-outline" @click="dialogVisible = true"
				>新增材料</el-button
			>
		</div>
		<!-- 表格 -->
		<template>
			<el-table :data="tableData" border style="width: 100%" stripe>
				<el-table-column prop="id" label="id"> </el-table-column>
				<el-table-column prop="m_name" label="材料名称"> </el-table-column>
				<el-table-column prop="m_route" label="材料地址"> </el-table-column>
				<el-table-column label="操作">
					<template v-slot="scope">
						<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">下载</el-button>
						<el-button size="mini" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
		<!-- 新增材料对话框 -->
		<el-dialog title="新增材料" :visible.sync="dialogVisible" width="30%" label-position="right">
			<el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px">
				<el-form-item label="材料名称" prop="m_name">
					<el-input v-model="ruleForm.r_name"></el-input>
				</el-form-item>
				<el-form-item label="材料地址" prop="m_route">
					<el-upload
						class="upload-demo"
						action="https://jsonplaceholder.typicode.com/posts/"
						:on-change="handleChange"
						:file-list="fileList"
					>
						<el-button size="small" type="primary">点击上传</el-button>
						<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
					</el-upload>
				</el-form-item>
			</el-form>
		</el-dialog>
	</div>
</template>

<script>
import { getMaterials } from '../../../api/api'

export default {
	name: 'MaterialMent',
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
			fileList: [
				{
					name: 'food.jpeg'
					// url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
				},
				{
					name: 'food2.jpeg'
					// url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
				}
			]
		}
	},
	methods: {
		handleChange(file, fileList) {
			this.fileList = fileList.slice(-3)
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
		getMaterials().then((res) => {
			console.log(res.data.materialsData)
			this.tableData = res.data.materialsData
		})
	},
	mounted() {}
}
</script>
<style scoped lang="scss">
//第一行
.materia-top {
	display: flex;
	margin-bottom: 20px;
	.el-input {
		width: 400px;
		margin-right: 10px;
	}
}
</style>
