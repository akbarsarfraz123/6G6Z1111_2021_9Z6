import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import About from '../views/About.vue'
import Add from '../views/Add.vue'
import Chart from '../views/Chart.vue'
import Dashboard from '../views/Dashboard.vue'
import Documents from '../views/Documents.vue'
import Manage from '../views/Manage.vue'
import Remove from '../views/Remove.vue'
import Settings from '../views/Settings.vue'
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
    component: About,
    meta: {
      requiresAuth: true
    }

  },
  {
    path: '/add',
    name: 'Add',
    component: Add,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/chart',
    name: 'Chart',
    component: Chart,
    props (route) {
      return { chartid: route.query.chartid };
    },
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/Settings',
    name: 'Settings',
    component: () => import( /* webpackChunkName: "settings" */ '../views/Settings.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/documents',
    name: 'Documents',
    component: Documents,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/remove',
    name: 'Remove',
    component: Remove,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/manage',
    name: 'Manage',
    component: Manage,
    meta: {
      requiresAuth: true
    }
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
