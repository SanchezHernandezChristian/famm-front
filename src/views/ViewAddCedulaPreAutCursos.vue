<template>
  <div class="max-height">
    <NavbarApp color="orange" actions="NavOptionsAdminUnidad" />
    <AddCedulaPreAutCursos />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterDashboardAdmin from '@/components/views/FooterDashboardAdmin.vue';
import AddCedulaPreAutCursos from '@/components/views/AddCedulaPreAutCursos.vue';
import NavbarApp from '@/components/views/NavbarApp.vue';

export default {
  name: 'ViewAddCedulaPreAutCursos',
  components: {
    NavbarApp,
    AddCedulaPreAutCursos,
    FooterDashboardAdmin,
  },
};
</script>
