import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import RegisterView from '../views/RegisterView.vue'
import UserListView from '../views/UserListView.vue'
import UserProfileView from '../views/UserProfileView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/userList/',
    name: 'UserListView',
    component: UserListView
  },
  {
    path: '/userProfile/:userId/',
    name: 'UserProfileView',
    component: UserProfileView
  },
  {
    path: '/login/',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/register/',
    name: 'RegisterView',
    component: RegisterView
  },
  {
    path: '/404/',
    name: '404',
    component: NotFoundView
  },
  {
    path: '/:catchALL(.*)',
    redirect: '/404/'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
