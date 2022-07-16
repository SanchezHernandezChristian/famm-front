<template>
  <div class="relacion-participantes-registrados">
    <MenuAdminUnidad />
    <RelacionParticipantesRegistrados />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import RelacionParticipantesRegistrados from "@/components/views/RelacionParticipantesRegistrados.vue";
import MenuAdminUnidad from "@/components/views/MenuAdminUnidad.vue";

export default {
  name: "ViewRelacionParticipantesRegistrados",
  components: {
    MenuAdminUnidad,
    RelacionParticipantesRegistrados,
    FooterDashboardAdmin,
  },
};
</script>
