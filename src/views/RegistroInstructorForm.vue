<template>
  <div>
    <NavbarApp color="orange" actions="NavOptionsTeacher" />
    <FormDatosRegistroCapacitador />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
import NavbarApp from "@/components/views/NavbarApp.vue";
import FormDatosRegistroCapacitador from "@/components/views/FormDatosRegistroCapacitador.vue";
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";

export default {
  name: "form-registro-instructor",
  components: {
    NavbarApp,
    FormDatosRegistroCapacitador,
    FooterDashboardAdmin,
  },
};
</script>
