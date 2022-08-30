<template>
    <div>
        <NavbarApp />
        <LoginTeacher />
        <FooterDashboardAdmin />
    </div>
</template>

<script>
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";
import LoginTeacher from "@/components/views/LoginTeacher.vue";
import NavbarApp from "@/components/views/NavbarApp.vue";

export default {
    name: "login-teacher",
    components: {
        NavbarApp,
        LoginTeacher,
        FooterDashboardAdmin,
    },
};
</script>
