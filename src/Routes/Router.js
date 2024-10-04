import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Cart from '../components/Cart.vue'
import ForgotPassword from '../components/ForgotPassword.vue'
import SignIn from '../components/SignIn.vue'
import Support from '../components/Support.vue'
import GameDetails from '../components/GameDetails.vue'
import Shope from '../components/Shope.vue'
import CategoryPage from '../components/CategoryPage.vue'
import OrderFailed from '../components/OrderFailed.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/cart', component: Cart },
  { path: '/forgot-password', component: ForgotPassword },
  { path: '/signIn', component: SignIn },
  { path: '/support', component: Support },
  { path: '/game-details', component: GameDetails },
  { path: '/shope', component: Shope },
  { path: '/category-page', component: CategoryPage },
  { path: '/Order-failed', component: OrderFailed }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router