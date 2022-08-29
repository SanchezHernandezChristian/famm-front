<template>
  <div class="agregar-usuario">
    <MenuAdminGeneral />
    <AddUser />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import AddUser from "@/components/views/AddUser.vue";
import MenuAdminGeneral from "@/components/views/MenuAdminGeneral.vue";

export default {
  name: "ViewUsers",
  components: {
    MenuAdminGeneral,
    AddUser,
    FooterDashboardAdmin,
  },
};
</script>
