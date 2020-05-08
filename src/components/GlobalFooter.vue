<template>
  <div>
    <h1>Contact</h1>
    <ul>
      <li class="twitter"><a :href="twitter"><v-fa :icon="['fab', 'twitter']" />Twitter</a></li>
      <li class="github"><a :href="github"><v-fa :icon="['fab', 'github']" />GitHub</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      twitter: "https://twitter.com/kmk_non_nrts",
      github: "https://github.com/NoritoshiKomaki"
    }
  }
}
</script>

<style lang="scss" scoped>
  div {
    height: 100px;
    width: 100%;
    text-align: center;
    background: #2c3e50;
    position: fixed;
    bottom: 0;
    h1 {
      margin-top: 10px;
      color: white;
      font-size: 24px;
    }
    ul {
      display: flex;
      justify-content: center;
      font-size: 24px;
      li {
        margin: 5px 30px;
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
</style>