<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="ma-4 pa-4">
          <v-card-title>이름 {{ userName }}</v-card-title>
          <v-card-subtitle>이메일 {{ userEmail }}</v-card-subtitle>
          <v-btn class="primary" @click="onLogoutClicked">로그아웃</v-btn>
        </v-card>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col>
        <h2>상담신청</h2>
        <div v-if="loading">
          <v-progress-circular
            size="100"
            color="primary"
            indeterminate
          ></v-progress-circular>
        </div>
        <div v-else-if="userSikdangs.length > 0">
          <v-card
            v-for="item in userSikdangs"
            :key="item._id"
            class="ma-4 pa-4"
          >
            <v-row>
              <v-col>
                <v-img
                  max-height="150"
                  max-width="250"
                  :src="
                    require(`../../public/images/sikdangs/${item.photos[0]}`)
                  "
                ></v-img>
              </v-col>
              <v-col>
                <v-card-title>{{ item.name }}</v-card-title>
                <v-card-text>최대인원 {{ item.maxPeople }}</v-card-text>
                <v-card-text>최소주문금액 {{ item.minSpend }}</v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </div>
        <div v-else class="ma-4">상담신청한 식당이 없습니다😱</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      userEmail: "",
      userSikdangs: [],
      loading: false,
    };
  },
  methods: {
    onLogoutClicked() {
      this.$store.dispatch("logout");
      this.$router.replace("/sikdang");
    },
  },
  async mounted() {
    this.loading = true;
    const res = await this.$axios.get(`/user/${this.$store.getters.userId}`);
    console.log("res", res);
    this.userName = res.data.user.name;
    this.userEmail = res.data.user.email;
    this.userSikdangs = res.data.user.sikdangs;
    this.loading = false;
  },
};
</script>

<style>
</style>