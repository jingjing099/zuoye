<template>
  <div class="banner">
    <!-- 轮播图 -->
    <el-carousel height="500px" width="1225px">
      <el-carousel-item v-for="(item,index) in bannerlist" :key="index">
        <img :src="item.imgPath" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
    props:['bannerlist'],
    data() {
        return {
            
        }
    },
}
</script>
<style lang="scss" scoped>
img{
    width: 1225px;
}
</style>