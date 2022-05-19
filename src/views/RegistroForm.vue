<template>
  <div class="form-registro">
    <Navbar />
    <FormDatosRegistro />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/views/Navbar.vue";
import FormDatosRegistro from "@/components/views/FormDatosRegistro.vue";
import Footer from "@/components/views/Footer.vue";

export default {
  name: "form-registro",
  components: {
    Navbar,
    FormDatosRegistro,
    Footer,
  },
};
</script>