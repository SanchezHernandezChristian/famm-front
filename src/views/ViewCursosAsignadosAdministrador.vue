<template>
  <div class="cursos-asignados">
    <MenuAdmin />
    <CursosAsignadosAdministrador />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import CursosAsignadosAdministrador from "@/components/views/CursosAsignadosAdministrador.vue";
import MenuAdmin from "@/components/views/MenuAdmin.vue";

export default {
  name: "cursos-asignados",
  components: {
    MenuAdmin,
    CursosAsignadosAdministrador,
    FooterDashboardAdmin,
  },
};
</script>
