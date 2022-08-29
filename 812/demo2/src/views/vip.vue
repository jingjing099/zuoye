<template>
  <div class="vip">
    <div class="top">
      <el-input v-model="input" placeholder="会员卡号"></el-input>
      <el-input v-model="input" placeholder="会员名字"></el-input>
      <el-select v-model="value" placeholder="支付类型">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
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
      <el-table-column prop="cardNum" label="会员卡号"> </el-table-column>
      <el-table-column prop="name" label="会员姓名"> </el-table-column>
      <el-table-column prop="birthday" label="会员生日"> </el-table-column>
      <el-table-column prop="phone" label="手机号码"> </el-table-column>
      <el-table-column prop="integral" label="可用积分"> </el-table-column>
      <el-table-column prop="money" label="开卡金额"> </el-table-column>
      <el-table-column prop="payType" label="支付类型">
        <template slot-scope="scope">
          <span v-if="scope.row.payType == 1">支付宝</span>
          <span v-if="scope.row.payType == 2">微信</span>
          <span v-if="scope.row.payType == 3">现金</span>
          <span v-if="scope.row.payType == 4">银行卡</span>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="会员地址"> </el-table-column>
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
        <el-form-item label="会员卡号" prop="cardNum">
          <el-input v-model="ruleForm.cardNum"></el-input>
        </el-form-item>
        <el-form-item label="会员姓名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="会员生日" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.birthday"
                style="width: 100%"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="手机号码" prop="phone">
          <el-input v-model="ruleForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="开卡金额" prop="money">
          <el-input v-model="ruleForm.money"></el-input>
        </el-form-item>
        <el-form-item label="可用积分" prop="integral">
          <el-input v-model="ruleForm.integral"></el-input>
        </el-form-item>
        <el-form-item label="支付类型" prop="payType">
          <el-select v-model="ruleForm.payType" placeholder="字符类型">
            <el-option label="支付宝" value="1"></el-option>
            <el-option label="微信" value="2"></el-option>
            <el-option label="现金" value="3"></el-option>
            <el-option label="银行卡" value="4"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="会员地址" prop="address">
          <el-input type="textarea" v-model="ruleForm.address"></el-input>
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
        cardNum: "",
        name: "",
        birthday: "",
        phone: "",
        moeny: 0,
        integral: 0,
        payType: "",
        address: "",
      },
      rules: {
        name: [{ required: true, message: "姓名不能为空", trigger: "blur" }],
        cardNum: [{ required: true, message: "卡号不能为空", trigger: "blur" }],
        payType: [{ required: true, message: "不能为空", trigger: "blur" }],
      },
      dialogVisible: false,
      title: "会员新增",
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
        this.title='会员编辑'
        this.ruleForm=item
        this.editindex=i
    },
    // 确定
    ok() {
      this.dialogVisible = false;
      if (this.title == "会员新增") {
        this.tableData.push(this.ruleForm);
      }else{
        this.tableData[this.editindex]=this.ruleForm
      }
    },
    // 新增
    add() {
      this.dialogVisible = true;
      this.title = "会员新增";
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
        .post("http://vue.mengxuegu.com/pro-api/member/list/search/1/20")
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