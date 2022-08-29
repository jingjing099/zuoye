<template>
  <div class="goodstop">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>全部商品</el-breadcrumb-item>
      <el-breadcrumb-item>分类</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 分类列表 -->
    <div class="cif">
      <h3>分类</h3>
      <ul>
        <li @click="to('全部',-1)" :class="{ active: activeIndex == -1 }">全部</li>
        <li
          v-for="(item,index) in classlist"
          :key="index"
          @click="to(item.category_name,item.category_id)"
          :class="{ active: item.category_id == activeIndex }"
        >
          {{ item.category_name }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      classlist: [], //分类列表
      activeIndex: -1,
    };
  },
  methods: {
    to(name,i) {
      this.activeIndex = i;
      this.$emit('to',{name,i})
    },
    // 分类
    getclassification() {
      this.$axios.post("product/getCategory").then((res) => {
        console.log(res);
        this.classlist = res.data.category;
      });
    },
  },
  created() {
    // 分类列表
    this.getclassification();
  },
};
</script>
<style lang="scss" scoped>
.goodstop {
overflow: hidden;
box-sizing: border-box;
padding: 10px 10px 0;
  width: 1225px;
  background: #fff;
  .el-breadcrumb {
    margin: 25px 0;
    font-size: 20px;
  }
  .cif {
    text-align: left;
    h3 {
      display: inline-block;
      margin-right: 30px;
    }
    ul {
      display: inline-block;
      border: 1px solid #ccc;
      border-bottom: none;
      // line-height: 40px;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      li {
        display: inline-block;
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        padding: 10px 15px;
        &:last-of-type {
          border-right: none;
        }
      }
      li:hover {
        color: #409eff;
      }
    }
  }
}
.active {
  color: #409eff;
}
</style>