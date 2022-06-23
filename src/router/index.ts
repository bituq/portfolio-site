import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GradeView from "../views/GradeView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: "/grade/:grade(\\d+)",
      name: "grade",
      component: GradeView,
      props: true,
    },
    {
      path: "/grade",
      redirect: "/"
    }
  ]
})

export default router
