import Vue from 'vue'
import Router from 'vue-router'
import {store} from '@/store/index'

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
const CustomerAdd =() => import('@/views/admin/customer/CustomerAdd')

// Products
const Products = () => import('@/views/admin/products/Products')
const ProductAdd = () => import('@/views/admin/products/ProductAdd')

// Customer
const Home = () => import('@/views/customer/home')


Vue.use(Router)

const router = new Router({
  mode: 'history', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { customerRole: true },
    },
    {
      path: '/admin',
      redirect: { name: 'Dashboard' },
      name: 'Admin',
      component: DefaultContainer,

      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard,
          meta: { requiresAuth: true, adminRole: true }
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
              meta: { requiresAuth: true, adminRole: true }
            },
            {
              path: 'typography',
              name: 'Typography',
              component: Typography,
              meta: { requiresAuth: true, adminRole: true }
            }
          ]
        },
        {
          path: '',
          meta: { label: 'Con người'},
          redirect: '/admin/employees',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'employees',
              name: 'Employees',
              component: Employees,
              meta: { requiresAuth: true, adminRole: true }
            },
            {
              path: 'employees/create',
              name: 'EmployeeAdd',
              component: EmployeesAdd,
              props: true,
              meta: { requiresAuth: true, adminRole: true, label: 'Thêm nhân viên' }
            },
            {
              path: 'employees/show/:userId',
              name: 'EmployeeView',
              component: EmployeesAdd,
              props: true,
              meta: { requiresAuth: true, adminRole: true, label: 'Xem nhân viên' }
            },
            {
              path: 'employees/edit/:userId',
              name: 'EmployeeEdit',
              component: EmployeesAdd,
              props: true,
              meta: { requiresAuth: true, adminRole: true, label: 'Chỉnh sửa nhân viên' }
            },
            {
              path: 'employees/delete/:userId',
              name: 'EmployeeDelete',
              redirect: '/admin/employees',
              meta: { requiresAuth: true, adminRole: true },
            },
            {
              path: 'customers',
              name: 'Customers',
              meta: { requiresAuth: true, adminRole: true },
              component: {
                render (c) { return c('router-view') }
              },
              children: [
                {
                  path: '',
                  component: Customers,
                  meta: { requiresAuth: true, adminRole: true }

                },
                {
                  path: 'create',
                  name: 'Thêm khách hàng',
                  component: CustomerAdd,
                  meta: { requiresAuth: true, adminRole: true }

                },
              ]
            }
          ]
        },
        // {
        //   path: '',
        //   meta: { label: 'Users'},
        //   component: {
        //     render (c) { return c('router-view') }
        //   },
        //   children: [
        //     {
        //       path: 'users',
        //       component: Users,
        //       meta: { requiresAuth: true }
        //     },
        //     {
        //       path: ':id',
        //       meta: { label: 'User Details', requiresAuth: true},
        //       name: 'User',
        //       component: User,
        //     },
        //   ]
        // },
        {
          path: '',
          meta: { label: 'Store'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'stores',
              name: 'Stores',
              component: Stores,
              meta: { requiresAuth: true, adminRole: true }
            },
            {
              path: 'create',
              name: 'StoreAdd',
              component: StoreAdd,
              meta: { requiresAuth: true, adminRole: true }

            }
          ]
        },
        {
          path: '',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'providers',
              name: 'Providers',
              component: Providers,
              meta: { requiresAuth: true, adminRole: true }

            },
            {
              path: 'create',
              name: 'ProviderAdd',
              component: ProviderAdd,
              meta: { requiresAuth: true, adminRole: true }

            }
          ]
        },
        {
          path: '',
          redirect: {
            name : 'Products'
          },
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'products',
              name: 'Products',
              component: Products,
              meta: { requiresAuth: true, adminRole: true }

            },
            {
              path: 'create',
              name: 'ProductAdd',
              component: ProductAdd,
              meta: { requiresAuth: true, adminRole: true }

            }
          ]
        },
        {
          path: 'products',
          name: 'Products',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: Products,
              meta: { requiresAuth: true }
            },
            {
              path: 'create',
              name: 'ProductAdd',
              component: ProductAdd,
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
      path: '/500',
      name: 'Page500',
      component: Page500
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.isAuthenticated && !localStorage.getItem("access-token")) {
      next({
        name: 'Login',
        query: { redirect: to.fullPath }
      })
    } else if(to.matched.some(record => record.meta.requiresAuth)) {
      const authUser = store.getters['user/getUserRole']
      if (authUser === 'ADMIN') {
        next()
      } else {
        next({ name: 'Home' })
      }
    }
  } else if (to.matched.some(record => record.meta.customerRole)) {
    const authUser = store.getters['user/getUserRole']
    if (authUser === 'CUSTOMER') {
      next()
    } else {
      next({ name: 'Admin' })
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
