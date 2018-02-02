<template>
  <div class="sh-mask">
    <div class="sh-popup sh-popup-in">
      <div class="sh-popup-inner">
        <p class="sh-popup-title"> {{s.title || '提示'}} </p>
        <p class="sh-popup-text"> {{s.text || '默认提示'}} </p>
      </div>
      <div class="sh-popup-buttons">
        <span class="sh-popup-button" @click="resolve">
          {{s.btnText || '确定'}}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['s'],

};
</script>
<style lang="scss" scoped>
.sh-mask{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 999998;
  background: rgba(0, 0, 0, .4);
}
.sh-popup{
  position: fixed;
  z-index: 999999;
  top: 50%;
  left: 50%;
  overflow: hidden;
  transform: translate3d(-50%, -50%, 0);
  text-align: center;
}
</style>


