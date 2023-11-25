<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <body>
    <div class="side-bar">
      <RouterLink to="/"><img class="bar-icon" src="./assets/home.png"/></RouterLink>
      <RouterLink to="/user/1"><img class="bar-icon" src="./assets/user.png"/></RouterLink>
      <RouterLink to="/upload"><img class="bar-icon" src="./assets/document.png"/></RouterLink>
    </div>
    <RouterView class="page-content"/>
  </body>
</template>

<style scoped>

body{
  background: fixed;
  /* background-image: url("assets/background_3.png"); */
  background-color: #E2E8E4;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  min-height: 100vh;
  display: flex;
}

.side-bar{
  position: fixed;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0px 10px 0px 10px;
  justify-content: center;
  /* background-image: radial-gradient(#423B38, #332D29, #0D0C0C); */
  background-color: #2F496E;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
}

.bar-icon{
  width: 50px;
  margin-bottom: 3vw;
}

.page-content{
  min-height: 100vh;
  width: 90vw;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
