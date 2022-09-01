<template>
  <v-container fluid pt-6>
    <v-row justify="center" align="center">
      <h2 style="color: #2b4c7b">Agregar especialidad</h2>
    </v-row>
    <v-row justify="center" align="center" class="pb-3 pt-6 mb-2">
      <v-layout row justify-center>
        <v-flex align-self-center xs3>
          <div class="text-center">
            <label>Nombre especialidad</label>
          </div></v-flex
        >
        <v-flex align-self-center xs2>
          <div class="text-center"><label>Clave especialidad</label></div>
        </v-flex>
        <v-flex align-self-center xs2>
          <div class="text-center"><label>Campo formación</label></div>
        </v-flex>
        <v-flex align-self-center xs3>
          <div class="text-center"><label>Subsector</label></div>
        </v-flex>
        <v-flex align-self-center xs2>
          <div class="text-center"><label>Sector</label></div>
        </v-flex>
      </v-layout>
    </v-row>
    <v-row justify="center" align="center" class="pt-3">
      <v-form ref="form">
        <v-layout row justify-center>
          <v-flex align-self-center xs3>
            <v-text-field
              dense
              outlined
              class="bordeRedondoElement"
              :rules="rules"
              v-model="nombreEspecialidad"
            ></v-text-field>
          </v-flex>
          <v-flex align-self-center xs2>
            <v-text-field
              dense
              outlined
              class="bordeRedondoElement"
              :rules="rules"
              v-model="claveEspecialidad"
            ></v-text-field>
          </v-flex>
          <v-flex align-self-center xs2>
            <v-text-field
              dense
              outlined
              class="bordeRedondoElement"
              :rules="rules"
              v-model="campoFormacion"
            ></v-text-field>
          </v-flex>
          <v-flex align-self-center xs3>
            <v-text-field
              dense
              outlined
              class="bordeRedondoElement"
              :rules="rules"
              v-model="subsectorEspecialidad"
            ></v-text-field>
          </v-flex>
          <v-flex align-self-center xs2>
            <v-text-field
              dense
              outlined
              class="bordeRedondoElement"
              :rules="rules"
              v-model="sectorEspecialidad"
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
                  <v-btn color="orange" v-bind="attrs" v-on="on">
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
                      @click="createEspecialidad"
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
      <h2 style="color: #2b4c7b">Especialidades registradas</h2>
      <v-data-table
        :headers="headers"
        :items="especialidades"
        item-key="nombre"
        class="elevation-1"
      >
        <template v-slot:[`item.clave_especialidad`]="{ item }">
          <v-chip color="yellow">
            {{ item.clave_especialidad }}
          </v-chip>
        </template>
        <template v-slot:[`item.campo_formacion`]="{ item }">
          <v-chip color="blue">
            {{ item.campo_formacion }}
          </v-chip>
        </template>
        <template v-slot:[`item.subsector`]="{ item }">
          <v-chip color="orange">
            {{ item.subsector }}
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
                  <h2 style="color: #2b4c7b">Editar especialidad</h2>
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
                          v-model="editedItem.nombre_especialidad"
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
                        ><label>Clave especialidad</label></v-flex
                      >
                      <v-flex align-self-center xs7>
                        <v-text-field
                          dense
                          outlined
                          class="bordeRedondoElement"
                          v-model="editedItem.clave_especialidad"
                          disabled
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
                        ><label>Campo Formación</label></v-flex
                      >
                      <v-flex align-self-center xs7>
                        <v-text-field
                          dense
                          outlined
                          class="bordeRedondoElement"
                          v-model="editedItem.campo_formacion"
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
                        ><label>Subsector</label></v-flex
                      >
                      <v-flex align-self-center xs7>
                        <v-text-field
                          dense
                          outlined
                          class="bordeRedondoElement"
                          v-model="editedItem.subsector"
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
                        ><label>Sector</label></v-flex
                      >
                      <v-flex align-self-center xs7>
                        <v-text-field
                          dense
                          outlined
                          class="bordeRedondoElement"
                          v-model="editedItem.sector"
                        ></v-text-field>
                      </v-flex>
                      <v-flex align-self-center xs1> </v-flex>
                    </v-layout>
                  </div>
                </v-row>
                <v-card-actions>
                  <v-btn
                    color="orange"
                    class="bordeRedondoElement"
                    @click="
                      editEspecialidad(
                        editedItem.nombre_especialidad,
                        editedItem.clave_especialidad,
                        editedItem.campo_formacion,
                        editedItem.subsector,
                        editedItem.sector
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
                  Eliminar especialidad
                </v-card-title>
                <v-card-text>
                  ¿Estás seguro que quieres eliminar la especilidad
                  seleccionada? Recuerda que no podrás recuperar la información.
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
                    @click="deleteEspecialidad()"
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
  name: "AddEspecialidad",

  data: () => ({
    valid: false,
    rules: [(v) => !!v || "Required"],
    nombreEspecialidad: "",
    claveEspecialidad: "",
    campoFormacion: "",
    subsectorEspecialidad: "",
    sectorEspecialidad: "",
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
        text: "Nombre de la especialidad",
        align: "start",
        sortable: false,
        value: "nombre_especialidad",
      },
      { text: "Clave especialidad", value: "clave_especialidad" },
      { text: "Campo de formación", value: "campo_formacion" },
      { text: "Subsector", value: "subsector" },
      { text: "Sector", value: "sector" },
      { text: " ", value: "actions" },
    ],
    especialidades: [],
    editedItem: "",
    selected: [],
    deleteId: 0,
    editedIndex: -1,
    idEspecialidadEdit: 0,
  }),

  async mounted() {
    try {
      const listespecialidades = await AuthService.getEspecialidades();
      this.especialidades = listespecialidades.especialidades;
      console.log("especialidades", this.especialidades);
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    async createEspecialidad() {
      try {
        let data = {
          nombre_especialidad: this.nombreEspecialidad,
          clave_especialidad: this.claveEspecialidad,
          campo_formacion: this.campoFormacion,
          subsector: this.subsectorEspecialidad,
          sector: this.sectorEspecialidad,
        };
        console.log("addEspecialidaddata ", data);
        if (!this.$refs.form.validate()) {
          this.$swal("Advertencia", "Complete todos los campos", "warning");
        } else {
          const response = await AuthService.addEspecialidad(data);
          this.datarespuesta = response;
          if (response.serverCode == 200) {
            this.dialog = false;
            //this.mostrarAlert = true;
            this.$swal(
              "Registrado",
              "Especialidad registrada correctamente.",
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
      const listespecialidades = await AuthService.getEspecialidades();
      this.especialidades = listespecialidades.especialidades;
      console.log("especialidades", this.especialidades);
    },

    async clean() {
      try {
        this.$refs.form.reset();
        this.mostrarAlert = false;
      } catch (error) {
        console.log(error);
      }
    },

    async editEspecialidad(
      nombreEdit,
      claveEdit,
      campoEdit,
      subsectorEdit,
      sectorEdit
    ) {
      try {
        let data = {
          id: this.idEspecialidadEdit,
          nombre_especialidad: nombreEdit,
          clave_especialidad: claveEdit,
          campo_formacion: campoEdit,
          subsector: subsectorEdit,
          sector: sectorEdit,
        };
        console.log(data);
        const responseUpdate = await AuthService.updateEspecialidad(data);
        this.datarespuestaEdit = responseUpdate;
        if (responseUpdate.serverCode == 200) {
          this.dialogEdit = false;
          //this.mostrarAlertEdit = true;
          this.$swal(
            "Editado",
            "Especialidad editada correctamente.",
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

    async deleteEspecialidad() {
      try {
        let idDeleteEspecialidad = this.deleteId;
        console.log("confirmDeleteidEspecialidad ", idDeleteEspecialidad);
        const response = await AuthService.deleteEspecialidad(idDeleteEspecialidad);
        this.datarespuestaDelete = response;
        if (response.serverCode == 200) {
          this.dialogDelete = false;
          //this.mostrarAlertDelete = true;
          this.$swal(
            "Eliminado",
            "Especialidad borrada correctamente.",
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
      this.editedIndex = this.especialidades.indexOf(item);
      console.log("editedIndex ", this.editedIndex);
      this.editedItem = Object.assign({}, item);
      console.log("editedItem ", this.editedItem);
      this.dialogEdit = true;
      console.log("item edit ", item);
      this.idEspecialidadEdit = this.editedItem.idEspecialidad;
      console.log("idEspecialidadEdit ", this.idCenterEdit);
    },
    deleteItem(item) {
      this.editedIndex = this.especialidades.indexOf(item);
      console.log("deleteIndex ", this.editedIndex);
      this.editedItem = Object.assign({}, item);
      console.log("deleteItem ", this.editedItem);
      this.deleteId = this.editedItem.idEspecialidad;
      console.log("editedItem.idEspecialidad ", this.deleteId);
      this.dialogDelete = true;
    },
  },
};
</script>
