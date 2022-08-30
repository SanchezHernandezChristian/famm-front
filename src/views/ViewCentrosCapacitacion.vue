<template>
  <div>
    <NavbarApp />
    <CentrosCapacitacion />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import CentrosCapacitacion from "@/components/views/CentrosCapacitacion.vue";
import NavbarApp from "@/components/views/NavbarApp.vue";

export default {
  name: "centros-capacitacion",
  components: {
    NavbarApp,
    CentrosCapacitacion,
    FooterDashboardAdmin,
},
};
</script>
