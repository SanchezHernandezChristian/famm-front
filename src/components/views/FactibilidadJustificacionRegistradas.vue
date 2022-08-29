<template>
  <v-container class="max-height" fluid pt-6>
    <v-row justify="center" align="center">
      <h2 style="color: #2b4c7b">Factibilidades y justificaciones de cursos registrados</h2>
    </v-row>
    <v-row justify="center" align="center" style="height: 70px">
      <v-layout row justify-start>
        <v-flex align-self-center xs10> </v-flex>
        <v-flex align-self-start xs1> </v-flex>
        <v-flex align-self-center xs1>
          <v-btn color="orange" @click="newForm">Crear Nuevo</v-btn>
        </v-flex>
      </v-layout>
    </v-row>
    <v-row>
      <v-data-table
        :headers="headers"
        :items="participantes"
        item-key="nombre_curso"
        class="elevation-1"
      >
        <template v-slot:[`item.nombres`]="{ item }">
          <v-chip color="yellow">
            {{ item.nombres }}
          </v-chip>
        </template>
        <template v-slot:[`item.apellido_paterno`]="{ item }">
          <v-chip color="blue">
            {{ item.apellido_paterno }}
          </v-chip>
        </template>
        <template v-slot:[`item.apellido_materno`]="{ item }">
          <v-chip color="orange">
            {{ item.apellido_materno }}
          </v-chip>
        </template>
        <template v-slot:top>
          <v-toolbar flat>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialogEdit" width="1200">
              <v-card class="p-5">
                <v-row justify="center" align="center">
                  <br />
                  <h2 style="color: #2b4c7b">Editar relación participante</h2>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs1> </v-flex>
                    <v-flex align-self-baseline xs2
                      ><label>APELLIDO PATERNO</label></v-flex
                    >
                    <v-flex align-self-baseline xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          v-model="editedItem.apellido_paterno"
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-baseline xs2
                      ><label>APELLIDO MATERNO</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          v-model="editedItem.apellido_materno"
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs1> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs1> </v-flex>
                    <v-flex align-self-baseline xs2
                      ><label>NOMBRE</label></v-flex
                    >
                    <v-flex align-self-baseline xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          v-model="editedItem.nombres"
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-baseline xs2><label>SEXO</label></v-flex>
                    <v-flex align-self-center xs3>
                      <v-radio-group
                        row
                        :rules="rules"
                        v-model="editedItem.sexo"
                      >
                        <v-radio label="MASCULINO" value="M"></v-radio>
                        <v-radio label="FEMENINO" value="F"></v-radio>
                      </v-radio-group>
                    </v-flex>
                    <v-flex align-self-center xs1> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs1> </v-flex>
                    <v-flex align-self-baseline xs2
                      ><label>TELÉFONO</label></v-flex
                    >
                    <v-flex align-self-baseline xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          v-model="editedItem.telefono"
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-baseline xs2
                      ><label>CELULAR</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          v-model="editedItem.celular"
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs1> </v-flex>
                  </v-layout>
                </v-row>
                <v-card-actions>
                  <v-btn
                    outlined
                    color="gray"
                    class="bordeRedondoElement"
                    @click="
                      editFactibilidad(
                        editedItem.nombres,
                        editedItem.apellido_paterno,
                        editedItem.apellido_materno,
                        editedItem.sexo,
                        editedItem.telefono,
                        editedItem.celular
                      )
                    "
                    >Guardar cambios</v-btn
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
                  Eliminar factibilidad y justificación de cursos
                </v-card-title>
                <v-card-text>
                  ¿Estás seguro que quieres eliminar la factibilidad y justificación del curso seleccionado?
                  Recuerda que no podrás recuperar la información.
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
                    @click="deleteFactibilidad()"
                    >Continuar</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <!-- <v-btn text @click="editItem(item)"
            ><v-icon small>mdi-pencil</v-icon><small>Editar</small></v-btn
          > -->
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
  name: "FactibilidadJustificacionRegistradas",

  data: () => ({
    valid: false,
    rules: [(v) => !!v || "Campo requerido"],
    datarespuesta: [],
    datarespuestaEdit: [],
    datarespuestaDelete: [],
    dialog: false,
    dialogDelete: false,
    dialogEdit: false,
    //Elementos para la tabla
    headers: [
      {
        text: "Nombre del participante",
        align: "start",
        sortable: false,
        value: "nombres",
      },
      { text: "Apellido Paterno", value: "apellido_paterno" },
      { text: "Apellido Materno", value: "apellido_materno" },
      { text: "Sexo", value: "sexo" },
      { text: "Teléfono", value: "telefono" },
      { text: "Celular", value: "celular" },
      { text: " ", value: "actions" },
    ],
    factibilidades: [],
    editedItem: "",
    deleteId: 0,
    editedIndex: -1,
    editId: 0,
  }),

  async mounted() {
    try {
      const response = await AuthService.getAllFactibilidades();
      this.factibilidades = response.data;
      console.log("factibilidades", this.factibilidades);
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    async reloadTable() {
      const response = await AuthService.getAllFactibilidades();
      this.factibilidades = response.data;
      console.log("factibilidades", this.factibilidades);
    },

    async newForm() {
      try {
        this.$router.push('form-factibilidad-justificacion');
      } catch (error) {
        console.log(error);
      }
    },

    async editFactibilidad(
      nombresEdit,
      apaternoEdit,
      amaternoEdit,
      sexoEdit,
      telEdit,
      celEdit
    ) {
      try {
        let data = {
          id: this.editId,
          nombres: nombresEdit,
          apellido_paterno: apaternoEdit,
          apellido_materno: amaternoEdit,
          sexo: sexoEdit,
          telefono: telEdit,
          celular: celEdit,
        };
        console.log("dataEdit", data);
        const responseUpdate = await AuthService.updateFactibilidadJustificacion(
          data
        );
        this.datarespuestaEdit = responseUpdate;
        if (responseUpdate.serverCode == 200) {
          this.dialogEdit = false;
          //this.mostrarAlertEdit = true;
          this.$swal(
            "Editado",
            "Factibilidad y justificación del curso editada correctamente.",
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

    async deleteFactibilidad() {
      try {
        let idDeleteFactibilidad = this.deleteId;
        console.log("confirmDeleteid ", idDeleteFactibilidad);
        const response = await AuthService.deleteFactibilidadJustificacion(idDeleteFactibilidad);
        this.datarespuestaDelete = response;
        if (response.serverCode == 200) {
          this.dialogDelete = false;
          //this.mostrarAlertDelete = true;
          this.$swal("Eliminado", "Factibilidad y justificación del curso eliminada correctamente.", "success");
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

    editItem(item) {
      this.editedIndex = this.participantes.indexOf(item);
      console.log("editedIndex ", this.editedIndex);
      this.editedItem = Object.assign({}, item);
      console.log("editedItem ", this.editedItem);
      this.dialogEdit = true;
      console.log("item edit ", item);
      this.editId = this.editedItem.idFactibilidad;
      console.log("editedItem.idFactibilidad ", this.editId);
    },
    deleteItem(item) {
      this.editedIndex = this.participantes.indexOf(item);
      console.log("deleteIndex ", this.editedIndex);
      this.editedItem = Object.assign({}, item);
      console.log("deleteItem ", this.editedItem);
      this.deleteId = this.editedItem.idFactibilidad;
      console.log("editedItem.idFactibilidad ", this.deleteId);
      this.dialogDelete = true;
    },
  },
};
</script>
