<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <button @click="toast(position='center')">Toast Default</button>
    <button @click="toast(position='top')">Toast Top</button>
    <button @click="toastWithHtml(position='bottom')">Toast Bottom with html</button><br>
    <button @click="alert">alert</button>
    <button @click="confirm">confirm</button><br>
    <button @click="loading({animationType: 'ring'})">Loading default</button>
    <!-- eslint-disable max-len -->
    <button @click="loading({fullscreen: false, animationType: 'spinner', fullscreen: true})">Loading with fullscreen</button>
    <div class="range-wrapper">
      <sun-range :min="0" :max="120" :progressColor="'#3e3e3e'" :step="10" :canDrag="false">
        <span slot="start" class="range-left">0</span>
        <span slot="end" class="range-right">120</span>
      </sun-range>
    </div>


  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {

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
    loading(options) {
      window.$loading.open({
        fullScreen: options.fullscreen,
        animationType: options.animationType,
        text: '正在加载...',
      });
      setTimeout(() => {
        window.$loading.close();
        this.$toast('加载完成');
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
.range-wrapper{
  width: 50%;
  margin: 40px auto;
}
.range-left{
  margin-right: 20px;
}
.range-right {
  margin-left: 20px;
}
</style>
