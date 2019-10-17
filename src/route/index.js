import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
let routes = new VueRouter({
    routes: [
        {
            path: '/login',
            component: () => import("views/login/index.vue")
        }
    ]
});

module.exports = routes;