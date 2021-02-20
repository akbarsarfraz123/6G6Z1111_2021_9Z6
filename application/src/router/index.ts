import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import About from '../views/About.vue'
import Add from '../views/Add.vue'
import Dashboard from '../views/Dashboard.vue'
import Documents from '../views/Documents.vue'
import Manage from '../views/Manage.vue'
import Remove from '../views/Remove.vue'
import * as firebase from '../firebase'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( /* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/add',
    name: 'Add',
    component: Add
  },
  {
    path: '/documents',
    name: 'Documents',
    component: Documents
  },
  {
    path: '/remove',
    name: 'Remove',
    component: Remove
  },
  {
    path: '/manage',
    name: 'Manage',
    component: Manage
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if (requiresAuth && !firebase.auth.currentUser) {
    next('/login')
  } else {
    next()
  }
})

export default router
