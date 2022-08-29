<template>
  <div class="myheader">
    <h2>
      <span class="el-icon-s-unfold" @click="open"></span>
      后台管理系统
    </h2>
    <div>
      <span class="el-icon-rank active" @click="big"></span>
      <span>不懂温柔</span>
      <span class="el-icon-caret-bottom"></span>
    </div>
  </div>
</template>
<script>
export default {
  props: ["isCollapse"],
  data() {
    return {};
  },
  methods: {
    open() {
      this.isCollapse = !this.isCollapse;
      // console.log(this.isCollapse);
      this.$emit("open", this.isCollapse);
    },
    big() {
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
};
</script>
<style lang="scss" scoped>
.active {
  transform: rotate(45deg);
  font-size: 20px;
}
.myheader {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>