<template>
  <div>
    <MenuAdmin />
    <Cronograma />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import Cronograma from "@/components/views/Cronograma.vue";
import MenuAdmin from "@/components/views/MenuAdmin.vue";

export default {
  name: "users",
  components: {
    MenuAdmin,
    Cronograma,
    FooterDashboardAdmin,
  },
};
</script>
