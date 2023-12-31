import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/About",
    name: "About",
    component: About,
  },
  {
    path: "/Login",
    name: "Login-Data",
    component: Login,
  },
  {
    path: "/Register",
    name: "Register",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
