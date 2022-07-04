<template>
  <div class="dashboard-admin-unidad">
    <MenuAdminUnidad />
    <!-- <DashboardAdministrativo /> -->
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
//import DashboardAdministrativo from "@/components/views/DashboardAdministrativo.vue";
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import MenuAdminUnidad from "@/components/views/MenuAdminUnidad.vue";

export default {
  name: "dashboard-admin-unidad",
  components: {
    MenuAdminUnidad,
    //DashboardAdministrativo,
    FooterDashboardAdmin,
  },
};
</script>
