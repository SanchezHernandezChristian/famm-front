<template>
  <div>
    <MenuAdminUnidad />
    <ValidacionInstructores />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import ValidacionInstructores from "@/components/views/ValidacionInstructores.vue";
import MenuAdminUnidad from "@/components/views/MenuAdminUnidad.vue";

export default {
  name: "ViewValidacionInstructores",
  components: {
    MenuAdminUnidad,
    ValidacionInstructores,
    FooterDashboardAdmin,
  },
};
</script>
