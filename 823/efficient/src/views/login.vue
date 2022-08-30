<template>
  <div class="login">
    <div class="box">
      <p>OA系统登录</p>
      <el-form ref="form" :model="form" label-width="0px">
        <el-form-item>
          <el-input
            v-model="form.account"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" placeholder="请输入密码"></el-input>
          <p class="forget">
            <span class="active" @click="forgot">忘记密码？</span>
          </p>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="form.message_code"
            placeholder="验证码"
            width="248px"
            class="Code"
          ></el-input>
          <el-input
            placeholder="验证码图片"
            class="picture"
            @click="picture"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login" class="btn">登录</el-button>
        </el-form-item>
      </el-form>

      <!-- 忘记密码的对话框 -->
      <el-dialog title="修改密码" :visible.sync="dialogVisible" width="40%">
        <el-form
          ref="forgotform"
          :model="form"
          label-width="80px"
          label-position="left"
        >
          <el-form-item label="用户名">
            <el-input v-model="forgotform.account"></el-input>
          </el-form-item>
          <el-form-item label="新密码">
            <el-input v-model="forgotform.password"></el-input>
          </el-form-item>
          <el-form-item label="再次输入">
            <el-input v-model="forgotform.confirm_password"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false"
            >确定</el-button
          >
          <el-button @click="dialogVisible = false">取消</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        account: "",
        password: "",
        message_code: ""
      },
      forgotform: {
        account: "",
        password: "",
        confirm_password: ""
      },
      dialogVisible: false
    }
  },
  methods: {
    picture() {},
    forgot() {
      this.dialogVisible = true
    },
    getData() {
      this.$axios.post("/effect/user/login").then((res) => {
        console.log(res)
      })
    },
    login() {
      if (
        this.form.account == "" &&
        this.form.password == "" &&
        this.form.message_code == ""
      ) {
        this.$message({
          message: "不能为空",
          type: "warning"
        })
        return
      }
      // localStorage.setItem()
      this.$router.push("/")
    }
  },
  created() {
    // this.getData()
  }
}
</script>
<style lang="scss" scoped>
@keyframes myfirst {
  0% {
    background: rgba(255, 255, 255, 0);
  }
  10% {
    background: raba(255, 255, 255, 0.3);
  }
  50% {
    background: raba(255, 255, 255, 0.5);
  }
  100% {
    background: raba(255, 255, 255, 0);
  }
}
.active {
  cursor: pointer;
  background: rgba(255, 255, 255, 0);
}
::v-deep .el-form-item {
  margin-bottom: 35px;
}
::v-deep .btn {
  width: 100%;
  height: 52px;
  border-radius: 10px;
}
::v-deep .picture {
  width: 119px;
  margin-left: 22px;
}
::v-deep .Code {
  width: 248px;
}
::v-deep .el-input__inner {
  border-radius: 16px;
  height: 46px;
}
.forget {
  width: 100%;
  height: 20px;
  text-align: right;
  color: #f3c437;
  font-size: 13px;
  margin-top: -9px;
}
.box {
  width: 495px;
  height: 463px;
  background: #fff;
  border-radius: 34px;
  margin: 105px auto 0;
  box-sizing: border-box;
  padding: 0 53px;
  transition: background;
  // animation: myfirst 3s;
  -webkit-animation: myfirst 1.5s;
  > p {
    font-size: 28px;
    font-family: "方正兰亭黑-标准";
    line-height: 93px;
  }
}
.login {
  width: 100vw;
  height: 100vh;
  // background: url(../../public/原型背景图.png) no-repeat;
  background-image: url("../../public/原型背景图.png");
  background-repeat: no-repeat;
  background-size: 100%, auto;
  overflow: hidden;
  text-align: center;
}
</style>
