<template>
  <div>
    <MenuAdmin />
    <FormCronograma />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import FormCronograma from "@/components/views/FormCronograma.vue";
import MenuAdmin from "@/components/views/MenuAdmin.vue";

export default {
  name: "ViewUsers",
  components: {
    MenuAdmin,
    FormCronograma,
    FooterDashboardAdmin,
  },
};
</script>
