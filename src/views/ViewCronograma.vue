<template>
  <div>
    <MenuAdminGeneral />
    <Cronograma />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import Cronograma from "@/components/views/Cronograma.vue";
import MenuAdminGeneral from "@/components/views/MenuAdminGeneral.vue";

export default {
  name: "users",
  components: {
    MenuAdminGeneral,
    Cronograma,
    FooterDashboardAdmin,
  },
};
</script>
