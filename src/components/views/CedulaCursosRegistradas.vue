<template>
  <v-container fluid pt-6>
    <v-row justify="center" align="center">
      <h2 style="color: #2b4c7b">Cédulas de Pre-autorización registradas</h2>
    </v-row>
    <v-row justify="center" align="center" style="height: 70px">
      <v-layout row justify-start>
        <v-flex align-self-center xs1>
          <v-btn
            outlined
            style="background-color: #f46722; color: #ffffff"
            @click="newForm"
            v-if="role < 1"
          >
            Crear nueva cédula
          </v-btn>
        </v-flex>
      </v-layout>
    </v-row>
    <v-row>
      <v-card>
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Buscar"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="cedulas"
          item-key="id"
          class="elevation-1"
          :search="search"
          multi-sort
        >
          <template v-slot:[`item.duracion_horas`]="{ item }">
            <v-chip color="orange">
              {{ item.duracion_horas }}
            </v-chip>
          </template>
          <template v-slot:[`item.esValido_DA`]="{ item }">
            <v-chip v-if="item.esValido_DA" color="green"> VALIDADO </v-chip>
            <v-chip v-else color="yellow"> EN ESPERA </v-chip>
          </template>
          <template v-slot:[`item.esValido_DT`]="{ item }">
            <v-chip v-if="item.esValido_DT" color="green"> VALIDADO </v-chip>
            <v-chip v-else color="yellow"> EN ESPERA </v-chip>
          </template>

          <template v-slot:[`item.clave_curso`]="{ item }">
            <v-chip color="blue">
              {{ item.clave_curso }}
            </v-chip>
          </template>
          <template v-slot:top>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialogValidate" persistent max-width="1200px">
              <v-card>
                <v-card-title>
                  <v-btn icon outlined @click="close" class="mr-2">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                  <span class="text-h5" v-if="mode == 1">Editar cédula</span>
                  <span class="text-h5" v-if="mode == 2">Validar cédula</span>
                  <span class="text-h5" v-if="mode == 3">Ver cédula</span>
                </v-card-title>

                <v-card-text>
                  <AddCedulaPreAutCursosModal
                    :id="cedula_id"
                    :mode="mode"
                    @close="close"
                    v-if="dialogValidate"
                  />
                </v-card-text>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogEdit" width="700">
              <v-card class="p-5">
                <v-row justify="center" align="center">
                  <br />
                  <h2 style="color: #2b4c7b">Editar cédula pre-autorización</h2>
                </v-row>
                <v-card-actions>
                  <v-btn
                    outlined
                    color="gray"
                    class="bordeRedondoElement"
                    @click="editCedula(editedItem.id)"
                    >Editar</v-btn
                  >
                  <v-btn
                    outlined
                    color="gray"
                    class="bordeRedondoElement"
                    @click="enviarValidacionCedula(editedItem.id)"
                    >Enviar a validación</v-btn
                  >
                  <v-btn
                    outlined
                    color="gray"
                    class="bordeRedondoElement"
                    @click="dialogEdit = false"
                  >
                    Cancelar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" width="500">
              <v-card>
                <v-card-title class="text-h5 white lighten-2">
                  Eliminar cédula de pre-autorización
                </v-card-title>
                <v-card-text>
                  ¿Estás seguro que quieres eliminar la cédula de
                  pre-autorización seleccionada? Recuerda que no podrás
                  recuperar la información.
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
                    @click="deleteCedula()"
                    >Continuar</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-btn text @click="validateItem(item.id, 3)">
              <v-icon small>mdi-eye-outline</v-icon><small>Ver</small>
            </v-btn>
            <v-btn
              v-if="item.esValido_DA < 1 && item.esValido_DT < 1 && role < 1"
              text
              @click="editItem(item)"
            >
              <v-icon small>mdi-pencil</v-icon><small>Editar</small>
            </v-btn>
            <v-btn
              v-if="item.esValido_DA < 1 && item.esValido_DT < 1 && role < 1"
              text
              @click="deleteItem(item)"
            >
              <v-icon small>mdi-window-close</v-icon><small>Eliminar</small>
            </v-btn>
            <v-btn
              text
              @click="validateItem(item.id, 2)"
              v-if="role == 1 && item.esValido_DT < 1"
            >
              <v-icon small class="mr-2">mdi-check-bold</v-icon>
              <small>Validar</small>
            </v-btn>
            <v-btn
              text
              @click="validateItem(item.id, 2)"
              v-if="role == 2 && item.esValido_DA < 1"
            >
              <v-icon small class="mr-2">mdi-check-bold</v-icon>
              <small>Validar</small>
            </v-btn>
          </template></v-data-table
        >
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import AuthService from "@/services/AuthService.js";
import AddCedulaPreAutCursosModal from "@/components/views/AddCedulaPreAutCursosModal.vue";

export default {
  name: "CedulaCursosRegistradas",

  components: {
    AddCedulaPreAutCursosModal,
  },
  data: () => ({
    valid: false,
    rules: [(v) => !!v || "Campo requerido"],
    search: "",
    nombreCurso: "",
    duracion: "",
    claveCurso: "",
    descripcionCurso: "",
    select: {
      idEspecialidad: 0,
      nombre_especialidad: "",
      clave_especialidad: "",
      campo_formacion: "",
      subsector: "",
      sector: "",
    }, //<-- el seleccionado estará aquí
    items: Array, // <-- La lista de especliades
    datarespuesta: [],
    datarespuestaEdit: [],
    datarespuestaDelete: [],
    dialog: false,
    dialogDelete: false,
    dialogEdit: false,
    dialogValidate: false,
    //Elementos para la tabla
    headers: [
      { text: "Nombre del curso", value: "nombre_curso" },
      {
        text: "Clave del curso",
        align: "start",
        value: "clave_curso",
      },
      { text: "Horas", value: "duracion_horas" },
      { text: "Especialidad", value: "descripcion_curso" },
      { text: "Aprobado D.A.P.", value: "esValido_DA" },
      { text: "Aprobado D.T.", value: "esValido_DT" },
      { text: " ", value: "actions" },
    ],
    cedulas: [],
    editedItem: "",
    selected: [],
    deleteId: 0,
    editedIndex: -1,
    especialidadValid: false,
    editId: 0,
    role: 0, // 0 = ADMINISTRADOR UNIDAD, 1 = DIRECCIÓN TÉCNICA ACADÉMICA, 2 = DEPARTAMENTO DE APOYO ACADÉMICO
    mode: 1,
    cedula_id: null,
  }),

  async mounted() {
    try {
      switch (this.$store.getters.getUser.Rol) {
        case "ADMINISTRADOR UNIDAD":
          this.role = 0;
          break;
        case "DIRECCIÓN TÉCNICA ACADÉMICA":
          this.role = 1;
          break;
        case "DEPARTAMENTO DE APOYO ACADÉMICO":
          this.role = 2;
          break;
      }
      await this.reloadTable();
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    async newForm() {
      try {
        this.$router.push("form-cedula-cursos");
      } catch (error) {
        console.log(error);
      }
    },

    async reloadTable() {
      const response = await AuthService.getAllCedulas();
      this.cedulas = response.data.filter((item) => {
        if (this.role == 1) return item.esValido_DA > 0;
        else return item;
      });
    },

    async editCedula(idCedula) {
      try {
        let data = {
          id: idCedula,
        };
        console.log("dataEdit", data);
        const responseUpdate = await AuthService.updateCedulaPreAutorizacion(
          data
        );
        this.datarespuestaEdit = responseUpdate;
        //Aquí debe mandar a la vista de edición
        if (responseUpdate.serverCode == 200) {
          this.dialogEdit = false;
          //this.mostrarAlertEdit = true;
          this.$swal(
            "Editado",
            "Cédula de pre-autorización editada correctamente.",
            "success"
          );
          this.reloadTable();
        } else {
          console.log(responseUpdate.data.errors);
          let error_msg =
            responseUpdate.data.errors[
              Object.keys(responseUpdate.data.errors)[0]
            ][0];
          this.$swal("Error", error_msg, "error");
        }
        console.log(data);
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

    async enviarValidacionCedula(idCedula) {
      try {
        let data = {
          id: idCedula,
          esValido: true,
        };
        const responseUpdate = await AuthService.updateCedulaPreAutorizacion(
          data
        );
        this.datarespuestaEdit = responseUpdate;
        if (responseUpdate.serverCode == 200) {
          this.dialogEdit = false;
          this.$swal(
            "Editado",
            "Cédula de pre-autorización editada correctamente.",
            "success"
          );
          this.reloadTable();
        } else {
          let error_msg =
            responseUpdate.data.errors[
              Object.keys(responseUpdate.data.errors)[0]
            ][0];
          this.$swal("Error", error_msg, "error");
        }
      } catch (error) {
        let error_msg =
          error.response.data.errors[
            Object.keys(error.response.data.errors)[0]
          ][0];
        this.$swal("Error", error_msg, "error");
      }
    },

    async deleteCedula() {
      try {
        let idDeleteCedula = this.deleteId;
        console.log("confirmDeleteid ", idDeleteCedula);
        const response = await AuthService.deleteCedulaPreAutorizacion(
          idDeleteCedula
        );
        this.datarespuestaDelete = response;
        if (response.serverCode == 200) {
          this.dialogDelete = false;
          //this.mostrarAlertDelete = true;
          this.$swal(
            "Eliminado",
            "Cédula de pre-autorización borrada correctamente.",
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

    verItem(item) {
      this.editedIndex = this.cedulas.indexOf(item);
      console.log("verIndex ", this.editedIndex);
      this.editedItem = Object.assign({}, item);
      console.log("verItem ", this.editedItem);
      this.dialogVer = true;
      console.log("item ver ", item);
      this.editId = this.editedItem.id;
      console.log("verItem.idCedula ", this.editId);
    },
    editItem(item) {
      this.editedIndex = this.cedulas.indexOf(item);
      console.log("editedIndex ", this.editedIndex);
      this.editedItem = Object.assign({}, item);
      console.log("editedItem ", this.editedItem);
      this.dialogEdit = true;
      console.log("item edit ", item);
      this.editId = this.editedItem.id;
      console.log("editedItem.idCedula ", this.editId);
    },
    deleteItem(item) {
      this.editedIndex = this.cedulas.indexOf(item);
      console.log("deleteIndex ", this.editedIndex);
      this.editedItem = Object.assign({}, item);
      console.log("deleteItem ", this.editedItem);
      this.deleteId = this.editedItem.id;
      console.log("editedItem.idCedula ", this.deleteId);
      this.dialogDelete = true;
    },

    validateItem(id, mode) {
      this.mode = mode;
      this.cedula_id = id;
      this.dialogValidate = true;
    },

    close() {
      this.reloadTable();
      this.dialogValidate = false;
    },
  },
};
</script>