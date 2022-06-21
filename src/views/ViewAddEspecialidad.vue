<template>
  <div class="agregar-especialidad">
    <MenuAdmin />
    <AddEspecialidad />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import AddEspecialidad from "@/components/views/AddEspecialidad.vue";
import MenuAdmin from "@/components/views/MenuAdmin.vue";

export default {
  name: "agregar-especialidad",
  components: {
    MenuAdmin,
    AddEspecialidad,
    FooterDashboardAdmin,
  },
};
</script>
