<template>
  <div>
    <router-link to="/"></router-link>
    <br />
    <router-view></router-view>
  </div>
</template>

<script>

import Home from "@/Component/Home";
import Jeu from "@/Component/Jeu";
import PartiesPrecedentes from "@/Component/PartiesPrecedentes";

export default {
  name: 'App',
  Component:{Home, Jeu, PartiesPrecedentes}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
