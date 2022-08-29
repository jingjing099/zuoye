<template>
  <div>
    <h2>学员管理</h2>
    <div class="top">
      学员状态
      <el-select
        v-model="form.value"
        placeholder="请选择"
        @change="selectchange"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      学生名称
      <el-input
        v-model="form.username"
        placeholder="请输入学生姓名"
        @input="inpval"
      ></el-input>
      手机号
      <el-input
        v-model="form.tell"
        placeholder="请输入手机号"
        @input="inpll"
      ></el-input>
      <el-button icon="el-icon-search" @click="search">搜索</el-button>
      <el-button icon="el-icon-refresh" @click="reset">重置</el-button>
    </div>
    <div class="div">
      <el-button type="primary">新增学员</el-button>
      <el-button type="primary">批量导入</el-button>
      <el-button type="primary">批量导出</el-button>
      <el-button type="primary">查看报表</el-button>
    </div>
    <!-- table -->
    <el-table
      :data="
        tableData.slice(
          (page.pagenum - 1) * page.pagesize,
          page.pagenum * page.pagesize
        )
      "
      border
      style="width: 100%"
    >
      <el-table-column
        type="selection"
        width="55"
        prop="ckall"
        style="text-align: center"
      >
      </el-table-column>
      <el-table-column prop="nickname" label="学生姓名">
        <template slot-scope="scope">
          <img :src="scope.row.avatar" alt="" />
          {{ scope.row.nickname }}
        </template>
      </el-table-column>
      <el-table-column prop="mobile" label="手机号"> </el-table-column>
      <el-table-column prop="status" label="状态">
        <template slot-scope="scope">
          <span v-if="scope.row.status == 1">禁用</span>
          <span v-if="scope.row.status == 0">启用</span>
        </template>
      </el-table-column>
      <el-table-column prop="created_at" label="创建时间">
        <template slot-scope="scope">
          {{ scope.row.created_at | date }}
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作">
        <span class="edit"> 详情-编辑-启用-删除-重置密码 </span>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page.pagenum"
      :page-sizes="[2, 3, 4, 5]"
      :page-size="page.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      options: [
        {
          value: "禁用",
          label: "禁用",
        },
        {
          value: "启用",
          label: "启用",
        },
      ],
      form: {
        value: "",
        username: "",
        tell: "",
      },
      tableData: [],
      list: [],
      selval: "",
      page: {
        query: "",
        pagenum: 1,
        pagesize: 2,
      },
      total: 0,
      timer: 0,
    };
  },
  created() {
    this.getData();
  },
  filters: {
    date(val) {
      return new Date(val * 1000).toLocaleString();
    },
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.page.pagesize = val;
      this.getData();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.page.pagenum = val;
      this.getData();
    },
    getData() {
      axios.get("list.json", { params: this.page }).then((res) => {
        console.log(res);
        this.tableData = res.data;
        this.list = res.data;
        this.total = this.tableData.length;
        this.timer = new Date().toLocaleString();
      });
    },
    selectchange() {
      console.log(this.form.value);
      if (this.form.value == "禁用") {
        this.selval = 1;
      } else {
        this.selval = 0;
      }
      this.tableData = this.list.filter((item) => item.status == this.selval);
    },
    inpval() {
      this.tableData = this.list.filter((item) =>
        item.nickname.includes(this.form.username)
      );
    },
    inpll() {
      this.tableData = this.list.filter((item) =>
        item.mobile.includes(this.form.tell)
      );
    },
    reset() {
      this.tableData = this.list;
      this.form = [];
    },
    search() {
      this.tableData = this.list.filter(
        (item) =>
          item.status == this.selval &&
          item.nickname.includes(this.form.username) &&
          item.mobile.includes(this.form.tell)
      );
    },
  },
};
</script>
<style lang="scss" scoped>
.edit {
  color: #5793e0;
}
h2 {
  width: 100%;
  padding-left: 20px;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
  text-align: left;
}
.el-input {
  width: 200px;
}
img {
  width: 50px;
  height: 50px;
}
.top{
  text-align: left;
}
.div{
  text-align: left;
  margin: 20px;
}
</style>