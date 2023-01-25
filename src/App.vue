<template>
  <v-layout>
    <v-app-bar color="grey-lighten-2">
      <router-link to="/sikdang">식당</router-link>
      <router-link to="/about-us">about us</router-link>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
};
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
