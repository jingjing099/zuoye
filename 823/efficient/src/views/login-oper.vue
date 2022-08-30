<template>
  <div class="oper">
    <div class="header">
      <div>
        <span>账号名称：</span
        ><el-input v-model="input" placeholder="请输入内容"></el-input>
      </div>
      <div>
        <span>时间:</span>
        <!-- <el-input v-model="input2" placeholder="请输入内容"></el-input> -->
      </div>
    </div>
    <div class="top">
      <el-button icon="el-icon-search">查询</el-button>
      <el-button icon="el-icon-refresh-left">重置</el-button>
      <el-button type="primary" icon="el-icon-circle-plus-outline"
        >新增用户</el-button
      >
    </div>
    <!-- 表格 -->
    <el-table :data="tableData" class="table" border style="width: 80%">
      <el-table-column type="index" width="50" label="id"> </el-table-column>
      <el-table-column prop="ip" label="登录IP"> </el-table-column>
      <el-table-column prop="user_id" label="账号名称"> </el-table-column>
      <el-table-column prop="system" label="登录设备"> </el-table-column>
      <el-table-column prop="places" label="登录地点"> </el-table-column>
      <el-table-column prop="times" label="登录时间"> </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      input2: "",
      input3: "",
      tableData: [
        {
          username: "", //账号名称
          ip: "", //登录IP
          ststem: "", //登录设备
          times: "", //登录时间
          places: "" //登录设备
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep .table {
  margin-left: 10px;
}
.top {
  width: 100%;
  height: 60px;
  .el-button {
    &:nth-of-type(1),
    &:nth-of-type(2) {
      margin-left: 10px;
    }
    &:nth-of-type(3) {
      margin-left: 650px;
    }
  }
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
.oper {
  width: 1500px;
  height: 100%;
}
</style>
