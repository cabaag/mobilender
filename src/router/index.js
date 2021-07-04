import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Softwares from "@/views/Softwares/Softwares.vue";
import SearchCreditGroups from "@/views/CreditGroups/SearchCreditGroups.vue";
import ChangesControl from "@/views/ChangesControl/ChangesControl.vue";
import Inspect from "@/views/Inspect/Inspect.vue";
import NotFound from "@/views/404.vue";
import Login from "@/views/Login.vue";
import store from '@/store';

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      breadcrumb: [{ name: "Home" }],
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/softwares",
    name: "Softwares",
    component: Softwares,
    meta: {
      breadcrumb: [
        { name: "Home", link: "/" },
        { name: "Listados de softwares" },
      ],
    },
  },
  {
    path: "/search_group_credits",
    name: "SearchCreditGroups",
    component: SearchCreditGroups,
    meta: {
      breadcrumb: [
        { name: "Home", link: "/" },
        { name: "Buscar créditos grupales" },
      ],
    },
  },
  {
    path: "/search_group_credits/inspect",
    name: "Inspect",
    component: Inspect,
    meta: {
      breadcrumb: [
        { name: "Home", link: "/" },
        { name: "Buscar créditos grupales", link: "/search_group_credits" },
        { name: "Inspeccionar" },
      ],
    },
  },
  {
    path: "/search_group_credits/inspect/changes_control",
    name: "ChangesControl",
    component: ChangesControl,
    meta: {
      breadcrumb: [
        { name: "Home", link: "/" },
        { name: "Buscar créditos grupales", link: "/search_group_credits" },
        { name: "Inspeccionar", link: "/search_group_credits/inspect" },
        { name: "Control de cambios" },
      ],
    },
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const { token } = store.state
  if (to.name !== "Login" && !token) next({ name: "Login" });
  else next();
});

export default router;
