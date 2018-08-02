import Vue from 'vue'
import Router from 'vue-router'

//Test
const Test =() => import('@/views/test/Test')

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

// Users
const Users = () => import('@/views/users/Users')
const User = () => import('@/views/users/User')

const Employees = () => import('@/views/admin/employees/Employees')
const Categories = () => import('@/views/merchandise/categories/Categories')

//Customers
const Customers =() => import('@/views/admin/customer/Customers')
const Customer =() => import('@/views/admin/customer/Customer')

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
            },
            {
              path: ':id',
              meta: { label: 'User Details'},
              name: 'User',
              component: User,
            },
          ]
        },
        {
          path: 'customers',
          name: 'Customers',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: Customers,
            },
            {
              path: ':id',
              meta: { label: 'User Details'},
              name: 'Customer',
              component: Customer,
            },
          ]
        },

      {
        path: '/pages',
        redirect: '/pages/404',
        name: 'Pages',
        component: {
          render (c) { return c('router-view') }
        },
        children: [
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
      }
    ]
  }]
})
