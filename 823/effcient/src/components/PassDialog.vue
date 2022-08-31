<template>
	<div>
		<el-dialog title="修改密码" :visible.sync="visible" width="400px" @closed="$emit('close')">
			<el-form :model="form" :rules="rules" ref="form">
				<el-form-item label="用户名" :label-width="formLabelWidth" prop="name">
					<el-input v-model="form.name" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="新密码" :label-width="formLabelWidth" prop="password">
					<el-input v-model="form.password" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="再次输入" :label-width="formLabelWidth" prop="passwords">
					<el-input v-model="form.passwords" autocomplete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="visible = false">取 消</el-button>
				<el-button type="primary" @click="visible = false">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
export default {
	props: ['dialogFormVisible'],
	name: 'PassDialog',
	components: {},
	data() {
		return {
			// dialogFormVisible: false,
			formLabelWidth: '100px',
			/* 表单验证 */
			rules: {
				name: [
					{ required: true, message: '用户名不能为空', trigger: 'blur' },
					{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
				],
				password: [
					{ required: true, message: '密码不能为空', trigger: 'blur' },
					{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
				],
				passwords: [
					{ required: true, message: '密码不能为空', trigger: 'blur' },
					{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
				]
			},
			/* 忘记密码表单数据 */
			form: {
				name: '',
				password: '',
				passwords: ''
			},
			visible: false
		}
	},
	watch: {
		dialogFormVisible: function (newVal) {
			this.visible = newVal
			console.log(this.visible)
		}
	},
	methods: {},
	computed: {},
	created() {},
	mounted() {}
}
</script>
<style scoped lang="scss"></style>
