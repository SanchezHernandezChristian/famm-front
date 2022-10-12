<template>
  <div>
    <NavbarApp />
    <GenerarAccesosAdministrador />
    <FooterDashboardAdmin />
  </div>
</template>
  
  <script>
// @ is an alias to /src
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import NavbarApp from "@/components/views/NavbarApp.vue";
import GenerarAccesosAdministrador from "../components/views/GenerarAccesosAdministrador.vue";

export default {
  name: "generar-accesos",
  components: {
    NavbarApp,
    GenerarAccesosAdministrador,
    FooterDashboardAdmin,
  },
};
</script>
  