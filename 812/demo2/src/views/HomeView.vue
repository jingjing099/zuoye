<template>
  <div class="home">
    <el-container>
      <el-header>
        <myheader></myheader>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <mylist></mylist>
        </el-aside>
        <el-main>
          <top v-if="$route.path!='/index'"></top>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import myheader from '@/components/myheader';
import mylist from '@/components/mylist';
import top from '@/components/top';
export default {
  components:{
    myheader,
    mylist,
    top
  },
  created () {


  },
  computed:{

  }
};
</script>
<style lang="scss" scoped>
.el-header {
  background-color: #2d3a4b;
  color: #fff;
  text-align: center;
  height: 100px;
}

.el-aside {
  background-color: #545c64;
  color: #fff;
  text-align: center;
  height: 100vh;
}

.el-main {
  // background-color: #e9eef3;
  color: #333;
  text-align: center;
  // line-height: 160px;
  height: 100vh;
}
</style>
