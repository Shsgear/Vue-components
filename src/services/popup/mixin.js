import assign from 'lodash/assign';
// import { $ } from '../util';

/* eslint-disable camelcase */
// 进入和离开的过渡时间
const popup_enter_duration = 100;
const popup_leave_duration = 200;

export default {
  destroyed() {
    // console.log('[sun-dialog] Disalog destroyed');
    const parent = this.$el.parentNode;
    parent.removeChild(this.$el);
  },
  methods: {
    show(options) {
      assign(this, options);
      if (window.$backdrop.getState() === 0) window.$backdrop.show();
      setTimeout(() => {
        this.activeState = 1;
      }, popup_enter_duration);
      return new Promise((resolve) => {
        this.$on('AlertOkEvent', () => {
          this.hide();
          resolve();
        });
      });
    },

    hide() {
      if (document.querySelectorAll('[sun-dialog]').length === 1) {
        window.$backdrop.hide();
      }
      this.activeState = 2;
      // 延迟摧毁，实现动画效果
      setTimeout(() => {
        this.activeState = 0;
        this.$destroy();
      }, popup_leave_duration);
    },

    onOk() {
      this.$emit('AlertOkEvent');
    },
  },

};
