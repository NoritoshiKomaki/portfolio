<template>
  <div class="footer">
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
.footer {
  background: #2c3e50;
  height: 60px;
  width: 100%;
  position: fixed;
  bottom: 0;
  h1 {
    padding-top: 5px;
    color: white;
    font-size: 20px;
    text-align: center;
  }
  ul {
    display: flex;
    justify-content: center;
    font-size: 16px;
    li {
      margin: 5px 10px;
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
@media (min-width: 896px) {
  .footer {
    display: none;
  }
}
</style>
