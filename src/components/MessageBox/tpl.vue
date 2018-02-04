<template>
<transition name="sh-popup-bounce">
  <div class="sh-popup-mask" v-if="popupShow">
      <div class="sh-popup">
        <div class="sh-popup-header" v-if="popupTitle !== ''">
          <i @click="close" class="sh-popup-close" v-if="closeIconVisible"></i>
          <p class="sh-popup-title"> {{popupTitle}} </p>
        </div>
        <div class="sh-popup-content">
          <p class="sh-popup-message" v-html="popupMessage"></p>
        </div>
        <!-- eslint-disable max-len -->
        <div class="sh-popup-buttons">
          <button class="sh-popup-btn-cancel" v-if="popupBtnCancel" @click="handleAction('reject')"> {{popupCancelText}} </button>
          <button class="sh-popup-btn-confirm" v-if="popupBtnConfirm"  @click="handleAction('resolve')"> {{popupConfirmText}} </button>
        </div>
      </div>
  </div>
</transition>
</template>
<script>

export default {
  name: 'message-box',
  data() {
    return {

      // // // 标题
      // title: 'title',
      // // // 消息内容
      // message: 'message',
      // // // 确定按钮文字
      // // confirmText: '确定',
      // // cancelText: '取消',
      // // // 关闭弹窗的icon是否可见
      // closeIconVisible: true,

    };
  },
  props: {
    popupShow: {
      type: Boolean,
      default: false,
    },
    popupTitle: {
      type: String,
      default: '',
    },
    popupMessage: {
      type: String,
      default: '',
    },
    closeIconVisible: {
      type: Boolean,
      default: true,
    },
    popupBtnCancel: {
      type: Boolean,
      default: true,
    },
    popupBtnConfirm: {
      type: Boolean,
      default: true,
    },
    popupCancelText: {
      type: String,
      default: '取消',
    },
    popupConfirmText: {
      type: String,
      default: '确定',
    },
  },
  mounted() {

  },
  methods: {
    handleAction(action) {
      this.close();
      const promise = new Promise((resolve, reject) => {
        if (action === 'reject') {
          reject(action);
        } else if (action === 'resolve') {
          resolve(action);
        }
      });
      // console.log(promise);
      this.$emit('catch-popup-result', promise);
    },
    close() {
      // 不可直接更改来自父组件的this.popupShow
      // this.popupShow = false;
      // 此处子组件需要更新父组件的popupShow属性，
      // Vue2.3.0中回归的.sync修饰符使得此属性可双向流动.
      // 子组件需要显式的emit 需要更新父组件的属性
      this.$emit('update:popupShow', false);
    },
  },
};
</script>

<style lang="scss" scoped>
.sh-popup-mask{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 999998;
  background: rgba(0, 0, 0, .4);
}
.sh-popup{
  position: fixed;
  z-index: 999999;
  top: 50%;
  left: 50%;
  overflow: hidden;
  transform: translate3d(-50%, -50%, 0);
  width: 70%;
  background: #fff;
  border-radius: 6px;
  font-size: 16px;
  text-align: center;
  .sh-popup-header{
    position: relative;
    background: rgb(78, 156, 252);
    padding: 8px 0;
    color: #fff;
    i.sh-popup-close{
      position: absolute;
      width: 18px;
      height: 18px;
      right: 10px;
      top: 9px;
      &::before, &::after{
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        display: block;
        width: 16px;
        height: 2px;
        background: #ccc;
        transform: rotate(45deg);
      }
      &::after{
        transform: rotate(-45deg);
      }
    }
  }
  .sh-popup-content{
    padding: 20px 12px;
    text-align: center;
    font-size: 14px;
    line-height: 20px;
    border-bottom: 1px solid #ccc;
  }
  .sh-popup-buttons{
    display: flex;
    padding: 8px 0;
    button{
      font-size: 12px;
      flex: 1 0 50%;
      border: none;
      outline: none;
      background: #fff;
      line-height: 17px;
      &.sh-popup-btn-cancel{
        border-right: 1px solid #ccc;
      }
    }
  }
}

// .sh-popup-bounce-enter-active, .popup-bounce-leave-active {
//   transform: opacity .3s;
// }
// .sh-popup-bounce-enter, .popup-bounce-leave{
//   opacity: 0;
// }
  .sh-popup-bounce-enter {
    opacity: 0;
    transform: scale(0.9);
  }
  .sh-popup-bounce-enter-active, .sh-popup-bounce-leave-active {
    transition: all .4s
  }
  .sh-popup-bounce-leave-active {
    opacity: 0;
  }

</style>

