import Vue from 'vue';
import merge from 'lodash/merge';
import ToastComponent from './tpl';

let instance;
// 对于toast的默认配置
let defaultConfig = {};

// 创建Vue子实例，参数为包含template、script->data的vue
const ToastConstructor = Vue.extend(ToastComponent);

// 初始化挂载、append到body
const initInstance = () => {
  instance = new ToastConstructor({
    el: document.createElement('div'),
  });
  document.body.appendChild(instance.$el);
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
let SHOW_ONE = false;
const Toast = (options = {}) => {
  // 当前已有显示的toast，则不响应
  if (!SHOW_ONE) {
    SHOW_ONE = true;
    initInstance();
    merge(instance.$data, defaultConfig);

    // merge(instance.$data, options);
    instance.html = typeof options === 'string' ? options : options.html;
    instance.position = options.position || 'center';
    instance.duration = options.duration || 3000;
    // instance.html = options.html || '';
    // 此时虽然赋值了，但是DOM不会立即更新，再nextTick中获取到的才是数据更新后的东西
    // 数据更改后的回调，数据发生改变再调用
    Vue.nextTick(() => {
      instance.visible = true;
      instance.$el.removeEventListener('transitionend', removeDom);
      (instance.timer = setTimeout(() => {
        instance.close();
        SHOW_ONE = false;
      }, instance.duration));
      instance.timer = null;
    });
  }
};
export default {
  install(config = {}) {
    defaultConfig = config;
    Vue.prototype.$toast = Toast;
  },
};
