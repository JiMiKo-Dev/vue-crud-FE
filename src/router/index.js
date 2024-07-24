import { createRouter, createWebHistory } from "vue-router";
import ListsComponent from "../components/ListsComponent.vue";
import CreateComponent from "../components/CreateComponent.vue";
import EditComponent from "../components/EditComponent.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "lists",
      component: ListsComponent,
    },
    {
      path: "/view/:id",
      name: "lists-id",
      component: ListsComponent,
    },
    {
      path: "/create",
      name: "create",
      component: CreateComponent,
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: EditComponent,
    },
  ],
});

export default router;
