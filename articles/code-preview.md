## code preview

## 1.项目简介

手机端h5 美团外卖

## 2. 主要工作和疑难点汇总

### 2.1 主要工作

      		

##3. 业务逻辑梳理
### 3.1 项目哪几个page组成？有几个组件？  

```	
src
	commomon
		fonts 字体图标
		js
			date
			store
			util
				url 这个很重要，但是不会正则
		stylus
			base
			icon
			index
			mixin
	components
		cartcontrol
		food
		goods
		header
		ratings
		ratingselect
		seller
		shopcart
		split
		star
	router
		index
			goods 商品
			ratings 评论
			seller 商家
	app.vue
	main.js
```		

##4. 业务逻辑梳理



### 4.2 首页 

#### 4.2.1 APP.vue

首页阻止架构

	v-header
	tab
		goods
		ratings
		seller
	
urlParse 怎么做到
Object.assign 到底是如何实现的？

这个是干嘛的？

```html
<keep-alive>
  <router-view :seller="seller"></router-view>
</keep-alive>
```   
    
	
	

### 4.3 header 组件

结构：
	
	content-wrapper 	 内容
	bulletin-wrapper 公告栏
	background 背景图片
	transition  动画效果
	
动态展示小图标

```
<span class="icon" :class="classMap[seller.supports[0].type]"></span>

this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
```
	
使用 mixin 中的方法 bg-image

```css
.brand
    display: inline-block
    vertical-align: top
    width: 30px
    height: 18px
    bg-image('brand')
    background-size: 30px 18px
    background-repeat: no-repeat
```

fliter 属性怎么用

```css
.background
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      z-index: -1
      filter: blur(10px)	
```css

backdrop-filter: blur(10px)

	
### 4.4 goods

#### 4.4.1  组织架构

布局

	左侧 menu-wrapper
		ul li
		
	右侧 foods-wrapper
		ul li
		
	底部  shopcart
	底部	food

#### 4.4.2  shopcart

#### 4.4.3  cartcontrol

#### 4.4.4  food





### 4.5  rating

star,
split,
ratingselect


### 4.6  seller
