<template>
  <!-- eslint-disable max-len -->
  <div sun-range :class="['range', disabled ? 'range-disabled' : '']">
    <slot name="start"></slot>
    <div class="range-content">
      <div class="range-track"></div>
      <div class="range-progress" ref="progress" :style="{ 'border-top-color': progressColor}"></div>
      <div class="range-dot" v-doDrag="drag" ref="dot"> {{value}}  </div>
    </div>

    <slot name="end"></slot>
  </div>

</template>
<script>
/* eslint-disable max-len, no-unused-expressions */
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
    disabled: {
      type: [Boolean, String],
    },
  },
  data() {
    return {
      value: 0,
      startX: 0,
      endX: 0,
    };
  },
  directives: {
    doDrag: {
      bind(el, binding) {
        const oDot = el;
        oDot.addEventListener('touchmove', (e) => {
          e.preventDefault ? e.preventDefault() : e.returnValue = false;
          // --- 祖先.range元素类有disabled时禁用掉 ---//
          if (e.target.parentNode.parentNode.className.indexOf('disabled') > -1) {
            return;
          }

          const px = e.changedTouches[0].clientX;
          const halfDotLength = oDot.offsetWidth / 2;
          const offsetLeft = oDot.offsetParent.offsetLeft;
          const diff = px - offsetLeft - halfDotLength;
          const maxLen = oDot.offsetParent.offsetWidth - halfDotLength;
          if (diff <= -halfDotLength) {
            oDot.style.left = `${-halfDotLength}px`;
          } else if (diff > maxLen) {
            oDot.style.left = `${maxLen}px`;
          } else {
            oDot.style.left = `${diff}px`;
          }
          binding.value({ dotX: oDot.offsetLeft + halfDotLength, trackLen: oDot.offsetParent.offsetWidth });
        }, false);
      },
    },
  },
  methods: {
    drag(val) {
      const trackLen = val.trackLen;
      const dotX = val.dotX;
      const maxMinusMin = this.max - this.min;
      const ratio = parseInt((dotX / trackLen) * maxMinusMin, 10);
      const progress = this.$refs.progress;
      progress.style.width = `${dotX}px`;
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
    &.range-disabled{
      .range-track{
        border-top-color: #ccc;
      }
      .range-progress{
        border-top-color: desaturate($color: #a9acb1, $amount: 1)
      }
      .range-dot{
        box-shadow: 0 1px 1px rgba(0, 0, 0, .4);
      }
    }
    .range-content{
      flex: 1 0 auto;
      position: relative;
      height: 100%;
    }
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
        box-shadow: 0 2px 4px rgba(0, 0, 0, .4);
      }

  }
</style>

