<template>
  <v-layout>
    <v-app-bar color="grey-lighten-2"></v-app-bar>
    <v-navigation-drawer color="grey-darken-2" permanent></v-navigation-drawer>
    <v-main>
      <SikdangCard
        :name="name"
        :maxPeople="maxPeople"
        :minSpend="minSpend"
      ></SikdangCard>
    </v-main>
  </v-layout>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import SikdangCard from "./components/SikdangCard.vue";
export default {
  name: "App",
  components: {
    // HelloWorld
    SikdangCard,
  },
  data() {
    return {
      name: "송흥",
      maxPeople: 15,
      minSpend: 100,
    };
  },
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
