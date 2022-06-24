<template>
  <v-container fluid pt-6>
    <v-row justify="center" align="center">
      <h2 style="color: #2b4c7b">Agregar centro de capacitación</h2>
    </v-row>
    <v-row justify="center" align="center" class="pb-3 pt-6 mb-2">
      <v-layout row justify-center>
        <v-flex align-self-center xs2>
          <div class="text-center"><label>Nombre</label></div></v-flex
        >
        <v-flex align-self-center xs1>
          <div class="text-center"><label>Director</label></div>
        </v-flex>
        <v-flex align-self-center xs1>
          <div class="text-center"><label>Teléfono</label></div>
        </v-flex>
        <v-flex align-self-center xs6>
          <div class="text-center"><label>Dirección</label></div>
        </v-flex>
        <v-flex align-self-center xs2>
          <div class="text-center"><label>Tipo</label></div>
        </v-flex>
      </v-layout>
    </v-row>
    <v-row justify="center" align="center" class="pt-3">
      <v-form ref="form">
        <v-layout row justify-center>
          <v-flex align-self-center xs2>
            <v-text-field
              dense
              outlined
              class="bordeRedondoElement"
              :rules="rules"
              v-model="nombreCentro"
            ></v-text-field>
          </v-flex>
          <v-flex align-self-center xs1>
            <v-text-field
              dense
              outlined
              class="bordeRedondoElement"
              :rules="rules"
              v-model="directorCentro"
            ></v-text-field>
          </v-flex>
          <v-flex align-self-center xs1>
            <v-text-field
              dense
              outlined
              class="bordeRedondoElement"
              :rules="rules"
              v-model="telefonoCentro"
            ></v-text-field>
          </v-flex>
          <v-flex align-self-center xs6>
            <v-text-field
              dense
              outlined
              class="bordeRedondoElement"
              :rules="rules"
              v-model="direccionCentro"
            ></v-text-field>
          </v-flex>
          <v-flex align-self-center xs2>
            <v-text-field
              dense
              outlined
              class="bordeRedondoElement"
              :rules="rules"
              v-model="tipoCentro"
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-form>
    </v-row>
    <v-row justify="center" align="center" style="height: 30px">
      <v-layout row justify-start>
        <v-flex align-self-center xs10> </v-flex>
        <v-flex align-self-start xs1>
          <v-btn outlined color="gray" @click="clean">Borrar</v-btn>
        </v-flex>
        <v-flex align-self-center xs1>
          <template>
            <div class="text-center">
              <v-dialog v-model="dialog" width="500">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn outlined color="gray" v-bind="attrs" v-on="on">
                    Agregar
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title class="text-h5 white lighten-2">
                    ¡ATENCIÓN!
                  </v-card-title>
                  <v-card-text>
                    SI TODOS LOS DATOS SON CORRECTOS DA CLICK EN CONTINUAR
                  </v-card-text>
                  <v-card-actions>
                    <v-btn outlined color="gray" @click="dialog = false">
                      Cancelar
                    </v-btn>
                    <v-btn
                      outlined
                      style="color: #ffffff; background-color: #2b4c7b"
                      @click="createCenter"
                      >Continuar</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </template>
        </v-flex>
      </v-layout>
    </v-row>
    <v-row justify="center" align="start" style="height: 80px">
      <div>
        <v-layout row justify-center>
          <v-flex align-self-baseline xs2></v-flex>
          <v-flex align-self-center xs5></v-flex>
          <v-flex align-self-center xs5>
            <v-alert type="success" v-if="mostrarAlert">{{
              datarespuesta.mensaje
            }}</v-alert>
          </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row>
      <h2 style="color: #2b4c7b">Centros registrados</h2>
      <v-data-table
        :headers="headers"
        :items="centros"
        item-key="nombre"
        class="elevation-1"
      >
        <template v-slot:[`item.director`]="{ item }">
          <v-chip color="yellow">
            {{ item.director }}
          </v-chip>
        </template>
        <template v-slot:[`item.telefono`]="{ item }">
          <v-chip color="blue">
            {{ item.telefono }}
          </v-chip>
        </template>
        <template v-slot:[`item.direccion`]="{ item }">
          <v-chip color="orange">
            {{ item.direccion }}
          </v-chip>
        </template>
        <template v-slot:top>
          <v-toolbar flat>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialogEdit" width="700">
              <v-card class="p-5">
                <v-row justify="center" align="center">
                  <br />
                  <h2 style="color: #2b4c7b">Editar centro de capacitación</h2>
                </v-row>
                <v-row justify="center" align="center" style="height: 70px">
                  <div>
                    <v-layout row justify-center>
                      <br />
                      <p></p>
                      <v-flex align-self-baseline xs4
                        ><label> Nombre</label></v-flex
                      >
                      <v-flex align-self-baseline xs7>
                        <v-text-field
                          dense
                          outlined
                          class="bordeRedondoElement"
                          v-model="editedItem.nombre"
                        ></v-text-field>
                      </v-flex>
                      <v-flex align-self-baseline xs1></v-flex>
                    </v-layout>
                  </div>
                </v-row>
                <v-row justify="center" align="center" style="height: 70px">
                  <div>
                    <v-layout row justify-center>
                      <br />
                      <p></p>
                      <v-flex align-self-baseline xs4
                        ><label>Director</label></v-flex
                      >
                      <v-flex align-self-center xs7>
                        <v-text-field
                          dense
                          outlined
                          class="bordeRedondoElement"
                          v-model="editedItem.director"
                        ></v-text-field>
                      </v-flex>
                      <v-flex align-self-center xs1> </v-flex>
                    </v-layout>
                  </div>
                </v-row>
                <v-row justify="center" align="center" style="height: 70px">
                  <div>
                    <v-layout row justify-center>
                      <br />
                      <p></p>
                      <v-flex align-self-baseline xs4
                        ><label>Teléfono</label></v-flex
                      >
                      <v-flex align-self-center xs7>
                        <v-text-field
                          dense
                          outlined
                          class="bordeRedondoElement"
                          v-model="editedItem.telefono"
                        ></v-text-field>
                      </v-flex>
                      <v-flex align-self-center xs1> </v-flex>
                    </v-layout>
                  </div>
                </v-row>
                <v-row justify="center" align="center" style="height: 70px">
                  <div>
                    <v-layout row justify-center>
                      <br />
                      <p></p>
                      <v-flex align-self-baseline xs4
                        ><label>Dirección</label></v-flex
                      >
                      <v-flex align-self-center xs7>
                        <v-text-field
                          dense
                          outlined
                          class="bordeRedondoElement"
                          v-model="editedItem.direccion"
                        ></v-text-field>
                      </v-flex>
                      <v-flex align-self-center xs1> </v-flex>
                    </v-layout>
                  </div>
                </v-row>
                <v-row justify="center" align="center" style="height: 70px">
                  <div>
                    <v-layout row justify-center>
                      <v-flex align-self-baseline xs4
                        ><label>Tipo</label></v-flex
                      >
                      <v-flex align-self-center xs7>
                        <v-text-field
                          dense
                          outlined
                          class="bordeRedondoElement"
                          v-model="editedItem.tipo"
                        ></v-text-field>
                      </v-flex>
                      <v-flex align-self-center xs1> </v-flex>
                    </v-layout>
                  </div>
                </v-row>
                <v-card-actions>
                  <v-btn
                    outlined
                    color="gray"
                    class="bordeRedondoElement"
                    @click="
                      editCenter(
                        editedItem.nombre,
                        editedItem.director,
                        editedItem.telefono,
                        editedItem.direccion,
                        editedItem.tipo
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
                  Eliminar centro de capacitación
                </v-card-title>
                <v-card-text>
                  ¿Estás seguro que quieres eliminar el centro seleccionado?
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
                    @click="deleteCenter()"
                    >Continuar</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar> </template
        ><template v-slot:[`item.actions`]="{ item }">
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
    <v-row justify="center" align="start" style="height: 80px">
      <div>
        <v-layout row justify-center>
          <v-flex align-self-baseline xs2></v-flex>
          <v-flex align-self-center xs5></v-flex>
          <v-flex align-self-center xs5>
            <v-alert type="success" v-if="mostrarAlertDelete">{{
              datarespuestaDelete.mensaje
            }}</v-alert>
          </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="start" style="height: 80px">
      <div>
        <v-layout row justify-center>
          <v-flex align-self-baseline xs2></v-flex>
          <v-flex align-self-center xs5></v-flex>
          <v-flex align-self-center xs5>
            <v-alert type="success" v-if="mostrarAlertEdit">{{
              datarespuestaEdit.mensaje
            }}</v-alert>
          </v-flex>
        </v-layout>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import AuthService from "@/services/AuthService.js";

export default {
  name: "CentrosCapacitacion",

  data: () => ({
    valid: false,
    rules: [(v) => !!v || "Required"],
    nombreCentro: "",
    directorCentro: "",
    telefonoCentro: "",
    direccionCentro: "",
    tipoCentro: "",
    items: Array, // <-- La lista de especliades
    mostrarAlert: false,
    mostrarAlertEdit: false,
    mostrarAlertDelete: false,
    datarespuesta: [],
    datarespuestaEdit: [],
    datarespuestaDelete: [],
    dialog: false,
    dialogDelete: false,
    dialogEdit: false,
    //Elementos para la tabla
    headers: [
      {
        text: "Nombre del centro de capacitación",
        align: "start",
        sortable: false,
        value: "nombre",
      },
      { text: "Director", value: "director" },
      { text: "Teléfono", value: "telefono" },
      { text: "Dirección", value: "direccion" },
      { text: "Tipo", value: "tipo" },
      { text: " ", value: "actions" },
    ],
    centros: [],
    editedItem: "",
    selected: [],
    deleteId: 0,
    editedIndex: -1,
    idCenterEdit: 0,
  }),

  async mounted() {
    try {
      const listespecialidades = await AuthService.getEspecialidades();
      this.items = listespecialidades.especialidades;
      const listCenters = await AuthService.getAllCenters();
      this.centros = listCenters.data;
      console.log("centros", this.centros);
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    async createCenter() {
      try {
        let data = {
          nombre: this.nombreCentro,
          director: this.directorCentro,
          telefono: this.telefonoCentro,
          direccion: this.direccionCentro,
          tipo: this.tipoCentro,
        };
        console.log("addCenterdata ", data);
        if (!this.$refs.form.validate()) {
          this.$swal("Advertencia", "Complete todos los campos", "warning");
        } else {
          const response = await AuthService.addCenter(data);
          this.datarespuesta = response;
          if (response.serverCode == 200) {
            this.dialog = false;
            //this.mostrarAlert = true;
            this.$swal(
              "Registrado",
              "Centro de capacitación registrado correctamente.",
              "success"
            );
            this.reloadTable();
          } else {
            this.$swal("Error", response.message, "error");
          }
        }
      } catch (error) {
        this.dialog = false;
        console.log(error);
        console.log(error.response.data.errors);
        let error_msg =
          error.response.data.errors[
            Object.keys(error.response.data.errors)[0]
          ][0];
        this.$swal("Error", error_msg, "error");
      }
    },

    async reloadTable() {
      const listCenters = await AuthService.getAllCenters();
      this.centros = listCenters.data;
      console.log("centros", this.centros);
    },

    async clean() {
      try {
        this.$refs.form.reset();
        this.mostrarAlert = false;
      } catch (error) {
        console.log(error);
      }
    },

    async editCenter(
      nombreEdit,
      directorEdit,
      telefonoEdit,
      direccionEdit,
      tipoEdit
    ) {
      try {
        let data = {
          id: this.idCenterEdit,
          nombre: nombreEdit,
          director: directorEdit,
          telefono: telefonoEdit,
          direccion: direccionEdit,
          tipo: tipoEdit,
        };
        console.log(data);
        const responseUpdate = await AuthService.updateCenter(data);
        this.datarespuestaEdit = responseUpdate;
        if (responseUpdate.serverCode == 200) {
          this.dialogEdit = false;
          //this.mostrarAlertEdit = true;
          this.$swal(
            "Editado",
            "Centro de capacitación editado correctamente.",
            "success"
          );
          this.reloadTable();
        } else {
          this.$swal("Error", responseUpdate.message, "error");
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

    async deleteCenter() {
      try {
        let idDeleteCenter = this.deleteId;
        console.log("confirmDeleteidCenter ", idDeleteCenter);
        const response = await AuthService.deleteCenter(idDeleteCenter);
        this.datarespuestaDelete = response;
        if (response.serverCode == 200) {
          this.dialogDelete = false;
          //this.mostrarAlertDelete = true;
          this.$swal(
            "Eliminado",
            "Centro de capacitación borrado correctamente.",
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

    editItem(item) {
      this.editedIndex = this.centros.indexOf(item);
      console.log("editedIndex ", this.editedIndex);
      this.editedItem = Object.assign({}, item);
      console.log("editedItem ", this.editedItem);
      this.dialogEdit = true;
      console.log("item edit ", item);
      this.idCenterEdit = this.editedItem.id;
      console.log("idCenterEdit ", this.idCenterEdit);
    },
    deleteItem(item) {
      this.editedIndex = this.centros.indexOf(item);
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
