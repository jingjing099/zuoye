<template>
  <div class="home">
    <!-- 布局容器 -->
    <el-container>
      <el-header> 
        <myheader :arr="arr" :activeIndex="activeIndex" @change="change"></myheader>       
      </el-header>
      <el-container>
        <el-aside width="200px">
          <mylist :str="str" @strchange="strchange" :strIndex="strIndex"></mylist>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import myheader from '@/components/myheader.vue';
import mylist from '@/components/mylist.vue';
import axios from 'axios';
export default {
  components:{
    myheader,
    mylist
  },
  data() {
    return {
      // arr:[
        // {
        //   title:'用户',
        //   icon:'el-icon-user-solid'
        // },{
        //   title:'教学',
        //   icon:'el-icon-user-solid'
        // },{
        //   title:'题库',
        //   icon:'el-icon-user-solid'
        // },{
        //   title:'运营',
        //   icon:'el-icon-user-solid'
        // },{
        //   title:'营销',
        //   icon:'el-icon-user-solid'
        // },{
        //   title:'商品',
        //   icon:'el-icon-user-solid'
        // },{
        //   title:'财务',
        //   icon:'el-icon-user-solid'
        // },{
        //   title:'统计',
        //   icon:'el-icon-user-solid'
        // },{
        //   title:'系统',
        //   icon:'el-icon-user-solid'
        // }
      // ],
      activeIndex:0,
      // str:['学员管理','讲师管理','助教管理'],
      str:[],
      strIndex:0,
      arr:[]
    }
  },
  methods: {
    change(i){
      console.log(i);
      this.activeIndex=i
    },
    strchange(index){
      this.strIndex=index
      if(this.strIndex==2){
        this.$router.push('/about')
      }else if(this.strIndex==1){
        this.$router.push('/teacher')
      }else{
        this.$router.push('/students')
      }
    }
  },
  created() {
    axios.get('/getServeData').then(res=>{
      console.log(res);
      this.arr=res.data.list
    })
    axios.get('/mylist').then(res=>{
      console.log(res);
      this.str=res.data.list
    })
  },
};
</script>
<style lang="scss" scoped>

.el-header{
  background-color: #253cc5;
  color: rgb(224, 224, 224);
  text-align: center;
  line-height: 60px;
  // display: flex;
  // justify-content: space-around;
  // align-items: center;
  
}

.el-aside {
  /* background-color: #d3dce6;
  color: #333; */
  text-align: center;
  height: 100vh;
  border-right: 1px solid #ccc;
  
}

.el-main {
  padding: 0;
  /* background-color: #e9eef3;
  color: #333; */
  // text-align: center;
  height: 100vh;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>