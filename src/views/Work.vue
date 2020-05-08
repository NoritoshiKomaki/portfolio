<template>
  <div>
    <h1 class="title">Work</h1>
    <div class="images">
      <a :href="VoteUrl">
        <div class="image">
          <img :src="vote">
          <h2>VoteApp</h2>
          <p>
            プログラミング学習関連の投票アプリです。<br>
            ・オススメオンライン教材<br>
            ・MacBookのスペック<br>
            ・オススメTwitterユーザー<br>
            上記の3項目を投票、閲覧することができます。
          </p>
        </div>
      </a>
      <a :href="FurimaUrl">
        <div class="image">
          <img :src="furima">
          <h2>FURIMA</h2>
          <p>
            プログラミングスクールのチーム開発で作成したフリマアプリです。<br>
            ・ID: hoge<br>
            ・Pass: 1111<br>

          </p>
        </div>
      </a>
      <a :href="CodeUrl">
        <div class="image">
          <img :src="code">
          <h2>Code-Typing</h2>
          <p>
            プログラミング言語に特化したタイピングアプリです。<br>
            ユーザーログインするとスコアを登録することができ、ランキングに参加することができます。
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vote: require('@/assets/vote.png'),
      furima: require('@/assets/furima.png'),
      code: require('@/assets/code.png'),
      VoteUrl: "https://vote--app.herokuapp.com/",
      FurimaUrl: "http://52.68.133.240/",
      CodeUrl: "http://18.177.63.130/"
    }
  }
}
</script>

<style lang="scss" scoped>
  .images {
    display: flex;
    justify-content: center;
    .image {
      height: 380px;
      background: white;
      box-shadow: 0 0 16px gray;
      border-radius: 7px;
      &:hover {
        opacity: 0.6;
        transition: .5s;
      }
    }
    a {
      color: #333;
      width: 300px;
      margin: 0 24px;
    }
    img {
      width: 300px;
      border-radius: 7px 7px 0 0;
    }
    h2 {
      display: table;
      margin: 10px auto;
      border-bottom: 3px solid midnightblue;
      color: midnightblue;
    }
    p {
      padding: 0 30px;
      line-height: 1.3;
    }
  }
</style>