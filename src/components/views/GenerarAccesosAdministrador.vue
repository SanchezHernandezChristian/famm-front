<template>
  <v-container fluid pt-6>
    <v-row justify="center" align="center">
      <h2 style="color: #2b4c7b">Cursos asignados registrados</h2>
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
        <template v-slot:top>
          <v-toolbar flat>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialogGenerar" width="1500">
              <v-card class="p-5">
                <v-row justify="center" align="center">
                  <br />
                  <h2 style="color: #2b4c7b">Detalles</h2>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs2> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>Nombre curso:</label></v-flex
                    >
                    <v-flex align-self-center xs6>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          v-model="editedItem.nombre_curso"
                          disabled
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs2> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs2> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>Clave curso:</label></v-flex
                    >
                    <v-flex align-self-center xs6>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          v-model="editedItem.clave_curso"
                          disabled
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs2> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs2> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>Fecha de inicio:</label></v-flex
                    >
                    <v-flex align-self-center xs6>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          v-model="fecha_ini"
                          disabled
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs2> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs2> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>Fecha de término:</label></v-flex
                    >
                    <v-flex align-self-center xs6>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          v-model="fecha_fin"
                          disabled
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs2> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs2> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>Unidad de capacitación:</label></v-flex
                    >
                    <v-flex align-self-center xs6>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          v-model="editedItem.nombre"
                          disabled
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs2> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs2> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>Link de zoom:</label></v-flex
                    >
                    <v-flex align-self-center xs6>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          v-model="acceso.url"
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs2> </v-flex>
                  </v-layout>
                </v-row>
                <v-card-actions>
                  <v-btn
                    outlined
                    color="gray"
                    class="bordeRedondoElement"
                    @click="guardar(editedItem)"
                    >Guardar cambios</v-btn
                  >
                  <v-btn
                    outlined
                    color="gray"
                    class="bordeRedondoElement"
                    @click="dialogGenerar = false"
                  >
                    Cancelar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogGuardar" width="500">
              <v-card>
                <v-card-title class="text-h5 white lighten-2">
                  ¡ATENCIÓN!
                </v-card-title>
                <v-card-text>
                  Si todos los datos son correctos da clic en continuar.
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    outlined
                    color="gray"
                    class="bordeRedondoElement"
                    @click="dialogGuardar = false"
                  >
                    Cancelar
                  </v-btn>
                  <v-btn
                    outlined
                    style="color: #ffffff; background-color: #2b4c7b"
                    class="bordeRedondoElement"
                    @click="guardarLink(editedItem)"
                    >Continuar</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-btn text @click="cursoItem(item)">Generar</v-btn>
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
    dialogGuardar: false,
    dialogGenerar: false,
    //Elementos para la tabla
    headers: [
      {
        text: "Nombre del curso",
        align: "start",
        sortable: false,
        value: "nombre_curso",
      },
      { text: "Clave del curso", value: "clave_curso" },
      { text: "Unidad de capacitación", value: "nombre" },
      { text: " ", value: "actions" },
    ],
    cursosAsignados: [],
    editedItem: "",
    cursoId: 0,
    editedIndex: -1,
    editId: 0,
    idCursoDelete: null,
    idUnidadDelete: null,
    data_cedula: [],
    fecha_ini: null,
    fecha_fin: null,
    user: {
      idUnidad: null,
    },
    acceso: {
      url: null,
      idCurso: null,
      idUnidad: null,
    },
  }),

  async mounted() {
    try {
      const response3 = await AuthService.getProfile();
      this.user.idUnidad = response3.idCentro_capacitacion;
      const response6 = await AuthService.getAllAssignUnidad(
        this.user.idUnidad
      );
      //const response = await AuthService.getAllAssignGrade();
      this.cursosAsignados = response6.cursos;
      console.log("cursosAsignados", this.cursosAsignados);
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    async reloadTable() {
      const response3 = await AuthService.getProfile();
      this.user.idUnidad = response3.idCentro_capacitacion;
      const response6 = await AuthService.getAllAssignUnidad(
        this.user.idUnidad
      );
      //const response = await AuthService.getAllAssignGrade();
      this.cursosAsignados = response6.cursos;
      console.log("cursosAsignados", this.cursosAsignados);
    },

    async guardarLink() {
      try {
        console.log("data_item ", this.acceso);
        const response = await AuthService.updateGradeLink(this.acceso);
        this.datarespuestaDelete = response;
        if (response.serverCode == 200) {
          this.dialogGenerar = false;
          this.dialogGuardar = false;
          //this.mostrarAlertDelete = true;
          this.$swal(
            "Guardado",
            "Link de zoom guardado correctamente.",
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

    cursoItem(item) {
      this.editedIndex = this.cursosAsignados.indexOf(item);
      console.log("cursoIndex ", this.editedIndex);
      this.editedItem = Object.assign({}, item);
      console.log("cursoItem ", this.editedItem);
      this.cursoId = this.editedItem.idCurso;
      console.log("editedItem.id ", this.deleteId);
      this.dialogGenerar = true;
      this.idCursoDelete = this.editedItem.idCurso;
      console.log("idCursoDelete ", this.idCursoDelete);
      this.idUnidadDelete = this.editedItem.idUnidad;
      console.log("idUnidadDelete ", this.idUnidadDelete);
      this.rellenar(item);
    },

    async guardar(item) {
      this.dialogGuardar = true;
      this.editedIndex = this.cursosAsignados.indexOf(item);
      console.log("cursoIndex ", this.editedIndex);
      this.editedItem = Object.assign({}, item);
      console.log("cursoItem ", this.editedItem);
      this.cursoId = this.editedItem.idCurso;
      console.log("editedItem.id ", this.deleteId);
      this.dialogGenerar = true;
      this.idCursoDelete = this.editedItem.idCurso;
      console.log("idCursoDelete ", this.idCursoDelete);
      this.idUnidadDelete = this.editedItem.idUnidad;
      console.log("idUnidadDelete ", this.idUnidadDelete);
      this.acceso.idUnidad = this.idUnidadDelete;
      console.log("this.acceso.idUnidad ", this.acceso.idUnidad);
      this.acceso.idCurso = this.cursoId;
      console.log("this.acceso.idCurso ", this.cursoId);
      //this.acceso.url = item.url;
      console.log("this.acceso.url ", this.acceso.url);
    },

    async rellenar(data) {
      const responseCedula = await AuthService.getCedulaIdCurso(data.idCurso);
      this.data_cedula = responseCedula.data[0];
      console.log("data_cedula ", this.data_cedula);
      this.fecha_ini = this.data_cedula.periodoInicio;
      console.log("fecha_ini ", this.fecha_ini);
      this.fecha_fin = this.data_cedula.periodoTermino;
      console.log("fecha_fin ", this.fecha_fin);
      this.acceso.url = this.data_cedula.url;
    },
  },
};
</script>
