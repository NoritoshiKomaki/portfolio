<template>
  <div class="body">
    <h1>Noritoshi<br />Komaki</h1>
    <h2>Welcome To My Portfolio</h2>
  </div>
</template>

<style lang="scss" scoped>
.body {
  height: 100vh;
  width: calc(100vh - 200px);
  overflow: scroll;
  flex: 1;
  text-align: center;
  background-image: url("~@/assets/main.jpg");
  background-size: cover;
  background-color: rgba(255, 255, 255, 0.3);
  background-blend-mode: lighten;
  padding-bottom: 50px;
  h1 {
    padding-top: 100px;
    font-size: 96px;
    letter-spacing: 8px;
    color: #81d742;
    text-shadow: 0 0 10px #333;
    line-height: 1.2;
  }
  h2 {
    margin-top: 210px;
    font-size: 40px;
    color: midnightblue;
    text-shadow: 0 0 5px white;
  }
}
@media (max-width: 896px) {
  .body {
    width: 100%;
    padding-bottom: 100px;
  }
}
@media (max-width: 480px) {
  .body {
    background-image: url("~@/assets/main2.jpg");
    h1 {
      font-size: 56px;
    }
    h2 {
      font-size: 28px;
    }
  }
}
</style>
