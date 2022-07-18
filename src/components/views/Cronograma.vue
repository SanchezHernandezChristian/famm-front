<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <br />
      <h2 style="color: #2b4c7b">Cronograma</h2>
      <v-btn
        small
        class="ma-2"
        fab
        outlined
        color="primary"
        @click="addCronograma"
      >
        <v-icon dark> mdi-plus </v-icon>
      </v-btn>
    </v-row>
    <v-row>
      <v-data-table
        :headers="headers"
        :items="items_cronogramas"
        :items-per-page="5"
        item-key="id"
        class="elevation-1"
      >
        <template v-slot:item.nombre_curso="{ item }">
          <div>
            {{ item.cronograma.nombre_curso }}
          </div>
        </template>
        <template v-slot:item.horas="{ item }">
          <v-chip color="yellow">
            {{ item.contenido_cronograma[0].horas }}
          </v-chip>
        </template>
        <template v-slot:item.clave="{}">
          <v-chip color="blue" class="font-italic"> Sin clave </v-chip>
        </template>
        <template v-slot:item.tema="{ item }">
          <v-chip color="orange">{{
            item.contenido_cronograma[0].tema
          }}</v-chip>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-btn elevation="2" class="mr-2">Asignar</v-btn>
          <v-icon
            small
            class="mr-2"
            @click="editItem(item.cronograma.idCronograma)"
          >
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteItem(item.cronograma.idCronograma)">
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
    </v-row>
  </v-container>
</template>

<script>
import AuthService from "@/services/AuthService.js";

export default {
  name: "Users",
  data: () => ({
    headers: [
      { text: "Nombre de curso", value: "nombre_curso" },
      { text: "Horas", value: "horas" },
      { text: "Clave de curso", value: "clave" },
      { text: "Especialidad", value: "tema" },
      { text: "Descripción", value: "subtema" },
      { text: "", value: "actions" },
    ],
    items_cronogramas: [],
  }),
  mounted() {
    this.getItems();
  },
  methods: {
    async getItems() {
      let me = this;

      if (me.$store.getters.isLoggedIn) {
        try {
          const response = await AuthService.fetchCronogramas();
          me.items_cronogramas = response.data;
        } catch (error) {
          console.log(error);
        }
      }
    },

    deleteItem(id) {
      this.$swal({
        title: "¿Desea eliminar?",
        text: "Esta acción no se puede deshacer.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar",
        cancelButtonText: "Cancelar",
      })
        .then((result) => {
          if (result.isConfirmed) {
            return AuthService.deleteCronograma(id);
          }
        })
        .then((response) => {
          if (response && response.serverCode == 200) {
            this.$swal(
              "Eliminado!",
              "El cronograma se ha eliminado.",
              "success"
            );
            this.getItems();
          }
        })
        .catch((error) => {
          console.log(error);
          this.$swal("Error!", "No se pudo eliminar el cronograma.", "error");
        });
    },

    editItem(id) {
      this.$router.push({
        name: "ViewAddCronograma",
        params: {
          id: id,
        },
      });
    },

    addCronograma() {
      this.$router.push("form-cronograma");
    },
  },
};
</script>

<style scoped></style>
