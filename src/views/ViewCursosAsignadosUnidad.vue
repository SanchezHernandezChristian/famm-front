<template>
  <div class="cursos-asignados-unidad">
    <MenuAdminUnidad />
    <CursosAsignadosUnidad />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import CursosAsignadosUnidad from "@/components/views/CursosAsignadosUnidad.vue";
import MenuAdminUnidad from "@/components/views/MenuAdminUnidad.vue";

export default {
  name: "ViewCursosAsignadosUnidad",
  components: {
    MenuAdminUnidad,
    CursosAsignadosUnidad,
    FooterDashboardAdmin,
  },
};
</script>
