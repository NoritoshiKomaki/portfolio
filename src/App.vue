<template>
  <div id="app">
    <global-header/>
    <router-view/>
    <global-footer/>
  </div>
</template>

<script>
import 'ress';
import GlobalHeader from './components/GlobalHeader.vue';
import GlobalFooter from './components/GlobalFooter.vue';

export default {
  name: 'App',
  components: {
    GlobalHeader,
    GlobalFooter
  }
}
</script>

<style lang="scss">
body {
  background: #f8f8ff;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1;
  color: #333;
  background-image: url("~@/assets/main.jpg");
}
.title {
    margin: 36px;
    font-size: 56px;
    text-align: center;
  }
ul {
  list-style: none;
}
a {
text-decoration: none;
position: relative;
display: inline-block;
text-decoration: none;
}
a::after {
  position: absolute;
  bottom: -7px;
  left: 0;
  content: '';
  width: 100%;
  height: 5px;
  border-radius: 50px;
  transform: scale(0, 1);
  transform-origin: center top;
  transition: transform .3s;
}
a:hover::after {
  transform: scale(1, 1);
}
</style>
