"use strict";
var request_request = require("../request/request.js");
const getSwiper = () => {
  return request_request.request("home/swiperdata").then((res) => res);
};
exports.getSwiper = getSwiper;
