import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Cart from '../components/Cart.vue'
import ForgotPassword from '../components/ForgotPassword.vue'
import SignIn from '../components/SignIn.vue'
import Support from '../components/Support.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/cart', component: Cart },
  { path: '/forgotPassword', component: ForgotPassword },
  { path: '/signIn', component: SignIn },
  { path: '/support', component: Support }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router