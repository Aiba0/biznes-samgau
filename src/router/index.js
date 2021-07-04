import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Courses from '../views/Courses'
import Faqs from '../views/Faqs'
import Profile from '../views/Profile'
import Lesson from '../views/Lesson'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/courses',
    name: 'Courses',
    component: Courses
  }, {
    path: '/faqs',
    name: 'Faqs',
    component: Faqs
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/lesson/:id',
    name: 'lesson',
    component: Lesson
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
