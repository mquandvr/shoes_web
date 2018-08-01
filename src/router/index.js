import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

// Containers
const DefaultContainer = () => import('@/containers/admin/DefaultContainer')

// Views
const Dashboard = () => import('@/views/admin/Dashboard')

const Typography = () => import('@/views/admin/theme/Typography')

// Views - Pages
const Page404 = () => import('@/views/admin/pages/Page404')
const Page500 = () => import('@/views/admin/pages/Page500')
const Login = () => import('@/views/admin/pages/Login')
const Register = () => import('@/views/admin/pages/Register')

// Users
const Users = () => import('@/views/admin/users/Users')
const User = () => import('@/views/admin/users/User')

// Employees
const Employees = () => import('@/views/admin/employees/Employees')
const EmployeesAdd = () => import('@/views/admin/employees/EmployeesAdd')

// Categories
const Categories = () => import('@/views/admin/merchandise/categories/Categories')

Vue.use(Router)

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
   next()
   return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
   next()
   return
  }
  next('/login')
}

const router = new Router({
  mode: 'history', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: DefaultContainer,
      meta: { requiresAuth: true },
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard,
          meta: { requiresAuth: true }
        },
        {
          path: 'merchandise',
          name: 'Hàng hóa',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'categories',
              name: 'Danh mục',
              component: Categories,
              meta: { requiresAuth: true }
            },
            {
              path: 'typography',
              name: 'Typography',
              component: Typography,
              meta: { requiresAuth: true }
            }
          ]
        },
        {
          path: 'admin',
          meta: { label: 'People'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'employees',
              name: 'Employees',
              component: Employees,
              meta: { requiresAuth: true }
            },
            {
              path: 'create',
              name: 'EmployeesAdd',
              component: EmployeesAdd,
              meta: { requiresAuth: true }
            }
          ]
        },
        {
          path: 'users',
          meta: { label: 'Users'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: Users,
              meta: { requiresAuth: true }
            },
            {
              path: ':id',
              meta: { label: 'User Details', requiresAuth: true},
              name: 'User',
              component: User,
            },
          ]
        },
      ]
    },
    {
      path: '404',
      name: 'Page404',
      component: Page404
    },
    {
      path: '500',
      name: 'Page500',
      component: Page500
    },
    {
      path: 'login',
      name: 'Login',
      component: Login
    },
    {
      path: 'register',
      name: 'Register',
      component: Register
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.isAuthenticated) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router