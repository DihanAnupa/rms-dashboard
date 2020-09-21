import Vue from 'vue'
import Router from 'vue-router'
import Order from './views/Orders.vue'
import Employee from './views/Employee.vue'
import VueRouter from 'vue-router'

Vue.use(Router)
const routes = [
    {
        path: '/Employee',
        name: 'Employee',
        component: Employee
      },

      {
        path: '/Order',
        name: 'Order',
        component: Order
      },
      
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router