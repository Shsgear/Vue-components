<template>
  <div class="range" sun-range>
    <slot name="start">
      <span v-text="min"></span>
    </slot>

    <div class="range-content">
      <div class="range-track"></div>
      <div class="range-progress"></div>
      <div class="range-dot" v-drag="drag" ref="dot"></div>
    </div>
    <slot name="end">
      <span v-text="max"></span>
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
  },
  data() {
    return {
      canDrag: false,
      value: 0,
      startX: 0,
    };
  },
  directives: {
    drag: {
      bind(el, binding) {
        let oDot = el;
        /* eslint-disable no-param-reassign */
        oDot.onmousedown = function(e) {
          this.canDrag = true;
          this.startX = e.clientX;
          console.log(e.clientX);
          oDot.onmousemove = function() {

          }
        };
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

    }
  },
};
</script>

<style lang="scss" scoped>
  .range{
    width: 100%;
    // background: #000;
    height: 28px;
    line-height: 28px;
    display: flex;
    .range-content{
      width: 100%;
      position: relative;
      height: 100%;
      margin-right: 30px;
      .range-track{
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

