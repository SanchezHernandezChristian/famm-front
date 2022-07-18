<template>
  <v-row justify="center" class="card-item mt-1 mb-1">
    <v-col cols="6">
      <v-text-field
        label="Curso recibido"
        dense
        outlined
        :rules="[rules.required]"
        :value="content.nombre_curso"
        v-model="content.nombre_curso"
        @input="handleInput"
      >
      </v-text-field>
    </v-col>
    <v-col cols="6">
      <v-text-field
        label="Institución"
        dense
        outlined
        :rules="[rules.required]"
        :value="content.nombre_institucion"
        v-model="content.nombre_institucion"
        @input="handleInput"
      >
      </v-text-field>
    </v-col>
    <v-col cols="6">
      <v-text-field
        label="Periodo inicio - término"
        dense
        outlined
        :rules="[rules.required]"
        :value="content.periodo"
        v-model="content.periodo"
        @input="handleInput"
      >
      </v-text-field>
    </v-col>
    <v-col cols="6">
      <v-text-field
        label="Documento que lo acredita"
        dense
        outlined
        :rules="[rules.required]"
        :value="content.documento"
        v-model="content.documento"
        @input="handleInput"
      >
      </v-text-field>
    </v-col>
  </v-row>
</template>

<script>
export default {
  prop: ["value"],
  data: () => ({
    rules: {
      required: (value) => !!value || "Campo requerido",
    },
    content: {
      idDocente: null,
      nombre_curso: null,
      nombre_institucion: null,
      periodo: null,
      documento: null,
    },
  }),
  methods: {
    handleInput() {
      this.$emit("input", this.content);
    },
  },
};
</script>

<style>
.card-item {
  border-width: 2px;
  border-bottom-style: dashed;
}
</style>
