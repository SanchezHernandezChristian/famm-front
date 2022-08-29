<template>
  <div class="cursos-asignados">
    <MenuAdminGeneral />
    <CursosAsignadosAdministrador />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import CursosAsignadosAdministrador from "@/components/views/CursosAsignadosAdministrador.vue";
import MenuAdminGeneral from "@/components/views/MenuAdminGeneral.vue";

export default {
  name: "cursos-asignados",
  components: {
    MenuAdminGeneral,
    CursosAsignadosAdministrador,
    FooterDashboardAdmin,
  },
};
</script>
