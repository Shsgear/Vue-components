# vue-components

> Lightweight mobile componenets for Vue2.0 , include Toast、Alert、Confirm、Indicator、Modal(message box).

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# vue-components

> 一款轻量级的Vue2.0组件。包括Toast、Alert、Toast、Alert、Confirm、Indicator、Modal（模态框，或者叫消息盒子），它十分小巧，只保留了最基础的功能。

## 开始

``` bash
# 安装依赖
npm install

# 开启热服务，默认localhost:8080
npm run dev

# 编译并压缩
npm run build

# 编译并压缩，查看模块打包分析报告
npm run build --report
```
## 使用

> 入口文件引入Toast
``` javascript
import { Toast } from './components';
Vue.use(Toast);
```
>在.vue文件中使用

初期已经将组件注册在Vue的原型中，所以可以直接使用
``` javascript
this.$toast('hello world');
```

## 文档
- **Toast**

字符串形式
```javascript
this.$toast('你好');
```
对象
```javascript
this.$toast({
  content: '你好', // 内容
  position: 'bottom', // 位置
  duration: 4000 // 持续时间
});
```

 key       |    value     |    description  | default
| :---     | :------------| :------: | :----------:
| content  | string       |  内容文字   |
| position | 'center' or 'top' or 'bottom' |  显示位置  |  center
| duration | number | 持续时间（毫秒）  | 3000
| html     | string | 可配置的html     | （和content同时存在时优先级高）

