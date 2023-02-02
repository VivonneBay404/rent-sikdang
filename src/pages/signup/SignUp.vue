<template>
  <v-container fill-height>
    <v-row justify="center" align="center">
      <v-card class="pa-10" outlined>
        <v-card-title>회원가입</v-card-title>
        <v-form v-model="valid">
          <v-text-field
            v-model="name"
            :rules="nameRules"
            :counter="10"
            label="이름"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="이메일"
            required
          ></v-text-field>
          <v-text-field
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            :type="showPassword ? 'text' : 'password'"
            v-model="password"
            :rules="passwordRules"
            label="비밀번호"
            hint="8글자 이상"
            required
          ></v-text-field>
          <v-text-field
            :append-icon="showPasswordConfirm ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPasswordConfirm = !showPasswordConfirm"
            :type="showPasswordConfirm ? 'text' : 'password'"
            v-model="passwordConfirm"
            :rules="passwordRules"
            label="비밀번호 확인"
            hint="8글자 이상"
            required
          ></v-text-field>
        </v-form>
        <v-row class="mt-4">
          <v-spacer></v-spacer>
          <v-btn
            class="primary"
            @click="onSignupBtnClicked()"
            :loading="isLoading"
            >확인</v-btn
          >
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      valid: false,
      name: "",
      nameRules: [
        (v) => !!v || "이름은 필수입니다",
        (v) => v.length <= 10 || "열글자이상 불가능합니다",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "이메일은 필수입니다",
        (v) => /.+@.+/.test(v) || "이메일형식이 아닙니다",
      ],
      password: "",
      passwordConfirm: "",
      passwordRules: [
        (v) => !!v || "비밀번호는 필수입니다",
        (v) => v.length <= 8 || "8자리 이상",
      ],
      showPassword: false,
      showPasswordConfirm: false,
    };
  },
  methods: {
    async onSignupBtnClicked() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("signup", {
          name: this.name,
          email: this.email,
          password: this.password,
          passwordConfirm: this.passwordConfirm,
        });
        console.log("회원가입 성공");
        this.$router.push("/sikdang");
      } catch (err) {
        console.log("err", err);
      }
      this.isLoading = false;
    },
  },
};
</script>

<style>
</style>