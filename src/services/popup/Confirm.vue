<template>

    <div class="popup-container" @touchmove.prevent @scroll.prevent>
      <transition name="popup-bounce">
        <!-- 此处加入 v-show是为了获取动画效果-->
      <div class="popup" v-show="activeState === 1">
        <i @click="hide" class="popup-close" v-if="showClose"></i>
        <div class="popup-header" v-if="title">
          <div class="popup-title" v-html="title"></div>
        </div>

        <div class="popup-body" v-html="content"></div>

        <div class="popup-buttons">
          <button @click="onCancel" v-text="cancelText"></button>
          <button @click="onOk" v-text="okText"></button>
        </div>

      </div>
      </transition>
    </div>

</template>
<script>
import mixin from './mixin';
import assign from 'lodash/assign';

export default {
  mixins: [mixin],
  data() {
    return {
      title: '',
      content: '',
      okText: '确定',
      activeState: 0, // 0 hideen  1 :showing
      showClose: false,
      // preventScroll: true,
      cancelText: '取消',
    };
  },
  methods: {
    // 覆盖mixin中的方法
    show(options) {
      assign(this, options);
      window.$backdrop.show();
      this.activeState = 1;
      return new Promise((resolve, reject) => {
        this.$on('ConfirmOkEvent', () => {
          this.hide();
          resolve('confirm');
        });
        this.$on('ConfirmCancelEvent', () => {
          this.hide();
          resolve('cancel');
        });
      })
    },
    onOk() {
      this.$emit('ConfirmOkEvent');
    },
    onCancel() {
      this.$emit('ConfirmCancelEvent');
    },
  },
};
</script>
<style lang="scss" scoped>
.popup-container {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 12;
  // visibility: hidden;
  .popup {
    position: relative;
    width: 70%;
    max-width: 100%;
    max-height: 90%;
    background-color: hsla(0, 0%, 100%, 0.9);
    display: flex;
    flex-flow: column nowrap;
    color: #484746;
    border-radius: 4px;
    i.popup-close {
      position: absolute;
      width: 25px;
      height: 25px;
      right: 0px;
      top: 5px;
      &::before,
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        display: block;
        width: 16px;
        height: 2px;
        background: #ccc;
        transform: rotate(45deg);
      }
      &::after {
        transform: rotate(-45deg);
      }
    }
    .popup-header {
      // background: rgb(78, 156, 252);
      padding: 10px 0;
      // color: #fff;
      text-align: center;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      border-bottom: 1px solid #eee;
    }
    .popup-body {
      padding: 30px 12px;
      font-size: 14px;
      line-height: 20px;
    }
    .popup-buttons {
      display: flex;
      // padding: 8px 0;
      margin-bottom: 10px;
      padding: 0 10px;
      justify-content: flex-start;
      button {
        font-size: 14px;
        flex: 1 0 auto;
        border: none;
        outline: none;
        background: #ea5a49;
        color: #fff;
        min-height: 35px;
        border-radius: 2px;
        &:not(:last-child) {
          margin-right: 5px;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid #eee;
          color: #333;
        }
      }
    }
  }
  // .popup-bounce-enter {
  //   opacity: 0;
  //   transform: scale(0.7);
  //   transition: all .3s ease;
  // }
  // .popup-bounce-leave-active {
  //   opacity: 0;
  //   transform: scale(0.9);
  //   transition: all .3s ease;
  // }

  .popup-bounce-enter-active,
  .popup-bounce-leave-active {
    transition: all 0.3s ease;
    transform: scale(1);
  }
  .popup-bounce-enter,
  .popup-bounce-leave-active {
    opacity: 0;
    transform: scale(1.2);
  }
  .popup-bounce-leave-active {
    transform: scale(0.9);
  }
}
</style>
