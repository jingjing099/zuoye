<template>
  <div class="home">
    <header class="header">
        <myheader class="myheader"></myheader>
    </header>
    <main class="main">      
        <top></top>
        <router-view></router-view>
    </main>
    <footer class="footer">
        <bot></bot>
    </footer>
  </div>
</template>

<script>
import myheader from '@/components/myheader';
import top from '@/components/top'
import bot from '@/components/footer'
// import axios from 'axios';
export default {
  components: {
    myheader,
    top,
    bot
  },
};
</script>
<style lang="scss" scoped>
.header{
  color: #afafaf;
  text-align: center;
  padding: 0;
  width: 100%;
  background-color: #3d3d3d;
}
.footer {
  color: #fff;
  text-align: center;
  background: #2f2f2f;
  color: #fff;
  min-height: 400px;
}
.main {
  color: #333;
  text-align: center;  
  height: 100%;
  // margin-bottom: 10px;
}
</style>