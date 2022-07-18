<template>
  <div class="form-relacion-participantes">
    <MenuAdminUnidad />
    <AddRelacionParticipantes />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import AddRelacionParticipantes from "@/components/views/AddRelacionParticipantes.vue";
import MenuAdminUnidad from "@/components/views/MenuAdminUnidad.vue";

export default {
  name: "ViewAddRelacionParticipantes",
  components: {
    MenuAdminUnidad,
    AddRelacionParticipantes,
    FooterDashboardAdmin,
  },
};
</script>
