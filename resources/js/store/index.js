import Vue from "vue";

import Vuex from "vuex";

Vue.use(Vuex);

import auth from "./auth/index";

export default new Vuex.Store({
    strict: true,
    modules: {
        auth,
    },
});
