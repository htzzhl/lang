// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
import 'font-awesome/css/font-awesome.css'
import '@/assets/common.css'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

import VueI18n from 'vue-i18n'

// default options with global component
Vue.use(VueAwesomeSwiper)
Vue.use(VueI18n)
Vue.use(ElementUI);
Vue.config.productionTip = false

const i18n = new VueI18n({
	locale: 'zh-CN', // 语言标识
	messages: {
		'zh-CN': require('./common/lang/zh'), // 中文语言包
		'en-US': require('./common/lang/en') // 英文语言包
	}
})
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	i18n,
	components: {
		App
	},
	template: '<App/>'
})