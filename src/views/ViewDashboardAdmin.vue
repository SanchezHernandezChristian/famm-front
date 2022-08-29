<template>
  <div class="dashboard-admin">
    <MenuAdminGeneral />
    <DashboardAdministrativo />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import DashboardAdministrativo from "@/components/views/DashboardAdministrativo.vue";
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import MenuAdminGeneral from "@/components/views/MenuAdminGeneral.vue";

export default {
  name: "dashboard-admin",
  components: {
    MenuAdminGeneral,
    DashboardAdministrativo,
    FooterDashboardAdmin,
  },
};
</script>
