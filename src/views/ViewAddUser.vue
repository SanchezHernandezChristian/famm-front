<template>
  <div class="agregar-usuario">
    <MenuAdmin />
    <AddUser />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import AddUser from "@/components/views/AddUser.vue";
import MenuAdmin from "@/components/views/MenuAdmin.vue";

export default {
  name: "agregar-usuario",
  components: {
    MenuAdmin,
    AddUser,
    FooterDashboardAdmin,
  },
};
</script>
