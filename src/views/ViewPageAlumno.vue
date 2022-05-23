<template>
  <div class="page-principal">
    <Navbar />
    <PagePrincipalAlumno />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/views/Navbar.vue";
import PagePrincipalAlumno from "@/components/views/PagePrincipalAlumno.vue";
import Footer from "@/components/views/Footer.vue";

export default {
  name: "page-principal",
  components: {
    Navbar,
    PagePrincipalAlumno,
    Footer,
  },
};
</script>