<template>
  <div class="cedula-pre-autorizada-dtacademica">
    <NavbarApp color="orange" actions="NavOptionsDireccionTAcademica" />
    <CedulaCursosRegistradas />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import CedulaCursosRegistradas from "@/components/views/CedulaCursosRegistradas.vue";
import NavbarApp from "@/components/views/NavbarApp.vue";

export default {
  name: "ViewCedulasCursosRegistradasDireccionTA",
  components: {
    NavbarApp,
    CedulaCursosRegistradas,
    FooterDashboardAdmin,
  },
};
</script>
