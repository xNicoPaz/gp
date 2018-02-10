import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import axios from 'axios';
import eventBus from './EventBus';

/*
Uso Vuetify para usar sus components tipo Material Design
y uso VueRouter obviamente para hacer la aplicación como una SPA 
*/
Vue.use(Vuetify);
Vue.use(VueRouter);

/*
Vue y Axios van a ser globales por cualquier cosa
*/
window.Vue = Vue;
window.axios = axios;

/*
Configuraciones de axios
*/
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/*
Uso en objeto global para compartir datos entre diferentes 
instancias de Vue que puedan necesitar compartir los datos
*/
window.sharedData = {
	title: 'Aplicación del GP Summer',
	drawer: null,
};

/*
Uso un objeto vue separado tan solo para escuchar y emitir eventos
desde cualquier lado de la aplicación
*/
window.eventBus = new Vue(eventBus);

/*
La aplicación en si misma
*/
window.app = new Vue({
	el: '#app',
	render: h => h(App)
})