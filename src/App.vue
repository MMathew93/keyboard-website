<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
body,
html {
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  box-sizing: border-box;
  background: #1a1a1a;
  margin: 0;
  width: 100vw;
  height: 100vh;
  min-width: 320px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
