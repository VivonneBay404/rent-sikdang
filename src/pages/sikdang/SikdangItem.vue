<template>
  <v-container>
    <p>디테일 페이지</p>
    <v-icon icon="mdi-home" />
    <v-row>
      <v-col cols="7">
        <v-carousel>
          <v-carousel-item
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            cover
          ></v-carousel-item>
          <v-carousel-item
            src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
            cover
          ></v-carousel-item>
          <v-carousel-item
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            cover
          ></v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col>
        <v-btn>상담신청</v-btn>
      </v-col>
    </v-row>

    <div>식당이름 {{ sikdang.name }}</div>
    <div>최소주문금액 {{ sikdang.minSpend }}</div>
    <div>최대인원 {{ sikdang.maxPeople }}</div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      sikdang: {},
    };
  },
  async mounted() {
    this.sikdang = (
      await this.$axios.get(`/sikdang/${this.$route.params.id}`)
    ).data;
  },
};
</script>

<style>
</style>