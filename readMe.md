# TS实战：封装并发布一个npm包

1.`npx tsc --init`：生成ts的配置文件，并设置配置项

注意！package.json的main 是dist下的文件，而不是src下的

```json
  {"main": "./dist/test-array-map.js",}
```

2.`npm i typescript -D`

3.执行`tsc`，得到编译后的js文件

4.进入dist文件夹，在终端输入`node`，进入node环境，进行测试

```javascript
const arraymap=require("./test-array-map")
// 这里只能写相对模块，因为绝对模块是在node_modules中查找
// 详情可见模块相对引入和非相对引入的区别
arraymap([1,2],(item)=>item+3)
```

5.新建example文件夹，在ts环境中测试

执行`tsc test.ts`，得到编译后的js文件（因为tsconfig里的exclude写了不对example里的ts文件进行编译，所以需要单独指定一下要编译的文件）

```typescript
// 导出模块
export=arraymap

// 引入模块
import arraymap = require('../dist/test-array-map')
```

6.创建`.npmignore`文件，指定不需要发布的文件夹

7.编译项目`npx tsc`，登录npm ，然后发布

```javascript
npm login
npm publish
// 如果登录不上，切换淘宝镜像为Npm官方镜像
```

8.重新下载刚刚发布的npm包进行测试

需要将当前的包名进行修改（引入的包不能和当前包名相同）

```javascript
npm i test-array-map-wjx -D
// 引入第三方包的时候，需要看下它的package.json中的main
// 这是该包的入口文件
```

9.在example/test.ts中直接引入第三方包的函数进行使用，测试

```typescript
// import arraymap = require('../dist/test-array-map')
// 直接使用下载的第三方包 非相对路径
import arrayMap = require('test-array-map-wjx')

console.log(
  arrayMap([1, 2], (item) => item + 3).forEach((item) => {
    console.log(item)
  }),
)

// npx tsc test.ts
// node test.js
```

10.重新编译`npx tsc`，修改版本号，再次发布

