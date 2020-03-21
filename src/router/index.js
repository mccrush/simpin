import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from "@/main.js";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'list',
    component: () => import('../views/List.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('../views/Create.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/createstep/:id',
    name: 'createstep',
    component: () => import('../views/CreateStep.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../views/Edit.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/editstep/:id',
    name: 'editstep',
    component: () => import('../views/EditStep.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/instruction/:id',
    name: 'instruction',
    component: () => import('../views/Instruction.vue')
  },
  {
    path: '*',
    name: 'notfound',
    component: () => import('../views/HotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let currentUser = auth.currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  // 3
  if (requiresAuth) {
    if (currentUser) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
