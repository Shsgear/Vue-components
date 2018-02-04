<template>
  <div sun-backdrop class="backdrop visible" :class="{'active': activeState == 1}"></div>
</template>
<script>
// transition duration
import { removeElement, timeout } from '../util';

const duration = 200;

export default {
  data() {
    return {
      activeState: 0,
    };
  },
  destroyed() {
    console.log('Backdrop _vm destroyed');
    removeElement('[sun-backdrop]');
  },
  methods: {
    show() {
      this.activeState = 1;
    },

    hide() {
      this.activeState = 0;
      return timeout(duration);
    },
    getState() {
      return this.activeState;
    },
  },
};
</script>
<style lang="scss" scoped>
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 11;
    background-color: rgba(0, 0, 0, 0.4);
    visibility: hidden;
    opacity: 0;
    transition: .1s opacity linear;
    &.visible {
      visibility: visible;
    }
    &.active {
      opacity: 1;
    }
}
</style>

