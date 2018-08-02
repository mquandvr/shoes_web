import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

//Test
const Test =() => import('@/views/test/Test')

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

// Stores
const Stores = () => import('@/views/admin/stores/Stores')
const StoreAdd = () => import('@/views/admin/stores/StoreAdd')

// Providers
const Providers = () => import('@/views/admin/providers/Providers')
const ProviderAdd = () => import('@/views/admin/providers/ProviderAdd')

//Customers
const Customers =() => import('@/views/admin/customer/Customers')
const Customer =() => import('@/views/admin/customer/Customer')

Vue.use(Router)

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
              component: Employees,
              meta: { requiresAuth: true }
            },
            {
              path: 'create',
              name: 'EmployeesAdd',
              component: EmployeesAdd,
              meta: { requiresAuth: true }
            },
            {
              path: 'customer',
              component: Customer,
              meta: { requiresAuth: true }
            },
            {
              path: 'customers',
              name: 'Customers',
              component: Customers,
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
        {
          path: 'stores',
          meta: { label: 'Store'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: Stores,
              meta: { requiresAuth: true }
            },
            {
              path: 'create',
              name: 'StoreAdd',
              component: StoreAdd,
              meta: { requiresAuth: true }
            }
          ]
        },
        {
          path: 'providers',
          name: 'Providers',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: Providers,
              meta: { requiresAuth: true }
            },
            {
              path: 'create',
              name: 'ProviderAdd',
              component: ProviderAdd,
              meta: { requiresAuth: true }
            }
          ]
        }
      ]
    },
    {
      path: '*',
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
      component: Login,
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
        name: 'Login',
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