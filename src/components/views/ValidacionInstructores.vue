<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <br />
      <h2 style="color: #2b4c7b">
        IDENTIFICACIÓN DEL INSTRUCTOR FORMATO RPDC-11
      </h2>
      <v-btn
        small
        class="ma-2"
        fab
        outlined
        color="primary"
        @click="addValidacion"
      >
        <v-icon dark> mdi-plus </v-icon>
      </v-btn>
    </v-row>
    <v-row>
      <v-data-table
        :headers="headers"
        :items="items_docentes"
        :items-per-page="5"
        item-key="idDocente"
        class="elevation-1"
      >
        <template v-slot:item.nombre="{ item }">
          <div>
            {{ item.nombre }} {{ item.apellido_paterno }}
            {{ item.apellido_materno }}
          </div>
        </template>
        <template v-slot:item.clave="{ item }">
          <v-chip color="blue"> {{ item.clave }} </v-chip>
        </template>
        <template v-slot:item.estatus="{ item }">
          <v-chip :color="getColor(item.estatus)" dark>
            <div v-if="item.estatus == 0">NUEVO INGRESO</div>
            <div v-else>EN SERVICIO</div>
          </v-chip>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-btn elevation="2" class="mr-2">Asignar</v-btn>
          <v-icon small class="mr-2" @click="editItem(item.idDocente)">
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteItem(item.idDocente)">
            mdi-delete
          </v-icon>
          <v-icon small @click="validate(item.idDocente)">
            mdi-checkbox-marked-circle
          </v-icon>
        </template>
      </v-data-table>
    </v-row>
  </v-container>
</template>

<script>
import AuthService from "@/services/AuthService.js";

export default {
  name: "Validacion",
  data: () => ({
    headers: [
      { text: "Nombre del instructor", value: "nombre" },
      { text: "Clave del instructor", value: "clave" },
      { text: "Estatus", value: "estatus" },
      { text: "Aprobado D.U.", value: "estado_du" },
      { text: "Aprobado D.G.", value: "aprobado_dg" },
      { text: "", value: "actions" },
    ],
    items_docentes: [],
  }),

  mounted() {
    this.fetchDocentes();
  },

  methods: {
    async fetchDocentes() {
      let response = await AuthService.getDocentes();
      this.items_docentes = response.data;
    },

    getColor(status) {
      if (status == 0) return "orange";
      else return "green";
    },

    deleteItem(id) {
      console.log(id);
    },
    editItem(id) {
      console.log(id);
    },
    validate(id) {
      console.log(id);
    },

    addValidacion() {
      //   this.$router.push("form-cronograma");
    },
  },
};
</script>
