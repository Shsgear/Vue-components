import Vue from 'vue';
import merge from 'lodash/merge';
import ToastComponent from './tpl';

let instance;
// 对于toast的全局配置
let globalConfig = {};

// 创建Vue子实例，参数为组件
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
    merge(instance.$data, globalConfig);

    // merge(instance.$data, options);
    instance.content = typeof options === 'string' ? options : options.content;
    instance.position = options.position || 'center';
    instance.duration = options.duration || 3000;
    // 数据更改后的回调，数据发生改变就调用
    Vue.nextTick(() => {
      instance.visible = true;
      instance.$el.removeEventListener('transitionend', removeDom);
      (instance.timer = setTimeout(() => {
        instance.close();
        SHOW_ONE = false;
      }, instance.duration));
    });
  }
};
export default {
  install(Vue, config = {}) {
    globalConfig = config;
    Vue.prototype.$toast = Toast;
  },
};
