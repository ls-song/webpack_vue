import Vue from 'vue'
import App from './App'
import route from './route'

new Vue({
    route,
    render: h => h(App)
}).$mount("#app");