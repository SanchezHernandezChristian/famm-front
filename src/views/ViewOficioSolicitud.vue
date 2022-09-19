<template>
  <div class="max-height">
    <NavbarApp color="orange" :actions="active_actions" />
    <OficioSolicitud />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarApp from "@/components/views/NavbarApp.vue";
import OficioSolicitud from "@/components/views/OficioSolicitud.vue";
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";

const ROL_DIRECCION_TECNICA = "DIRECCIÓN TÉCNICA ACADÉMICA";

export default {
  name: "ViewOficioSolicitud",
  components: {
    NavbarApp,
    OficioSolicitud,
    FooterDashboardAdmin,
  },
  data: () => ({
    active_actions: "NavOptionsAdminUnidad",
  }),
  created() {
    if (this.$store.getters.getUser.Rol == ROL_DIRECCION_TECNICA)
      this.active_actions = "NavOptionsDireccionTAcademica";
  },
};
</script>
