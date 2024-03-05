import { createApp } from 'vue'
import 'tailwindcss/tailwind.css'
import naive from 'naive-ui'
import App from './App.vue'
import router from './router'
// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'

createApp(App).use(router).use(naive).mount('#app')
