<template>
  <v-row justify="center" class="card-item mt-1 mb-1">
    <v-col cols="6">
      <v-text-field
        label="Curso recibido"
        dense
        outlined
        :rules="[rules.required]"
      >
      </v-text-field>
    </v-col>
    <v-col cols="6">
      <v-text-field
        label="Institución"
        dense
        outlined
        :rules="[rules.required]"
      >
      </v-text-field>
    </v-col>
    <v-col cols="6">
      <v-text-field
        label="Periodo inicio - término"
        dense
        outlined
        :rules="[rules.required]"
      >
      </v-text-field>
    </v-col>
    <v-col cols="6">
      <v-text-field
        label="Documento que lo acredita"
        dense
        outlined
        :rules="[rules.required]"
      >
      </v-text-field>
    </v-col>
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
