<template>
  <v-navigation-drawer color="grey-darken-2" permanent></v-navigation-drawer>
  <v-container>
    <v-row>
      <v-col v-for="(sikdang, index) in sikdangs" :key="index">
        <SikdangCard v-bind="sikdang"></SikdangCard
      ></v-col>
    </v-row>
  </v-container>
</template>

<script>
import SikdangCard from "../../components/SikdangCard.vue";
import dummyData from "../../assets/dummyData";
export default {
  components: {
    // HelloWorld
    SikdangCard,
  },
  data() {
    return {
      sikdangs: dummyData.sikdang,
    };
  },
  mounted() {
    console.log(dummyData);
  },
};
</script>

<style>
</style>