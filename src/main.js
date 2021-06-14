import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCopy, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App)

library.add(faCopy)
library.add(faTimes)

app.component('font-awesome-icon', FontAwesomeIcon)

app.config.productionTip = false

app.use(store).use(router).mount('#app')
