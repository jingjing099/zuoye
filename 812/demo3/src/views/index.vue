<template>
  <div class="index">
    <!-- 轮播图 -->
    <div class="d">
      <div class="top">
        <banner :bannerlist="bannerlist"></banner>
      </div>
    </div>
    <!-- 列表 -->
    <div class="box">
      <div class="title">手机</div>
      <div class="item">
        <img
          class="img"
          src="http://101.132.181.9:3000/public/imgs/phone/phone.png"
          alt=""
        />
        <div class="right">
          <mylist
            v-for="(item, index) in phonelist"
            :key="index"
            :item="item"
            @click.native="to(item)"
          ></mylist>
          <!-- 浏览更多 -->
          <browsemore></browsemore>
        </div>
      </div>
      <div class="title">
        家电
        <span class="text"
          ><span class="change" @mouseenter="move">热门</span
          ><span class="change" @mouseenter="move1">电视影音</span></span
        >
      </div>
      <div class="item">
        <div class="timg">
          <img
            class="img2 active"
            src="http://101.132.181.9:3000/public/imgs/appliance/appliance-promo1.png"
            alt=""
          />
          <img
            class="img2 active"
            src="http://101.132.181.9:3000/public/imgs/appliance/appliance-promo2.png"
            alt=""
          />
        </div>
        <!-- <div>
          router
        </div> -->
        <div class="right">
          <mylist
            v-for="(item, index) in televisionlist"
            :key="index"
            :item="item"
            v-show="title == '热门'"
          ></mylist>
          <mylist
            v-for="(item, index) in TVhotlist"
            :key="item.product_id"
            :item="item"
            v-show="title == '电视影音'"
          ></mylist>
          <!-- 浏览更多 -->
          <browsemore></browsemore>
        </div>
      </div>
      <div class="title">
        配件
        <span class="text">
          <span
            class="change"
            @mouseenter="move3(item.id)"
            v-for="(item, index) in arr"
            :key="index"
          >
            {{ item.title }}
          </span>
        </span>
      </div>
      <div class="item">
        <div class="timg">
          <img
            class="img2 active"
            src="http://101.132.181.9:3000/public/imgs/accessory/accessory-promo1.png"
            alt=""
          />
          <img
            class="img2 active"
            src="http://101.132.181.9:3000/public/imgs/accessory/accessory-promo2.png"
            alt=""
          />
        </div>
        <!-- <div>
          router
        </div> -->
        <div class="right">
          <mylist
            v-for="(item, index) in Accessorieslist"
            :key="index"
            :item="item"
            v-show="changeid == 1"
          ></mylist>
          <mylist
            v-for="item in smartlist"
            :key="item.product_id"
            :item="item"
            v-show="changeid == 2"
          ></mylist>
          <mylist
            v-for="item in chargerlist"
            :key="item.product_id"
            :item="item"
            v-show="changeid == 3"
          ></mylist>
          <!-- 浏览更多 -->
          <browsemore></browsemore>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import banner from "@/components/banner";
import mylist from "@/components/mylist";
import browsemore from "@/components/browsemore";
export default {
  components: {
    banner,
    mylist,
    browsemore,
  },
  data() {
    return {
      bannerlist: [], //轮播图
      phonelist: [], //手机
      televisionlist: [], //家电  电视影视
      TVhotlist: [], //家电  热门
      title: "热门",
      arr: [
        { id: 1, title: "热门" },
        { id: 2, title: "保护套" },
        { id: 3, title: "充电器" },
      ],
      changeid: 1,
      Accessorieslist: [], //配件热门
      smartlist: [], //配件 保护套
      chargerlist: [], //配件 充电器
    };
  },
  created() {
    // 轮播图
    this.getBanner();
    // 手机
    this.getPhone();
    // 家电
    this.getTelevision();
    this.getTvhot();
    // 配件
    this.getAccessories();
    this.getSmartcover();
    this.getCharger();
  },
  methods: {
    // 购车页面
    to(val){
      // console.log(1);
      console.log(val);
      // this.$router.push('shapping')
    },
    // 配件热门
    getAccessories() {
      this.$axios
        .post("product/getHotProduct", {
          categoryName: ["保护套", "保护膜", "充电器", "充电宝"],
        })
        .then((res) => {
          console.log(res);
          this.Accessorieslist = res.data.Product;
        });
    },
    // 配件 保护套
    getSmartcover() {
      this.$axios
        .post("product/getPromoProduct", { categoryName: "保护套" })
        .then((res) => {
          this.smartlist = res.data.Product;
        });
    },
    // 配件 充电器
    getCharger() {
      this.$axios
        .post("product/getPromoProduct", { categoryName: "充电器" })
        .then((res) => {
          this.chargerlist = res.data.Product;
        });
    },
    move3(id) {
      this.changeid = id;
    },
    move() {
      console.log(1);
      this.title = "热门";
    },
    move1() {
      console.log(1);
      this.title = "电视影音";
    },
    // 轮播图
    getBanner() {
      this.$axios.post("resources/carousel").then((res) => {
        // console.log(res);
        this.bannerlist = res.data.carousel;
      });
    },
    // 手机区域
    getPhone() {
      this.$axios
        .post("product/getPromoProduct", { categoryName: "手机" })
        .then((res) => {
          // console.log(res);
          this.phonelist = res.data.Product;
        });
    },
    // 家电  电视影视
    getTelevision() {
      this.$axios
        .post("product/getPromoProduct", { categoryName: "电视机" })
        .then((res) => {
          // console.log(res);
          this.televisionlist = res.data.Product;
        });
    },
    // 家电   热门
    getTvhot() {
      this.$axios
        .post("product/getHotProduct", {
          categoryName: ["电视机", "空调", "洗衣机"],
        })
        .then((res) => {
          console.log(res);
          this.TVhotlist = res.data.Product;
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.d {
  width: 100%;
  height: 100%;
  background: #fff;
}
.top {
  width: 1225px;
}
.index {
  background: #f5f5f5;
  width: 100%;
  height: 100%;
}
.box {
  margin-top: 30px;
  width: 1225px;
  box-sizing: border-box;
  .title {
    width: 100%;
    text-align: left;
    font-size: 25px;
    margin-bottom: 10px;
    .text {
      float: right;
      font-size: 19px;
      span {
        margin: 0 10px;
      }
    }
  }
  .change:hover {
    color: #ff6700;
    text-decoration: underline;
    // pointer-events: auto;
  }
  .item {
    transition: all 0.15s linear;
    width: 100%;
    .img {
      float: left;
      width: 234px;
      height: 617px;
    }
    .timg {
      float: left;
      .img2 {
        display: block;
        width: 234px;
        height: 300px;
        margin: 0 0 14px;
      }
    }
  }
}
.active:hover {
  box-shadow: -5px 5px 10px #ccc;
  transform: translate3d(0, -3px, 0);
}
</style>