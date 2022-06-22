<template>
  <div class="page-principal">
    <Navbar />
    <PagePrincipalAlumno />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/views/Navbar.vue";
import PagePrincipalAlumno from "@/components/views/PagePrincipalAlumno.vue";
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";

export default {
  name: "page-principal",
  components: {
    Navbar,
    PagePrincipalAlumno,
    FooterDashboardAdmin,
  },
};
</script>