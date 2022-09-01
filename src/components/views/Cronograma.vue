<template>
  <v-container fluid class="max-height">
    <v-row justify="center" align="center">
      <v-col cols="12" class="d-flex flex-row">
        <h2 style="color: #2b4c7b">Cronograma</h2>
        <v-btn small color="orange" dark class="ma-2" @click="addCronograma">
          CREAR NUEVO
        </v-btn>
      </v-col>
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
        <template v-slot:[`item.clave_curso`]="{ item }">
          <v-chip color="blue">
            {{ item.cronograma.clave_curso }}
          </v-chip>
        </template>
        <template v-slot:[`item.duracion_horas`]="{ item }">
          <v-chip color="orange">
            {{ item.cronograma.duracion_horas }}
          </v-chip>
        </template>
        <template v-slot:[`item.nombre_especialidad`]="{ item }">
          {{ item.cronograma.nombre_especialidad }}
        </template>
        <template v-slot:[`item.aprobado`]="{ item }">
          <v-chip :color="item.aprobado > 0 ? 'green' : 'yellow'">
            <div v-if="item.aprobado > 0">APROBADO</div>
            <div v-else>EN ESPERA</div>
          </v-chip>
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
      { text: "Clave de curso", align: "center", value: "clave_curso" },
      { text: "Horas", align: "center", value: "duracion_horas" },
      { text: "Especialidad", value: "nombre_especialidad" },
      { text: "Aprobado A.U.", value: "aprobado" },
      { text: "", value: "actions" },
    ],
    items_cronogramas: [],
  }),
  mounted() {
    this.fetchCronogramas();
  },
  methods: {
    async fetchCronogramas() {
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
            this.fetchCronogramas();
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
