<template>
  <div class="cedula-pre-autorizada-dtacademica">
    <NavbarApp color="orange" actions="NavOptionsDireccionTAcademica" />
    <CedulasCursosRegistradasDireccionTecnica />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import CedulasCursosRegistradasDireccionTecnica from "@/components/views/CedulasCursosRegistradasDireccionTecnica.vue";
import NavbarApp from "@/components/views/NavbarApp.vue";

export default {
  name: "ViewCedulasCursosRegistradasDireccionTA",
  components: {
    NavbarApp,
    CedulasCursosRegistradasDireccionTecnica,
    FooterDashboardAdmin,
  },
};
</script>
