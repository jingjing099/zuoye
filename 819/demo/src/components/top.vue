<template>
  <div class="top">
    <div>
      <span class="el-icon-s-unfold"></span>
      <span>个人中心</span>
    </div>
    <div class="right">
      <span class="el-icon-wind-power"></span>
      <span class="el-icon-search"></span>
      <span class="el-icon-rank" @click="screen"></span>
      <span class="el-icon-setting"></span>
      <span class="el-icon-money"></span>
      <img
        src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png"
        alt=""
      />
    </div>
  </div>
</template>
<script>
export default {
    methods: {
        screen() {
      // 如果不允许进入全屏，发出不允许提示
      let element = document.documentElement;
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
    },
    },
}
</script>
<style lang="scss" scoped>
.top {
  width: 100%;
  height: 80px;
  background: #fff;
  color: #666666 !important;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
}
.right {
  img {
    width: 50px;
    height: 50px;
    text-align: center;
    vertical-align: bottom;
  }
}
</style>