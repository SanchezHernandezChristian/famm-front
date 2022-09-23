<template>
  <div>
    <NavbarApp color="orange" actions="NavOptionsDepartamentoApoyoAcademico" />
    <DashboardAdminUnidad />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import DashboardAdminUnidad from '@/components/views/DashboardAdminUnidad.vue';
import FooterDashboardAdmin from '@/components/views/FooterDashboardAdmin.vue';
import NavbarApp from '@/components/views/NavbarApp.vue';

export default {
  name: 'ViewDashboardDepartamentoApoyoAcademico',
  components: {
    NavbarApp,
    DashboardAdminUnidad,
    FooterDashboardAdmin,
  },
};
</script>
