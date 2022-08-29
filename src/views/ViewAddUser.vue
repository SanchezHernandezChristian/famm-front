<template>
    <div>
        <NavbarApp />
        <AddUser />
        <FooterDashboardAdmin />
    </div>
</template>

<script>
// @ is an alias to /src
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import AddUser from "@/components/views/AddUser.vue";
import NavbarApp from "@/components/views/NavbarApp.vue";

export default {
    name: "ViewUsers",
    components: {
        NavbarApp,
        AddUser,
        FooterDashboardAdmin,
    },
};
</script>
