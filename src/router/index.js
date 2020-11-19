import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/common/login";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
      meta: {
        title: "登录页"
      }
    },
    {
      path: "/404",
      name: "404",
      component: () => import("@/components/common/404.vue")
    },
    {
      path: "/Home",
      name: "Home",
      component: () => import("@/components/views/Home.vue"),
      children: [
        {
          path: "/Home/Page",
          neme: "HomePage",
          component: () => import("@/components/views/menu/HomePage.vue")
        },
        {
          path: "/Home/Demo/Ueditor",
          name: "Ueditor",
          component: () => import("@/components/views/menu/Ueditor.vue")
        },
        {
          path: "/Home/Demo/Echarts",
          name: "Echarts",
          component: () => import("@/components/views/menu/Echarts.vue")
        },

      ]
    }
  ],
  // mode 用于去除地址中的 #
  mode: "history",
  // scrollBehavior 用于定义路由切换时，页面滚动。
  scrollBehavior: () => ({
    y: 0
  })
});
