## require、import的不同

问题：在实现mock数据的时候，需要引入文件作为变量

``` js
const appData = require('./data.json')
const seller = appData.seller
const goods = appData.goods
const ratings = appData.ratings

```
 也可以使用 import 引入，那么这两种引入方法有何区别呢？
 
 [知乎参考回答](https://www.zhihu.com/question/56820346/answer/150724784)
 
 ## 知乎一下
 
 1. 血统不同
 	require/exports 是js社区开发者自己草拟的规则，AMD、CMD、CommonJS等
 	import/export 是 ES6 中引入的
 	
 2. 虽然最后是一样的，但是后者需要babel转换  
 es6语法中，写 import/export 需要babel 编译为 require/exports 才能执行
 实际上是一样的
 
 3. 写法不同  
 	前者写法就三个  
 	后者很多种  

	``` js
	const fs = require('fs')
	exports.fs = fs
	module.exports = fs而 import/export 的写法就多种多样：import fs from 'fs'
	import {default as fs} from 'fs'
	import * as fs from 'fs'
	import {readFile} from 'fs'
	import {readFile as read} from 'fs'
	import fs, {readFile} from 'fs'
	
	export default fs
	export const fs
	export function readFile
	export {readFile, read}
	export * from 'fs'
	```

 
 4. 绑定值
 	require/exports 是值传递（复制）、引用传递（浅拷贝）
 	import/export 相当于，找的还是你，强绑定