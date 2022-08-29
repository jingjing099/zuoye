<template>
  <div class="myheader">
    <div class="top">
      <div class="right">
        <div>
          <span>登录</span>
          |
          <span>注册</span>
        </div>
        <div>我的订单</div>
        <div>我的收藏</div>
        <div class="shop">
          <span class="el-icon-shopping-cart-full">购物车（0）</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
}
</script>
<style lang="scss" scoped>
.top {
  width: 1225px;
  height: 60px;
}
.right {
  width: 500px;
  float: right;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .shop {
    line-height: 60px;
    padding: 0 10px;
    background: #424242;
  }
}


</style>