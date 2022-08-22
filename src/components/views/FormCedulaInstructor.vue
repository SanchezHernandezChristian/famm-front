<template>
  <v-container fluid>
    <FormValidacionInstructor :id="teacher_id" :mode="1" @close="close" />
  </v-container>
</template>

<script>
import AuthService from "@/services/AuthService.js";
import FormValidacionInstructor from "@/components/views/FormValidacionInstructor.vue";

export default {
  components: {
    FormValidacionInstructor,
  },
  data: () => ({
    teacher_id: null,
  }),
  async created() {
    const response = await AuthService.getProfileDocente();
    this.teacher_id = response.idDocente;
  },
  methods: {
    close() {
      this.$router.push("/dashboard-instructor");
    },
  },
};
</script>
