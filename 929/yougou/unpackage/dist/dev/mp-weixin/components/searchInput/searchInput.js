"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "searchInput",
  setup() {
    const toSearch = () => {
      common_vendor.index.navigateTo({
        url: "/pages/searchView/searchView"
      });
    };
    return {
      toSearch
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $setup.toSearch && $setup.toSearch(...args))
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/\u7EC3\u4E60/\u4F5C\u4E1A/BestBuy-mall/components/searchInput/searchInput.vue"]]);
wx.createComponent(Component);
