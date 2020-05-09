<template>
  <div class="body">
    <h1 class="title">Work</h1>
    <div class="images">
      <h2 id="titleA">FURIMA</h2>
      <a :href="FurimaUrl" @mouseover="changeColorA" @mouseleave="returnColorA">
        <img :src="furima" />
      </a>
      <div class="image-bottom">
        <div class="left">
          <h2 id="titleB">VoteApp</h2>
          <a :href="VoteUrl" @mouseover="changeColorB" @mouseleave="returnColorB">
            <img :src="vote" />
          </a>
        </div>
        <div class="right">
          <h2 id="titleC">Code-Typing</h2>
          <a :href="CodeUrl" @mouseover="changeColorC" @mouseleave="returnColorC">
            <img :src="code" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vote: require("@/assets/vote.png"),
      furima: require("@/assets/furima.png"),
      code: require("@/assets/code.png"),
      VoteUrl: "https://vote--app.herokuapp.com/",
      FurimaUrl: "http://52.68.133.240/",
      CodeUrl: "http://18.177.63.130/",
    };
  },
  methods: {
    changeColorA: function() {
      let titleA = document.getElementById('titleA');
      titleA.classList.add('changed')
    },
    returnColorA: function() {
      let titleA = document.getElementById('titleA');
      titleA.classList.remove('changed')
    },
    changeColorB: function() {
      let titleB = document.getElementById('titleB');
      titleB.classList.add('changed')
    },
    returnColorB: function() {
      let titleB = document.getElementById('titleB');
      titleB.classList.remove('changed')
    },
    changeColorC: function() {
      let titleC = document.getElementById('titleC');
      titleC.classList.add('changed')
    },
    returnColorC: function() {
      let titleC = document.getElementById('titleC');
      titleC.classList.remove('changed')
    }
  }
};
</script>

<style lang="scss" scoped>
.body {
  height: 100vh;
  width: calc(100vh - 200px);
  overflow: scroll;
  flex: 1;
  padding-bottom: 50px;
  .images {
    text-align: center;
    .image-bottom {
      display: flex;
      justify-content: center;
    }
    a {
      color: #333;
      width: 360px;
      margin: 0 24px;
      margin-bottom: 24px;
    }
    img {
      width: 360px;
      border-radius: 30px;
      box-shadow: 0 0 10px #333;
    }
    h2 {
      display: table;
      margin: 0 auto;
      margin-bottom: 24px;
      padding: 5px;
      border: 3px solid midnightblue;
      color: midnightblue;
      background: white;
    }
    .changed {
      color: white;
      background: midnightblue;
      transition: .3s;
    }
    p {
      padding: 0 30px;
      line-height: 1.3;
    }
  }
}
</style>
