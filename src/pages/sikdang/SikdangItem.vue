<template>
  <v-container>
    <v-row>
      <v-col cols="7">
        <v-carousel>
          <v-carousel-item
            v-for="(item, index) in sikdang.photos"
            :key="index"
            :src="require(`../../../public/images/sikdangs/${item}`)"
            cover
          ></v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col>
        <v-row class="ma-4">
          <v-col>
            <v-row>
              <p>식당이름</p>
              <h1 class="ma-4">{{ sikdang.name || "정보없음" }}</h1>
            </v-row>
            <v-row>
              <div>최소주문금액 {{ sikdang.minSpend }} 만원</div>
            </v-row>
            <v-row>
              <div>최대인원 {{ sikdang.maxPeople }}</div>
            </v-row>
            <v-row>
              <div>설명</div>
              <p>{{ sikdang.description }}</p>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-btn class="ma-4">상담신청</v-btn>
        </v-row>
      </v-col>
    </v-row>
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