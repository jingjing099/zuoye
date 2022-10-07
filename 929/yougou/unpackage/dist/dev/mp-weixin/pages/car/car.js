"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  setup() {
    const data = common_vendor.reactive({
      goods: [],
      checkedall: false,
      num: 0,
      nums: 0
    });
    const payment = () => {
      common_vendor.index.navigateTo({
        url: "/pages/payment/payment"
      });
    };
    data.num = common_vendor.computed$1(() => {
      let sum = 0;
      data.goods.forEach((item) => {
        if (item.status) {
          sum += item.price * item.number;
        }
      });
      return sum;
    });
    data.nums = common_vendor.computed$1(() => {
      let sum = 0;
      data.goods.forEach((item) => {
        if (item.status) {
          sum += item.number;
        }
      });
      return sum;
    });
    const ck = (index) => {
      data.goods[index].status = !data.goods[index].status;
      data.checkedall = data.goods.every((item) => item.status);
    };
    const cks = () => {
      data.checkedall = !data.checkedall;
      data.goods.forEach((item) => {
        item.status = data.checkedall;
      });
    };
    const valChange = (val, index) => {
      data.goods[index].number = val;
      common_vendor.index.setStorage({
        key: "goods",
        data: JSON.stringify(data.goods)
      });
    };
    return __spreadProps(__spreadValues({
      payment,
      ck,
      cks
    }, common_vendor.toRefs(data)), {
      valChange
    });
  },
  onShow() {
    common_vendor.index.getStorage({
      key: "goods",
      success: (res) => {
        this.goods = JSON.parse(res.data);
      }
    });
  }
};
if (!Array) {
  const _easycom_u_checkbox2 = common_vendor.resolveComponent("u-checkbox");
  const _easycom_u_number_box2 = common_vendor.resolveComponent("u-number-box");
  (_easycom_u_checkbox2 + _easycom_u_number_box2)();
}
const _easycom_u_checkbox = () => "../../uni_modules/vk-uview-ui/components/u-checkbox/u-checkbox.js";
const _easycom_u_number_box = () => "../../uni_modules/vk-uview-ui/components/u-number-box/u-number-box.js";
if (!Math) {
  (_easycom_u_checkbox + _easycom_u_number_box)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f(_ctx.goods, (item, index, i0) => {
      return {
        a: common_vendor.o(($event) => $setup.ck(index)),
        b: "02f0ae18-0-" + i0,
        c: common_vendor.o(($event) => item.status = $event),
        d: common_vendor.p({
          modelValue: item.status
        }),
        e: item.url,
        f: common_vendor.t(item.name),
        g: common_vendor.t(item.price),
        h: common_vendor.o(($event) => $setup.valChange(item.number, index)),
        i: "02f0ae18-1-" + i0,
        j: common_vendor.o(($event) => item.number = $event),
        k: common_vendor.p({
          min: 1,
          modelValue: item.number
        }),
        l: index
      };
    }),
    b: common_vendor.o($setup.cks),
    c: common_vendor.o(($event) => _ctx.checkedall = $event),
    d: common_vendor.p({
      modelValue: _ctx.checkedall
    }),
    e: common_vendor.t(_ctx.num),
    f: common_vendor.t(_ctx.nums),
    g: common_vendor.o((...args) => $setup.payment && $setup.payment(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/\u7EC3\u4E60/\u4F5C\u4E1A/BestBuy-mall/pages/car/car.vue"]]);
wx.createPage(MiniProgramPage);
