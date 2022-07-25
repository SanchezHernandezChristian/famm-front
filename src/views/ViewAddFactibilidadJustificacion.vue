<template>
  <div class="form-factibilidad-justificacion">
    <MenuAdminUnidad />
    <AddFactibilidadJustificacion />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import AddFactibilidadJustificacion from "@/components/views/AddFactibilidadJustificacion.vue";
import MenuAdminUnidad from "@/components/views/MenuAdminUnidad.vue";

export default {
  name: "ViewAddFactibilidadJustificacion",
  components: {
    MenuAdminUnidad,
    AddFactibilidadJustificacion,
    FooterDashboardAdmin,
},
};
</script>
