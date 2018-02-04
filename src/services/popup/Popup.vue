<template>
  <transition :effect="effect">
    <div class="popup-container">
      <div class="popup">

        <div class="popup-header" v-if="title">
          <div class="popup-title" v-html="title"></div>
          <i @click="hide(-1)" class="popup-close" v-if="showClose"></i>
        </div>

        <div class="popup-body" :class="{ 'no-content': activeState == 0}">
          <slot></slot>
        </div>

        <div class="popup-buttons" v-if="buttons.length > 0">
          <button v-for="(button, index) in buttons" @click="hide(index)" :key="button">
            <span v-text="button.text"></span>
          </button>
        </div>

      </div>
    </div>
  </transition>
</template>
<script>
const popup_leave_duration = 300;
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    showClose: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      activeState: 0,  //0 hideen  1 :showing  2:active
      buttons: [],
    }
  },
  methods: {
    show() {
      this.activeState = 1;
      window.$backdrop.hsow();
      return new Promise((resolve, reject) => {
        this.$on('popupClickResult', (rst) => {
          resolve(rst.buttonIndex);
        });
      });
    },
  },

  hide(buttonIndex) {
    this.activeState = 2;
    window.$backdrop.hide();
    setTimeout(() => {
      this.activeState = 0;
      this.$emit('popupClickResult', {buttonIndex: buttonIndex});
    }, popup_leave_duration);
  },

  setButtons(buttons) {
    this.buttons = buttons;
  }
}
</script>
<style lang="scss" scoped>

</style>

