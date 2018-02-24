<template>
  <div class="range" sun-range>
    <slot name="start">
      <!-- <span v-text="min" class="start-text"></span> -->
    </slot>

    <div class="range-content">
      <div class="range-track"></div>
      <div class="range-progress"></div>
      <div class="range-dot" v-drag="drag" ref="dot"></div>
    </div>
    <slot name="end">
      <!-- <span v-text="max" class="end-text"></span> -->
    </slot>
  </div>

</template>
<script>
let vm = this;
export default {
  name: 'sun-range',
  props: {

    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    step: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      canDrag: true,
      value: 0,
      startX: 0,
      endX: 0,
    };
  },

  directives: {
    drag: {
      bind(el, binding) {
        const oDot = el;
        /* eslint-disable no-param-reassign */
        // if (!vm.canDrag) return;
        oDot.addEventListener('touchstart', function (e) {
          this.canDrag = true;
          this.startX = e.changedTouches[0].clientX;

        }, false);
        oDot.addEventListener('touchmove', function (e) {
          e.preventDefault && e.preventDefault();
          let px = e.changedTouches[0].clientX;
          let offsetLeft = oDot.offsetParent.offsetLeft;
          let diff = px - offsetLeft - oDot.style.width / 2;
          let maxLen = oDot.offsetParent.style.width - oDot.style.width / 2;
          // console.log(maxLen);
          console.log(maxLen);
          oDot.style.left = diff + 'px';
          if (diff <= 0) {
            oDot.style.left = - oDot.style.width / 2 + 'px';
          }
          //  else if (diff > maxLen) {
          //   oDot.style.left = maxLen + 'px';
          // } else {

          // }
          this.endX = oDot.offsetLeft;
          }, false);
        oDot.addEventListener('touchend', function (e) {
          // let rangeLen = this.max - this.min;

        }, false);
        // oDot.ontouchstart = function(e) {
        //   this.canDrag = true;
        //   // this.startX = e.;
        //   this.startX = e.originalEvent.changedTouches[0].clientX;
        //   console.log(this.startX);
        //   oDot.onmousemove = function() {
        //     // console.log();
        //   }
        // };
      },
    },
  },
  computed: {
    computedVal() {
      return this.value;
    },
  },
  methods: {
    drag() {

    },
  },
};
</script>

<style lang="scss" scoped>
  .range{
    width: 100%;
    height: 28px;
    line-height: 28px;
    display: flex;
    justify-content: space-between;

    .range-content{
      flex: 1 0 auto;
      position: relative;
      height: 100%;
      .range-track{
        width: 100%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        right: -30px;
        border-top-color: #a9acb1;
        border-top-style: solid;
        border-top-width: 2px;
        cursor: pointer;
      }
      .range-progress {
        position: absolute;
        display: block;
        background-color: #26a2ff;
        top: 50%;
        transform: translateY(-50%);
        width: 0;
      }
      .range-dot{
        background-color: #fff;
        position: absolute;
        left: 0;
        top: 0;
        width: 28px;
        height: 28px;
        border-radius: 100%;
        cursor: pointer;
        box-shadow: 0 1px 3px rgba(0, 0, 0, .4);
      }
    }
  }
</style>

