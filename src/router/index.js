import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home.vue";
import MyWork from "../pages/MyWork.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/my-work", component: MyWork },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash, behavior: "smooth" };
    }
    return savedPosition || { x: 0, y: 0 };
  },
});

export default router;
