<template>
  <v-container class="max-height" fluid pt-6>
    <v-row justify="center" align="center">
      <h2 style="color: #2b4c7b">
        Factibilidades y justificaciones de cursos registrados
      </h2>
    </v-row>
    <v-row justify="center" align="center" style="height: 70px">
      <v-layout row justify-start>
        <v-flex align-self-center xs10> </v-flex>
        <v-flex align-self-start xs1> </v-flex>
        <v-flex align-self-center xs1>
          <!-- <v-btn color="orange" @click="newForm">Crear Nuevo</v-btn> -->
        </v-flex>
      </v-layout>
    </v-row>
    <v-row>
      <v-data-table
        :headers="headers"
        :items="factibilidades"
        item-key="nombre_curso"
        class="elevation-1"
      >
        <template v-slot:[`item.nombre_representante`]="{ item }">
          <v-chip color="yellow">
            {{ item.nombre_representante }}
          </v-chip>
        </template>
        <template v-slot:[`item.lugar`]="{ item }">
          <v-chip color="blue">
            {{ item.lugar }}
          </v-chip>
        </template>
        <template v-slot:[`item.total`]="{ item }">
          <v-chip color="orange">
            {{ item.total }}
          </v-chip>
        </template>
        <template v-slot:[`item.valido`]="{ item }">
          <v-chip v-if="item.valido" color="green"> VALIDADO </v-chip>
          <v-chip v-else color="yellow"> EN ESPERA </v-chip>
        </template>
        <template v-slot:[`item.esValido_DA`]="{ item }">
            <v-chip v-if="item.esValido_DA" color="green"> VALIDADO </v-chip>
            <v-chip v-else color="yellow"> EN ESPERA </v-chip>
          </template>
        <template v-slot:top>
          <v-toolbar flat>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialogEdit" width="1200">
              <v-card class="p-5">
                <v-row justify="center" align="center">
                  <br />
                  <h2 style="color: #2b4c7b">
                    Ver/Editar Factibilidad y Justificación
                  </h2>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>NOMBRE DEL CURSO SOLICITADO</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          v-model="curso_data.nombre_curso"
                          disabled
                        ></v-text-field>
                      </v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2><label>LUGAR</label></v-flex>
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          v-model="editedItem.lugar"
                          disabled
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2><label>FECHA</label></v-flex>
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-menu
                          ref="menu"
                          v-model="menu"
                          :close-on-content-click="false"
                          :return-value.sync="editedItem.fecha"
                          transition="scale-transition"
                          offset-y
                          min-width="auto"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="editedItem.fecha"
                              label="FECHA"
                              prepend-icon="mdi-calendar"
                              readonly
                              v-bind="attrs"
                              v-on="on"
                              :rules="rules"
                              disabled
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            v-model="editedItem.fecha"
                            no-title
                            scrollable
                            locale="es-MX"
                            :rules="rules"
                            disabled
                          >
                            <v-spacer></v-spacer>
                            <v-btn text color="primary" @click="menu = false">
                              Cancel
                            </v-btn>
                            <v-btn
                              text
                              color="primary"
                              @click="$refs.menu.save(editedItem.fecha)"
                            >
                              OK
                            </v-btn>
                          </v-date-picker>
                        </v-menu></v-col
                      >
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2><label>REGIÓN</label></v-flex>
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          v-model="editedItem.region"
                          disabled
                        ></v-text-field>
                      </v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>DISTRITO</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          v-model="editedItem.distrito"
                          disabled
                        ></v-text-field>
                      </v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>MUNICIPIO</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          v-model="municipio_data.Descripcion"
                          disabled
                        ></v-text-field>
                      </v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>LOCALIDAD</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          v-model="editedItem.localidad"
                          disabled
                        ></v-text-field>
                      </v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label
                        >NOMBRE DEL REPRESENTANTE DEL GRUPO DE
                        CAPACITACIÓN</label
                      ></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          v-model="editedItem.nombre_representante"
                          disabled
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>DOMICILIO</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          v-model="editedItem.domicilio"
                          disabled
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>TELÉFONO</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          v-model="editedItem.telefono"
                          disabled
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>TOTAL PARTICIPANTES HOMBRES</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          type="number"
                          v-model="editedItem.total_hombres"
                          disabled
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>TOTAL PARTICIPANTES MUJERES</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          type="number"
                          v-model="editedItem.total_mujeres"
                          disabled
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>TOTAL INSCRITOS</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          type="number"
                          v-model="editedItem.total"
                          disabled
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="start">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2>
                      <label>INFRAESTRUCTURA ADECUADA Y SUFICIENTE</label>
                    </v-flex>
                    <v-flex align-self-center xs4>
                      <v-radio-group
                        row
                        :rules="rules"
                        v-model="editedItem.infraestructura_adecuada"
                        disabled
                      >
                        <v-radio label="SÍ" value="1"></v-radio>
                        <v-radio label="NO" value="0"></v-radio>
                      </v-radio-group>
                    </v-flex>
                    <v-flex align-self-center xs2> </v-flex>
                  </v-layout>
                </v-row>
                <v-row style="height: 45px"></v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label
                        >DETALLE EN QUÉ CONSISTE LA INFRAESTRUCTURA</label
                      ></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-textarea
                        outlined
                        name="input-7-5"
                        v-model="editedItem.detalles"
                        class="bordeRedondoElement"
                        disabled
                      ></v-textarea>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row style="height: 45px"></v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label
                        >EXPLICAR DETALLADAMENTE LAS RAZONES POR LAS QUE ES
                        NECESARIO OPERAR EL CURSO SOLICITADO</label
                      ></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-textarea
                        outlined
                        name="input-7-5"
                        v-model="editedItem.explicacion"
                        class="bordeRedondoElement"
                        disabled
                      ></v-textarea>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="start">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2> </v-flex>
                    <v-flex align-self-center xs4>
                      <v-radio-group
                        row
                        :rules="rules"
                        v-model="editedItem.positivo"
                        disabled
                      >
                        <v-radio label="POSITIVO" value="1"></v-radio>
                        <v-radio label="NEGATIVO" value="0"></v-radio>
                      </v-radio-group>
                    </v-flex>
                    <v-flex align-self-center xs2> </v-flex>
                  </v-layout>
                </v-row>
                <v-row style="height: 35px"></v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>RAZONES</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-textarea
                        outlined
                        name="input-7-5"
                        v-model="editedItem.razones"
                        class="bordeRedondoElement"
                        disabled
                      ></v-textarea>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row style="height: 40px"></v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label
                        >NOMBRE DEL ADMINISTRATIVO DE LA OFICINA DE ATENCIÓN
                        ICAPET QUE VERIFICÓ</label
                      ></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          v-model="editedItem.nombre_administrativo"
                          disabled
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-card-actions>
                  <v-btn
                    outlined
                    color="gray"
                    class="bordeRedondoElement"
                    @click="dialogEdit = false"
                  >
                    Regresar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogValid" width="700">
              <v-card class="p-5">
                <v-row justify="center" align="center">
                  <br />
                  <h2 style="color: #2b4c7b">
                    Validar Factibilidad y Justificación del Curso
                  </h2>
                </v-row>
                <v-card-text>
                  ¿Estás seguro que quiere validar la factibilidad y
                  justificación del curso seleccionada?
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    outlined
                    color="orangeFooter"
                    class="bordeRedondoElement"
                    @click="
                      enviarValidacionFactibilidad(editedItem.idFactibilidad)
                    "
                    >Validar</v-btn
                  >
                  <v-btn
                    outlined
                    color="gray"
                    class="bordeRedondoElement"
                    @click="dialogValid = false"
                  >
                    Cancelar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <!-- <v-dialog v-model="dialogDelete" width="500">
              <v-card>
                <v-card-title class="text-h5 white lighten-2">
                  Eliminar factibilidad y justificación de cursos
                </v-card-title>
                <v-card-text>
                  ¿Estás seguro que quieres eliminar la factibilidad y
                  justificación del curso seleccionado? Recuerda que no podrás
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
                    @click="deleteFactibilidad()"
                    >Continuar</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog> -->
          </v-toolbar>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-btn v-if="!item.esValido_DA" text @click="validItem(item)"
            ><v-icon small>mdi-check</v-icon><small>Validar</small></v-btn
          >
          <v-btn text @click="editItem(item)"
            ><v-icon small>mdi-eye-outline</v-icon
            ><small>ver</small></v-btn
          >
          <!-- <v-btn text @click="deleteItem(item)">
            <v-icon small>mdi-window-close</v-icon
            ><small>Eliminar</small></v-btn
          > -->
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
    dialogValid: false,
    //Elementos para la tabla
    headers: [
      {
        text: "Representante",
        align: "start",
        sortable: false,
        value: "nombre_representante",
      },
      { text: "Lugar", value: "lugar" },
      { text: "Total participantes", value: "total" },
      { text: "Nombre verificó", value: "nombre_administrativo" },
      { text: "Teléfono", value: "telefono" },
      { text: "Enviado Validación", value: "valido" },
      { text: "Aprobado D.A.P.", value: "esValido_DA" },
      { text: " ", value: "actions" },
    ],
    factibilidades: [],
    editedItem: "",
    deleteId: 0,
    editedIndex: -1,
    editId: 0,
    curso_data: [],
    menu: false,
    municipio_data: [],
  }),

  async mounted() {
    try {
      const response = await AuthService.getPreValidFactibility();
      this.factibilidades = response.data;
      console.log("factibilidades", this.factibilidades);
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    async reloadTable() {
      const response = await AuthService.getPreValidFactibility();
      this.factibilidades = response.data;
      console.log("factibilidades", this.factibilidades);
    },

    // async newForm() {
    //   try {
    //     this.$router.push("form-factibilidad-justificacion");
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },

    // async editFactibilidad(data_item) {
    //   try {
    //     let data_edit = {
    //       id: data_item.idFactibilidad,
    //       idCurso: data_item.idCurso,
    //       lugar: data_item.lugar,
    //       fecha: data_item.fecha,
    //       region: data_item.region,
    //       distrito: data_item.distrito,
    //       c_Municipio: data_item.c_Municipio,
    //       localidad: data_item.localidad,
    //       nombre_representante: data_item.nombre_representante,
    //       domicilio: data_item.domicilio,
    //       telefono: data_item.telefono,
    //       total_hombres: data_item.total_hombres,
    //       total_mujeres: data_item.total_mujeres,
    //       total: data_item.total,
    //       infraestructura_adecuada: data_item.infraestructura_adecuada,
    //       detalles: data_item.detalles,
    //       explicacion: data_item.explicacion,
    //       positivo: data_item.positivo,
    //       razones: data_item.razones,
    //       nombre_administrativo: data_item.nombre_administrativo,
    //     };
    //     console.log("dataEdit", data_edit);
    //     const responseUpdate =
    //       await AuthService.updateFactibilidadJustificacion(data_edit);
    //     this.datarespuestaEdit = responseUpdate;
    //     if (responseUpdate.serverCode == 200) {
    //       this.dialogEdit = false;
    //       //this.mostrarAlertEdit = true;
    //       let data_valid = {
    //         id: data_item.idFactibilidad,
    //         valido: 0,
    //       };
    //       const responseValid =
    //         await AuthService.updateFactibilidadJustificacion(data_valid);
    //       this.datarespuestaEdit = responseValid;
    //       this.$swal(
    //         "Editado",
    //         "Factibilidad y justificación del curso editada correctamente. Se enviará nuevamente a validación.",
    //         "success"
    //       );
    //       this.reloadTable();
    //     } else {
    //       console.log(responseUpdate.data.errors);
    //       let error_msg =
    //         responseUpdate.data.errors[
    //           Object.keys(responseUpdate.data.errors)[0]
    //         ][0];
    //       this.$swal("Error", error_msg, "error");
    //     }
    //   } catch (error) {
    //     console.log(error);
    //     console.log(error.response.data.errors);
    //     let error_msg =
    //       error.response.data.errors[
    //         Object.keys(error.response.data.errors)[0]
    //       ][0];
    //     this.$swal("Error", error_msg, "error");
    //   }
    // },

    async enviarValidacionFactibilidad(idFactibilidad) {
      try {
        let data = {
          id: idFactibilidad,
          esValido_DA: true,
        };
        const responseValid = await AuthService.updateFactibilidadJustificacion(
          data
        );
        this.datarespuestaEdit = responseValid;
        if (responseValid.serverCode == 200) {
          this.dialogEdit = false;
          this.$swal(
            "Validado",
            "Factibilidad y justificación del curso validada correctamente por el departamento de apoyo académico.",
            "success"
          );
          this.reloadTable();
          this.dialogValid = false;
        } else {
          let error_msg =
            responseValid.data.errors[
              Object.keys(responseValid.data.errors)[0]
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

    // async deleteFactibilidad() {
    //   try {
    //     let idDeleteFactibilidad = this.deleteId;
    //     console.log("confirmDeleteid ", idDeleteFactibilidad);
    //     const response = await AuthService.deleteFactibilidadJustificacion(
    //       idDeleteFactibilidad
    //     );
    //     this.datarespuestaDelete = response;
    //     if (response.serverCode == 200) {
    //       this.dialogDelete = false;
    //       //this.mostrarAlertDelete = true;
    //       this.$swal(
    //         "Eliminado",
    //         "Factibilidad y justificación del curso eliminada correctamente.",
    //         "success"
    //       );
    //       this.reloadTable();
    //     } else {
    //       let error_msg =
    //         response.data.errors[Object.keys(response.data.errors)[0]][0];
    //       this.$swal("Error", error_msg, "error");
    //     }
    //   } catch (error) {
    //     console.log(error);
    //     console.log(error.response.data.errors);
    //     let error_msg =
    //       error.response.data.errors[
    //         Object.keys(error.response.data.errors)[0]
    //       ][0];
    //     this.$swal("Error", error_msg, "error");
    //   }
    // },

    validItem(item) {
      this.editedIndex = this.factibilidades.indexOf(item);
      console.log("verIndex ", this.editedIndex);
      this.editedItem = Object.assign({}, item);
      console.log("verItem ", this.editedItem);
      this.dialogValid = true;
      console.log("item ver ", item);
      this.editId = this.editedItem.idFactibilidad;
      console.log("verItem.idFactibilidad ", this.editId);
    },
    editItem(item) {
      this.editedIndex = this.factibilidades.indexOf(item);
      console.log("editedIndex ", this.editedIndex);
      this.editedItem = Object.assign({}, item);
      console.log("editedItem ", this.editedItem);
      this.dialogEdit = true;
      console.log("item edit ", item);
      this.editId = this.editedItem.idFactibilidad;
      console.log("editedItem.idFactibilidad ", this.editId);
      this.rellenar(this.editedItem);
    },
    //   deleteItem(item) {
    //     this.editedIndex = this.factibilidades.indexOf(item);
    //     console.log("deleteIndex ", this.editedIndex);
    //     this.editedItem = Object.assign({}, item);
    //     console.log("deleteItem ", this.editedItem);
    //     this.deleteId = this.editedItem.idFactibilidad;
    //     console.log("editedItem.idFactibilidad ", this.deleteId);
    //     this.dialogDelete = true;
    //   },

    async rellenar(item) {
      console.log("item ", item);
      console.log("idcurso", item.idCurso);
      const response2 = await AuthService.getGradeUnic(item.idCurso);
      this.curso_data = response2.curso;
      console.log("curso ", this.curso_data);
      const response3 = await AuthService.getMunicipioUnic(item.c_Municipio);
      this.municipio_data = response3.data;
      console.log("municipio ", this.municipio_data);
      this.editedItem.infraestructura_adecuada =
        item.infraestructura_adecuada.toString();
      this.editedItem.positivo = item.positivo.toString();
    },

    //   async ctotalInscritos() {
    //     this.editedItem.total =
    //       parseInt(this.editedItem.total_mujeres, 10) +
    //       parseInt(this.editedItem.total_hombres, 10);
    //   },
  },
};
</script>
