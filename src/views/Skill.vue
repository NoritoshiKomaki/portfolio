<template>
  <div>
    <h1 class="title">Skill</h1>
    <div class="images">
      <div class="image">
        <span>★ ★ ★</span>
        <img :src="html">
      </div>
      <div class="image">
        <span>★ ★ ★</span>
        <img :src="css">
      </div>
      <div class="image">
        <span>★ ★ ☆</span>
        <img :src="rails">
      </div>
    </div>
    <div class="images">
      <div class="image">
        <span>★ ★ ☆</span>
        <img :src="ruby">
      </div>
      <div class="image">
        <span>★ ★ ☆</span>
        <img :src="js">
      </div>
      <div class="image">
        <span>★ ★ ☆</span>
        <img :src="jquery">
      </div>
    </div>
    <div class="images">
      <div class="image">
        <span>★ ☆ ☆</span>
        <img :src="vue">
      </div>
      <div class="image">
        <span>★ ★ ☆</span>
        <img :src="mysql">
      </div>
      <div class="image">
        <span>★ ★ ☆</span>
        <img :src="github">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      html: require('@/assets/html.png'),
      css: require('@/assets/css.png'),
      rails: require('@/assets/Rails.png'),
      ruby: require('@/assets/Ruby.png'),
      js: require('@/assets/JavaScript.png'),
      jquery: require('@/assets/jQuery.png'),
      vue: require('@/assets/vue.png'),
      mysql: require('@/assets/mySQL.png'),
      github: require('@/assets/github.png'),
    }
  }
}
</script>

<style lang="scss" scoped>
  .images {
    text-align: center;
    display: flex;
    justify-content: center;
    .image {
      position: relative;
      span {
        position: absolute;
        font-size: 16px;
        bottom: 8px;
        left: 62px;
        color: midnightblue;
      }
    }
    img {
      width: 120px;
      margin: 10px 30px;
      border-radius: 30px;
      box-shadow: 0 0 10px gray;
    }
  }
</style>