<template>
  <div>
    <NavbarApp />
    <AddCurso />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import AddCurso from "@/components/views/AddCurso.vue";
import NavbarApp from "@/components/views/NavbarApp.vue";

export default {
  name: "agregar-curso",
  components: {
    NavbarApp,
    AddCurso,
    FooterDashboardAdmin,
},
};
</script>
