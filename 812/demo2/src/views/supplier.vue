<template>
  <div class="vip">
    <div class="top">
      <el-input v-model="input" placeholder="供应商名称"></el-input>
      <el-input v-model="input" placeholder="联系人"></el-input>
      <el-input v-model="input" placeholder="联系电话"></el-input>
      <el-button type="primary">查询</el-button>
      <el-button type="primary" @click="add">新增</el-button>
      <el-button>重置</el-button>
    </div>
    <!-- 表格 -->
    <el-table
      :data="
        tableData.slice(
          (page.pagenum - 1) * page.pagesize,
          page.pagesize * page.pagenum
        )
      "
      border
      style="width: 100%"
    >
      <el-table-column type="index" width="50" label="序号"> </el-table-column>
      <el-table-column prop="name" label="供应商名称"> </el-table-column>
      <el-table-column prop="linkman" label="联系人"> </el-table-column>
      <el-table-column prop="mobile" label="联系电话"> </el-table-column>
      <el-table-column prop="remark" label="备注"> </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button @click="edit(scope.$index,scope.row)">编辑</el-button>
          <el-button type="danger" @click="del(scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page.pagenum"
      :page-sizes="[2, 4, 6, 8]"
      :page-size="page.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length"
    >
    </el-pagination>
    <!-- 对话框 -->
    <el-dialog :title="title" :visible.sync="dialogVisible" width="50%">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="供应商名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="联系人" prop="linkman">
          <el-input v-model="ruleForm.linkman"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="mobile">
          <el-input v-model="ruleForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input type="textarea" v-model="ruleForm.remark"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="ok">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      page: {
        pagenum: 1,
        pagesize: 2,
      },
      input: "",
      value: "",
      options: [
        {
          value: "1",
          label: "黄金糕",
        },
      ],
      tableData: [],
      ruleForm: {
        name: "",
        linkman: "",
        mobile: "",
        remark: 0,
      },
      rules: {
        name: [{ required: true, message: "联系人不能为空", trigger: "blur" }],
        linkman: [{ required: true, message: "名称不能为空", trigger: "blur" }]
      },
      dialogVisible: false,
      title: "供应商新增",
      editindex:'',
    };
  },
  methods: {
    // 删除
    del(i){
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            this.tableData.splice(i,1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    // 编辑
    edit(i,item){
        this.dialogVisible=true
        this.title='供应商编辑'
        this.ruleForm=item
        this.editindex=i
    },
    // 确定
    ok() {
      this.dialogVisible = false;
      if (this.title == "供应商新增") {
        this.tableData.push(this.ruleForm);
      }else{
        this.tableData[this.editindex]=this.ruleForm
      }
    },
    // 新增
    add() {
      this.dialogVisible = true;
      this.title = "供应商新增";
      this.ruleForm = [];
      console.log(this.ruleForm);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.page.pagesize = val;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.page.pagenum = val;
    },
    getData() {
      axios
        .post("http://vue.mengxuegu.com/pro-api/supplier/list/search/1/10")
        .then((res) => {
          console.log(res);
          this.tableData = res.data.data.rows;
          //   console.log(this.tableData);
        });
    },
  },
  created() {
    this.getData();
  },
};
</script>
<style lang="scss" scoped>
.top {
  display: flex;
  justify-content: space-around;
}
::v-deep .el-input {
  widows: 400px;
}
</style>