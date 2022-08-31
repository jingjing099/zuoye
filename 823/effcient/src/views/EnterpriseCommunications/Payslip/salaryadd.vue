<template>
  <div class="salaryadd">
    <el-dialog title="新增工资条" :visible.sync="dialogVisible" width="50%">
      <div class="main">
        <div>
          <span>姓名：</span>
          <div class="box">
            <el-input v-model="inp" placeholder=""></el-input>
            <el-tree :data="data" :props="defaultProps"></el-tree>
          </div>
        </div>

        <el-input
          type="textarea"
          :rows="10"
          placeholder="列表中的其他信息"
          v-model="textarea"
          class="text"
          resize="none"
        >
        </el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false"
          >新增</el-button
        >
        <el-button @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogVisible: true,
      data: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1"
                }
              ]
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1"
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      },
      inp: "",
      textarea: ""
    }
  }
}
</script>
<style lang="scss" scoped>
.main {
  margin-left: 20px;
}
.box {
  display: inline-block;
  vertical-align: top;
  width: 300px;
  margin-left: 20px;
}
.text {
  margin-top: 40px;
  // height: 200px;
  width: 400px;
}
</style>
