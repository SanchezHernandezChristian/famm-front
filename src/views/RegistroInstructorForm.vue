<template>
    <div>
        <NavbarApp color="orange" actions="NavOptionsTeacher" />
        <FormDatosRegistroInstructor />
        <FooterDashboardAdmin />
    </div>
</template>

<script>
import NavbarApp from "@/components/views/NavbarApp.vue";
import FormDatosRegistroInstructor from "@/components/views/FormDatosRegistroCapacitador.vue";
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";

export default {
    name: "form-registro-instructor",
    components: {
        NavbarApp,
        FormDatosRegistroInstructor,
        FooterDashboardAdmin,
    },
};
</script>
