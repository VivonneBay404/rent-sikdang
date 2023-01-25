import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

//Router
import { createRouter, createWebHistory } from 'vue-router'

//Component
import SikdangList from './pages/sikdang/SikdangList'
import AboutUs from './pages/aboutUs/AboutUs'

const vuetify = createVuetify({
    components,
    directives,
})
const router = createRouter({
    history: createWebHistory(),
    routes: [{ path: '/', component: SikdangList }, { path: '/sikdang', component: SikdangList }, { path: '/about-us', component: AboutUs }]
})

createApp(App).use(vuetify).use(router).mount('#app')

