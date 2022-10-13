<template>
  <v-container fluid class="max-height">
    <v-row>
      <v-col cols="12">
        <FormCronogramaPreview
          :id="id_cronograma"
          :mode="3"
          :student="true"
          :zoom_link="zoom_link"
          v-if="id_cronograma"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AuthService from "@/services/AuthService.js";
import FormCronogramaPreview from "@/components/views/FormCronogramaPreview.vue";

export default {
  components: {
    FormCronogramaPreview,
  },
  data: () => ({
    id_cronograma: null,
    zoom_link: "",
  }),
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      let id_curso = this.$route.params.id;
      if (id_curso) {
        let response = await AuthService.getCedulaIdCurso(id_curso);
        let response2 = await AuthService.getCronogramaIdCurso(id_curso);
        let cedula = response.data[0];
        let cronograma = response2.data[0];
        if (cedula && cronograma) {
          this.id_cronograma = cronograma.cronograma.idCronograma;
          this.zoom_link = cedula.url;
        }
      }
    },
  },
};
</script>