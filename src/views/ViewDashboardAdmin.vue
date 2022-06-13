<template>
  <div class="dashboard-admin">
    <MenuAdmin />
    <DashboardAdministrativo />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import DashboardAdministrativo from "@/components/views/DashboardAdministrativo.vue";
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import MenuAdmin from "@/components/views/MenuAdmin.vue";

export default {
  name: "dashboard-admin",
  components: {
    MenuAdmin,
    DashboardAdministrativo,
    FooterDashboardAdmin,
  },
};
</script>
