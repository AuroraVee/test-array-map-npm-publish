"use strict";
exports.__esModule = true;
// import arraymap = require('../dist/test-array-map')
// 直接使用下载的第三方包 非相对路径
var arrayMap = require("test-array-map-wjx");
console.log(arrayMap([1, 2], function (item) { return item + 3; }).forEach(function (item) {
    console.log(item);
}));
