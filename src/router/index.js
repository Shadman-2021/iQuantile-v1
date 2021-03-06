import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/cart",
        name: "Cart",
        component: () =>
            import ('../views/Cart.vue')
    },

    {
        path: "/sign-in",
        name: "SignIn",
        component: () =>
            import ('../views/SignIn.vue')
    },
    {
        path: "/register",
        name: "Register",
        component: () =>
            import ('../views/Register.vue')
    },
    // {
    //   path: "/about",
    //   name: "About",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "../views/About.vue")
    // }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;