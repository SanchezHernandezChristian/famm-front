<template>
  <v-container fluid pt-6>
    <v-row justify="center" align="center">
      <h2 style="color: #2b4c7b">Cursos asignados de la unidad</h2>
    </v-row>
    <v-row justify="center" align="center" style="height: 70px">
      <v-layout row justify-start>
        <v-flex align-self-center xs10> </v-flex>
        <v-flex align-self-start xs1> </v-flex>
        <v-flex align-self-center xs1> </v-flex>
      </v-layout>
      <p></p>
      <br />
    </v-row>
    <v-row>
      <v-data-table
        :headers="headers"
        :items="cursosAsignados"
        item-key="nombre_curso"
        class="elevation-1"
      >
        <template v-slot:[`item.clave_curso`]="{ item }">
          <v-chip color="blue">
            {{ item.clave_curso }}
          </v-chip>
        </template>
        <template v-slot:[`item.duracion_horas`]="{ item }">
          <v-chip color="orange">
            {{ item.duracion_horas }}
          </v-chip>
        </template>
        <template v-slot:top>
          <v-toolbar flat>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialogDelete" width="500">
              <v-card>
                <v-card-title class="text-h5 white lighten-2">
                  Eliminar curso asignado
                </v-card-title>
                <v-card-text>
                  ¿Estás seguro que quieres eliminar el curso asignado? Recuerda
                  que no podrás recuperar la información.
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    outlined
                    color="gray"
                    class="bordeRedondoElement"
                    @click="dialogDelete = false"
                  >
                    Cancelar
                  </v-btn>
                  <v-btn
                    outlined
                    style="color: #ffffff; background-color: #2b4c7b"
                    class="bordeRedondoElement"
                    @click="deleteCursoAsignado()"
                    >Continuar</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-btn text @click="editItem(item)"
            ><v-icon small>mdi-eye-outline</v-icon><small>Ver/Editar</small></v-btn
          >
          <v-btn text @click="deleteItem(item)">
            <v-icon small>mdi-window-close</v-icon
            ><small>Eliminar</small></v-btn
          >
        </template></v-data-table
      >
    </v-row>
  </v-container>
</template>

<script>
import AuthService from "@/services/AuthService.js";

export default {
  name: "RelacionParticpantesRegistrados",

  data: () => ({
    dialog: false,
    dialogDelete: false,
    //Elementos para la tabla
    headers: [
      {
        text: "Nombre del curso",
        align: "start",
        sortable: false,
        value: "nombre_curso",
      },
      { text: "Clave del curso", value: "clave_curso" },
      { text: "Horas", value: "duracion_horas" },
      { text: "Especialidad", value: "nombre_especialidad" },
      { text: "Aprobado D.T.", value: "" },
      { text: "Aprobado D.A.", value: "" },
      { text: " ", value: "actions" },
    ],
    cursosAsignados: [],
    user: {
      idUnidad: null,
    },
    editedItem: "",
    deleteId: 0,
    editedIndex: -1,
    editId: 0,
  }),

  async mounted() {
    try {
      const response = await AuthService.getProfile();
      this.user.idUnidad = response.idCentro_capacitacion;
      console.log("idUnidad", this.user.idUnidad);
      const response2 = await AuthService.getAllAssignUnidad(
        this.user.idUnidad
      );
      this.cursosAsignados = response2.cursos;
      console.log("cursosAsignados", this.cursosAsignados);
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    async reloadTable() {
      const response = await AuthService.getAllAssign();
      this.cursosAsignados = response.cursos;
      console.log("cursosAsignados", this.cursosAsignados);
    },

    async deleteCursoAsignado() {
      try {
        let idDeleteCurso = this.deleteId;
        console.log("confirmDeleteid ", idDeleteCurso);
        const response = await AuthService.deleteCursoAsignado(idDeleteCurso);
        this.datarespuestaDelete = response;
        if (response.serverCode == 200) {
          this.dialogDelete = false;
          //this.mostrarAlertDelete = true;
          this.$swal(
            "Eliminado",
            "Curso asignado eliminada correctamente.",
            "success"
          );
          this.reloadTable();
        } else {
          let error_msg =
            response.data.errors[Object.keys(response.data.errors)[0]][0];
          this.$swal("Error", error_msg, "error");
        }
      } catch (error) {
        console.log(error);
        console.log(error.response.data.errors);
        let error_msg =
          error.response.data.errors[
            Object.keys(error.response.data.errors)[0]
          ][0];
        this.$swal("Error", error_msg, "error");
      }
    },

    deleteItem(item) {
      this.editedIndex = this.cursosAsignados.indexOf(item);
      console.log("deleteIndex ", this.editedIndex);
      this.editedItem = Object.assign({}, item);
      console.log("deleteItem ", this.editedItem);
      this.deleteId = this.editedItem.id;
      console.log("editedItem.id ", this.deleteId);
      this.dialogDelete = true;
    },
  },
};
</script>
