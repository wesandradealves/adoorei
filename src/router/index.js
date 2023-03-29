import { createWebHistory, createRouter } from "vue-router";
import AppHome from "@/views/home";
import AppProduct from "@/views/product";
import AppCategory from "@/views/category";
import AppCart from "@/views/cart";
import AppSearch from "@/views/search";

const routes = [
  { path: '/:pathMatch(.*)*', name: 'NotFound', redirect: '/' },
  {
    path: "/",
    name: "Página Inicial",
    component: AppHome,
  },
  {
    path: "/cart",
    name: "Carrinho",
    component: AppCart,
  },  
  {
    path: "/product/:id",
    name: "",
    component: AppProduct,
  },
  {
    path: "/category/:id",
    name: "Category",
    component: AppCategory,
  },
  {
    path: "/search/:s",
    name: "Search",
    component: AppSearch,
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