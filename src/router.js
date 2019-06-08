import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);


import pageA from './pages/pageA'
import pageB from './pages/pageB'

const routes = [
    {path: '/', redirect: '/A'},
    { path: '/A', component: pageA },
    { path: '/B', component: pageB },
]

export default new VueRouter({
    routes
})