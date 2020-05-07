<template>
  <div>
    <header>
      <div class="container">
        <div class="header-left">
          <router-link to="/">Home</router-link>
        </div>
        <div class="header-right">
          <ul>
            <router-link to="/profile">Profile</router-link>
            <router-link to="/work">Work</router-link>
            <router-link to="/skill">Skill</router-link>
          </ul>
        </div>
      </div>
    </header>
  </div>
</template>

<style lang="scss" scoped>
header {
  height: 100px;
  background: pink;
  .container {
    width: 1000px;
    margin: auto;
    line-height: 100px;
    display: flex;
    justify-content: space-between;
    h1 {
      font-size: 40px;
    }
    ul {
      list-style: none;
      display: flex;
      font-size: 24px;
      li {
        margin-left: 30px;
      }
    }
  }
}
</style>