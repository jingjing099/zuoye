<template>
  <div class="menus">
    <div class="top">
      <div>
        <span>菜单名称</span
        ><el-input v-model="input" placeholder="请输入姓名"></el-input>
      </div>
      <div>
        <el-button icon="el-icon-search">查询</el-button>
        <el-button icon="el-icon-refresh-left">重置</el-button>
        <el-button type="primary" icon="el-icon-circle-plus-outline"
          >新增用户</el-button
        >
      </div>
    </div>

    <!-- 表格 -->
    <el-table :data="tableData" class="table" border style="width: 80%">
      <el-table-column prop="m_name" label="菜单名称"> </el-table-column>
      <el-table-column prop="m_route" label="菜单路径"> </el-table-column>
      <el-table-column prop="m_sort" label="排序"> </el-table-column>
      <el-table-column prop="icon" label="菜单图标"> </el-table-column>
      <el-table-column prop="m_typ" label="菜单类型"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="260px">
        <template slot-scope="scope">
          <el-button type="primary" size="small" icon="el-icon-edit"
            >编辑</el-button
          >
          <el-button type="danger" size="small" icon="el-icon-delete"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      tableData: [
        {
          m_name: "",
          m_route: "",
          m_sort: "",
          icon: "",
          m_typ: ""
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.table {
  margin-left: 10px;
}
.top {
  width: 100%;
  height: 60px;
  display: flex;
  > div:nth-of-type(1) {
    width: 300px;
    display: flex;
    justify-content: left;
    align-items: center;
    padding-left: 10px;
    > span {
      width: 100px;
    }
  }
  .el-button {
    margin-left: 10px;
    margin-top: 10px;
  }
}
.menus {
  width: 1500px;
  height: 100%;
}
</style>
