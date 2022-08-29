<template>
    <div>
        <NavbarApp />
        <Users />
        <FooterDashboardAdmin />
    </div>
</template>

<script>
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import Users from "@/components/views/Users.vue";
import NavbarApp from "@/components/views/NavbarApp.vue";

export default {
    name: "users",
    components: {
        NavbarApp,
        Users,
        FooterDashboardAdmin,
    },
};
</script>
