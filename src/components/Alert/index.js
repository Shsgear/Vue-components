import Vue from 'vue';
import merge from 'lodash/merge';
import AlertTemplate from './tpl';
// import iOSAlert from './ios-alert-components/Alert.vue';

let instance;
let defaultConfig = {};

const AlertConstructor = Vue.extend(AlertTemplate);


const initInstance = () => {
  instance = new AlertConstructor({
    el: document.createElement('div'),
  });
  document.body.appendChild(instance.$el);
};

// const removeDom = (event) => {
//   if (event.target.parentNode) {
//     event.target.parentNode.removeChild(event.target);
//   }
// };

const Alert = (options = {}) => {
  initInstance();
  merge(instance.$data, defaultConfig);
  instance.message = (typeof options === 'string') ? options : options.message;
  instance.title = options.title || '提示';
  instance.confirmText = options.confirmText || '确定';
  instance.clickStatus = '';
  Vue.nextTick(() => {
    instance.show = true;
  });
  return new Promise((res) => {

    if (instance.clickStatus === 'resolve') {
      res('resolve');
    }
  });
};
/* eslint-disable no-shadow  */
/* eslint-disable no-param-reassign  */
export default {
  install(Vue, config = {}) {
    defaultConfig = config;
    Vue.prototype.$alert = Alert;
  },
};

