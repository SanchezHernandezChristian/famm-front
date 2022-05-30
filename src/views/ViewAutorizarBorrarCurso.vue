<template>
  <div class="autorizar-eliminar-curso">
    <NavbarAdmin />
    <MenuAdmin />
    <BorrarCurso />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import NavbarAdmin from "@/components/views/NavbarAdmin.vue";
import BorrarCurso from "@/components/views/BorrarCurso.vue";
import MenuAdmin from "@/components/views/MenuAdmin.vue";

export default {
  name: "autorizar-eliminar-curso",
  components: {
    NavbarAdmin,
    MenuAdmin,
    BorrarCurso,
    FooterDashboardAdmin,
  },
};
</script>
