import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Default from './layout/wrapper/index.vue'
import AdminLayout from './layout/wrapper/AdminLayout.vue'

const app = createApp(App)

app.use(router)
app.component("default-layout", Default)
app.component("admin-layout", AdminLayout)

app.mount("#app")