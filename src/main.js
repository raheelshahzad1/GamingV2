import './assets/tailwind.css'
import '@splidejs/vue-splide/css';
import router from './Routes/Router'
import { createApp } from 'vue'
import App from './App.vue'
import VueSplide from '@splidejs/vue-splide';
createApp(App).use(router).mount('#app')