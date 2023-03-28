import { createWebHistory, createRouter } from "vue-router";
import AppHome from "@/views/home";

const routes = [
  { path: '/:pathMatch(.*)*', name: 'NotFound', redirect: '/' },
  {
    path: "/",
    name: "Página Inicial",
    component: AppHome,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to) => {
  document.title = `${process.env.VUE_APP_TITLE} - ${to.name}`;
});

export default router;