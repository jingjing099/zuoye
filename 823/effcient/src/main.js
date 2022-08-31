import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import httpRequest from '@/untils/httpRequest'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './styles/element-variables.scss'
// Vue.prototype.$http = httpRequest
Vue.config.productionTip = false

Vue.use(ElementUI)
new Vue({
	router,
	store,
	render: (h) => h(App)
}).$mount('#app')
