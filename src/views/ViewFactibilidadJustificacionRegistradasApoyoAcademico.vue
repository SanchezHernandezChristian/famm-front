<template>
    <div class="factibilidad-registradas-academico">
      <NavbarApp color="orange" actions="NavOptionsDepartamentoApoyoAcademico" />
      <FactibilidadJustificacionRegistradasApoyoAcademico />
      <FooterDashboardAdmin />
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
  import FactibilidadJustificacionRegistradasApoyoAcademico from "@/components/views/FactibilidadJustificacionRegistradasApoyoAcademico.vue";
  import NavbarApp from "@/components/views/NavbarApp.vue";
  
  export default {
    name: "ViewFactibilidadJustificacionRegistradasApoyoAcademico",
    components: {
      NavbarApp,
      FactibilidadJustificacionRegistradasApoyoAcademico,
      FooterDashboardAdmin,
    },
  };
  </script>
  