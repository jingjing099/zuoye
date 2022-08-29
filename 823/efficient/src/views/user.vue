<template>
  <div class="user">
    <div class="header">
      <div>
        <span>姓名：</span
        ><el-input v-model="input" placeholder="请输入内容"></el-input>
      </div>
      <div>
        <span>所属部门:</span
        ><el-input v-model="input2" placeholder="请输入内容"></el-input>
      </div>
      <div>
        <span>手机号:</span
        ><el-input v-model="input3" placeholder="请输入内容"></el-input>
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
     <el-table
    :data="tableData"
    class="table"
    border
    style="width: 80%">
    <el-table-column
      type="index"
      width="50"
      label="id"
      >
    </el-table-column>
    <el-table-column
      prop="username"
      label="用户名称"
      >
    </el-table-column>
    <el-table-column
      prop="account"
      label="账号"
      >
    </el-table-column>
    <el-table-column
      prop="phone"
      label="手机号"
      >
    </el-table-column>
    <el-table-column
      prop="role_name"
      label="所属角色"
      >
    </el-table-column>
    <el-table-column
      prop="rank_name"
      label="所属职级"
      >
    </el-table-column>
    <el-table-column
      prop="dep_name"
      label="所属部门"
      >
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="260px">
      <template slot-scope="scope">
        <el-button type="primary" size="small" icon="el-icon-edit">修改</el-button>
        <el-button type="danger" size="small" icon="el-icon-delete">查看</el-button>
        <el-button size="small" icon="el-icon-more-outline">查看</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input:"",
      input2:"",
      input3:"",
      tableData:[{
        username:'', //用户名称
        account:'',//账号
        phone:'',//手机号
        role_name:'', //所属角色
        rank_name:'',//所属职级
        dep_name:'', //所属部门
      }]
    }
  },
}
</script>
<style lang="scss" scoped>
::v-deep .table{
    margin-left: 10px;
  }
.top {
  width: 100%;
  height: 60px;
  .el-button{
   &:nth-of-type(1),
   &:nth-of-type(2){
    margin-left: 10px;
   }
   &:nth-of-type(3){
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
.user {
  width: 1500px;
  height: 100%;
}
</style>
