<template>
  <div>
    <MenuAdminGeneral />
    <FormCronograma />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import FormCronograma from "@/components/views/FormCronograma.vue";
import MenuAdminGeneral from "../components/views/MenuAdminGeneral.vue";

export default {
  name: "ViewUsers",
  components: {    
    MenuAdminGeneral,
    FormCronograma,
    FooterDashboardAdmin,
},
};
</script>
