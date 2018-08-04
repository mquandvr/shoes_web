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
// index
const Home = () => import('@/views/customer/index')

Vue.use(Router)

const adminRole = {
  requiresAuth: true,
  adminRole: true,
  customerAuth: false
}

const customerRole = {
  adminRole: false,
  customerAuth: true
}

const router = new Router({
  mode: 'history', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: customerRole
    },
    {
      path: '/admin',
      redirect: {
        name: 'Dashboard'
      },
      name: 'AdminPage',
      component: DefaultContainer,
      meta: adminRole,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard,
          meta: adminRole
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
              meta: adminRole
            },
            {
              path: 'typography',
              name: 'Typography',
              component: Typography,
              meta: adminRole
            }
          ]
        },
        {
          path: '',
          meta: { label: 'Con người'},
          redirect: {
            name: 'Employees'
          },
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'employees',
              name: 'Employees',
              component: Employees,
              meta: adminRole
            },
            {
              path: 'create-employee',
              name: 'Nhân viên',
              component: EmployeesAdd,
              meta: adminRole
            },
            
            {
              path: 'customers',
              name: 'Khách hàng',
              meta: adminRole,
              component: {
                render (c) { return c('router-view') }
              },
              children: [
                {
                  path: '',
                  component: Customers,
                  meta: adminRole
                },
                {
                  path: 'create',
                  name: 'Thêm khách hàng',
                  component: CustomerAdd,
                  meta: adminRole
                },
              ]
            }
          ]
        },
        // {
        //   path: '',
        //   redirect: {
        //     name : 'Users'
        //   },
        //   meta: { label: 'Users'},
        //   component: {
        //     render (c) { return c('router-view') }
        //   },
        //   children: [
        //     {
        //       path: 'users',
        //       name: 'Users',
        //       component: Users,
        //       meta: adminRole
        //     },
        //     {
        //       path: ':id',
        //       meta: { label: 'User Details', requiresAuth: true},
        //       name: 'User',
        //       component: User,
        //       meta: adminRole
        //     },
        //   ]
        // },
        {
          path: '',
          redirect: {
            name: 'Stores'
          },
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'stores',
              name: 'Stores',
              component: Stores,
              meta: adminRole,
              // children: [
              //   {
              //     path: 'create',
              //     name: 'StoreAdd',
              //     component: StoreAdd,
              //     meta: adminRole
              //   },
              //   {
              //     path: 'edit/:storeId',
              //     name: 'StoresEdit',
              //     component: StoreAdd,
              //     meta: adminRole
              //   }
              // ]
            },
            {
              path: 'create',
              name: 'StoreAdd',
              component: StoreAdd,
              meta: adminRole
            },
            {
              path: 'edit/:storeId',
              name: 'StoresEdit',
              component: StoreAdd,
              meta: adminRole
            }
          ]
        },
        {
          path: '',
          redirect: {
            name: 'Providers'
          },
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'providers',
              name: 'Providers',
              component: Providers,
              meta: adminRole
            },
            {
              path: 'create',
              name: 'ProviderAdd',
              component: ProviderAdd,
              meta: adminRole
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
              meta: adminRole
            },
            {
              path: 'create',
              name: 'ProductAdd',
              component: ProductAdd,
              meta: adminRole
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
  const role = store.state.auth.permission
  const adminRole = (to.matched.some(record => record.meta.adminRole))
  const customerRole = (to.matched.some(record => record.meta.customerRole))
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.isAuthenticated && localStorage.getItem("access-token") === null) {
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