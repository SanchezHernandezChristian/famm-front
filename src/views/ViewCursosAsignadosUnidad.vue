<template>
  <div class="cursos-asignados-unidad">
    <NavbarApp color="orange" actions="NavOptionsAdminUnidad" />
    <CursosAsignadosUnidad />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import CursosAsignadosUnidad from "@/components/views/CursosAsignadosUnidad.vue";
import NavbarApp from "@/components/views/NavbarApp.vue";

export default {
  name: "ViewCursosAsignadosUnidad",
  components: {
    NavbarApp,
    CursosAsignadosUnidad,
    FooterDashboardAdmin,
  },
};
</script>
