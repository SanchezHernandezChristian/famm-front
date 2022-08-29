<template>
  <div class="agregar-especialidad">
    <MenuAdminGeneral />
    <AddEspecialidad />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import AddEspecialidad from "@/components/views/AddEspecialidad.vue";
import MenuAdminGeneral from "@/components/views/MenuAdminGeneral.vue";

export default {
  name: "agregar-especialidad",
  components: {
    MenuAdminGeneral,
    AddEspecialidad,
    FooterDashboardAdmin,
  },
};
</script>
