<template>
  <div>
    <NavbarApp color="orange" actions="NavOptionsAdminUnidad" />
    <ValidacionInstructores />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import ValidacionInstructores from "@/components/views/ValidacionInstructores.vue";
import NavbarApp from "@/components/views/NavbarApp.vue";

export default {
  name: "ViewValidacionInstructores",
  components: {
    NavbarApp,
    ValidacionInstructores,
    FooterDashboardAdmin,
  },
};
</script>
