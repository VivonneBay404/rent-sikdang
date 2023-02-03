<template>
  <v-container>
    <v-row>
      <v-col>
        <p>이름 {{ $store.getters.userName }}</p>
        <p>이메일 {{ $store.getters.userEmail }}</p>
        <v-btn class="primary" @click="onLogoutClicked">로그아웃</v-btn>
      </v-col>
      <v-col>
        <h2>상담신청</h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    onLogoutClicked() {
      this.$store.dispatch("logout");
      this.$router.replace("/sikdang");
    },
  },
};
</script>

<style>
</style>