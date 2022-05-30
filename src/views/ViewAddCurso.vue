<template>
  <div class="agregar-curso">
    <NavbarAdmin />
    <MenuAdmin />
    <AddCurso />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import NavbarAdmin from "@/components/views/NavbarAdmin.vue";
import AddCurso from "@/components/views/AddCurso.vue";
import MenuAdmin from "@/components/views/MenuAdmin.vue";

export default {
  name: "agregar-curso",
  components: {
    NavbarAdmin,
    MenuAdmin,
    AddCurso,
    FooterDashboardAdmin,
  },
};
</script>
