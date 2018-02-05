// service
import $backdrop from './services/backdrop';
import $dialog from './services/popup/dialog';
import $loading from './services/loading/index';
/* eslint-disable */
export default function install (Vue, options) {
  // services
  Vue.prototype.$backdrop = window.$backdrop = $backdrop;
  Vue.prototype.$dialog = window.$dialog = $dialog;
  Vue.prototype.$loading = window.$loading = $loading;
}
