<template>
  <transition :effect="effect">
    <div class="popup-container">
      <div class="popup">

        <div class="popup-header">
          <div class="popup-title" v-html="title"></div>
          <i @click="hide(-1)" class="popup-close" v-if="showClose"></i>
        </div>

        <div class="popup-body" v-html="content"></div>

        <div class="popup-buttons">
          <button @click="onOk" v-text="okText"></button>
        </div>

      </div>
    </div>
  </transition>
</template>
<script>
import mixin from "./mixin";

export default {
  mixins: [mixin],
  data() {
    return {
      effect: "default",
      title: "",
      content: "",
      okText: "确定",
      activeState: 0, //0 hideen  1 :showing  2:active
      showClose: false,
    };
  },
  mounted() {
    console.log(mixin);
  }
  // methods: {
  //   show() {
  //     this.activeState = 1;
  //     window.$backdrop.hsow();
  //     return new Promise((resolve, reject) => {
  //       this.$on('popupClickResult', (rst) => {
  //         resolve(rst.buttonIndex);
  //       });
  //     });
  //   },
  //   hide(buttonIndex) {
  //     this.activeState = 2;
  //     window.$backdrop.hide();
  //     setTimeout(() => {
  //       this.activeState = 0;
  //       this.$emit('popupClickResult', {
  //         buttonIndex: buttonIndex
  //       });
  //     }, popup_leave_duration);
  //   },

  //   setButtons(buttons) {
  //     this.buttons = buttons;
  //   }
  // },
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
  .popup{
    width: 70%;
    max-width: 100%;
    max-height: 90%;
    background-color: hsla(0,0%,100%,.9);
    display: flex;
    flex-flow: column nowrap;
    color: #484746;
    border-radius: 3px;
    .popup-header{
      position: relative;
      background: rgb(78, 156, 252);
      padding: 8px 0;
      color: #fff;
      text-align: center;
      i.popup-close{
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
          background: #fff;
          transform: rotate(45deg);
        }
        &::after{
          transform: rotate(-45deg);
        }
      }
    }
    .popup-body{
      padding: 20px 12px;
      font-size: 14px;
      line-height: 20px;
    }
    .popup-buttons{
      display: flex;
      // padding: 8px 0;
      margin-bottom: 10px;
      padding: 0 10px;
      button{
        font-size: 14px;
        flex: 1 0 50%;
        border: none;
        outline: none;
        background: rgb(78, 156, 252);
        color: #fff;
        min-height: 35px;
        border-radius: 2px;
      }
    }
  }
}
</style>
