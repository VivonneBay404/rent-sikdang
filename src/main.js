import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import axios from "axios";
import store from "./store";
import Toasted from "vue-toasted";

Vue.config.productionTip = false;
console.log("process env", process.env);
if (process.env.NODE_ENV === "development") {
  axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;
}
if (process.env.NODE_ENV === "production") {
  axios.defaults.baseURL = "https://rent-sikdang-api.onrender.com/api/v1";
}

axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "token"
)}`;
// axios 에러나면 뷰 토스트 up
axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    Vue.toasted.error(error.response.data.message);
  }
);
Vue.prototype.$axios = axios;

Vue.use(Toasted, {
  duration: 5000,
  iconPack: "mdi",
});

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
