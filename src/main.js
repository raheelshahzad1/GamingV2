import './assets/tailwind.css'
import router from './Routes/Router'
import { createApp } from 'vue'
import App from './App.vue'
createApp(App).use(router).mount('#app')