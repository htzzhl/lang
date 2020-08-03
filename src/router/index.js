import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Index from '@/components/index'
import Goods from '@/components/Goods'
import Order from '@/components/Order'
import Car from '@/components/Car'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: '登录',
			component: Login
		},
		{
			path: '/Index',
			name: 'Index',
			component: Index
		},
		{
			path: '/goods',
			name: 'Goods',
			component: Goods
		},
		{
			path: '/order',
			name: 'Order',
			component: Order
		},
		{
			path: '/car',
			name: 'Car',
			component: Car
		}
	]
})