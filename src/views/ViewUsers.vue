<template>
  <div class="agregar-usuario">
    <MenuAdminGeneral />
    <Users />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import Users from "@/components/views/Users.vue";
import MenuAdminGeneral from "@/components/views/MenuAdminGeneral.vue";

export default {
  name: "users",
  components: {
    MenuAdminGeneral,
    Users,
    FooterDashboardAdmin,
  },
};
</script>
