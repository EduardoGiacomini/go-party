import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import { VueMaskDirective } from 'v-mask'
import './registerServiceWorker';
import './assets/styles/styles.css';

Vue.directive('mask', VueMaskDirective);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
