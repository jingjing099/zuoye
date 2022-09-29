"use strict";
var common_vendor = require("../../common/vendor.js");
var api_api = require("../../api/api.js");
require("../../request/request.js");
if (!Array) {
  const _easycom_u_swiper2 = common_vendor.resolveComponent("u-swiper");
  _easycom_u_swiper2();
}
const _easycom_u_swiper = () => "../../uni_modules/vk-uview-ui/components/u-swiper/u-swiper.js";
if (!Math) {
  _easycom_u_swiper();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    api_api.getSwiper().then((res) => {
      console.log(res);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          list: _ctx.list
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/\u7EC3\u4E60/\u4F5C\u4E1A/zuoye/929/yougou/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
