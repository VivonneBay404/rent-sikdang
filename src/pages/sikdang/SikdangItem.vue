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
    <v-row>
      <div>식당이름</div>
      <div>최소주문금액</div>
      <div>최대인원</div>
    </v-row>
    <p>{{ $route.params.id }}</p>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>