import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import { VueMaskDirective } from 'v-mask'
import './registerServiceWorker';
import './assets/styles/styles.css';

/*
 * Redirecionando o usuário para a página de login toda vez que
 * recarregar a página.
 * TODO: implementar login consistente.
 */
router.push({name: "login"});

Vue.directive('mask', VueMaskDirective);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
