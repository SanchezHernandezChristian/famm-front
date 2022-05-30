<template>
  <div class="borrar-curso">
    <NavbarAdmin />
    <MenuAdmin />
    <DeleteCurso />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import NavbarAdmin from "@/components/views/NavbarAdmin.vue";
import DeleteCurso from "@/components/views/DeleteCurso.vue";
import MenuAdmin from "@/components/views/MenuAdmin.vue";

export default {
  name: "borrar-curso",
  components: {
    NavbarAdmin,
    MenuAdmin,
    DeleteCurso,
    FooterDashboardAdmin,
  },
};
</script>
