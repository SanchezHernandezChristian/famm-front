<template>
  <v-container fluid class="max-height">
    <v-row justify="start">
      <v-col cols="12">
        <h2>Oficio de solicitud</h2>
      </v-col>
      <v-col cols="6">
        <v-btn color="orange" class="mr-2" @click="addItem()" v-show="showAddButton"> Crear nuevo oficio </v-btn>
      </v-col>
      <v-col cols="12">
        <h3 style="color: #2b4c7b" class="mt-2">Cursos registrados</h3>
      </v-col>
    </v-row>
    <v-row class="mt-2">
      <v-data-table :headers="headers" :items="items_oficios" :items-per-page="15" item-key="idOficio" class="elevation-1">
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
                  <FormOficioSolicitud :id="curso_id" :mode="mode" @close="closeModal" v-if="dialog" />
                </v-card-text>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:[`item.clave_curso`]="{ item }">
          <v-chip color="blue"> {{ item.clave_curso }} </v-chip>
        </template>
        <template v-slot:[`item.valido`]="{ item }">
          <v-chip :color="isValid(item.valido) ? 'green' : 'yellow'">
            <div v-if="isValid(item.valido)">VALIDADO</div>
            <div v-else>EN ESPERA</div>
          </v-chip>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-btn text class="mr-2" @click="viewItem(item.idOficio)"> <v-icon small> mdi-eye </v-icon> Ver </v-btn>
          <v-btn text class="mr-2" @click="editItem(item.idOficio)" v-show="permission_edit(item.valido)"> <v-icon small> mdi-pencil </v-icon> Editar </v-btn>
          <v-btn text class="mr-2" @click="sendItem(item.idOficio)" v-show="permission_edit(item.valido)">
            <v-icon small> mdi-send-outline </v-icon> Enviar a validación
          </v-btn>
          <v-btn text class="mr-2" @click="deleteItem(item.idOficio)" v-show="permission_edit(item.valido)">
            <v-icon small class="mr-2"> mdi-delete </v-icon> Eliminar
          </v-btn>
          <v-btn text class="mr-2" @click="validateItem(item.idOficio)" v-show="permission_validate(item.valido)">
            <v-icon small> mdi-check-bold </v-icon> Validar
          </v-btn>
        </template>
      </v-data-table>
    </v-row>
  </v-container>
</template>

<script>
import AuthService from '@/services/AuthService.js';
import FormOficioSolicitud from '@/components/partials/FormOficioSolicitud.vue';

const ROL_ADMIN_UNIDAD = 'ADMINISTRADOR UNIDAD';
const ROL_DIRECCION_TECNICA = 'DIRECCIÓN TÉCNICA ACADÉMICA';
const REGISTER_MODE = 0;
const EDIT_MODE = 1;
const VALIDATE_MODE = 2;
const VIEW_MODE = 3;
const SEND_VALIDATE_MODE = 4;
const ESTATUS_CREADO = 1;
const ESTATUS_ENVIADO_VALIDACION = 2;
const ESTATUS_VALIDADO = 3;

export default {
  name: 'OficioSolicitud',
  components: {
    FormOficioSolicitud,
  },
  data: () => ({
    headers: [
      { text: 'Nombre del curso', value: 'nombre_curso' },
      { text: 'Clave del curso', value: 'clave_curso' },
      { text: 'Aprobado D.T.A.', value: 'valido' },
      { text: '', value: 'actions' },
    ],
    items_oficios: [],
    dialog: false,
    mode: 1,
    role: 0,
    curso_id: null,
  }),

  async mounted() {
    await this.fetchOficios();
  },

  computed: {
    showAddButton() {
      return this.role == ROL_ADMIN_UNIDAD;
    },
  },

  methods: {
    async fetchOficios() {
      this.role = this.$store.getters.getUser.Rol;
      const response1 = await AuthService.getProfile();
      let idUnidad = response1.idCentro_capacitacion;
      const oficios = await AuthService.getOficiosSolicitudUnidad(idUnidad);

      this.items_oficios = oficios.data.filter((item) => {
        return this.role == ROL_DIRECCION_TECNICA ? item.valido == ESTATUS_ENVIADO_VALIDACION || item.valido == ESTATUS_VALIDADO : item;
      });
    },

    deleteItem(id) {
      this.$swal({
        title: '¿Desea eliminar este oficio?',
        text: 'Esta acción no se puede deshacer.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar',
        cancelButtonText: 'Cancelar',
      })
        .then((result) => {
          if (result.isConfirmed) {
            return AuthService.deleteOficioSolicitud(id);
          }
        })
        .then((response) => {
          if (response && response.serverCode == 200) {
            this.$swal('Eliminado!', 'El oficio se ha eliminado.', 'success');
            this.fetchOficios();
          }
        })
        .catch((error) => {
          console.log(error);
          this.$swal('Error!', 'No se pudo eliminar el oficio.', 'error');
        });
    },

    addItem() {
      this.mode = REGISTER_MODE;
      this.openModal();
    },

    editItem(id) {
      this.mode = EDIT_MODE;
      this.openModal(id);
    },

    sendItem(id) {
      this.mode = SEND_VALIDATE_MODE;
      this.openModal(id);
    },

    validateItem(id) {
      this.mode = VALIDATE_MODE;
      this.openModal(id);
    },

    viewItem(id) {
      this.mode = VIEW_MODE;
      this.openModal(id);
    },

    permission_edit(valido) {
      return this.role == ROL_ADMIN_UNIDAD && valido == ESTATUS_CREADO;
    },

    permission_validate(valido) {
      return this.role == ROL_DIRECCION_TECNICA && valido == ESTATUS_ENVIADO_VALIDACION;
    },

    isValid(valido) {
      return valido > ESTATUS_ENVIADO_VALIDACION;
    },

    openModal(curso_id = null) {
      this.curso_id = curso_id;
      this.dialog = true;
    },

    closeModal() {
      this.fetchOficios();
      this.dialog = false;
    },
  },
};
</script>
