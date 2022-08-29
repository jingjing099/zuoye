<template>
  <div class="login">
    <div class="box">
      <h1>梦学谷会员管理系统</h1>
      <!-- 表单 -->
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="name">
          <el-input v-model="ruleForm.name" class="inp"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" class="inp"  show-password></el-input>
        </el-form-item>
        <el-form-item class="elform">
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        password: "",
      },
      rules: {
        name: [
          { required: true, message: "账号不能为空", trigger: "blur" },
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    login(){
      if(this.ruleForm==''){
        return
      }
      localStorage.setItem('token',this.ruleForm)
      this.$router.push('/')
    }
  },
};
</script>
<style lang="scss" scoped>
::v-deep .el-icon-view{
  margin: auto 0;
  font-size: 20px;
  line-height: 60px;
}
.elform{
  text-align: left;
}
.login {
  width: 100vw;
  height: 100vh;
  background: url(http://vue.mengxuegu.com/img/login.b665435f.jpg);
  overflow: hidden;
  .box {
    width: 600px;
    height: 500px;
    background: #fff;
    margin: 200px auto 0;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.7);
    color: black;
    box-sizing: border-box;
    padding: 60px 30px 0;
    // padding-top: 30px;
    h1{
      margin-bottom: 20px;
    }
  }
}
.inp {
  width: 450px;
  height: 60px;
}
::v-deep .el-form-item__label {
  font-size: 20px;
}
</style>