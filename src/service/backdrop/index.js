import Vue from 'vue';
import Backdrop from './Backdrop';
import { createElement, $ } from '../util';

/* eslint-disable no-underscore-dangle */
// 背景类
class SunBackdrop {
  constructor() {
    this._vm = undefined;
  }
  show() {
    if (!$('sun-backdrop')) {
      createElement('sun-backdrop');
    }
    // 创建Vue的实例,并挂载
    this._vm = new Vue(Backdrop);
    this._vm.$mount('[sun-backdrop]');
    this._vm.show();

    return new Promise((resolve) => {
      setTimeout(() => {
        this._vm.show();
        resolve();
      });
    });
  }

  hide() {
    if (this._vm) {
      this._vm.hide().then(() => {
        this._vm.$destroy();
      });
    }
  }
}

export default new SunBackdrop();
