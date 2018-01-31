<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <button @click="toast(position='center')">Toast Default</button>
    <button @click="toast(position='top')">Toast Top</button>
    <button @click="toast(position='bottom')">Toast Bottom</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {

    };
  },
  methods: {
    toast(position) {
      this.$toast({
        content: '你好',
        position: position,
      });
    },
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
