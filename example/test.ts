// import arraymap = require('../dist/test-array-map')
// 直接使用下载的第三方包 非相对路径
import arrayMap = require('test-array-map-wjx')

console.log(
  arrayMap([1, 2], (item) => item + 3).forEach((item) => {
    console.log(item)
  }),
)
