<template>
    <div>
        <NavbarApp color="orange" actions="NavOptionsDireccionTAcademica" />
        <DashboardAdminUnidad />
        <FooterDashboardAdmin />
    </div>
</template>

<script>
// @ is an alias to /src
import NavbarApp from "@/components/views/NavbarApp.vue";
import DashboardAdminUnidad from "@/components/views/DashboardAdminUnidad.vue";
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";

export default {
    name: "ViewDashboardDireccionTAcademica",
    components: {
        NavbarApp,
        DashboardAdminUnidad,
        FooterDashboardAdmin,
    },
};
</script>
