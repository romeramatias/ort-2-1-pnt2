import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Importamos las lib bootstrap, jquery que instalamos
import 'jquery'
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).use(router).mount('#app')

// npm i vue-router@next
// vgc