<template>
  <div class="max-height">
    <NavbarApp color="orange" actions="NavOptionsAdminUnidad" />
    <Cronograma />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import Cronograma from "@/components/views/Cronograma.vue";
import NavbarApp from "@/components/views/NavbarApp.vue";

export default {
  name: "users",
  components: {
    NavbarApp,
    Cronograma,
    FooterDashboardAdmin,
  },
};
</script>
