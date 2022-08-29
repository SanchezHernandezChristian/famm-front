<template>
  <div class="cedula-pre-autorizada">
    <NavbarApp color="orange" actions="NavOptionsAdminUnidad" />
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
  name: "ViewCedulasCursosRegistradas",
  components: {
    NavbarApp,
    CedulaCursosRegistradas,
    FooterDashboardAdmin,
  },
};
</script>
