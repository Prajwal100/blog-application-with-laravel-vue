require("./bootstrap");
import Vue from "vue";
import router from "./router";
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);
window.Vue = require("vue").default;

import store from "./store/index";
const app = new Vue({
    el: "#app",
    router,
    store,
});
