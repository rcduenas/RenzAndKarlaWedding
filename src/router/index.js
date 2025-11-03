import { createRouter, createWebHistory } from 'vue-router'
import RenzAndKarlaWeddingView from '../views/RenzAndKarlaWeddingView.vue'

const routes = [
  { path: '/', component: RenzAndKarlaWeddingView }
]

export default createRouter({
  history: createWebHistory('/RenzAndKarlaWedding/'),
  routes,
})
