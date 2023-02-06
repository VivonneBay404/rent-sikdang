<template>
  <v-card
    class="mx-auto pb-4"
    max-width="250"
    min-width="250"
    @click="$emit('click')"
  >
    <v-img
      class="align-end text-white"
      height="200"
      :src="
        image
          ? require(`../../public/images/sikdangs/${image}`)
          : require('../../public/images/sikdangs/shawnanggg-nmpW_WwwVSc-unsplash.jpg')
      "
      :alt="
        require('../../public/images/sikdangs/shawnanggg-nmpW_WwwVSc-unsplash.jpg')
      "
      cover
    >
    </v-img>
    <v-card-title>{{ name || "정보없음" }}</v-card-title>
    <v-card-subtitle class="pt-4"
      >최대인원 {{ maxPeople || "정보없음" }}</v-card-subtitle
    >

    <v-card-text>
      <div>최소주문금액: {{ minSpend || "정보없음" }}만원</div>
    </v-card-text>
    <v-chip> {{ category || "정보없음" }} </v-chip>
  </v-card>
</template>

<script>
export default {
  props: ["name", "maxPeople", "minSpend", "category", "image"],
};
</script>

<style>
</style>