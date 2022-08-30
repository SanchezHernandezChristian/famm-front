<template>
  <div id="app">
    <loading
      :active.sync="isLoading"
      :can-cancel="false"
      :is-full-page="fullPage"
      class="m-0 vh-100 justify-content-center align-items-center text-center"
      style="background: rgb(0, 0, 0) transparent; height: 100%; width: 100%; position: absolute"
    >
      <slot name="default">
        <img src="@/assets/img/logo.png" width="500" class="img-fluid" />
      </slot>
      <slot name="after">
        <p style="font-size: 18px">
          <b><i class="fa fa-refresh fa-spin"></i> Estamos cargando la información, aguarde un momento...</b>
        </p>
      </slot>
    </loading>
    <v-app>
      <router-view />
    </v-app>
  </div>
</template>
<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import Axios from 'axios';

export default {
  data() {
    return {
      isLoading: false,
      fullPage: true,
    };
  },
  components: {
    Loading,
  },
  created() {
    Axios.interceptors.request.use(
      (config) => {
        // --------------------------------
        // Activa el loader con el logo
        this.isLoading = true;
        // --------------------------------
        return config;
      },
      (error) => {
        this.isLoading = false;
        return Promise.reject(error);
      }
    );
    Axios.interceptors.response.use(
      (response) => {
        // --- Desactiva el loader con el logo
        this.isLoading = false;
        // ----------------------------------
        return response;
      },
      (error) => {
        this.isLoading = false;
        // trigger 'loading=false' event here
        return Promise.reject(error);
      }
    );
  },
};
</script>

<style>
.v-btn {
  text-transform: none !important;
}
</style>
