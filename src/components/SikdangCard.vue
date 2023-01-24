<template>
  <v-card class="mx-auto" max-width="400">
    <v-img
      class="align-end text-white"
      height="200"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      cover
    >
    </v-img>
    <v-card-title>{{ name }}</v-card-title>
    <v-card-subtitle class="pt-4">최대인원 {{ maxPeople }}</v-card-subtitle>

    <v-card-text>
      <div>최소주문금액: {{ minSpend }}</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    name: String,
    maxPeople: Number,
    minSpend: Number,
  },
};
</script>

<style>
</style>