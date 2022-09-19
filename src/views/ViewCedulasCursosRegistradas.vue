<template>
  <div class="cedula-pre-autorizada">
    <NavbarApp color="orange" actions="NavOptionsAdminUnidad" />
    <CedulasCursosRegistradasAdminU />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import CedulasCursosRegistradasAdminU from "@/components/views/CedulasCursosRegistradasAdminU.vue";
import NavbarApp from "@/components/views/NavbarApp.vue";

export default {
  name: "ViewCedulasCursosRegistradas",
  components: {
    NavbarApp,
    CedulasCursosRegistradasAdminU,
    FooterDashboardAdmin,
  },
};
</script>
