<template>
  <div class="top">
    <span class="el-icon-s-fold" @click="to"></span>
    <div class="right">
      <ul>
        <li v-for="(item, index) in arr" :key="index">
          <span :class="item.icon"></span>
          <p>{{ item.total }}</p>
        </li>
      </ul>
      <p class="el-icon-rank"></p>
      <div class="user">
        <p class="el-icon-user"></p>
        <p>超级管理员</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [
        {
          icon: "el-icon-s-flag",
          total: 10
        },
        {
          icon: "el-icon-message-solid",
          total: 10
        },
        {
          icon: "el-icon-s-promotion",
          total: 10
        }
      ],
      isCollapse: false
    }
  },
  methods: {
    to() {
      this.isCollapse = !this.isCollapse
      this.$emit("to", this.isCollapse)
      // console.log(this.isCollapse)
      // console.log(!this.isCollapse)
    }
  }
}
</script>
<style lang="scss" scoped>
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 55px;
  color: #cecece;
  font-size: 18px;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
  padding: 0 20px;
  .right {
    display: flex;
    ul {
      display: flex;
      li {
        position: relative;
        line-height: 55px;
        width: 40px;
        p {
          position: absolute;
          top: 4px;
          right: 10px;
          color: #fff;
          width: 20px;
          height: 20px;
          border-radius: 5px;
          font-size: 12px;
          line-height: 20px;
          text-align: center;
        }
        &:nth-of-type(1) {
          p {
            background: #f77d6c;
          }
        }
        &:nth-of-type(2) {
          p {
            background: #f4c438;
          }
        }
        &:nth-of-type(3) {
          p {
            background: #c2c2fb;
          }
        }
      }
    }
    .el-icon-rank {
      transform: rotate(-45deg);
      line-height: 35px;
      width: 40px;
    }
    .user {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-left: -15px;
      .el-icon-user {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 1px solid #cecece;
        text-align: center;
        line-height: 30px;
        margin-right: 5px;
      }
    }
  }
}
</style>
