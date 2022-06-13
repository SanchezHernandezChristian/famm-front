<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <br />
      <p></p>
      <h2 style="color: #2b4c7b">Centros de capacitación</h2>
    </v-row>
    <v-row justify="center" align="center" style="height: 70px">
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
    <v-row justify="center" align="center" style="height: 50px">
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
          <v-btn
            outlined
            color="gray"
            class="bordeRedondoElement"
            @click="clean"
            >Borrar</v-btn
          >
        </v-flex>
        <v-flex align-self-center xs1>
          <template>
            <div class="text-center">
              <v-dialog v-model="dialog" width="500">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    outlined
                    color="gray"
                    class="bordeRedondoElement"
                    v-bind="attrs"
                    v-on="on"
                  >
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
                    <v-btn
                      outlined
                      color="gray"
                      class="bordeRedondoElement"
                      @click="dialog = false"
                    >
                      Cancelar
                    </v-btn>
                    <v-btn
                      outlined
                      style="color: #ffffff; background-color: #2b4c7b"
                      class="bordeRedondoElement"
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
    <v-row justify="center" align="center" style="height: 50px">
      <br />
    </v-row>
    <v-row justify="center" align="start" style="height: 80px">
      <div>
        <v-layout row justify-center>
          <v-flex align-self-baseline xs2></v-flex>
          <v-flex align-self-center xs5>
            <v-alert type="warning" v-if="mostrarAlertError">{{
              datarespuesta.message
            }}</v-alert></v-flex
          >
          <v-flex align-self-center xs5>
            <v-alert type="success" v-if="mostrarAlert">{{
              datarespuesta.mensaje
            }}</v-alert>
          </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row>
      <template>
        <v-data-table
          dense
          :headers="headers"
          :items="desserts"
          item-key="nombre_curso"
          class="elevation-1"
          ><template v-slot:[`item.actions`]="{ item }">
            <!-- <v-btn @click="asignarCurso()">Asignar</v-btn> -->
            <div class="text-center">
              <v-dialog v-model="dialogEdit" width="500">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn text v-bind="attrs" v-on="on"
                    ><v-icon small>mdi-pencil</v-icon
                    ><small>Editar</small></v-btn
                  >
                </template>
                <v-card>
                  <v-row justify="center" align="center">
                    <br />
                    <p></p>
                    <h2 style="color: #2b4c7b">Editar curso</h2>
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
                            v-model="item.nombre"
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
                            v-model="item.director"
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
                            disabled
                            v-model="item.telefono"
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
                            disabled
                            v-model="item.direccion"
                          ></v-text-field>
                        </v-flex>
                        <v-flex align-self-center xs1> </v-flex>
                      </v-layout>
                    </div>
                  </v-row>
                  <v-row justify="center" align="center">
                    <div>
                      <v-layout row justify-center>
                        <v-flex align-self-baseline xs4
                          ><label>Tipo</label></v-flex
                        >
                        <v-flex align-self-center xs7>
                          <v-textarea
                            outlined
                            name="input-7-4"
                            label=""
                            v-model="item.tipo"
                          ></v-textarea>
                        </v-flex>
                        <v-flex align-self-center xs1> </v-flex>
                      </v-layout>
                    </div>
                  </v-row>
                  <v-card-actions>
                    <v-btn outlined color="gray" class="bordeRedondoElement"
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
            </div>
            <div class="text-center">
              <v-dialog v-model="dialogDelete" width="500">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn text v-bind="attrs" v-on="on"
                    ><v-icon small>mdi-window-close</v-icon
                    ><small>Eliminar</small></v-btn
                  >
                </template>
                <v-card>
                  <v-card-title class="text-h5 white lighten-2">
                    Eliminar Centro de Capacitación
                  </v-card-title>
                  <v-card-text>
                    ¿Estás seguro que quieres eliminar el centro de capacitación
                    seleccionado? Recuerda que no podrás recuperar la
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
                      >Continuar</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </template></v-data-table
        >
      </template>
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
    valid: true,
    rules: [(v) => !!v || "Required"],
    nombreCentro: "",
    directorCentro: "",
    telefonoCentro: "",
    direccionCentro: "",
    tipoCentro: "",
    items: Array, // <-- La lista de centros de capacitación
    mostrarAlert: false,
    mostrarAlertError: false,
    mostrarAlertDelete: false,
    mostrarAlertEdit: false,
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
    desserts: [],
  }),

  async mounted() {
    try {
      const listCenters = await AuthService.getAllCenters();
      this.desserts = listCenters.data;
      console.log(this.desserts);
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
        console.log(data);
        const response = await AuthService.addCenter(data);
        this.datarespuesta = response;
        if (response.serverCode == 200) {
          this.dialog = false;
          this.mostrarAlert = true;
        } else {
          this.dialog = false;
          this.mostrarAlertError = true;
        }
      } catch (error) {
        console.log(error);
        this.dialog = false;
        this.mostrarAlertError = true;
        this.datarespuesta = {error};
      }
    },

    async clean() {
      try {
        this.$refs.form.reset();
        this.mostrarAlert = false;
      } catch (error) {
        console.log(error);
      }
    },

    async editCurso(item) {
      try {
        console.log(item);
        let data = {
          nombre_curso: item.nombreCurso,
          duracion_horas: parseInt(item.duracion, 10),
          clave_curso: item.claveCurso,
          idEspecialidad: item.idEspecialidad,
          //descripcion_curso: item.descripcionCurso,
        };
        const responseUpdate = await AuthService.updateGrade(data);
        this.datarespuestaEdit = responseUpdate;
        if (responseUpdate.serverCode == 200) {
          this.dialogEdit = false;
          this.mostrarAlertEdit = true;
        }
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },

    async deleteCurso(idCurso) {
      try {
        console.log(idCurso);
        const response = await AuthService.deleteGrade(idCurso);
        this.datarespuestaDelete = response;
        if (response.serverCode == 200) {
          this.dialogDelete = false;
          this.mostrarAlertDelete = true;
        }
      } catch (error) {
        console.log(error);
      }
    },

    async asignarCurso() {
      try {
        this.$router.push("asignar-curso");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
