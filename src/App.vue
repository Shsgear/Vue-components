<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <button @click="toast(position='center')">Toast Default</button>
    <button @click="toast(position='top')">Toast Top</button>
    <button @click="toastWithHtml(position='bottom')">Toast Bottom with html</button><br>
    <button @click="alert">alert</button>
    <button @click="anotherAlert">another alert</button>
    <!-- eslint-disable max-len  -->
    <message-box :popupShow.sync="popupShow" :popupTitle="popupTitle" :popupMessage="popupMessage" @catch-popup-result="onResultChange">
      <!-- <div class="sh-popup-buttons" slot="sh-popup-buttons">
        <button  class="btn-cancel" @click="handleAction('reject')"> {{cancelText}} </button>
        <button  class="btn-confirm"  @click="handleAction('resolve')"> {{confirmText}} </button>
      </div> -->
    </message-box>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {

      // popupTitle: '',
      popupShow: false,
      popupTitle: '',
      popupMessage: '',
      popupCancelText: '取消',
      popupConfirmText: '确定',
      closeIconVisible: true,
      popupBtnCancel: true,
      popupBtnConfirm: true,
    };
  },
  created() {

  },
  mounted() {
    // this.popupShow = true;
  },
  methods: {
    toast(position) {
      this.$toast({
        html: '这是content',
        position,
      });
    },
    toastWithHtml(position) {
      this.$toast({
        position,
        html: '<i style="color: green">HTML</i>',
      });
    },
    alert() {
      $dialog.alert({
        title: '这是alert header',
        content: '这是alert content',
        showClose: true,
      }).then(() => {
        console.log('onok')
      })
      // this.popupShow = true;
      // this.popupTitle = 'title';
      // this.popupMessage = 'message';
    },
    anotherAlert() {
      this.popupShow = true;
      this.popupTitle = 'sjdghj所得税的痕迹';
      this.popupMessage = 'sjdghj所得税的痕迹';
    },
    onResultChange(result) {
      if (!result) return;
      result.then((res) => {
        this.$toast(`点击结果是${res}`);
      }, (rej) => {
        this.$toast(`点击结果是${rej}`);
      });
    },
  },
};
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Helvetica Neue",
               STHeiti, "Microsoft Yahei", Tahoma, Simsun, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*{
  margin: 0;
  padding: 0;
}
</style>
