<template>
  <v-container fluid>
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
            <v-dialog v-model="dialog" persistent max-width="800px">
              <v-card>
                <v-card-title>
                  <v-btn icon outlined @click="close" class="mr-2">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                  <span class="text-h5" v-if="validate">Validar docente</span>
                  <span class="text-h5" v-else>Editar docente</span>
                </v-card-title>

                <v-card-text>
                  <FormValidacionInstructor
                    :id="teacher_id"
                    :validate="validate"
                    @close="close"
                    v-if="dialog"
                  />
                </v-card-text>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
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
          <v-chip :color="getEstatusColor(item.estatus)">
            <div v-if="item.estatus == 0">NUEVO INGRESO</div>
            <div v-else>EN SERVICIO</div>
          </v-chip>
        </template>
        <template v-slot:item.estado_du="{ item }">
          <v-chip :color="getAprobacionColor('EN ESPERA')">
            <div v-if="item">EN ESPERA</div>
          </v-chip>
        </template>
        <template v-slot:item.aprobado_dg="{ item }">
          <v-chip :color="getAprobacionColor('VALIDADO')">
            <div v-if="item">VALIDADO</div>
          </v-chip>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="editItem(item.idDocente, 0)">
            mdi-pencil
          </v-icon>
          <v-icon small class="mr-2" @click="deleteItem(item.idDocente)">
            mdi-delete
          </v-icon>
          <v-icon small class="mr-2" @click="editItem(item.idDocente, 1)">
            mdi-check-bold
          </v-icon>
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
      { text: "Aprobado D.U.", value: "estado_du" },
      { text: "Aprobado D.G.", value: "aprobado_dg" },
      { text: "", value: "actions" },
    ],
    items_docentes: [],
    dialog: false,
    validate: 0,
    teacher_id: null,
  }),

  mounted() {
    this.fetchDocentes();
  },

  methods: {
    async fetchDocentes() {
      let response = await AuthService.getDocentes();
      this.items_docentes = response.data;
    },

    getEstatusColor(status) {
      if (status == 0) return "orange";
      else return "green";
    },

    getAprobacionColor(status) {
      if (status == "EN ESPERA") return "yellow";
      else return "green";
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
            return AuthService.deleteDocenteValidacion(id);
          }
        })
        .then((response) => {
          if (response && response.serverCode == 200) {
            this.$swal(
              "Eliminado!",
              "El instructor se ha eliminado.",
              "success"
            );
            this.getItems();
          }
        })
        .catch((error) => {
          console.log(error);
          this.$swal("Error!", "No se pudo eliminar el instructor.", "error");
        });
    },

    editItem(id, edit) {
      this.validate = edit;
      this.teacher_id = id;
      this.dialog = true;
    },

    close() {
      this.fetchDocentes();
      this.dialog = false;
    },
  },
};
</script>
