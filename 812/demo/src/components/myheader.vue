<template>
  <div class="myheader">
    <!-- 头部 -->
    <img
      src="https://img2.baidu.com/it/u=3635204433,939208923&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1660496400&t=99b5b7dc93ca602a4fc39886c4cbe473"
      alt=""
    />
    <!-- 循环 -->
    <ul>
      <li
        v-for="(item, index) in arr"
        :key="index"
        @click="change(index)"
        :class="{ active: activeIndex == index }"
      >
        <span :class="item.icon">{{ item.title }}</span>
      </li>
    </ul>
    <!-- 图片 -->
    <img
      src="https://img1.baidu.com/it/u=2503395565,3938769117&fm=253&fmt=auto&app=138&f=JPEG?w=333&h=500"
      alt=""
    />
  </div>
</template>
<script>
export default {
    props:['arr','activeIndex'],
    methods: {
      change(i){
        console.log(i);
        this.$emit('change',i)
      }
    },
}
</script>
<style lang="scss" scoped>.active{
  border-bottom: 5px solid #48dfbd;
}
.myheader {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
img {
  width: 100px;
  height: 50px;
}
ul {
  width: 700px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  li {
    line-height: 55px;
  }
}
</style>