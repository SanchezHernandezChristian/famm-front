<template>
  <div class="cedula-pre-autorizada">
    <MenuAdminUnidad />
    <CedulaCursosRegistradas />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import CedulaCursosRegistradas from "@/components/views/CedulaCursosRegistradas.vue";
import MenuAdminUnidad from "@/components/views/MenuAdminUnidad.vue";

export default {
  name: "ViewCedulasCursosRegistradas",
  components: {
    MenuAdminUnidad,
    CedulaCursosRegistradas,
    FooterDashboardAdmin,
  },
};
</script>
