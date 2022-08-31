<template>
  <v-container fluid class="max-height">
    <v-row justify="center" align="center">
      <br />
      <h2>IDENTIFICACIÓN DEL INSTRUCTOR FORMATO RPDC-11</h2>
      <h3 style="color: #2b4c7b" class="mt-2">Instructores registrados</h3>
    </v-row>
    <v-row class="mt-2">
      <v-data-table
        :headers="headers"
        :items="items_docentes"
        :items-per-page="5"
        item-key="idDocente"
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
                  <span class="text-h5" v-if="mode == 1">Editar docente</span>
                  <span class="text-h5" v-if="mode == 2">Validar docente</span>
                  <span class="text-h5" v-if="mode == 3">Ver docente</span>
                </v-card-title>

                <v-card-text>
                  <FormValidacionInstructor
                    :id="teacher_id"
                    :mode="mode"
                    @close="close"
                    v-if="dialog"
                  />
                </v-card-text>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:[`item.nombre`]="{ item }">
          <div>
            {{ item.nombre }} {{ item.apellido_paterno }}
            {{ item.apellido_materno }}
          </div>
        </template>
        <template v-slot:[`item.clave`]="{ item }">
          <v-chip color="blue"> {{ item.clave }} </v-chip>
        </template>
        <template v-slot:[`item.estatus`]="{ item }">
          <v-chip :color="item.estatus > 0 ? 'green' : 'orange'">
            <div v-if="item.estatus > 0">EN SERVICIO</div>
            <div v-else>NUEVO INGRESO</div>
          </v-chip>
        </template>
        <template v-slot:[`item.esValido`]="{ item }">
          <v-chip :color="item.esValido > 0 ? 'green' : 'yellow'">
            <div v-if="item.esValido > 0">VALIDADO</div>
            <div v-else>EN ESPERA</div>
          </v-chip>
        </template>
        <template v-slot:[`item.esValidoDs`]="{ item }">
          <v-chip :color="item.esValidoDs > 0 ? 'green' : 'yellow'">
            <div v-if="item.esValidoDs > 0">VALIDADO</div>
            <div v-else>EN ESPERA</div>
          </v-chip>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-btn text class="mr-2" @click="editItem(item.idDocente, 3)">
            <v-icon small> mdi-eye </v-icon> Ver
          </v-btn>
          <v-btn
            text
            class="mr-2"
            @click="editItem(item.idDocente, 1)"
            v-show="role < 1 && item.esValido < 1"
          >
            <v-icon small> mdi-pencil </v-icon> Editar
          </v-btn>
          <v-btn
            text
            class="mr-2"
            @click="deleteItem(item.idDocente)"
            v-show="role < 1"
          >
            <v-icon small class="mr-2"> mdi-delete </v-icon> Eliminar
          </v-btn>
          <v-btn
            text
            class="mr-2"
            @click="editItem(item.idDocente, 2)"
            v-show="showValidateButton(item.esValido, item.esValidoDs)"
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
import FormValidacionInstructor from "@/components/views/FormValidacionInstructor.vue";

export default {
  name: "Validacion",
  components: {
    FormValidacionInstructor,
  },
  data: () => ({
    headers: [
      { text: "Nombre del instructor", value: "nombre" },
      { text: "Clave del instructor", value: "clave" },
      { text: "Estatus", value: "estatus" },
      { text: "Aprobado Admin Unidad", value: "esValido" },
      { text: "Aprobado Depto Sup. A", value: "esValidoDs" },
      { text: "", value: "actions" },
    ],
    items_docentes: [],
    dialog: false,
    mode: 1,
    role: 0, // 0 = ADMINISTRADOR UNIDAD, 1 = DEPARTAMENTO DE SUPERVISIÓN ACADEMICA
    teacher_id: null,
  }),

  mounted() {
    this.fetchDocentes();
    this.fetchRoles();
  },

  methods: {
    async fetchDocentes() {
      let response = await AuthService.getDocentes();
      this.items_docentes = response.data.filter((item) => {
        return this.role > 0 ? item.esValido : item;
      });
    },

    async fetchRoles() {
      let response = await AuthService.getProfile();
      if (response.Rol == "ADMINISTRADOR UNIDAD") this.role = 0;
      else this.role = 1;
    },

    deleteItem(id) {
      this.$swal({
        title: "¿Desea eliminar este instructor?",
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
            return AuthService.deleteTeacher(id);
          }
        })
        .then((response) => {
          if (response && response.serverCode == 200) {
            this.$swal(
              "Eliminado!",
              "El instructor se ha eliminado.",
              "success"
            );
            this.fetchDocentes();
          }
        })
        .catch((error) => {
          console.log(error);
          this.$swal("Error!", "No se pudo eliminar el instructor.", "error");
        });
    },

    editItem(id, mode) {
      this.mode = mode;
      this.teacher_id = id;
      this.dialog = true;
    },

    showValidateButton(esValido, esValidoDs) {
      if (this.role < 1) {
        return esValido < 1;
      } else {
        return esValidoDs < 1;
      }
    },

    close() {
      this.fetchDocentes();
      this.dialog = false;
    },
  },
};
</script>
