import Vue from 'vue';
import merge from 'lodash/merge';
import Popup from './Popup';
import { createElement, $ } from '../util';
/* eslint-disable no-underscore-dangle */
class SunPopup {
  constructor() {
    this._vm = undefined;
  }

  fromTemplate(template, options) {
    return this._init(template, options);
  }

  _init(template, options) {
    const title = (options && options.title) ? options.title : '';
    const buttons = (options && options.buttons) ? options.buttons : '';
    const showClose = !!((options && options.showClose));

    const components = (options && options.components) ? options.components : {};
    // if (this._vm) {
    //   this._vm.destroy();
    //   this._vm = undefined;
    // }
    let wrapper = $('[sh-popups]');
    if (!wrapper) {
      wrapper = createElement('div');
      wrapper.setAttrbute('sh-popups', '');
      document.body.appendChild(wrapper);
    }

    wrapper.innerHTML = `<popup show-close="${showClose}" title="${title}" ${template}></popup>`;
    this._vm = new Vue({
      components: merge({ Popup }, components),
    });
  }
}

export default new SunPopup();
