<template>
  <div class="agregar-curso">
    <MenuAdminGeneral />
    <AddCurso />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import AddCurso from "@/components/views/AddCurso.vue";
import MenuAdminGeneral from "../components/views/MenuAdminGeneral.vue";

export default {
  name: "agregar-curso",
  components: {    
    MenuAdminGeneral,
    AddCurso,
    FooterDashboardAdmin,
},
};
</script>
