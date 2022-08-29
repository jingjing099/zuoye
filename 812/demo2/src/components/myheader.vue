<template>
  <div class="myheader">
    <div class="left">
      <img src="http://vue.mengxuegu.com/img/logo.7156be27.png" alt="" />
      <h1>梦学谷会员管理系统</h1>
    </div>
    <div class="right">
      <el-dropdown @command="to">
        <span class="el-dropdown-link">
          乔平<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <!-- <span>乔平</span>
        <span class="el-icon-arrow-down"></span> -->
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    to(){
      localStorage.removeItem('token')
    }
  },
}
</script>
<style lang="scss" scoped>
::v-deep .el-dropdown{
  color: #fff;
}
.myheader {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
  div {
    display: flex;
    align-items: center;
  }
}
</style>