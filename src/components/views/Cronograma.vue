<template>
  <v-container fluid class="max-height">
    <v-row justify="center" align="center">
      <br />
      <h2 style="color: #2b4c7b">Cronograma</h2>
      <!-- <v-btn
        small
        class="ma-2"
        fab
        outlined
        color="primary"
        @click="addCronograma"
      >
        <v-icon dark> mdi-plus </v-icon>
      </v-btn> -->
      <br />
      <p>
        
      </p>
    </v-row>
    <v-row justify="center" align="center">
      <v-layout row justify-start>
        <v-flex align-self-center xs10> </v-flex>
        <v-flex align-self-start xs1> </v-flex>
        <v-flex align-self-center xs1>
          <v-btn
            outlined
            style="color: white; background-color: #f46722"
            @click="addCronograma"
            >Crear Nuevo</v-btn
          >
        </v-flex>
      </v-layout>
    </v-row>
    <v-row>
      <v-data-table
        :headers="headers"
        :items="items_cronogramas"
        :items-per-page="5"
        item-key="id"
        class="elevation-1"
      >
        <template v-slot:[`item.nombre_curso`]="{ item }">
          <div>
            {{ item.cronograma.nombre_curso }}
          </div>
        </template>
        <template v-slot:[`item.duracion_horas`]="{ item }">
          <v-chip color="yellow">
            {{ item.cronograma.duracion_horas }}
          </v-chip>
        </template>
        <template v-slot:[`item.clave_curso`]="{ item }">
          <v-chip color="blue">
            {{ item.cronograma.clave_curso }}
          </v-chip>
        </template>
        <template v-slot:[`item.clave_especialidad`]="{ item }">
          <v-chip color="orange">{{
            item.cronograma.clave_especialidad
          }}</v-chip>
        </template>
        <template v-slot:[`item.descripcion_curso`]="{ item }">
          <div class="font-italic" v-show="!item.descripcion_curso">
            Sin descripción
          </div>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <!-- <v-btn elevation="2" class="mr-2">Asignar</v-btn> -->
          <!-- <v-icon
            small
            class="mr-2"
            @click="editItem(item.cronograma.idCronograma)"
          >
            mdi-pencil
          </v-icon> -->
          <!-- <v-icon small @click="deleteItem(item.cronograma.idCronograma)">
            mdi-delete
          </v-icon> -->
          <v-btn text @click="editItem(item.cronograma.idCronograma)">
            <v-icon small class="mr-2">mdi-pencil</v-icon
            ><small>Editar</small></v-btn
          >
          <v-btn text @click="deleteItem(item.cronograma.idCronograma)">
            <v-icon small class="mr-2">mdi-delete</v-icon
            ><small>Eliminar</small></v-btn
          >
        </template>
      </v-data-table>
    </v-row>
  </v-container>
</template>

<script>
import AuthService from "@/services/AuthService.js";
import CronogramaService from "@/services/CronogramaService.js";

export default {
  name: "Users",
  data: () => ({
    headers: [
      { text: "Nombre de curso", value: "nombre_curso" },
      { text: "Horas", align: "center", value: "duracion_horas" },
      { text: "Clave de curso", align: "center", value: "clave_curso" },
      { text: "Especialidad", align: "center", value: "clave_especialidad" },
      { text: "Descripción", value: "descripcion_curso" },
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
          me.items_cronogramas = await CronogramaService.mapCronogramas(
            response.data
          );
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
