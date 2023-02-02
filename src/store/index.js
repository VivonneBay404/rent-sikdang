import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    userEmail: "",
    userName: "",
  },
  getters: {
    token(state) {
      return state.token;
    },
  },
  mutations: {
    setUser(state, payload) {
      console.log("setUser payload", payload);
      state.token = payload.data.token;
      state.userName = payload.data.data.user.name;
      state.userEmail = payload.data.data.user.email;
    },
  },
  actions: {
    //회원가입
    async signup(context, payload) {
      try {
        const res = await axios.post("/user/signup", payload);
        console.log("login action res", res);
        context.commit("setUser", res);
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
      context.commit("setUser", res);
      // if (!res.ok) {
      //   const error = new Error(res.message || "로그인 실패");
      //   throw error;
      // }
    },
  },
  modules: {},
});
