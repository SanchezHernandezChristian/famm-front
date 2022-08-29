<template>
  <div class="form-registro">
    <NavbarApp color="orange" actions="NavOptionsStudent" />
    <FormDatosRegistro />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarApp from "@/components/views/NavbarApp.vue";
import FormDatosRegistro from "@/components/views/FormDatosRegistro.vue";
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";

export default {
  name: "form-registro",
  components: {
    NavbarApp,
    FormDatosRegistro,
    FooterDashboardAdmin,
  },
};
</script>