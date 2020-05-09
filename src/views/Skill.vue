<template>
  <div class="body">
    <h1 class="title">Skill</h1>
    <div class="images">
      <div class="image">
        <img :src="html" />
        <p>★ ★ ★</p>
      </div>
      <div class="image">
        <img :src="css" />
        <p>★ ★ ★</p>
      </div>
      <div class="image">
        <img :src="rails" />
        <p>★ ★ ☆</p>
      </div>
    </div>
    <div class="images">
      <div class="image">
        <img :src="ruby" />
        <p>★ ★ ☆</p>
      </div>
      <div class="image">
        <img :src="js" />
        <p>★ ★ ☆</p>
      </div>
      <div class="image">
        <img :src="jquery" />
        <p>★ ★ ☆</p>
      </div>
    </div>
    <div class="images">
      <div class="image">
        <img :src="vue" />
        <p>★ ☆ ☆</p>
      </div>
      <div class="image">
        <img :src="mysql" />
        <p>★ ★ ☆</p>
      </div>
      <div class="image">
        <img :src="github" />
        <p>★ ★ ☆</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      html: require("@/assets/html.png"),
      css: require("@/assets/css.png"),
      rails: require("@/assets/Rails.png"),
      ruby: require("@/assets/Ruby.png"),
      js: require("@/assets/JavaScript.png"),
      jquery: require("@/assets/jQuery.png"),
      vue: require("@/assets/vue.png"),
      mysql: require("@/assets/mySQL.png"),
      github: require("@/assets/github.png"),
    };
  },
};
</script>

<style lang="scss" scoped>
.body {
  flex: 1;
  height: 100vh;
  width: calc(100vh - 200px);
  overflow: scroll;
  padding-bottom: 50px;
  .images {
    text-align: center;
    display: flex;
    justify-content: center;
    .image {
      img {
        width: 150px;
        margin: 15px 30px 0 30px;
        border-radius: 30px;
        box-shadow: 0 0 10px #333;
      }
      p {
        font-size: 20px;
        color: midnightblue;
        margin-top: 5px;
      }
    }
  }
}
@media (max-width: 896px) {
  .body {
    width: 100%;
    padding-bottom: 100px;
  }
}
@media (max-width: 600px) {
  .body {
    .images {
      display: block;
      .image {
        img {
          width: 200px;
        }
        p {
          font-size: 24px;
          margin-bottom: 16px;
        }
      }
    }
  }
}
</style>
