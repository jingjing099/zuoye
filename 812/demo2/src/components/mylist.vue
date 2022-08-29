<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item v-for="(item,index) in arr" :key="index" @click="to(item)" :index="index">
        <i :class="item.icon"></i>
        <span slot="title">{{item.title}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            // arr:[
            //     {
            //         icon:'el-icon-s-home',
            //         title:'首页',
            //         path:'/index'
            //     },{
            //         icon:'el-icon-user-solid',
            //         title:'会员管理',
            //         path:'/vip'
            //     },{
            //         icon:'el-icon-s-cooperation',
            //         title:'供应商管理',
            //         path:'/supplier'
            //     },{
            //         icon:'el-icon-s-goods',
            //         title:'商品管理',
            //         path:'/goods'
            //     },{
            //         icon:'el-icon-user',
            //         title:'员工管理',
            //         path:'/staff'
            //     }
            // ],
            // activeindex:0
            arr:[]
        }
    },
    methods: {
        to(item){
            this.$router.push(`${item.path}`)
            // this.activeindex=index
            // console.log(1);
            this.$store.commit('tab/title', item.title)
        }
    },
    created() {
        axios.get('/getServeData').then((res)=>{
            console.log(res);
            this.arr=res.data.list
        })
    },
}
</script>