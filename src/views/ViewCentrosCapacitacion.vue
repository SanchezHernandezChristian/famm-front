<template>
  <div class="centros-capacitacion">
    <MenuAdmin />
    <CentrosCapacitacion />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import CentrosCapacitacion from "@/components/views/CentrosCapacitacion.vue";
import MenuAdmin from "@/components/views/MenuAdmin.vue";

export default {
  name: "centros-capacitacion",
  components: {
    MenuAdmin,
    CentrosCapacitacion,
    FooterDashboardAdmin,
  },
};
</script>
