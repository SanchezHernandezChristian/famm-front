<template>
  <div class="max-height">
    <NavbarApp color="orange" actions="NavOptionsStudent" />
    <CronogramaCapacitando />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import CronogramaCapacitando from "@/components/views/CronogramaCapacitando.vue";
import NavbarApp from "@/components/views/NavbarApp.vue";

export default {
  name: "users",
  components: {
    NavbarApp,
    CronogramaCapacitando,
    FooterDashboardAdmin,
  },
};
</script>