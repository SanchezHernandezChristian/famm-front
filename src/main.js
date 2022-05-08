import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@/assets/css/styles.css';
import vuetify from './plugins/vuetify'
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import router from './router'

Vue.config.productionTip = false;
Vue.use(Vuetify);

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app');
