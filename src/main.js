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
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import VueSignaturePad from 'vue-signature-pad';


Vue.config.productionTip = false;
Vue.use(Vuetify);
export default new Vuetify({
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
});
Vue.use(VueSweetalert2);
Vue.use(VueSignaturePad);
// Navbar components
const components = require.context("@/components/partials/navbar", true, /\.vue$/i);
components.keys().map((key) => {
    return Vue.component(key.split("/").pop().split(".")[0], components(key).default);
});
// set auth header
Axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.token}`;
Axios.defaults.headers.common['Content-Type'] = 'application/json';
Axios.defaults.headers.common['Accept'] = 'application/json';

new Vue({
  el: '#app',

  vuetify,
  router,
  store,
  render: (h) => h(App),


}).$mount('#app');
