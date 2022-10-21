import Vue from "vue";
import router from "@/router";
import store from "@/store";
import App from "@/App";

const app = new Vue({
  el: "#app",
  store,
  router,
  render: (h) => h(App),
});

app.$mount();
