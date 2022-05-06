<template>
  <div class="especialidad">
    <Navbar />
    <SectionEspecialidad />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/views/Navbar.vue";
import SectionEspecialidad from "@/components/views/SectionEspecialidad.vue";
import Footer from "@/components/views/Footer.vue";

export default {
  name: "especialidad",
  components: {
    Navbar,
    SectionEspecialidad,
    Footer,
  },
};
</script>