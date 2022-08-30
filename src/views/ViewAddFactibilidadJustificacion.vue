<template>
  <div class="form-factibilidad-justificacion">
    <NavbarApp color="orange" actions="NavOptionsAdminUnidad" />
    <AddFactibilidadJustificacion />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import AddFactibilidadJustificacion from "@/components/views/AddFactibilidadJustificacion.vue";
import NavbarApp from "@/components/views/NavbarApp.vue";

export default {
  name: "ViewAddFactibilidadJustificacion",
  components: {
    NavbarApp,
    AddFactibilidadJustificacion,
    FooterDashboardAdmin,
},
};
</script>
