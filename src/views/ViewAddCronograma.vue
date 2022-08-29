<template>
  <div>
    <NavbarApp color="orange" actions="NavOptionsAdminUnidad" />
    <FormCronograma />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import FormCronograma from "@/components/views/FormCronograma.vue";
import NavbarApp from "@/components/views/NavbarApp.vue";

export default {
  name: "ViewUsers",
  components: {
    NavbarApp,
    FormCronograma,
    FooterDashboardAdmin,
},
};
</script>
