import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue")
  },
  {
    path: "/pro-hybrid-type-s",
    name: "Type-S",
    component: () =>
      import(/* webpackChunkName: "pro-hybrid-type-s" */ "../views/Type-S.vue")
  },
  {
    path: "/pro-hybrid",
    name: "Hybrid",
    component: () =>
      import(/* webpackChunkName: "pro-hybrid" */ "../views/Hybrid.vue")
  },
  {
    path: "/pro-classic",
    name: "Classic",
    component: () =>
      import(/* webpackChunkName: "pro-classic" */ "../views/Classic.vue")
  },
  {
    path: "/accessories",
    name: "Accessories",
    component: () =>
      import(/* webpackChunkName: "accessories" */ "../views/Accessories.vue")
  },
  {
    path: "/admin",
    name: "Admin",
    component: () =>
      import(/* webpackChunkName: "accessories" */ "../views/Admin.vue")
  },
  {
    path: "/test",
    name: "test",
    component: () =>
      import(
        /* webpackChunkName: "accessories" */ "../components/productModal.vue"
      )
  }
];

const router = new VueRouter({
  routes
});

export default router;
