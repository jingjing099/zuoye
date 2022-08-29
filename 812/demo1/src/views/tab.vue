<template>
  <div>
    <!-- tab选项卡 -->
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="未读消息" name="unread">
        <!-- 列表 -->
        <div
          class="box"
          v-for="(item, index) in tablist.unread.slice(
            (page.pagenum - 1) * page.pagesize,
            page.pagenum * page.pagesize
          )"
          :key="index"
        >
          <p>{{ item.title }}</p>
          <div class="right">
            <p>{{ item.date }}</p>
            <el-button @click="markread(index)">标记已读</el-button>
          </div>
        </div>
        <!-- 分页 -->
        <div class="bing">
          <el-pagination class="paging"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="page.pagenum"
            :page-sizes="[2, 3, 4]"
            :page-size="page.pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="tablist.unread.length"
          >
          </el-pagination>
          <el-button @click="allunread" class="btn">全部标记已读</el-button>
        </div>
      </el-tab-pane>
      <el-tab-pane label="已读消息" name="read"
        ><!-- 列表 -->
        <div
          class="box"
          v-for="(item, index) in tablist.read.slice(
            (page.pagenum - 1) * page.pagesize,
            page.pagenum * page.pagesize
          )"
          :key="index"
        >
          <p>{{ item.title }}</p>
          <div class="right">
            <p>{{ item.date }}</p>
            <el-button @click="readmessage(index)">删除</el-button>
            <el-button @click="estoreunread(index)">还原未读</el-button>
          </div>
        </div>
        <!-- 分页 -->
        <div class="bing">
          <el-pagination class="paging"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="page.pagenum"
            :page-sizes="[2, 3, 4]"
            :page-size="page.pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="tablist.read.length"
          >
          </el-pagination>
          <el-button @click="allread" class="btn">全部已读消息</el-button>
        </div></el-tab-pane
      >
      <el-tab-pane label="回收站" name="recycle">
        <!-- 列表 -->
        <div
          class="box"
          v-for="(item, index) in tablist.recycle.slice(
            (page.pagenum - 1) * page.pagesize,
            page.pagenum * page.pagesize
          )"
          :key="index"
        >
          <p>{{ item.title }}</p>
          <div class="right">
            <p>{{ item.date }}</p>
            <el-button @click="recyclebin(index)">还原</el-button>
          </div>
        </div>
        <!-- 分页 -->
        <div class="bing">
        <el-pagination class="paging"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page.pagenum"
          :page-sizes="[2, 3, 4]"
          :page-size="page.pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tablist.recycle.length"
        >
        </el-pagination>
          <el-button @click="allrecycle" class="btn">全部还原</el-button>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import axios from "axios";
import { reactive } from "vue";
import { mapState,mapMutations } from "vuex";
export default {
  data() {
    return {
      //   tableData: [],
      activeName: "read",
      page: {
        pagenum: 1,
        pagesize: 2,
      },
    };
  },
  computed: {
    ...mapState("tab", ["tablist"]),
  },
  methods: {
    ...mapMutations('tab',['']),
    // 全部还原
    allrecycle() {
      this.$store.commit("tab/allrecycle");
      this.activeName='unread'
    },
    // 全部已读消息
    allread() {
      this.$store.commit("tab/allread");
      this.activeName='recycle'
    },
    // 全部标记已读
    allunread() {
      this.$store.commit("tab/allunread");
      this.activeName='read'
    },
    // 回收站
    recyclebin(index) {
      this.$store.commit("tab/recyclebin", index);
    },
    // 还原未读
    estoreunread(index){
      this.$store.commit('tab/estoreunread',index)
    },
    // 删除
    readmessage(index) {
      this.$store.commit("tab/readmessage", index);
    },
    // 标记已读
    markread(index) {
      this.$store.commit("tab/markread", index);
    },
    handleClick() {},
    getData() {
      axios.get("tabs.json").then((res) => {
        console.log(res);
        // this.tableData = res.data.unread;
        this.$store.commit("tab/tabadd", res.data);
      });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.page.pagesize = val;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.page.pagenum = val;
    },
  },
  created() {
    this.getData();
  },
};
</script>
<style lang="scss" scoped>
.box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.right {
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    margin-right: 40px;
  }
}
.bing{
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
// .paging{
//   text-align: left;
// }
// .btn{
//   text-align: left;
// }
</style>