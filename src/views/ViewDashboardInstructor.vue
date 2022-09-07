<template>
  <v-container fluid p-0 class="max-height">
    <NavbarApp color="orange" actions="NavOptionsTeacher" />
    <DashboardInstructor />
    <FooterDashboardAdmin />
  </v-container>
</template>

<script>
// @ is an alias to /src
import NavbarApp from '@/components/views/NavbarApp.vue';
import DashboardInstructor from '@/components/views/DashboardInstructor.vue';
import FooterDashboardAdmin from '@/components/views/FooterDashboardAdmin.vue';

export default {
  name: 'ViewDashboardInstructor',
  components: {
    NavbarApp,
    DashboardInstructor,
    FooterDashboardAdmin,
  },
};
</script>
