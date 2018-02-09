import Vue from 'vue';
import VueRouter from 'vue-router';

let routes = [
	{
		path: '/',
		component: require('./views/Home.vue').default,
	},
	{
		path: '/members',
		component: require('./views/members/Index.vue').default,
	},
	{
		path: '/members/create',
		component: require('./views/members/Create.vue').default,
	},
];

export default new VueRouter({
	routes,
});