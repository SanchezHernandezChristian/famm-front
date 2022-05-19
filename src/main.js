import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@/assets/css/styles.css';
import vuetify from './plugins/vuetify';
import router from './router';
import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader
import store from './store';
import Axios from 'axios';

Vue.config.productionTip = false;
Vue.use(Vuetify);
export default new Vuetify({
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
});

// set auth header
Axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.token}`;
Axios.defaults.headers.common['Content-Type'] = 'application/json';
Axios.defaults.headers.common['Accept'] = 'application/json';

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
