<template>
  <div class="relacion-participantes-registrados">
    <NavbarApp color="orange" actions="NavOptionsAdminUnidad" />
    <RelacionParticipantesRegistrados />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import RelacionParticipantesRegistrados from "@/components/views/RelacionParticipantesRegistrados.vue";
import NavbarApp from "@/components/views/NavbarApp.vue";

export default {
  name: "ViewRelacionParticipantesRegistrados",
  components: {
    NavbarApp,
    RelacionParticipantesRegistrados,
    FooterDashboardAdmin,
  },
};
</script>
