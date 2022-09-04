<template>
  <v-container fluid class="max-height">
    <v-row justify="center" align="center">
      <v-col cols="12" class="d-flex flex-row">
        <h2 style="color: #2b4c7b">Cronograma</h2>
        <v-btn
          small
          color="orange"
          dark
          class="ma-2"
          @click="addCronograma"
          v-show="role > 0"
        >
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
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Contenido</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" persistent max-width="1200px">
              <v-card>
                <v-card-title>
                  <v-btn icon outlined @click="close" class="mr-2">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                  <span class="text-h5" v-if="mode == 1"
                    >Editar cronograma</span
                  >
                  <span class="text-h5" v-if="mode == 2"
                    >Validar cronograma</span
                  >
                  <span class="text-h5" v-if="mode == 3">Ver cronograma</span>
                </v-card-title>

                <v-card-text>
                  <FormCronograma
                    :id="cronograma_id"
                    :mode="mode"
                    @close="close"
                    v-if="dialog"
                  />
                </v-card-text>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
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
        <template v-slot:[`item.cronograma.valido`]="{ item }">
          <v-chip :color="item.cronograma.valido > 0 ? 'green' : 'yellow'">
            <div v-if="item.cronograma.valido > 0">APROBADO</div>
            <div v-else>EN ESPERA</div>
          </v-chip>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-btn text @click="editItem(item.cronograma.idCronograma, 3)">
            <v-icon small class="mr-2"> mdi-eye </v-icon> <small>Ver</small>
          </v-btn>
          <v-btn
            text
            @click="editItem(item.cronograma.idCronograma, 1)"
            v-show="role > 0 && item.cronograma.valido < 1"
          >
            <v-icon small class="mr-2">mdi-pencil</v-icon>
            <small>Editar</small>
          </v-btn>
          <v-btn
            text
            @click="editItem(item.cronograma.idCronograma, 2)"
            v-show="role < 1 && item.cronograma.valido < 1"
          >
            <v-icon small class="mr-2">mdi-check-bold</v-icon>
            <small>Validar</small>
          </v-btn>
          <v-btn
            text
            @click="deleteItem(item.cronograma.idCronograma)"
            v-show="role > 0 && item.cronograma.valido < 1"
          >
            <v-icon small class="mr-2">mdi-delete</v-icon>
            <small>Eliminar</small>
          </v-btn>
        </template>
      </v-data-table>
    </v-row>
  </v-container>
</template>

<script>
import AuthService from "@/services/AuthService.js";
import CronogramaService from "@/services/CronogramaService.js";
import FormCronograma from "@/components/views/FormCronograma.vue";

export default {
  name: "Cronograma",
  components: {
    FormCronograma,
  },
  data: () => ({
    headers: [
      { text: "Nombre de curso", value: "cronograma.nombre_curso" },
      {
        text: "Clave de curso",
        align: "center",
        value: "cronograma.clave_curso",
      },
      { text: "Horas", align: "center", value: "cronograma.duracion_horas" },
      { text: "Especialidad", value: "cronograma.nombre_especialidad" },
      { text: "Aprobado A. U.", value: "cronograma.valido" },
      { text: "", value: "actions" },
    ],
    items_cronogramas: [],
    dialog: false,
    mode: 1,
    role: 0, // 0 = ADMINISTRADOR UNIDAD, 1 = DEPARTAMENTO DE SUPERVISIÓN ACADEMICA
    cronograma_id: null,
  }),

  mounted() {
    this.fetchCronogramas();
    this.fetchRoles();
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

    async fetchRoles() {
      let response = await AuthService.getProfile();
      if (response.Rol == "ADMINISTRADOR UNIDAD") this.role = 0;
      else this.role = 1;
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

    editItem(id, mode) {
      this.mode = mode;
      this.cronograma_id = id;
      this.dialog = true;
    },

    addCronograma() {
      this.$router.push("form-cronograma");
    },

    close() {
      this.fetchCronogramas();
      this.dialog = false;
    },
  },
};
</script>

<style scoped></style>
