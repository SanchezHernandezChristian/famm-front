<template>
  <div class="form-cedula-cursos">
    <MenuAdminUnidad />
    <AddCedulaPreAutCursos />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import AddCedulaPreAutCursos from "@/components/views/AddCedulaPreAutCursos.vue";
import MenuAdminUnidad from "@/components/views/MenuAdminUnidad.vue";

export default {
  name: "ViewAddCedulaPreAutCursos",
  components: {
    MenuAdminUnidad,
    AddCedulaPreAutCursos,
    FooterDashboardAdmin,
  },
};
</script>
