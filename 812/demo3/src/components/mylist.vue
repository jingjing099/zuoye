<template>
  <div class="mylist active">
    <img :src="item.product_picture" alt="" />
    <p>{{ item.product_name }}</p>
    <p>{{ item.product_title }}</p>
    <p>
      {{ item.product_selling_price }}<s>{{ item.product_price }}元</s>
    </p>
  </div>
</template>
<script>
export default {
  props: ["item"],
};
</script>
<style lang="scss" scoped>
.active:hover {
  box-shadow: -5px 5px 10px #ccc;
  transform: translate3d(0, -3px, 0);
}
.mylist {
  display: inline-block;
  // box-sizing: border-box;
  background: #fff;
  text-align: center;
  padding: 10px 0px 0px;
  width: 234px;
  height: 290px;
  margin: 0 0 14px 13px;
  img {
    margin: 15px 0;
    width: 160px;
    height: 160px;
  }
  p {
    &:nth-child(2) {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin: 0 2px;
    }
    &:nth-child(3) {
      color: #ccc;
      margin: 5px 0;
    }
    &:nth-child(4) {
      color: #ff945c;
    }
    s {
      color: #ccc;
      margin-left: 5px;
    }
  }
}
</style>