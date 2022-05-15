require("./bootstrap");
import router from "./router";
window.Vue = require("vue").default;

const app = new Vue({
    el: "#app",
    router,
});
