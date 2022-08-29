<template>
  <div>
    <NavbarApp />
    <AsignarCurso />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import AsignarCurso from "@/components/views/AsignarCurso.vue";
import NavbarApp from "@/components/views/NavbarApp.vue";

export default {
  name: "asignar-curso",
  components: {
    NavbarApp,
    AsignarCurso,
    FooterDashboardAdmin,
  },
};
</script>
