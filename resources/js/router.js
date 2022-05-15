import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// Layout file
import LayoutBasic from "./views/backend/LayoutBasic.vue";

const routes = [
    {
        path: "/",
        component: LayoutBasic,
    },
];

const router = new VueRouter({
    routes,
    mode: "history",
});

export default router;
