<template>
  <v-container fluid class="max-height">
    <v-row>
      <v-col cols="12">
        <FormCronogramaPreview
          :id="id_cronograma"
          :mode="3"
          :student="true"
          v-if="id_cronograma"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FormCronogramaPreview from "@/components/views/FormCronogramaPreview.vue";

export default {
  components: {
    FormCronogramaPreview,
  },
  data: () => ({
    id_cronograma: null,
  }),
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      this.id_cronograma = this.$route.params.id;
    },
  },
};
</script>