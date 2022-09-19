<template>
  <v-container fluid class="max-height">
    <v-row justify="start">
      <v-col cols="12">
        <h2>Oficio de solicitud</h2>
      </v-col>
      <v-col cols="6">
        <v-btn
          color="orange"
          class="mr-2"
          @click="addItem()"
          v-show="showAddButton"
        >
          Crear nuevo oficio
        </v-btn>
      </v-col>
      <v-col cols="12">
        <h3 style="color: #2b4c7b" class="mt-2">Cursos registrados</h3>
      </v-col>
    </v-row>
    <v-row class="mt-2">
      <v-data-table
        :headers="headers"
        :items="items_cursos"
        :items-per-page="15"
        item-key="idCurso"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Contenido</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" persistent max-width="600px">
              <v-card>
                <v-card-title>
                  <v-btn icon outlined @click="closeModal()" class="mr-2">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                  <span class="text-h5">Oficio de solicitud</span>
                </v-card-title>

                <v-card-text>
                  <FormOficioSolicitud
                    :id="curso_id"
                    :mode="mode"
                    :name="curso_name"
                    @close="closeModal"
                    v-if="dialog"
                  />
                </v-card-text>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:[`item.clave_curso`]="{ item }">
          <v-chip color="blue"> {{ item.clave_curso }} </v-chip>
        </template>
        <template v-slot:[`item.estatus`]="{ item }">
          <v-chip :color="isValid(item.estatus) ? 'green' : 'yellow'">
            <div v-if="isValid(item.estatus)">VALIDADO</div>
            <div v-else>EN ESPERA</div>
          </v-chip>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-btn
            text
            class="mr-2"
            @click="viewItem(item.idCurso, item.nombre_curso)"
          >
            <v-icon small> mdi-eye </v-icon> Ver
          </v-btn>
          <v-btn
            text
            class="mr-2"
            @click="editItem(item.idCurso, item.nombre_curso)"
            v-show="permission_edit(item.estatus)"
          >
            <v-icon small> mdi-pencil </v-icon> Editar
          </v-btn>
          <v-btn
            text
            class="mr-2"
            @click="sendItem(item.idCurso, item.nombre_curso)"
            v-show="permission_edit(item.estatus)"
          >
            <v-icon small> mdi-send-outline </v-icon> Enviar a validación
          </v-btn>
          <v-btn
            text
            class="mr-2"
            @click="deleteItem(item.idCurso, item.idUnidad)"
            v-show="permission_edit(item.estatus)"
          >
            <v-icon small class="mr-2"> mdi-delete </v-icon> Eliminar
          </v-btn>
          <v-btn
            text
            class="mr-2"
            @click="validateItem(item.idCurso, item.nombre_curso)"
            v-show="permission_validate(item.estatus)"
          >
            <v-icon small> mdi-check-bold </v-icon> Validar
          </v-btn>
        </template>
      </v-data-table>
    </v-row>
  </v-container>
</template>

<script>
import AuthService from "@/services/AuthService.js";
import FormOficioSolicitud from "@/components/partials/FormOficioSolicitud.vue";

const ROL_ADMIN_UNIDAD = "ADMINISTRADOR UNIDAD";
const ROL_DIRECCION_TECNICA = "DIRECCIÓN TÉCNICA ACADÉMICA";
const REGISTER_MODE = 0;
const EDIT_MODE = 1;
const VALIDATE_MODE = 2;
const VIEW_MODE = 3;
const SEND_VALIDATE_MODE = 4;
const ESTATUS_CREADO = 1;
const ESTATUS_ENVIADO_VALIDACION = 2;
const ESTATUS_VALIDADO = 3;

export default {
  name: "OficioSolicitud",
  components: {
    FormOficioSolicitud,
  },
  data: () => ({
    headers: [
      { text: "Nombre del curso", value: "nombre_curso" },
      { text: "Clave del curso", value: "clave_curso" },
      { text: "Aprobado D.T.A.", value: "estatus" },
      { text: "", value: "actions" },
    ],
    items_cursos: [],
    dialog: false,
    mode: 1,
    role: 0,
    curso_id: null,
    curso_name: "",
  }),

  async mounted() {
    await this.fetchCursos();
  },

  computed: {
    showAddButton() {
      return this.role == ROL_ADMIN_UNIDAD;
    },
  },

  methods: {
    async fetchCursos() {
      let cursos = [];
      let profile = await AuthService.getProfile();
      this.role = this.$store.getters.getUser.Rol;

      if (this.role == ROL_ADMIN_UNIDAD) {
        cursos = await AuthService.getAllAssignUnidad(
          profile.idCentro_capacitacion
        );
      } else {
        cursos = await AuthService.getAllAssignGrade();
      }

      this.items_cursos = cursos.cursos.filter((item) => {
        return this.role == ROL_DIRECCION_TECNICA
          ? item.estatus == ESTATUS_ENVIADO_VALIDACION ||
              item.estatus == ESTATUS_VALIDADO
          : item;
      });
    },

    deleteItem(idCurso, idUnidad) {
      this.$swal({
        title: "¿Desea eliminar este curso?",
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
            return AuthService.deleteAssignGrade(idCurso, idUnidad);
          }
        })
        .then((response) => {
          if (response && response.serverCode == 200) {
            this.$swal("Eliminado!", "El curso se ha eliminado.", "success");
            this.fetchCursos();
          }
        })
        .catch((error) => {
          console.log(error);
          this.$swal("Error!", "No se pudo eliminar el curso.", "error");
        });
    },

    addItem() {
      this.mode = REGISTER_MODE;
      this.openModal();
    },

    editItem(id, nombre_curso) {
      this.mode = EDIT_MODE;
      this.openModal(id, nombre_curso);
    },

    sendItem(id, nombre_curso) {
      this.mode = SEND_VALIDATE_MODE;
      this.openModal(id, nombre_curso);
    },

    validateItem(id, nombre_curso) {
      this.mode = VALIDATE_MODE;
      this.openModal(id, nombre_curso);
    },

    viewItem(id, nombre_curso) {
      this.mode = VIEW_MODE;
      this.openModal(id, nombre_curso);
    },

    permission_edit(estatus) {
      return this.role == ROL_ADMIN_UNIDAD && estatus == ESTATUS_CREADO;
    },

    permission_validate(estatus) {
      return (
        this.role == ROL_DIRECCION_TECNICA &&
        estatus == ESTATUS_ENVIADO_VALIDACION
      );
    },

    isValid(estatus) {
      return estatus > ESTATUS_ENVIADO_VALIDACION;
    },

    openModal(curso_id = null, nombre_curso = "") {
      this.curso_id = curso_id;
      this.curso_name = nombre_curso;
      this.dialog = true;
    },

    closeModal() {
      this.fetchCursos();
      this.dialog = false;
    },
  },
};
</script>
