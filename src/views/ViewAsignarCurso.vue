<template>
  <div class="asignar-curso">
    <MenuAdmin />
    <AsignarCurso />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import AsignarCurso from "@/components/views/AsignarCurso.vue";
import MenuAdmin from "@/components/views/MenuAdmin.vue";

export default {
  name: "asignar-curso",
  components: {
    MenuAdmin,
    AsignarCurso,
    FooterDashboardAdmin,
  },
};
</script>
