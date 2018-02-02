<template>
  <div class="popup-container">
    <div sun-backdrop class="backdrop" :class="{'active': state == 1}"></div>
  </div>
</template>
<script>
// transition duration
const duration = 200;
import { removeElement, timeout } from '../util';
export default {
  data() {
    state: 0
  },
  destroyed() {
    console.log('Backdrop _vm destroyed');
    removeElement('[sun-backdrop]');
  },
  methods: {
    showBackdrop() {
      this.state = 1;
    },

    hideBackdrop() {
      this.state = 0;
      // return timeout(duration);
    },

    getState() {
      return this.state;
    }
  },
}
</script>

