<template>
  <div>
    <header>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/profile">Profile</router-link></li>
        <li><router-link to="/work">Work</router-link></li>
        <li><router-link to="/skill">Skill</router-link></li>
      </ul>
    </header>
  </div>
</template>

<style lang="scss" scoped>
header {
  height: 100px;
  background: #2c3e50;
  font-weight: bold;
  ul {
    height: 100px;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    li {
      margin: 20px;
    }
  }
  a {
    color: white;
    &::after {
      background: lime;
    }
  }
}
</style>