import HomeView from "@/components/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
];

const history = createWebHistory();
const router = createRouter({
  history,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = "|| " + to.name;
  next();
});

export default router;
