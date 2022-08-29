<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <div class="top">
          <img src="../../public/img1.png" alt="" />
          <h3>imooc-admin</h3>
        </div>
        <tab></tab>
      </el-aside>
      <el-main>
        <top></top>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import tab from "@/components/tab.vue";
import top from "@/components/top.vue";

export default {
  components: {
    tab,
    top
  },
};
</script>
<style lang="scss" scoped>
.el-aside {
  background-color: #304156;
  color: #333;
  text-align: center;
  height: 100vh;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: 100vh;
  margin: 0;
  padding: 0;
}
img {
  width: 50px;
  height: 50px;
}
.top{
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>