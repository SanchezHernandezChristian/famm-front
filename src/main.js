import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@/assets/css/styles.css';
import vuetify from './plugins/vuetify';
import router from './router';
import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader

Vue.config.productionTip = false;
Vue.use(Vuetify);
export default new Vuetify({
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
});

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app');
