<template>
  <div class="range" sun-range>
    <slot name="start">
      <!-- <span v-text="min" class="start-text"></span> -->
    </slot>

    <div class="range-content">
      <div class="range-track"></div>
      <div class="range-progress" ref="progress" :style="{ 'border-top-color': progressColor}"></div>
      <div class="range-dot" v-doDrag="drag" ref="dot"> {{value}}  </div>
    </div>
    <slot name="end">
      <!-- <span v-text="max" class="end-text"></span> -->
    </slot>
  </div>

</template>
<script>

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
    progressColor: String,
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
    doDrag: {
      bind(el, binding) {
        const oDot = el;
        // oDot.addEventListener('touchstart', function (e) {
        //   this.canDrag = true;
        // }, false);
        oDot.addEventListener('touchmove', function (e) {
          e.preventDefault && e.preventDefault();
          let px = e.changedTouches[0].clientX;
          let halfDotLength = oDot.offsetWidth / 2;
          let offsetLeft = oDot.offsetParent.offsetLeft;
          let diff = px - offsetLeft - halfDotLength;
          let maxLen = oDot.offsetParent.offsetWidth - halfDotLength;
          if (diff <= -halfDotLength) {
            oDot.style.left = -halfDotLength + 'px';
          } else if (diff > maxLen) {
            oDot.style.left = maxLen + 'px';
          } else {
            oDot.style.left = diff + 'px';
          }
          binding.value({dotX: oDot.offsetLeft + halfDotLength, trackLen: oDot.offsetParent.offsetWidth});
        }, false);
        // oDot.addEventListener('touchend', function (e) {

        // }, false);
      },
    },
  },
  computed: {
    computedVal() {
      return this.value;
    },
  },
  methods: {
    drag(val) {
      let trackLen = val.trackLen;
      let dotX = val.dotX;
      let maxMinusMin = this.max - this.min;
      let ratio = parseInt((dotX / trackLen) * maxMinusMin);
      let progress = this.$refs.progress;
      progress.style.width = dotX + 'px';
      this.value = this.step * Math.round(ratio / this.step);

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
        top: 50%;
        display: block;
        width: 0;
        transform: translateY(-50%);
        border-top-color: #a9acb1;
        border-top-style: solid;
        border-top-width: 2px;
      }
      .range-dot{
        background-color: #fff;
        position: absolute;
        left: -14px;
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

