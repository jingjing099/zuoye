<template>
  <div class="top">
    <div class="bot">
      <img src="http://101.132.181.9/img/logo.c8999c02.png" alt="" />

      <div class="box">
        <p
          v-for="(item, index) in arr"
          :key="index"
          @click="to(item)"
          :class="{ active: item.path == rou }"
        >
          {{ item.title }}
        </p>
      </div>

      <el-input
        placeholder="请输入内容"
        v-model="input3"
        class="input-with-select"
      >
        <el-button
          class="btn"
          slot="append"
          icon="el-icon-search"
          @click="search"
        ></el-button>
      </el-input>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [
        {
          title: "首页",
          path: "/index",
        },
        {
          title: "全部商品",
          path: "/goods",
        },
        {
          title: "关于我们",
          path: "/my",
        },
      ],
      input3: "",
      rou: "/index",
    };
  },
  created() {
    this.rou = sessionStorage.getItem("indexs");
  },
  methods: {
    to(item) {
      console.log(1);
      this.rou = item.path;
      this.$router.push(`${item.path}`);
      sessionStorage.setItem("indexs", this.rou);
    },
    search() {
      if (this.input3 == "") {
        return;
      }
      this.$router.push({ path: "/goods", query: { obj: this.input3 } })
      this.rou='/goods'
      // console.log(this.list);
    },
  },
  created() {
    if(this.$router.history.current.fullPath!='/index'){
      this.$router.push('/index')
    }
    console.log(this.$router);
  },
};
</script>
<style lang="scss" scoped>
.active {
  color: #409eff;
  border-bottom: 1px solid #409eff;
}
::v-deep .el-input {
  width: 300px;
  margin-right: 0px;
  // border-radius: 10px;
}
::v-deep .btn {
  width: 40px;
  height: 30px;
}
.bot {
  margin: 0 auto;
  width: 1225px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  // line-height: 100px;
  border-bottom: 1px solid #ccc;
  color: #989399;
  img {
    width: 190px;
    height: 60px;
    margin-left: 0px;
  }
  .box {
    display: flex;
    p {
      //   padding:  25px;
      width: 100px;
      padding: 25px 0;
      line-height: 30px;
    }
  }
}
</style>