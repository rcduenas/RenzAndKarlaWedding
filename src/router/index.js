import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OurStoryView from '../views/OurStoryView.vue'
import ScheduleView from '../views/ScheduleView.vue'
import RsvpView from '../views/RsvpView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/our-story', component: OurStoryView },
  { path: '/schedule', component: ScheduleView },
  { path: '/rsvp', component: RsvpView },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
