<template>
  <v-container fluid pt-6>
    <v-row justify="center" align="center">
      <h2 style="color: #2b4c7b">Formatos de pago registrados</h2>
    </v-row>
    <v-row justify="center" align="center" style="height: 70px">
      <v-layout row justify-start>
        <v-flex align-self-center xs10> </v-flex>
        <v-flex align-self-start xs1> </v-flex>
        <v-flex align-self-center xs1>
          <v-btn outlined color="gray" @click="newForm">Crear Nuevo</v-btn>
        </v-flex>
      </v-layout>
    </v-row>
    <v-row>
      <v-data-table
        :headers="headers"
        :items="formatos_pago"
        item-key="nombre_curso"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-divider class="mx-6" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialogVer" width="1200">
              <v-card class="p-5">
                <v-row justify="center" align="center">
                  <br />
                  <h2 style="color: #2b4c7b">Formato de pago</h2>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>CURSO SOLICITADO</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-select
                          v-model="editedItem.nombre_curso"
                          item-value="editedItem.nombre_curso"
                          item-text="editedItem.nombre_curso"
                          dense
                          outlined
                          class="bordeRedondoElement"
                          label="Nombre del curso"
                          disabled
                        ></v-select>
                      </v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>VOUCHER</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-file-input
                          label="Fotografía voucher"
                          outlined
                          dense
                          show-size
                          accept="image/png, image/jpeg, image/bmp, application/pdf, image/jpg"
                          ref="editedItem.path"
                          v-model="editedItem.path"
                          disabled
                        ></v-file-input>
                      </v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-card-actions>
                  <v-btn
                    outlined
                    color="gray"
                    class="bordeRedondoElement"
                    @click="dialogVer = false"
                  >
                    Regresar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogEdit" width="1200">
              <v-card class="p-5">
                <v-row justify="center" align="center">
                  <br />
                  <h2 style="color: #2b4c7b">Editar formato de pago</h2>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>CURSO SOLICITADO</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-select
                          v-model="editedItem.nombre_curso"
                          required
                          return-object
                          dense
                          outlined
                          class="bordeRedondoElement"
                          label="Nombre del curso"
                        ></v-select>
                      </v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>VOUCHER</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-file-input
                          label="Fotografía voucher"
                          outlined
                          dense
                          show-size
                          accept="image/png, image/jpeg, image/bmp, application/pdf, image/jpg"
                          :rules="[rules.required, rules.size]"
                          ref="path"
                          v-model="editedItem.path"
                        ></v-file-input>
                      </v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-card-actions>
                  <v-btn
                    outlined
                    color="gray"
                    class="bordeRedondoElement"
                    @click="
                      editPayment(
                        editedItem.idCurso,
                        editedItem.path,
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
                  Eliminar formato de pago
                </v-card-title>
                <v-card-text>
                  ¿Estás seguro que quieres eliminar el formato de pago seleccionado? Recuerda que no podrás recuperar la
                  información.
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
                    @click="deletePayment()"
                    >Continuar</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-btn text @click="verItem(item)"
            ><v-icon small>mdi-eye-outline</v-icon><small>Ver</small></v-btn
          >
          <v-btn text @click="editItem(item)"
            ><v-icon small>mdi-pencil</v-icon><small>Editar</small></v-btn
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
    valid: false,
    rules: {
      required: (v) => !!v || "Campo requerido",
      size: (v) =>
        !v || v.size < 1000000 || "El archivo debe pesar menos de 1 MB!",
    },
    datarespuesta: [],
    datarespuestaEdit: [],
    datarespuestaDelete: [],
    dialog: false,
    dialogDelete: false,
    dialogEdit: false,
    dialogVer: false,
    //Elementos para la tabla
    headers: [
      {
        text: "Nombre del curso",
        align: "start",
        sortable: false,
        value: "nombre_curso",
      },
      { text: "Duración de horas", value: "duracion_horas" },
      { text: "Clave del curso", value: "clave_curso" },
      { text: "Descripción", value: "descripcion_curso" },
      { text: "Pagado", value: "pagado" },
      { text: "Imagen voucher", value: "path" },
      { text: " ", value: "actions" },
    ],
    formatos_pago: [],
    editedItem: "",
    deleteId: 0,
    editedIndex: -1,
    editId: 0,
  }),

  async mounted() {
    try {
      const response = await AuthService.getAllPayment();
      this.formatos_pago = response.data;
      console.log("formatos_pago", this.formatos_pago);
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    async reloadTable() {
      const response = await AuthService.getAllPayment();
      this.formatos_pago = response.data;
      console.log("formatos_pago", this.formatos_pago);
    },

    async newForm() {
      try {
        this.$router.push("form-formato-pago");
      } catch (error) {
        console.log(error);
      }
    },

    async editPayment(
      idCursoEdit,
      voucherEdit
    ) {
      try {
        let data = {
          idCurso: idCursoEdit,
          voucher: voucherEdit,
        };
        console.log("dataEdit", data);
        const responseUpdate = await AuthService.updatePayment(
          data
        );
        this.datarespuestaEdit = responseUpdate;
        if (responseUpdate.serverCode == 200) {
          this.dialogEdit = false;
          //this.mostrarAlertEdit = true;
          this.$swal(
            "Editado",
            "Formato de pago editado correctamente.",
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

    async deletePayment() {
      try {
        let idDeletePayment = this.deleteId;
        console.log("confirmDeleteid ", idDeletePayment);
        const response = await AuthService.deletePayment(
          idDeletePayment
        );
        this.datarespuestaDelete = response;
        if (response.serverCode == 200) {
          this.dialogDelete = false;
          //this.mostrarAlertDelete = true;
          this.$swal(
            "Eliminado",
            "Formato de pago eliminado correctamente.",
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
      this.editedIndex = this.formatos_pago.indexOf(item);
      console.log("verIndex ", this.editedIndex);
      this.editedItem = Object.assign({}, item);
      console.log("verItem ", this.editedItem);
      this.dialogVer = true;
      console.log("item ver ", item);
      this.editId = this.editedItem.idPago;
      console.log("verItem.idPago ", this.editId);
    },
    editItem(item) {
      this.editedIndex = this.formatos_pago.indexOf(item);
      console.log("editedIndex ", this.editedIndex);
      this.editedItem = Object.assign({}, item);
      console.log("editedItem ", this.editedItem);
      this.dialogEdit = true;
      console.log("item edit ", item);
      this.editId = this.editedItem.idPago;
      console.log("editedItem.idPago ", this.editId);
    },
    deleteItem(item) {
      this.editedIndex = this.formatos_pago.indexOf(item);
      console.log("deleteIndex ", this.editedIndex);
      this.editedItem = Object.assign({}, item);
      console.log("deleteItem ", this.editedItem);
      this.deleteId = this.editedItem.idPago;
      console.log("deletedItem.idPago ", this.deleteId);
      this.dialogDelete = true;
    },
  },
};
</script>
