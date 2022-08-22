<template>
  <div class="form-formato-pago">
    <MenuAdminUnidad />
    <FormFormatoPago />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import FormFormatoPago from "@/components/views/FormFormatoPago.vue";
import MenuAdminUnidad from "@/components/views/MenuAdminUnidad.vue";

export default {
  name: "form-formato-pago",
  components: {
    MenuAdminUnidad,
    FormFormatoPago,
    FooterDashboardAdmin,
  },
};
</script>
