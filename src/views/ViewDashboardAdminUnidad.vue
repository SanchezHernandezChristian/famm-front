<template>
  <div class="dashboard-admin-unidad">
    <MenuAdminUnidad />
    <DashboardAdminUnidad />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import DashboardAdminUnidad from "@/components/views/DashboardAdminUnidad.vue";
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import MenuAdminUnidad from "@/components/views/MenuAdminUnidad.vue";

export default {
  name: "dashboard-admin-unidad",
  components: {
    MenuAdminUnidad,
    DashboardAdminUnidad,
    FooterDashboardAdmin,
  },
};
</script>
