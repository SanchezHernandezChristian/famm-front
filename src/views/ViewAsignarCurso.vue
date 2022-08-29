<template>
  <div class="asignar-curso">
    <MenuAdminGeneral />
    <AsignarCurso />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import AsignarCurso from "@/components/views/AsignarCurso.vue";
import MenuAdminGeneral from "../components/views/MenuAdminGeneral.vue";

export default {
  name: "asignar-curso",
  components: {
    MenuAdminGeneral,
    AsignarCurso,
    FooterDashboardAdmin,    
},
};
</script>
