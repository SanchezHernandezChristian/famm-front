import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@/assets/css/styles.css';
import vuetify from './plugins/vuetify'
import router from './router'

Vue.config.productionTip = false;
Vue.use(Vuetify);

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app');
