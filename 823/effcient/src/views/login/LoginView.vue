<template>
	<div class="loginbody">
		<el-card class="box-card">
			<p>OA系统登录</p>
			<!-- 登录表单 -->
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
				<el-form-item prop="name">
					<el-input v-model="ruleForm.name" placeholder="请输入用户名" prefix-icon="el-icon-user-solid"></el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input
						v-model="ruleForm.password"
						placeholder="请输入密码"
						prefix-icon="el-icon-lock"
						clear="password-ipt"
					></el-input>
				</el-form-item>
				<p class="forget-password" @click="dialogFormVisible = true">忘记密码？</p>
				<div class="test-box">
					<el-form-item prop="verification">
						<el-input v-model="ruleForm.verification" placeholder="验证码" style="width: 260px"></el-input>
					</el-form-item>
					<div class="test-picture">验证图片</div>
				</div>
				<el-form-item>
					<el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
				</el-form-item>
			</el-form>
		</el-card>
		<div class="login-text"><p>©2022第四组版权所有京ICP证070791号京公网安备11010502025545号</p></div>
		<!-- 忘记密码对话框 -->
		<pass-dialog :dialogFormVisible="dialogFormVisible" @close="dialogFormVisible = false"></pass-dialog>
	</div>
</template>

<script>
import PassDialog from '../../components/PassDialog.vue'
// import axios from 'axios'
import { login } from '../../../api/api'
export default {
	components: { PassDialog },
	name: 'LoginView',
	data() {
		return {
			/**登录表单数据 */
			ruleForm: {},
			/**表单验证 */
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
				],
				verification: [{ required: true, message: '验证码不能为空', trigger: 'blur' }]
			},
			/* 忘记密码表单数据 */
			form: {},
			dialogFormVisible: false,
			formLabelWidth: '100px'
		}
	},
	methods: {
		/* 登录方法 */
		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					alert('submit!')
				} else {
					console.log('error submit!!')
					return false
				}
			})
		}
	},
	created() {
		login({ uesr: 123 }).then((res) => {
			console.log(res, 'res')
		})
		// axios.post('/effect/home/loginsearch').then((res) => {
		// 	console.log(res, 'res登录日志')
		// })
	}
}
</script>

<style lang="scss" scoped>
/* 登录主页面 */
.loginbody {
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: url('../../../public/login.png');
	background-size: 1960px auto;
	/* 登录框 */
	.box-card {
		position: relative;
		width: 495px;
		height: 420px;
		border-style: none;
		border-color: unset;
		border-radius: 34px;
		font-size: 14px;
		padding: 25px;
		text-align: center;
		// line-height: 25px;
		font-weight: normal;
		font-style: normal;
		/* 登录按钮 */
		::v-deep .el-button--primary {
			width: 340px;
			margin-top: 20px;
			height: 50px;
			border-radius: 16px;
		}
		/* 验证框 */
		.test-box {
			display: flex;
			justify-content: space-between;
			margin-top: 30px;
		}
		/* 忘记密码 */
		.forget-password {
			position: absolute;
			top: 205px;
			right: 50px;
			font-size: 12px;
			color: #f8d869;
		}
		.test-picture {
			width: 120px;
			height: 40px;
			border: 1px solid #dcdfe6;
			border-radius: 16px;
			line-height: 40px;
			color: #c0c4cc;
		}
	}
	/* OA系统 */
	p {
		font-family: FZLanTingHei;
		font-weight: 400;
		font-size: 28px;
		color: rgba(0, 0, 0, 1);
		font-style: normal;
		letter-spacing: 0px;
		line-height: 37px;
		text-decoration: none;
		margin-bottom: 30px;
	}
}
.login-text {
	position: fixed;
	top: 90%;
	p {
		color: #c0c4cc;
		font-size: 12px;
	}
}
/* input框圆角样式 */
::v-deep .el-input__inner {
	border-radius: 16px;
}
</style>