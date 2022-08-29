<template>
  <div class="form-formato-pago">
    <NavbarApp color="orange" actions="NavOptionsAdminUnidad" />
    <FormFormatoPago />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import FormFormatoPago from "@/components/views/FormFormatoPago.vue";
import NavbarApp from "@/components/views/NavbarApp.vue";

export default {
  name: "form-formato-pago",
  components: {
    NavbarApp,
    FormFormatoPago,
    FooterDashboardAdmin,
  },
};
</script>
