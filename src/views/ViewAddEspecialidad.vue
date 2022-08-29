<template>
  <div>
    <NavbarApp />
    <AddEspecialidad />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import AddEspecialidad from "@/components/views/AddEspecialidad.vue";
import NavbarApp from "@/components/views/NavbarApp.vue";

export default {
  name: "agregar-especialidad",
  components: {
    NavbarApp,
    AddEspecialidad,
    FooterDashboardAdmin,
  },
};
</script>
