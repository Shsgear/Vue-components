<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <button @click="toast(position='center')">Toast Default</button>
    <button @click="toast(position='top')">Toast Top</button>
    <button @click="toastWithHtml(position='bottom')">Toast Bottom with html</button><br>
    <button @click="alert">alert</button>
    <button @click="confirm">confirm</button><br>
    <button @click="loading">Loading</button><br>
    <!-- eslint-disable max-len  -->
    <!-- <message-box :popupShow.sync="popupShow" :popupTitle="popupTitle" :popupMessage="popupMessage" @catch-popup-result="onResultChange"> -->
      <!-- <div class="sh-popup-buttons" slot="sh-popup-buttons">
        <button  class="btn-cancel" @click="handleAction('reject')"> {{cancelText}} </button>
        <button  class="btn-confirm"  @click="handleAction('resolve')"> {{confirmText}} </button>
      </div> -->
    <!-- </message-box> -->``
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {

      // popupTitle: '',
      // popupShow: false,
      // popupTitle: '',
      // popupMessage: '',
      // popupCancelText: '取消',
      // popupConfirmText: '确定',
      // closeIconVisible: true,
      // popupBtnCancel: true,
      // popupBtnConfirm: true,
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
      window.$dialog.alert({
        title: '这是alert header',
        content: '这是alert content',
        okText: '12',
        showClose: true,
        preventScroll: false,
      }).then(() => {
        this.$toast('点击了ok');
      });
      // this.popupShow = true;
      // this.popupTitle = 'title';
      // this.popupMessage = 'message';
    },
    confirm() {
      window.$dialog.confirm({
        title: '这是confirm header',
        content: '这是confirm content',
        okText: 'ok',
        cancelText: 'cancel',
        showClose: true,
        preventScroll: false,
      }).then((res) => {
        this.$toast(`点击了${res}`);
      });
    },
    loading() {
      window.$loading.open({
        fullScreen: true,
      });
      setTimeout(() => {
        window.$loading.close();
      }, 3000);
    },
  },
};
</script>

<style>
html, body{
  height: 100%;
}
#app {
  height: 200%;
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
