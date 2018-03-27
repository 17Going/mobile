import Vue from 'vue';
import App from 'views/App';
import router from './routes';
import './assets/css/font-awesome.css';
import './assets/css/ionicons.css';

window.Promise = Promise;

new Vue({
	el: '#app',
	router,
	components:{
		App
	},
	template: '<App/>'
});
