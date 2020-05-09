<template>
  <div class="body">
    <h1 class="title">Profile</h1>
    <div class="container">
      <div class="image">
        <img :src="komaki" />
      </div>
      <div class="profile">
        <ul>
          <div class="list">
            <li>名前：</li>
            <p>小牧 功知</p>
          </div>
          <div class="list">
            <li>年齢：</li>
            <p>31歳</p>
          </div>
          <div class="list">
            <li>出身：</li>
            <p>京都府 京都市</p>
          </div>
          <div class="list">
            <li>学歴：</li>
            <p>京都産業大学 経営学部卒</p>
          </div>
          <div class="list">
            <li>経歴：</li>
            <p>
              大学卒業後、京都の住宅設備機器の販売代理店の営業として1年半勤務。<br />
              その後愛知県の自動車工場のライン作業員として1年半勤務。<br />
              再度転職し、京都の新工場立ち上げから組み立て作業員として勤務。<br />
              独学でのプログラミング学習を経てプログラミングスクールのTECH::CAMPを卒業。<br />
              現在はプログラミング学習を進めつつ就職活動中。
            </p>
          </div>
          <div class="list">
            <li>趣味：</li>
            <p>アニメ観賞</p>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      komaki: require('@/assets/komaki.jpeg')
    }
  }
}
</script>

<style lang="scss" scoped>
.body {
  height: 100vh;
  width: calc(100vh - 200px);
  overflow: scroll;
  flex: 1;
  padding-bottom: 50px;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 240px;
      border-radius: 50%;
      margin-bottom: 30px;
      box-shadow: 0 0 10px #333;
    }
    .list {
      display: flex;
      font-size: 18px;
      font-weight: bold;
      line-height: 1.3;
      p {
        width: 500px;
      }
    }
  }
}
</style>
