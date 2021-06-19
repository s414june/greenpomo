<template>
  <div id="navbar">
    <header>
      <a href="#">
        <img :src="logo" alt="pomogreenLogo" />
        <h2>GreenPomo</h2>
      </a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        @click="$parent.isMenu = !$parent.isMenu "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </header>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      logo: require("../assets/logo.png"),
      
    };
  },
  methods:{
  }
};
</script>

<style>
header {
  display: fixed;
  width: 100%;
  height: 42px;
  background-color: var(--green);
  padding: 5px;
  z-index: 5;
}

header a {
  text-decoration: none;
}

header img,
header h2 {
  float: left;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

header img {
  padding: 8px;
  margin: 0 5px 0 7px;
  width: 28px;
  height: 28px;
}

header h2 {
  color: #fff;
  font-size: 1.5em;
  margin: 0;
  /* 微調視覺高度 */
  padding-bottom: 4px;
}

header > svg {
  width: 28px;
  color: #fff;
  padding: 5px;
  position: relative;
  float: right;
  right: 15px;
  cursor: pointer;
}
</style>
