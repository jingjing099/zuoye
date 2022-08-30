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
      <el-button type="primary" icon="el-icon-circle-plus-outline" @click="add"
        >新增用户</el-button
      >
    </div>
    <!-- 表格 -->
    <el-table :data="tableData" class="table" border style="width: 80%">
      <el-table-column type="index" width="50" label="id"> </el-table-column>
      <el-table-column prop="username" label="用户名称"> </el-table-column>
      <el-table-column prop="account" label="账号"> </el-table-column>
      <el-table-column prop="phone" label="手机号"> </el-table-column>
      <el-table-column prop="role_name" label="所属角色"> </el-table-column>
      <el-table-column prop="rank_name" label="所属职级"> </el-table-column>
      <el-table-column prop="dep_name" label="所属部门"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="260px">
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="small"
            icon="el-icon-edit"
            @click="edit(scope.row.id)"
            >修改</el-button
          >
          <el-button type="danger" size="small" icon="el-icon-delete"
            >查看</el-button
          >
          <el-button size="small" icon="el-icon-more-outline">查看</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 新增对话框 -->
    <el-dialog :title="title" :visible.sync="dialogVisible" width="40%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名称">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="账号">
          <el-input v-model="form.account"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="角色名称">
          <el-select v-model="form.role_name" placeholder="管理员角色">
            <el-option label="管理员角色" value="管理员角色"></el-option>
            <el-option label="普通角色" value="普通角色"></el-option>
            <el-option label="部门管理员" value="部门管理员"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="所属岗位">
          <el-select v-model="form.inp" placeholder="销售岗">
            <el-option label="销售岗" value="销售岗"></el-option>
            <el-option label="技术岗" value="技术岗"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="所属职级">
          <el-select v-model="form.rank_name" placeholder="普通用户">
            <el-option label="总经理" value="总经理"></el-option>
            <el-option label="部门经理" value="部门经理"></el-option>
            <el-option label="副主任" value="副主任"></el-option>
            <el-option label="普通用户" value="普通用户"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="所属部门">
          <el-select v-model="form.dep_name" placeholder="总经办">
            <el-option label="总经办" value="总经办"></el-option>
            <el-option label="人事部" value="人事部"></el-option>
            <el-option label="采购部" value="采购部"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="added">新增</el-button>
        <el-button @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
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
        // {
        //   username: "", //用户名称
        //   account: "", //账号
        //   phone: "", //手机号
        //   role_name: "", //所属角色
        //   rank_name: "", //所属职级
        //   dep_name: "" //所属部门
        // }
      ],
      dialogVisible: false,
      form: {
        username: "", //用户名称
        account: "", //账号
        phone: "", //手机号
        role_name: "", //所属角色
        rank_name: "", //所属职级
        dep_name: "", //所属部门
        inp: "" //所属岗位
      },
      title: "新增用户"
    }
  },
  methods: {
    edit(i) {
      this.title = "编辑"
      this.dialogVisible = true
      console.log(i)
    },
    added() {
      this.dialogVisible = false
      this.tableData.push(this.form)
    },
    add() {
      this.title = "新增用户"
      this.dialogVisible = true
      // console.log(this.form)
    }
  },
  created() {
    this.$axios.get("/effect/users").then((res) => {
      console.log(res)
      this.tableData = res.data.userall
    })
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
.user {
  width: 1500px;
  height: 100%;
}
</style>
