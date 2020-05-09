<template>
  <div class="header">
    <div class="top">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/profile">Profile</router-link></li>
        <li><router-link to="/work">Work</router-link></li>
        <li><router-link to="/skill">Skill</router-link></li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  height: 60px;
  width: 100%;
  text-align: center;
  background: #2c3e50;
  font-weight: bold;
  display: flex;
  position: fixed;
  top: 0;
  align-items: center;
  justify-content: center;
  z-index: 1;
  .top {
    ul {
      list-style: none;
      font-size: 24px;
      display: flex;
    }
    a {
      color: white;
      &::after {
        background: #81d742;
      }
    }
  }
}
li {
  padding: 0 20px;
}
@media (min-width: 896px) {
  .header {
    display: none;
  }
}
@media (max-width: 480px) {
  li {
    padding: 0 10px;
  }
}
</style>
