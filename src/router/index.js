import Vue from 'vue'
import Router from 'vue-router'

// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')

const Typography = () => import('@/views/theme/Typography')

// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')

// Employees
const Employees = () => import('@/views/people/Employees')
const EmployeesAdd = () => import('@/views/people/EmployeesAdd')

// Categories
const Categories = () => import('@/views/merchandise/categories/Categories')

Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: DefaultContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
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
              component: Categories
            },
            {
              path: 'typography',
              name: 'Typography',
              component: Typography
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
            },
            {
              path: 'create',
              name: 'EmployeesAdd',
              component: EmployeesAdd,
            }
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
