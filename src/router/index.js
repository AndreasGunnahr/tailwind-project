import Vue from "vue";
import VueRouter from "vue-router";

// Pages
import Home from "../views/Home.vue";
import Overview from "../views/Overview.vue";
import About from "../views/About.vue";
import Exercise from "../views/Exercise.vue";
import Internship from "../views/Internship.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/internship",
    name: "Internship",
    component: Internship,
  },
  {
    path: "/overview",
    name: "Overview",
    component: Overview,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/exercise",
    name: "Exercise",
    component: Exercise,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
