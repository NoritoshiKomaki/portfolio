<template>
  <div>
    <h1>Contact</h1>
    <ul>
      <li><a :href="twitter"><v-fa :icon="['fab', 'twitter']" />Twitter</a></li>
      <li><a :href="github"><v-fa :icon="['fab', 'github']" />GitHub</a></li>
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
    background: black;
    position: fixed;
    bottom: 0;
    h1 {
      margin-top: 10px;
    }
    ul {
      display: flex;
      justify-content: center;
      font-size: 24px;
      li {
        margin: 0 30px;
        a {
          color: white;
          svg {
            margin-right: 5px;
          }
        }
      }
    }
  }
</style>