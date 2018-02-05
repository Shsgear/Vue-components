<template>
  <div class="loading-wrapper" @touchmove.prevent>
    <transition>
      <div class="loading" v-show="activeState === 1">
        <div class="loading-type"></div>
        <div class="loading-text"> {{text}} </div>
      </div>
    </transition>
  </div>
</template>
<script>
import assign from 'lodash/assign';


/* eslint-disable camelcase */
// 进入和离开的过渡时间
const loading_enter_duration = 100;
const loading_leave_duration = 100;

export default {
  data() {
    return {
      activeState: 0,
      text: '加载中...',
      animationType: '',
      fade: true,
      fullScreen: false,
    };
  },
  destroyed() {
    const parent = this.$el.parentNode;
    parent.removeChild(this.$el);
  },
  methods: {
    open(options) {
      assign(this, options);
      // 是否显示背景遮罩
      if (this.fullScreen) {
        window.$backdrop.show();
      } else if (window.$backdrop.getState === 1) {
        window.$backdrop.hide();
      }
      // 是否需要淡入淡出效果
      if (!this.fade) {
        this.activeState = 1;
      } else {
        setTimeout(() => {
          this.activeState = 1;
        }, loading_enter_duration);
      }
    },
    close() {
      if (this.fullScreen && window.$backdrop.getState() === 1) {
        window.$backdrop.hide();
      }
      if (!this.fade) {
        this.activeState = 0;
      } else {
        setTimeout(() => {
          this.activeState = 0;
          this.$destroy();
        }, loading_leave_duration);
      }
    },

  },
};
</script>
<style lang="scss" scoped>
@keyframes spin {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
  .loading-wrapper{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: transparent;
    z-index: 12;
    display: flex;
    align-items: center;
    justify-content: center;
    .loading{
      display: flex;
      flex-flow: column nowrap;
      // justify-content: space-between;
      align-items: center;
      width: 100px;
      color: #eee;
      text-align: center;
      background: #323232;
      opacity: .87;
      padding: 30px 4px;
      border-radius: 4px;
      .loading-type{
        width: 30px;
        height: 30px;
        border: 3px solid #ccc;
        border-radius: 50%;
        // border-width: 3px 3px 3px 0px;
        border-color: #ccc #ccc #ccc transparent;
        animation: spin 1s linear infinite;
        // &.spin
      }
    }
  }
</style>

