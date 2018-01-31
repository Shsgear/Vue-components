<template>
  <transition name="sh-fade">
    <div class="sh-toast" v-if="visible"
     :class="{'sh-toast-top': position === 'top', 'sh-toast-bottom': position === 'bottom', 'sh-toast-center': position === 'center'}">
      <div class="sh-toast-message">
        <p class="sh-toast-text" v-if="html!=''" v-html="html"></p>
        <p class="sh-toast-text" v-else> {{content}} </p>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      content: '',
      duration: 3000,
      position: 'center',
      html: '',
    };
  },
};
</script>
<style lang="scss" scoped>
  .sh-toast {
    position: fixed;
    z-index: 999999;
    line-height: 13px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .sh-toast-top {
    top: 10%;
  }
  .sh-toast-bottom {
    top: 90%;
  }
  .sh-toast-message {
    font-size: 14px;
    padding: 0 20px;
    text-align: center;
    color: #fff;
    border-radius: 6px;
    background: #323232;
    opacity: .9;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    // .sh-toast__text {

    // }
  }
  .sh-fade-enter {
    opacity: 0
  }
  .sh-fade-enter-active, .sh-fade-leave-active {
    transition: opacity .4s
  }
  .sh-fade-leave-active {
    opacity: 0;
  }
</style>
