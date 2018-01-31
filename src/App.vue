<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <button @click="toast(position='center')">Toast Default</button>
    <button @click="toast(position='top')">Toast Top</button>
    <button @click="toastWithHtml(position='bottom')">Toast Bottom with html</button><br>
    <button @click="alert">alert</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {

    };
  },
  mounted() {

  },
  methods: {
    toast(position) {
      this.$toast({
        content: '这是content',
        position,
      });
    },
    toastWithHtml(position) {
      this.$toast({
        content: '这是content',
        position,
        html: '<i style="color: green">HTML</i>',
      });
      // this.$alert({

      // }).then(res => {

      // }, rej => {

      // })
    },
    alert() {
      this.$alert('12123').then(res => {
        alert(1);
      });
    }
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
</style>
