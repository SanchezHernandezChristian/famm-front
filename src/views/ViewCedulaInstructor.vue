<template>
  <div>
    <MenuTeacher />
    <FormCedulaInstructor />
    <FooterDashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import MenuTeacher from "@/components/views/MenuTeacher.vue";
import FormCedulaInstructor from "@/components/views/FormCedulaInstructor.vue";
import FooterDashboardAdmin from "@/components/views/FooterDashboardAdmin.vue";

export default {
  name: "ViewCedulaInstructor",
  components: {
    MenuTeacher,
    FormCedulaInstructor,
    FooterDashboardAdmin,
  },
};
</script>
