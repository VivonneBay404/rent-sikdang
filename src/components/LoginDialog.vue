<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="primary" dark v-bind="attrs" v-on="on"> login </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">로그인</span>
          <v-spacer></v-spacer>
          <v-btn class="primary" @click="onClickSignup()">회원가입</v-btn>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="이메일"
                  v-model="email"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="비밀번호"
                  type="password"
                  v-model="password"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            닫기
          </v-btn>
          <v-btn color="blue darken-1" text @click="onClickLoginBtn()">
            로그인
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { EventBus } from "../utils/eventBus";
export default {
  data() {
    return {
      dialog: false,
      email: "",
      password: "",
    };
  },
  methods: {
    onClickSignup() {
      this.$router.push("/signup");
      this.dialog = false;
    },
    onClickLoginBtn() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
      // await this.$axios.post("/user/login", {
      //   email: this.email,
      //   password: this.password,
      // });
    },
  },
  created() {
    EventBus.$on("loginDialog", () => {
      this.dialog = true;
    });
  },
};
</script>

<style>
</style>