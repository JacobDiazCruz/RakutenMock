import Vue from "vue";
import Router from "vue-router";
import Layout from "@/layouts/default.vue";

Vue.use(Router);
const router = new Router({
  base: process.env.BASE_URL,
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/",
      component: Layout,
      children: [
        {
          path: "/",
          name: "Home",
          component: () =>
            import(/*webpackChunkName: "Home" */ "@/pages")
        }
      ]
    },
  ]
})

export default router;