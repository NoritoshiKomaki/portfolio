<template>
  <div>
    <header>
      <div class="container">
        <div class="header-left">
          <h1><router-link to="/">Home</router-link></h1>
        </div>
        <div class="header-right">
          <ul>
            <li><router-link to="/profile">Profile</router-link></li>
            <li><router-link to="/work">Work</router-link></li>
            <li><router-link to="/skill">Skill</router-link></li>
          </ul>
        </div>
      </div>
    </header>
  </div>
</template>

<style lang="scss" scoped>
header {
  height: 100px;
  background: rgb(0, 0, 0);
  .container {
    width: 1000px;
    margin: auto;
    line-height: 100px;
    display: flex;
    justify-content: space-between;
    h1 {
      font-size: 48px;
    }
    ul {
      list-style: none;
      display: flex;
      font-size: 32px;
      li {
        margin-left: 30px;
      }
    }
    a {
      color: #2c3e50;
    }
  }
}
</style>