<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#304156"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item v-for="(item, index) in arr" :key="index" @click="to(item.path)">
        <i :class="item.icon"></i>
        <span slot="title">{{ item.title }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [
        {
          icon: "el-icon-user",
          title: "个人中心",
          path: "/my",
        },
        {
          icon: "el-icon-user",
          title: "数据可视化",
          path: "/back",
        },
        {
          icon: "el-icon-user",
          title: "用户",
          path: "/user",
          from: [
            {
              icon: "el-icon-user",
              title: "员工管理",
              path: "/staff",
            },{
              icon: "el-icon-user",
              title: "角色列表",
              path: "/staff",
            },{
              icon: "el-icon-user",
              title: "权限列表",
              path: "/staff",
            }
          ],
        },
        {
          icon: "el-icon-tickets",
          title: "文章",
          path: "/detail",
          from:[
            {
                icon:'el-icon-notebook-1',
                title:'文章排名',
            },{
                icon:'el-icon-notebook-2',
                title:'创建文章'
            }
          ]
        },
      ],
    };
  },
  methods: {
    to(i){
        console.log(i);
        this.$router.push(`${i}`)
    }
  },
};
</script>