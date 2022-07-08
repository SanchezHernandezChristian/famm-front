<template>
  <v-row justify="center" class="card-item mt-1 mb-1">
    <v-col cols="6">
      <v-text-field
        label="Institución, organización o empresa"
        dense
        outlined
        :rules="[rules.required]"
      >
      </v-text-field>
    </v-col>
    <v-col cols="6">
      <v-text-field label="Puesto" dense outlined :rules="[rules.required]">
      </v-text-field>
    </v-col>
    <v-col cols="6">
      <v-text-field
        label="Periodo: año-mes"
        dense
        outlined
        :rules="[rules.required]"
      >
      </v-text-field>
    </v-col>
    <v-col cols="6"></v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    rules: {
      required: (value) => !!value || "Campo requerido",
    },
  }),
};
</script>

<style>
.card-item {
  border-width: 2px;
  border-bottom-style: dashed;
}
</style>
