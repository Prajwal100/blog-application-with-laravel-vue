import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// Layout file
import LayoutBasic from "./views/backend/LayoutBasic.vue";

//dashboard
import Dashboard from "./views/backend/dashboard/Dashboard.vue";

import Login from "./views/backend/auth/Login.vue";

const routes = [
    //Admin Login
    {
        path: "/admin/login",
        name: "adminLogin",
        component: Login,
    },
    {
        path: "/admin",
        component: LayoutBasic,
        children: [
            {
                path: "/",
                name: "dashboard",
                component: Dashboard,
            },
        ],
    },
];

const router = new VueRouter({
    routes,
    mode: "history",
});

export default router;
