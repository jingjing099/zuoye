<template>
  <div class="mylist">
    <div class="top">
      <img src="../../public/7d2fbf2e6f77b05db1b9fa25392b1b4.png" alt="" />
      <span v-if="!isCollapse">OA管理系统</span>
    </div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      background-color="#7aabf6"
      text-color="#fff"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  props: ["isCollapse"],
  data() {
    return {
      // isCollapse: false
    }
  }
}
</script>
<style lang="scss" scoped>
.mylist {
  overflow: hidden;
}
.top {
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
  > img {
    width: 50px;
    height: 50px;
  }
}
</style>
