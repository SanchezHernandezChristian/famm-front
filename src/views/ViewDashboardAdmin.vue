<template>
  <div class="dashboard-admin">
    <NavbarAdmin />
    <MenuAdmin />
    <DashboardAdministrativo />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import DashboardAdministrativo from "@/components/views/DashboardAdministrativo.vue";
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import NavbarAdmin from "@/components/views/NavbarAdmin.vue";
import MenuAdmin from "@/components/views/MenuAdmin.vue";

export default {
  name: "dashboard-admin",
  components: {
    NavbarAdmin,
    MenuAdmin,
    DashboardAdministrativo,
    FooterDashboardAdmin,
  },
};
</script>
