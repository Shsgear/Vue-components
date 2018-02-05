import Vue from 'vue';
import { createElement } from '../util';
import LoadingTpl from './Loading';

/* eslint-disable class-methods-use-this */
let vm;
class Loading {
  constructor() {
    this.type = 'loading';
  }
  open(options) {
    const maker = `sun-${this.type}`;
    createElement(maker);
    const selector = `[${maker}]`;
    vm = new Vue(LoadingTpl).$mount(selector);
    vm.$el.setAttribute('sun-loading', '');
    return vm.open(options);
  }

  close() {
    if (vm) vm.close();
  }
}
export default new Loading();
