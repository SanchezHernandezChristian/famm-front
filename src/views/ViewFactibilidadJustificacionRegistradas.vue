<template>
  <div class="factibilidad-justificacion-registradas">
    <NavbarApp color="orange" actions="NavOptionsAdminUnidad" />
    <FactibilidadJustificacionRegistradas />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import FactibilidadJustificacionRegistradas from "@/components/views/FactibilidadJustificacionRegistradas.vue";
import NavbarApp from "@/components/views/NavbarApp.vue";

export default {
  name: "ViewFactibilidadJustificacionRegistradas",
  components: {
    NavbarApp,
    FactibilidadJustificacionRegistradas,
    FooterDashboardAdmin,
  },
};
</script>
