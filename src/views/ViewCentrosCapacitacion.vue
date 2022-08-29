<template>
  <div class="centros-capacitacion">
    <MenuAdminGeneral />
    <CentrosCapacitacion />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import CentrosCapacitacion from "@/components/views/CentrosCapacitacion.vue";
import MenuAdminGeneral from "../components/views/MenuAdminGeneral.vue";

export default {
  name: "centros-capacitacion",
  components: {
    MenuAdminGeneral,
    CentrosCapacitacion,
    FooterDashboardAdmin,
},
};
</script>
