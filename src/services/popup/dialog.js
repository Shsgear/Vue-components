import Vue from 'vue';
import Alert from './Alert';
import Confirm from './Confirm';
import { createElement } from '../util';

let vm;
/* eslint-disable class-methods-use-this */
class Dialog {
  show(type, options) {
    const maker = `sun-${type}`;

    createElement(maker);
    const selector = `[${maker}]`;
    vm = new Vue(
      type === 'alert' ? Alert : Confirm,
    ).$mount(selector);
    vm.$el.setAttribute('sun-dialog', '');

    return vm.show(options);
  }

  alert(options) {
    return this.show('alert', options);
  }

  confirm(options) {
    return this.show('confirm', options);
  }

  hide() {
    if (vm) vm.hide();
  }
}

export default new Dialog();
