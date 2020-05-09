<template>
  <div class="side-bar">
    <div class="top">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/profile">Profile</router-link></li>
        <li><router-link to="/work">Work</router-link></li>
        <li><router-link to="/skill">Skill</router-link></li>
      </ul>
    </div>
    <div class="bottom">
      <h1>Contact</h1>
      <ul>
        <li class="twitter">
          <a :href="twitter"><v-fa :icon="['fab', 'twitter']" />Twitter</a>
        </li>
        <li class="github">
          <a :href="github"><v-fa :icon="['fab', 'github']" />GitHub</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      twitter: "https://twitter.com/kmk_non_nrts",
      github: "https://github.com/NoritoshiKomaki",
    };
  },
};
</script>

<style lang="scss" scoped>
.side-bar {
  height: 100vh;
  width: 240px;
  text-align: center;
  background: #2c3e50;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
  .top {
    ul {
      list-style: none;
      font-size: 40px;
      li {
        padding-top: 40px;
      }
    }
    a {
      color: white;
      &::after {
        background: #81d742;
      }
    }
  }
  .bottom {
    padding-bottom: 40px;
    h1 {
      padding-top: 10px;
      color: white;
      font-size: 32px;
      margin-bottom: 40px;
    }
    ul {
      justify-content: center;
      font-size: 24px;
      li {
        margin-bottom: 20px;
        a {
          color: white;
        }
        svg {
          margin-right: 5px;
        }
      }
      .twitter a::after {
        background: #1da1f2;
      }
      .github a::after {
        background: purple;
      }
    }
  }
}
</style>
