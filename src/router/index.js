import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginHome from "../views/LoginHome.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "HomeView",
      component: HomeView,
    },
    {
      path: "/HomeView",
      name: "HomeView",
      // component: HomeView,
    },
    {
      path: "/login",
      name: "LoginHome",
      component: LoginHome,
    },
  ],
});

// router.beforeEach((to, from, next) => {

//   let a = 10;
//   let b = '10';
//   if (a === b) {
//     console.log('Ahmed');
//     next()
//   } else {
//     console.log('asdasd');
//     // this.redirectTo({name : 'LoginHome'});

//     // router.push('/login')
//   }
// });

export default router;
