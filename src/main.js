import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'

createApp(App)
  .use(router)   // ✅ must be here
  .use(vuetify)
  .mount('#app')