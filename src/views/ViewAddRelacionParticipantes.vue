<template>
  <div class="form-relacion-participantes">
    <NavbarApp color="orange" actions="NavOptionsAdminUnidad" />
    <AddRelacionParticipantes />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import AddRelacionParticipantes from "@/components/views/AddRelacionParticipantes.vue";
import NavbarApp from "@/components/views/NavbarApp.vue";

export default {
  name: "ViewAddRelacionParticipantes",
  components: {
    NavbarApp,
    AddRelacionParticipantes,
    FooterDashboardAdmin,
  },
};
</script>
