<template>
  <div>
    <MenuAdminUnidad />
    <LoginTeacher />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import LoginTeacher from "@/components/views/LoginTeacher.vue";
import MenuAdminUnidad from "@/components/views/MenuAdminUnidad.vue";

export default {
  name: "users",
  components: {
    MenuAdminUnidad,
    LoginTeacher,
    FooterDashboardAdmin,
  },
};
</script>
