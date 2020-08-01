import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store'
import '../public/font/RuiZiBiGeQingChunTiJian2-0-1.css'
import './assets/style/reset.css'
import './assets/iconfont/iconfont.css'
import 'font-awesome/css/font-awesome.min.css'

var echarts = require('echarts')
Vue.prototype.$echarts = echarts

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
