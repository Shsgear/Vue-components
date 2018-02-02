/* eslint-disable */
import Vue from 'vue';
import merge from 'lodash/merge';
import ToastComponent from './tpl';

let instance;
// 对于toast的默认配置
let defaultConfig = {};
// toast集合
let toastQueue = [];

// 创建Vue子实例，参数为包含template、script->data的vue
const ToastConstructor = Vue.extend(ToastComponent);

// 从toast队列中获取第一个Toast实例，没有则new一个实例
// const getAnInstance = () => {
//   if (toastQueue.length > 0) {
//     instance = toastQueue.shift();
//     return instance;
//   } else {
//     return initInstance();
//   }
// }
const pushAnInstance = instance => {
  if (instance) {
    toastQueue.push(instance);
  }
}


// new一个toast实例,初始化挂载、append到body
const initInstance = () => {
  instance = new ToastConstructor({
    el: document.createElement('div'),
  });
  document.body.appendChild(instance.$el);
  pushAnInstance(instance);
  return instance;
};

const removeDom = (event) => {
  if (event.target.parentNode) {
    event.target.parentNode.removeChild(event.target);
  }
};
// 扩展Toast类的关闭方法
/* eslint-disable func-names */
ToastConstructor.prototype.close = function () {
  this.visible = false;
  this.$el.addEventListener('transitionend', removeDom);
};
// let SHOW_ONE = false;
const Toast = (options = {}) => {
  // <废弃：当前已有显示的toast，则不响应
  // if (!SHOW_ONE) {
  //   SHOW_ONE = true;
  //废弃>
  // feature：找到toastQueue里上一条，关闭它。每个toast实例的计时器独立
  let instance = initInstance();
  let prevInstance;
  if (toastQueue.length > 1) {
    prevInstance = toastQueue.shift();
    prevInstance.close();
    clearTimeout(prevInstance.timer);
  }
  merge(instance.$data, defaultConfig);
  // merge(instance.$data, options);
  instance.html = typeof options === 'string' ? options : options.html;
  instance.position = options.position || 'center';
  instance.duration = options.duration || 3000;
  // 此时虽然赋值了，但是DOM不会立即更新，再nextTick中获取到的才是数据更新后的东西
  // 数据更改后的回调，数据发生改变再调用
  // 异步隐藏
  Vue.nextTick(() => {
    instance.visible = true;
    instance.$el.removeEventListener('transitionend', removeDom);
    (instance.timer = setTimeout(() => {
      instance.close();
    }, instance.duration));

  });
};
export default {
  install(config = {}) {
    defaultConfig = config;
    Vue.prototype.$toast = Toast;
  },
};
