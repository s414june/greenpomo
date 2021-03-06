import Vue from 'vue'
import App from './App.vue'
import { store } from './vuex/store'
import router from './router'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    store: store
}).$mount('#app')