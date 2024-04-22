import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import MoviesPage from "../pages/MoviesPage.vue";
import MoreInfoPage from "../pages/MoreInfoPage.vue";
import Cast from "../components/Cast.vue";
import NotFound from "../pages/NotFound.vue";

const routes = [
  { path: "/", name: "home-page", component: HomePage },
  { path: "/movies", name: "movies-page", component: MoviesPage },
  {
    path: "/movies/:id",
    name: "more-info",
    component: MoreInfoPage,
    children: [{ path: "cast", name: "movie-cast", component: Cast }],
  },
  { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
];

const router = createRouter({ routes, history: createWebHistory("/") });

export default router;
