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

> 一款轻量级的Vue2.0组件。包括Toast、Alert、Confirm、Loading，它十分小巧，部分带有可配置的选项。

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
## 引入

> 入口文件引入Toast
``` javascript
import { Toast } from './service';
Vue.use(Toast);
```
>在.vue文件中使用

初期已经将组件注册在Vue的原型中，所以可以直接使用
``` javascript
this.$toast('hello world');
```

## 使用
- **Toast**

字符串形式
```javascript
this.$toast('你好');
```
对象
```javascript
this.$toast({
  html: '你好', // 内容
  position: 'bottom', // 位置
  duration: 4000 // 持续时间
});
```

 key       |    value     |    description  | default
| :---     | :------------| :------: | :----------:
| position | 'center' or 'top' or 'bottom' |  显示位置  |  center
| duration | number | 持续时间（毫秒）  | 3000
| html     | string | 可配置的html     |

- **Alert和Confirm**
alert和confirm属于定制度较高的组件，只留有少量的配置
> 入口文件引入Dialog
``` javascript
import { Dialog } from './service';
Vue.use(Dialog);
```
>在.vue文件中使用

初期已经将组件注册在Vue的原型中，所以可以直接使用
``` javascript
this.$dialog.alert('hello world');
```
alert可配置的选项,支持Promise回调
``` javascript
this.$dialog.alert({
  title: '这是alert header',
  content: '这是alert content',
  okText: '确定',
}).then(res => {
  this.$toast('点击了确定');
});
```
 key       |    value     |    description  | default
| :---     | :------------| :------: | :----------:
| title | String  |  标题  |  ''
| content | String | 内容  | ''
| okText     | String | 确定按钮文字    | '确定'
| showClose  | Boolean| 是否显示关闭按钮| false

confirm可配置的选项,支持Promise回调
``` javascript
this.$dialog.confirm({
  title: '这是confirm header',
  content: '这是confirm content',
  okText: 'ok',
  cancelText: 'cancel',
}).then(res => {
  this.$toast('点击了确定');
}, rej => {
  this.$toast('点击了取消');
});
```
 key       |    value     |    description  | default
| :---     | :------------| :------: | :----------:
| title | String  |  标题  |  ''
| content | String | 内容  | ''
| okText     | String | 确定按钮文字    | '确定'
| showClose  | Boolean| 是否显示关闭按钮| false
| cancelText | String | 取消按钮文字| '取消'


- **Loading**
``` javascript
import { Loading } from './service';
Vue.use(Loading);
```
>在.vue文件中使用

初期已经将组件注册在Vue的原型中，所以可以直接使用
``` javascript
this.$loading.open();
```
在使用open方法后，loading会一直存在，必须手动关闭
``` javascript
this.$loading.close();
```
loading可配置的选项,支持Promise回调
``` javascript
this.$loading({
  fullScreen: true,
  animationType:'default',
  text: '正在加载...',
}).then(res => {
  this.$toast('点击了确定');
});
```
 key       |    value     |    description  | default
| :---     | :------------| :------: | :----------:
| fullScreen | Boolean  |  是否全屏遮罩  |  false,
| animationType | String | 加载动画效果  | 'default'('ring')
| text     | String | 加载文字提示    | '加载中'


