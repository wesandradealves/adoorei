import { createWebHistory, createRouter } from "vue-router";
import AppHome from "@/views/home";
// import Character from "@/views/Character/Character.vue";

const routes = [
  { path: '/:pathMatch(.*)*', name: 'NotFound', redirect: '/' },
  {
    path: "/",
    name: "Página Inicial",
    component: AppHome,
  },
  // { path: '/character/:id', name: "Character", component: Character }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;