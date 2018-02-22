<template>
  <div class="range" sun-range>
    <slot name="start"></slot>
    <div class="range-content">
      <div class="range-track"></div>
      <div class="range-progress"></div>
      <div class="range-dot"></div>
    </div>
    <slot name="end"></slot>
  </div>

</template>
<script>
export default {
  name: 'sun-range',
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
        border-top-width: 1px;
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
        cursor: move;
        box-shadow: 0 1px 3px rgba(0, 0, 0, .4);
      }
    }
  }
</style>

