<template>
  <div class="goods">
    <!-- 头部 -->
    <goodstop @to="to"></goodstop>
    <!-- 列表 -->
    <div class="main">
      <div class="box">
        <mylist
          v-for="(item, index) in list"
          :key="index"
          :item="item"
          class="mylist"
        ></mylist>
      </div>
      <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        background
        layout="prev, pager, next"
        :total="list.length"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
import goodstop from "@/components/goodstop";
import mylist from "@/components/mylist";
export default {
  components: {
    goodstop,
    mylist,
  },
  data() {
    return {
      list: [],
      flist: [],
      form: {
        currentPage: 1,
        pageSize: 15,
      },
    };
  },
  watch: {
    $route: {
      deep: true,
      immediate: true,
      handler(val) {
        if (val.query.search != '') {
          this.$axios
            .post("product/getProductBySearch", {
              search: this.$route.query.obj,
              currentPage: this.form.currentPage,
              pageSize: this.form.pageSize,
            })
            .then((res) => {
              console.log(res);
                this.flist = res.data.Product;
                console.log(this.flist);
                this.list = this.flist;
            });
        }
      },
    },
  },
  methods: {
    // getSearch() {
    //   this.$axios
    //     .post("product/getProductBySearch", {
    //       search: this.$route.query.obj,
    //       currentPage: this.form.currentPage,
    //       pageSize: this.form.pageSize,
    //     })
    //     .then((res) => {
    //       console.log(res);
    //       if(this.$route.query.obj==''){
    //         return
    //       }else{
    //         this.flist=res.data.Product
    //         console.log(this.flist);
    //         // this.list=this.flist
    //       }
    //     });
    // },
    getData() {
      // let currentPage=1
      // let pageSize=15
      this.$axios.post("product/getAllProduct", this.form).then((res) => {
        console.log(res);
        this.list = res.data.Product;
        this.flist = res.data.Product;
        // console.log(this.list);
      });
    },
    to(obj) {
      if (obj.i == -1) {
        this.getData();
      } else {
        this.$axios
          .post("product/getPromoProduct", { categoryName: obj.name })
          .then((res) => {
            console.log(res);
            this.list = res.data.Product;
            this.flist = res.data.Product;
            // console.log(this.list);
          });
      }
    },
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.form.pageSize = val;
      this.getData();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.form.currentPage = val;
      this.getData();
    },
  },
  created() {
    // console.log(this);
    this.getData();
  },
  // updated() {
  //   this.getSearch()
  // },
};
</script>
<style lang="scss" scoped>
.goods {
  overflow: hidden;
  background: #f5f5f5;
}
.main {
  width: 1225px;
  overflow: hidden;
}
::v-deep .box {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  .mylist {
    width: 230px;
  }
}
</style>