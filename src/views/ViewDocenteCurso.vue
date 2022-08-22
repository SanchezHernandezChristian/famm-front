<template>
  <div>
    <MenuTeacher />
    <DocenteCurso :clave_curso="clave_curso" />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import MenuTeacher from "@/components/views/MenuTeacher.vue";
import DocenteCurso from "@/components/views/DocenteCurso.vue";
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";

export default {
  name: "ViewDocenteCurso",
  components: {
    MenuTeacher,
    DocenteCurso,
    FooterDashboardAdmin,
  },
  data: () => ({
    clave_curso: "",
  }),
  created() {
    this.clave_curso = this.$route.params.clave_curso;
  },
};
</script>
