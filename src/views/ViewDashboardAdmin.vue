<template>
  <div>
    <NavbarApp />
    <DashboardAdministrativo />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import DashboardAdministrativo from '@/components/views/DashboardAdministrativo.vue';
import FooterDashboardAdmin from '@/components/views/FooterDashboardAdmin.vue';
import NavbarApp from '@/components/views/NavbarApp.vue';

export default {
  name: 'dashboard-admin',
  components: {
    NavbarApp,
    DashboardAdministrativo,
    FooterDashboardAdmin,
  },
};
</script>
