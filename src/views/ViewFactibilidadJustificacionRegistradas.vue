<template>
  <div class="factibilidad-justificacion-registradas">
    <MenuAdminUnidad />
    <FactibilidadJustificacionRegistradas />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import FactibilidadJustificacionRegistradas from "@/components/views/FactibilidadJustificacionRegistradas.vue";
import MenuAdminUnidad from "@/components/views/MenuAdminUnidad.vue";

export default {
  name: "ViewFactibilidadJustificacionRegistradas",
  components: {
    MenuAdminUnidad,
    FactibilidadJustificacionRegistradas,
    FooterDashboardAdmin,
  },
};
</script>
