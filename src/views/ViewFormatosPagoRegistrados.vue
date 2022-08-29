<template>
  <div class="formatos-pago-registrados">
    <NavbarApp color="orange" actions="NavOptionsAdminUnidad" />
    <FormatosPagoRegistrados />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import FormatosPagoRegistrados from "@/components/views/FormatosPagoRegistrados.vue";
import NavbarApp from "@/components/views/NavbarApp.vue";

export default {
  name: "formatos-pago-registrados",
  components: {
    NavbarApp,
    FormatosPagoRegistrados,
    FooterDashboardAdmin,
  },
};
</script>
