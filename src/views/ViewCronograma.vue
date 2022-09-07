<template>
  <div class="max-height">
    <NavbarApp color="orange" :actions="active_actions" />
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
  data: () => ({
    active_actions: "NavOptionsAdminUnidad",
  }),
  created() {
    if (this.$store.getters.getUser.Rol == "PROFESOR")
      this.active_actions = "NavOptionsTeacher";
  },
};
</script>
