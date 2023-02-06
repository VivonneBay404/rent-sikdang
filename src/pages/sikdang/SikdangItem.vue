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
        <v-row justify="center">
          <v-btn class="ma-4 primary" @click="onTalkBtnClicked()"
            >상담신청☎️</v-btn
          >
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { EventBus } from "../../utils/eventBus";

export default {
  data() {
    return {
      isLoginDialogOpen: false,
      sikdang: {},
    };
  },
  methods: {
    //로그인이 되어있으면 유저에 식당 넣음 아니면 로그인 다이얼로그 on
    async onTalkBtnClicked() {
      this.isLoginDialogOpen = true;
      if (this.$store.getters.token) {
        console.log("this.$route", this.$route);
        const res = await this.$axios.patch(
          `user/${this.$route.params.id}/addSikdangToUser`,
          { userId: this.$store.getters.userId }
        );
        if (res.data.status === "success") {
          this.$toasted.success(
            "상담신청 성공☺️ 프로필에서 확인할 수 있습니다"
          );
        }
      } else {
        EventBus.$emit("loginDialog");
      }
    },
  },

  async mounted() {
    const res = await this.$axios.get(`/sikdang/${this.$route.params.id}`);
    this.sikdang = res.data.sikdang;
  },
};
</script>

<style>
</style>