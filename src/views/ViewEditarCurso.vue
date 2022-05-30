<template>
  <div class="editar-curso">
    <NavbarAdmin />
    <MenuAdmin />
    <EditarCurso />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import NavbarAdmin from "@/components/views/NavbarAdmin.vue";
import EditarCurso from "@/components/views/EditarCurso.vue";
import MenuAdmin from "@/components/views/MenuAdmin.vue";

export default {
  name: "editar-curso",
  components: {
    NavbarAdmin,
    MenuAdmin,
    EditarCurso,
    FooterDashboardAdmin,
  },
};
</script>
