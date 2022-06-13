<template>
  <div class="agregar-usuario">
    <MenuAdmin />
    <Users />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import Users from "@/components/views/Users.vue";
import MenuAdmin from "@/components/views/MenuAdmin.vue";

export default {
  name: "users",
  components: {
    MenuAdmin,
    Users,
    FooterDashboardAdmin,
  },
};
</script>
