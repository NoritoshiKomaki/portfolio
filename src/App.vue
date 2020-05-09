<template>
  <div id="app">
    <global-header />
    <global-side-bar />
    <transition mode="out-in">
      <router-view />
    </transition>
    <global-footer />
  </div>
</template>

<script>
import "ress";
import GlobalSideBar from "./components/GlobalSideBar.vue";
import GlobalHeader from "./components/GlobalHeader.vue";
import GlobalFooter from "./components/GlobalFooter.vue";

export default {
  name: "App",
  components: {
    GlobalSideBar,
    GlobalHeader,
    GlobalFooter,
  },
};
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
  display: flex;
}
.title {
  padding-top: 72px;
  padding-bottom: 36px;
  font-size: 64px;
  text-align: center;
  color: #81d742;
  text-shadow: 0 0 5px #333;
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
  content: "";
  width: 100%;
  height: 5px;
  border-radius: 50px;
  transform: scale(0, 1);
  transform-origin: center top;
  transition: transform 0.3s;
}
a:hover::after {
  transform: scale(1, 1);
}

.v-enter {
  transform: translate(-100%, 0);
}
.v-enter-active {
  transition: all 1s 0s ease;
}
.v-leave-to {
  transform: translate(100%, 0);
}
.v-leave-active {
  transition: all 0.5s 0s ease;
}
@media (max-width: 896px) {
  #app {
    display: block;
  }
  .title {
    padding-top: 96px;
    padding-bottom: 24px;
    font-size: 40px;
  }
}
</style>
