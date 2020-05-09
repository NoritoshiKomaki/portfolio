<template>
  <div class="body">
    <h1 class="title">Work</h1>
    <div class="images">
      <h2>FURIMA</h2>
      <a :href="FurimaUrl">
        <img :src="furima" />
      </a>
      <div class="image-bottom">
        <div class="left">
          <h2>{{ app }}</h2>
          <a :href="{{ url}}">
            <img :src="vote" />
          </a>
        </div>
        <div class="right">
          <h2>Code-Typing</h2>
          <a :href="CodeUrl">
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
      app: ["VoteApp", "Code-Typing"],
      vote: require("@/assets/vote.png"),
      furima: require("@/assets/furima.png"),
      code: require("@/assets/code.png"),
      url: ["https://vote--app.herokuapp.com/", "http://18.177.63.130/"],
      FurimaUrl: "http://52.68.133.240/"
    };
  },
};
</script>

<style lang="scss" scoped>
.body {
  height: 100vh;
  width: calc(100vh - 200px);
  overflow: scroll;
  flex: 1;
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
    p {
      padding: 0 30px;
      line-height: 1.3;
    }
  }
}
</style>
