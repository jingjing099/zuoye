<template>
  <div class="home">
    <el-container>
      <el-aside :width="isCollapse ? '80px' : '200px'">
        <mylist :isCollapse="isCollapse"></mylist>
      </el-aside>
      <el-main>
        <top @to="to"></top>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import top from "@/components/top"
import mylist from "@/components/mylist"
export default {
  components: {
    top,
    mylist
  },
  data() {
    return {
      isCollapse: false
    }
  },
  methods: {
    to(val) {
      // console.log(val)
      this.isCollapse = val
    }
  }
}
</script>
<style lang="scss" scoped>
.el-aside {
  background-color: #7aabf6;
  color: #333;
  text-align: center;
  height: 100vh;
  width: 160px;
}

.el-main {
  background-color: #fff;
  color: #333;
  float: left;
  width: 880px;
  height: 100vh;
  margin: 0;
  // padding: 0 20px;
  padding: 0;
  text-align: left;
  box-sizing: border-box;
}
</style>
