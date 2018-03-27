import Vue from 'vue';
import VueRouter from 'vue-router';
import 'bootstrap/css/bootstrap.css';

Vue.use(VueRouter);

const routes = [{
	path: '/',
	component: () => import('views/mobile')
},{
	path:'/company',
	component: () => import('views/company')
},{
	path: '/mobile2',
	component: () => import('views/mobile2')
},{
	path: '/mobile3',
	component: () => import('views/mobile3')
}];

export default new VueRouter({
	routes
});
