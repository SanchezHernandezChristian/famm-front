<template>
  <div class="formatos-pago-registrados">
    <MenuAdminUnidad />
    <FormatosPagoRegistrados />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import FormatosPagoRegistrados from "@/components/views/FormatosPagoRegistrados.vue";
import MenuAdminUnidad from "@/components/views/MenuAdminUnidad.vue";

export default {
  name: "formatos-pago-registrados",
  components: {
    MenuAdminUnidad,
    FormatosPagoRegistrados,
    FooterDashboardAdmin,
  },
};
</script>
