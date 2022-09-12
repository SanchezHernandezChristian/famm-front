<template>
  <div class="max-height">
    <NavbarApp color="orange" actions="NavOptionsTeacher" />
    <DocenteCurso />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
import NavbarApp from "@/components/views/NavbarApp.vue";
import DocenteCurso from "@/components/views/DocenteCurso.vue";
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";

export default {
  name: "ViewDocenteCurso",
  components: {
    NavbarApp,
    DocenteCurso,
    FooterDashboardAdmin,
  },
};
</script>
