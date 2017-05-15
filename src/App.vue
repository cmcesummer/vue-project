<template>
  <div id="app">


    <router-view v-wechat-title="$route.meta.title"></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
  data() {
    return {
      hasBack: true
    }
  }
}
</script>

<style lang='scss'>
@import '/assets/main.scss';
html,body{height:100%; width:100%; overflow:hidden; margin:0;
padding:0;}
a{text-decoration:none!important};

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
}

</style>
