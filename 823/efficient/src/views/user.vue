<template>
  <div class="user">
    <div class="header">
      <div>
        <span>姓名：</span
        ><el-input v-model="input" placeholder="请输入内容"></el-input>
      </div>
      <div>
        <span>所属部门:</span
        ><el-input v-model="input" placeholder="请输入内容"></el-input>
      </div>
      <div>
        <span>手机号:</span
        ><el-input v-model="input" placeholder="请输入内容"></el-input>
      </div>
    </div>
    <div class="top">
      <el-button icon="el-icon-search">查询</el-button>
      <el-button icon="el-icon-refresh-left">重置</el-button>
      <el-button type="primary" icon="el-icon-circle-plus-outline"
        >重置</el-button
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top {
  width: 100%;
  height: 60px;
}
.header {
  height: 60px;
  display: flex;
  justify-content: left;
  align-items: center;
  box-sizing: border-box;
  padding-left: 10px;
  > div {
    width: 300px;
    display: flex;
    justify-content: left;
    align-items: center;
    > span {
      width: 100px;
    }
    &:nth-of-type(1),
    &:nth-of-type(2) {
      margin-right: 20px;
    }
  }
}
.user {
  width: 1500px;
  height: 100%;
}
</style>
