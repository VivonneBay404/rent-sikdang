import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    userId: null,
  },
  getters: {
    token(state) {
      return state.token;
    },

    userId(state) {
      return state.userId;
    },
  },
  mutations: {
    setUser(state, payload) {
      console.log("setUser payload", payload);
      state.token = payload.token;
      state.userId = payload.userId;

      localStorage.setItem("token", state.token);
      localStorage.setItem("userId", state.userId);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${payload.token}`;
    },
  },
  actions: {
    //local storage에 유저정보 있으면 로그인함
    tryLogin(context) {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      if (token && userId) {
        context.commit("setUser", { token, userId });
      }
    },
    //회원가입
    async signup(context, payload) {
      const res = await axios.post("/user/signup", payload);
      context.commit("setUser", {
        token: res.data.token,
        userId: res.data.user._id,
      });
      if (res.statusText === "Created") {
        Vue.toasted.success("회원가입 성공");
      }
    },
    //로그인
    async login(context, payload) {
      const res = await axios.post("/user/login", payload);
      context.commit("setUser", {
        token: res.data.token,
        userId: res.data.user._id,
      });
      if (res.statusText === "OK") {
        Vue.toasted.success("로그인 성공");
      }
    },
    logout(context) {
      context.commit("setUser", {
        token: null,
        userId: null,
      });
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      Vue.toasted.success("로그아웃 성공");
    },
  },
  modules: {},
});
