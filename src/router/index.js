import { createRouter, createWebHistory } from 'vue-router'
import QuizView from '../views/QuizView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/programmer-eval/git-level',
      mode: 'history',
      name: 'quis',
      component: QuizView,
    },
  ],
})

export default router
