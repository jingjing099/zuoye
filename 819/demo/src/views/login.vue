<template>
  <div class="login">
    <div class="box">
      <h1>用户登录</h1>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="" prop="username">
          <el-input
            v-model="ruleForm.username"
            prefix-icon="el-icon-user-solid"
            placeholder="username"
          ></el-input>
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input
            v-model="ruleForm.password"
            prefix-icon="el-icon-lock"
            suffix-icon="el-icon-view"
            placeholder="password"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm"
            >登录</el-button
          >
          <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
        </el-form-item>
      </el-form>
      <div class="title">
        <p>测试权限账号</p>
        <p>提供三种权限账号</p>
        <p>1. 超级管理员账号： super-admin</p>
        <p>2. 管理员账号：admin</p>
        <p>3. 测试可配置账号：test</p>
        <p>密码统一为：123456</p>
        <p></p>
        <p>导入用户账号：</p>
        <p>可使用导入的用户名登录</p>
        <p>密码统一为：123456</p>
        <h2>注意：导入用户区分中英文库！！！！</h2>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "用户名为必填项", trigger: "blur" },
        ],
        password: [
          { required: true, message: "密码不能少于6位", trigger: "blur" },
          { min: 3,  message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      },
    };
  },
  methods: {
    submitForm(){
        if(this.ruleForm.username=='super-admin' || this.ruleForm.username=='admin' && this.ruleForm.password=='123456'){
            this.$router.push('/')
            localStorage.setItem('username',this.ruleForm)
        }else{            
            this.$message.error('用户名或密码错误');
            return
        }
    }
  },
};
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  background: #30394a;
  color: #fff;
  overflow: hidden;
  .box {
    width: 800px;
    margin: 100px auto;
    h1 {
      text-align: center;
    }
    .el-input {
      // border: 1px solid #ccc;
      background: black;
      margin: 20px 0 0 0;
      //   height: 60px;
    }
    .el-button {
      width: 100%;
    }
  }
  .title{
    text-align: left;
    margin-left: 98px;
  }
}
</style>