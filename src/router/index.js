import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from "../views/HomeView.vue";
import IncomeOper from "../views/IncomeOper";
import ExpensesOper from "../views/ExpensesOper";
import HomeView from "../views/HomeView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/incomeoper",
    name: "income",
    component: IncomeOper,
  },
  {
    path: "/expenses",
    name: "expenses",
    component: ExpensesOper,
  },
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.NODE_ENV === "production" ? "/finance/" : "/",
  // для правильного роутинга, ссылки
  routes,
});

export default router;
