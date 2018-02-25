// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import fastClick from 'fastclick';
import install from './install';
import App from './App';
import router from './router';
import { Toast, MessageBox } from './components';
import SunRange from './components/Range/Range';

Vue.config.productionTip = false;
Vue.use(Toast);
Vue.use(MessageBox);
Vue.use(install);
Vue.component(MessageBox.name, MessageBox);
Vue.component(SunRange.name, SunRange);

fastClick.attach(document.body);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
