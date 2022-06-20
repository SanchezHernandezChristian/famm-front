<template>
  <div class="form-registro-instructor">
    <Navbar />
    <FormDatosRegistroInstructor />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/views/Navbar.vue";
// import FormDatosRegistroInstructor from "@/components/views/FormDatosRegistroInstructor.vue";
import FormDatosRegistroInstructor from "@/components/views/FormDatosRegistroCapacitador.vue";
import Footer from "@/components/views/Footer.vue";

export default {
  name: "form-registro-instructor",
  components: {
    Navbar,
    FormDatosRegistroInstructor,
    Footer,
  },
};
</script>
