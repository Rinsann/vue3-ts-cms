import { createApp } from 'vue'
import 'normalize.css'
import './assets/css/index.less'
import App from './App.vue'
import router from './router'
import pinia from './store'

// 按需引入 npm install -D unplugin-vue-components unplugin-auto-import

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
