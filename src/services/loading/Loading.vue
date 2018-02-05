<template>
  <div class="loading-wrapper" @touchmove.prevent>
    <transition>
      <div class="loading" v-show="activeState === 1">
        <div class="loading-ring" v-if="animationType === '' || animationType === 'ring'"></div>
        <div class="loading-spinner" v-if="animationType === 'spinner'">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
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
      animationType: 'spinner',
      fade: true,
      fullScreen: false,
      // delay: {},
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
@keyframes ring {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
.loading-wrapper {
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
  .loading {
    display: flex;
    flex-flow: column nowrap;
    // justify-content: space-between;
    align-items: center;
    width: 100px;
    color: #eee;
    text-align: center;
    background: #323232;
    opacity: 0.87;
    padding: 16px 6px;
    border-radius: 4px;
    .loading-ring {
      width: 30px;
      height: 30px;
      border: 3px solid #ccc;
      border-radius: 50%;
      // border-width: 3px 3px 3px 0px;
      border-color: #ccc #ccc #ccc transparent;
      animation: ring 1s linear infinite;
    }
    .loading-spinner {
      color: #fff;
      display: inline-block;
      position: relative;
      width: 64px;
      height: 64px;
    }
    .loading-spinner div {
      transform-origin: 32px 32px;
      animation: loading-spinner 1.2s linear infinite;
    }
    .loading-spinner div:after {
      content: "";
      display: block;
      position: absolute;
      top: 3px;
      left: 29px;
      width: 3px;
      height: 12px;
      border-radius: 20%;
      background: #fff;
    }
    .loading-spinner div:nth-child(1) {
      transform: rotate(0deg);
      animation-delay: -1.1s;
    }
    .loading-spinner div:nth-child(2) {
      transform: rotate(30deg);
      animation-delay: -1s;
    }
    .loading-spinner div:nth-child(3) {
      transform: rotate(60deg);
      animation-delay: -0.9s;
    }
    .loading-spinner div:nth-child(4) {
      transform: rotate(90deg);
      animation-delay: -0.8s;
    }
    .loading-spinner div:nth-child(5) {
      transform: rotate(120deg);
      animation-delay: -0.7s;
    }
    .loading-spinner div:nth-child(6) {
      transform: rotate(150deg);
      animation-delay: -0.6s;
    }
    .loading-spinner div:nth-child(7) {
      transform: rotate(180deg);
      animation-delay: -0.5s;
    }
    .loading-spinner div:nth-child(8) {
      transform: rotate(210deg);
      animation-delay: -0.4s;
    }
    .loading-spinner div:nth-child(9) {
      transform: rotate(240deg);
      animation-delay: -0.3s;
    }
    .loading-spinner div:nth-child(10) {
      transform: rotate(270deg);
      animation-delay: -0.2s;
    }
    .loading-spinner div:nth-child(11) {
      transform: rotate(300deg);
      animation-delay: -0.1s;
    }
    .loading-spinner div:nth-child(12) {
      transform: rotate(330deg);
      animation-delay: 0s;
    }
    @keyframes loading-spinner {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }
}
</style>

