<template>
  <div class="sh-mask" v-if="show">
    <transition name="popup-bounce">
      <div class="sh-popup">
        <div class="sh-popup-header" v-if="title !== ''">
          <p class="sh-popup-title"> {{title}} </p>
        </div>
        <div class="sh-popup-content" v-if="message !== ''">
          <p class="sh-popup-message" v-html="message"></p>
        </div>
        <div class="sh-popup-buttons">
          <button v-show="showConfirmButton" @click="handleAction('resolve')"> {{confirmText}} </button>
        </div>
      </div>
    </transition>

  </div>
</template>
<script>
const CONFIRM_TEXT = '确定';
export default {
  data() {
    return {
      show: false,
      // 标题
      title: '',
      // 消息内容
      message: '',
      // 确定按钮文字
      confirmText: CONFIRM_TEXT,
      // 显示确定按钮
      showConfirmButton: true,
      // 点击按钮后的回调
      clickStatus: '',
    };
  },
  mounted() {

  },
  methods: {
    handleAction(action) {
      this.clickStatus = action;
      this.show = false;
    }
  },
};
</script>

<style lang="scss" scoped>
.sh-mask{
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
  text-align: center;
}
.popup-bounce-enter {
  opacity: 0;
  transform: translate3d(-50%, -50%, 0) scale(0.7);
}
.popup-bounce-leave-active {
  opacity: 0;
  transform: translate3d(-50%, -50%, 0) scale(0.9);
}
</style>

