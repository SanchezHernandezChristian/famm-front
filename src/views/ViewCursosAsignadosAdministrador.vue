<template>
  <div>
    <NavbarApp />
    <CursosAsignadosAdministrador />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import CursosAsignadosAdministrador from "@/components/views/CursosAsignadosAdministrador.vue";
import NavbarApp from "@/components/views/NavbarApp.vue";

export default {
  name: "cursos-asignados",
  components: {
    NavbarApp,
    CursosAsignadosAdministrador,
    FooterDashboardAdmin,
  },
};
</script>
