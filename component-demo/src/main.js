import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import "@css/reset.css";

import router from './router'
import App from './App.vue'

createApp(App)
    .use(router)
    .use(createPinia())
    .use(ElementPlus)
    .mount('#app')

