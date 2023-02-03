import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    userEmail: null,
    userName: null,
  },
  getters: {
    token(state) {
      return state.token;
    },
    userEmail(state) {
      return state.userEmail;
    },
    userName(state) {
      return state.userName;
    },
  },
  mutations: {
    setUser(state, payload) {
      console.log("setUser payload", payload);
      state.token = payload.token;
      state.userName = payload.name;
      state.userEmail = payload.email;

      localStorage.setItem("token", state.token);
      localStorage.setItem("userName", state.userName);
      localStorage.setItem("userEmail", state.userEmail);
    },
  },
  actions: {
    //local storage에 유저정보 있으면 로그인함
    tryLogin(context) {
      const token = localStorage.getItem("token");
      const name = localStorage.getItem("userName");
      const email = localStorage.getItem("userEmail");

      if (token && name && email) {
        context.commit("setUser", { token, name, email });
      }
    },
    //회원가입
    async signup(context, payload) {
      try {
        const res = await axios.post("/user/signup", payload);
        console.log("login action res", res);
        context.commit("setUser", {
          token: res.data.token,
          name: res.data.user.name,
          email: res.data.user.email,
        });
      } catch (error) {
        console.log(error);
      }

      // if (!res) {
      //   const error = new Error(res.message || "회원가입 실패");
      //   throw error;
      // }
    },
    //로그인
    async login(context, payload) {
      const res = await axios.post("/user/login", payload);
      console.log("login action res", res);
      context.commit("setUser", {
        token: res.data.token,
        name: res.data.user.name,
        email: res.data.user.email,
      });
      // if (!res.ok) {
      //   const error = new Error(res.message || "로그인 실패");
      //   throw error;
      // }
    },
    logout(context) {
      context.commit("setUser", {
        token: null,
        name: null,
        email: null,
      });
      localStorage.removeItem("token");
      localStorage.removeItem("userName");
      localStorage.removeItem("userEmail");
    },
  },
  modules: {},
});
