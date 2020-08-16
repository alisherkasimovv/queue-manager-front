import Vue from "vue";
import Router from 'vue-router';

import AdminLayout from "../layouts/Admin-layout";
import CustomerLayout from "../layouts/Customer-layout"

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/customer",
      name: "customer-main-page",
      meta: { layout: "customer" },
      component: CustomerLayout
    },
    {
      path: "/admin",
      name: "admin-main-page",
      meta: { layout: "admin" },
      component: AdminLayout
    }
  ]
});
