<template>
  <div class="page-principal">
    <NavbarApp color="orange" actions="NavOptionsStudent" />
    <PagePrincipalAlumno />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarApp from "@/components/views/NavbarApp.vue";
import PagePrincipalAlumno from "@/components/views/PagePrincipalAlumno.vue";
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";

export default {
  name: "page-principal",
  components: {
    NavbarApp,
    PagePrincipalAlumno,
    FooterDashboardAdmin,
  },
};
</script>