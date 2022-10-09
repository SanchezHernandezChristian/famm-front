<template>
  <div class="cedula-pre-autorizada-apoyo">
    <NavbarApp color="orange" actions="NavOptionsDepartamentoApoyoAcademico" />
    <CedulasCursosRegistradasDepartamentoApoyoAcademico />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import CedulasCursosRegistradasDepartamentoApoyoAcademico from "@/components/views/CedulasCursosRegistradasDepartamentoApoyoAcademico.vue";
import NavbarApp from "@/components/views/NavbarApp.vue";

export default {
  name: "ViewCedulasCursosRegistradasDepartamentoApoyoA",
  components: {
    NavbarApp,
    CedulasCursosRegistradasDepartamentoApoyoAcademico,
    FooterDashboardAdmin,
  },
};
</script>
