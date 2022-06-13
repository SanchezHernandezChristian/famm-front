<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <br />
      <p></p>
      <h2 style="color: #2b4c7b">Agregar curso</h2>
    </v-row>
    <v-row justify="center" align="center" style="height: 70px">
      <v-layout row justify-center>
        <v-flex align-self-center xs2>
          <div class="text-center"><label>Nombre del curso</label></div></v-flex
        >
        <v-flex align-self-center xs1>
          <div class="text-center"><label>Horas</label></div>
        </v-flex>
        <v-flex align-self-center xs1>
          <div class="text-center"><label>Clave de curso</label></div>
        </v-flex>
        <v-flex align-self-center xs2>
          <div class="text-center"><label>Especialidad</label></div>
        </v-flex>
        <v-flex align-self-center xs6>
          <div class="text-center"><label>Descripción</label></div>
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
              v-model="nombreCurso"
            ></v-text-field>
          </v-flex>
          <v-flex align-self-center xs1>
            <v-text-field
              dense
              outlined
              class="bordeRedondoElement"
              :rules="rules"
              v-model="duracion"
            ></v-text-field>
          </v-flex>
          <v-flex align-self-center xs1>
            <v-text-field
              dense
              outlined
              class="bordeRedondoElement"
              :rules="rules"
              v-model="claveCurso"
            ></v-text-field>
          </v-flex>
          <v-flex align-self-center xs2>
            <v-select
              v-model="select"
              :items="items"
              item-text="nombre_especialidad"
              item-value="idEspecialidad"
              return-object
              outlined
              style="height: 80px"
              class="bordeRedondoElement"
              label="Seleccione una especialidad"
            ></v-select>
          </v-flex>
          <v-flex align-self-center xs6>
            <v-text-field
              dense
              outlined
              class="bordeRedondoElement"
              :rules="rules"
              v-model="descripcionCurso"
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
                      @click="createGrade"
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
      <template>
        <v-data-table
          dense
          :headers="headers"
          :items="desserts"
          item-key="nombre_curso"
          class="elevation-1"
        >
          <template v-slot:[`item.duracion_horas`]="{ item }">
            <v-chip color='yellow'>
              {{ item.duracion_horas }}
            </v-chip>
          </template>
          <template v-slot:[`item.clave_curso`]="{ item }">
            <v-chip color="blue">
              {{ item.clave_curso }}
            </v-chip>
          </template>
          <template v-slot:[`item.nombre_especialidad`]="{ item }">
            <v-chip color="orange">
              {{ item.nombre_especialidad }}
            </v-chip>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-btn @click="asignarCurso()">Asignar</v-btn>
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
                          ><label> Nombre del curso</label></v-flex
                        >
                        <v-flex align-self-baseline xs7>
                          <v-text-field
                            dense
                            outlined
                            class="bordeRedondoElement"
                            v-model="item.nombre_curso"
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
                          ><label>Duración de horas</label></v-flex
                        >
                        <v-flex align-self-center xs7>
                          <v-text-field
                            dense
                            outlined
                            class="bordeRedondoElement"
                            v-model="item.duracion_horas"
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
                          ><label>Clave de curso</label></v-flex
                        >
                        <v-flex align-self-center xs7>
                          <v-text-field
                            dense
                            outlined
                            class="bordeRedondoElement"
                            disabled
                            v-model="item.clave_curso"
                          ></v-text-field>
                        </v-flex>
                        <v-flex align-self-center xs1> </v-flex>
                      </v-layout>
                    </div>
                  </v-row>
                  <v-row justify="center" align="center" style="height: 80px">
                    <div>
                      <v-layout row justify-center>
                        <v-flex align-self-baseline xs4
                          ><label>Especialidad</label></v-flex
                        >
                        <v-flex align-self-center xs7>
                          <v-combobox
                            dense
                            outlined
                            class="bordeRedondoElement"
                            v-model="item.nombre_especialidad"
                          ></v-combobox>
                        </v-flex>
                        <v-flex align-self-center xs1> </v-flex>
                      </v-layout>
                    </div>
                  </v-row>
                  <v-row justify="center" align="center">
                    <div>
                      <v-layout row justify-center>
                        <v-flex align-self-baseline xs4
                          ><label>Descripción</label></v-flex
                        >
                        <v-flex align-self-center xs7>
                          <v-textarea
                            outlined
                            name="input-7-4"
                            label=""
                            v-model="item.descripcion_curso"
                          ></v-textarea>
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
                        editCurso(
                          item.nombre_curso,
                          item.duracion_horas,
                          item.clave_curso,
                          item.idEspecialidad,
                          item.descripcion_curso
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
                    Eliminar curso
                  </v-card-title>
                  <v-card-text>
                    ¿Estás seguro que quieres eliminar el curso seleccionado?
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
                      @click="deleteCurso(item.idCurso)"
                      >Continuar</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </template>
        </v-data-table>
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
  name: "AddCurso",

  data: () => ({
    valid: true,
    rules: [(v) => !!v || "Required"],
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
    mostrarAlert: false,
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
        text: "Nombre del curso",
        align: "start",
        sortable: false,
        value: "nombre_curso",
      },
      { text: "Horas", value: "duracion_horas" },
      { text: "Clave de curso", value: "clave_curso" },
      { text: "Especialidad", value: "nombre_especialidad" },
      { text: "Descripcion", value: "descripcion_curso" },
      { text: " ", value: "actions" },
    ],
    desserts: [],
    selected: [],
  }),

  async mounted() {
    try {
      const listespecialidades = await AuthService.getEspecialidades();
      this.items = listespecialidades.especialidades;
      const listcursos = await AuthService.getCursos();
      this.desserts = listcursos.cursos;
      console.log(this.desserts);
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    async createGrade() {
      try {
        let data = {
          nombre_curso: this.nombreCurso,
          duracion_horas: parseInt(this.duracion, 10),
          //duracion_horas: this.duracion,
          clave_curso: this.claveCurso,
          //idEspecialidad: String(this.select.idEspecialidad),
          idEspecialidad: this.select.idEspecialidad,
          descripcion_curso: this.descripcionCurso,
        };
        console.log(data);
        const response = await AuthService.addGrade(data);
        this.datarespuesta = response;
        if (response.serverCode == 200) {
          this.dialog = false;
          this.mostrarAlert = true;
        }
      } catch (error) {
        console.log(error);
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

    async editCurso(
      nombreCurso1,
      duracionHoras,
      claveCurso,
      idEspecialidadCurso,
      descripcionCurso
    ) {
      try {
        let data = {
          nombre_curso: nombreCurso1,
          duracion_horas: parseInt(duracionHoras, 10),
          clave_curso: claveCurso,
          //   idEspecialidad: parseInt(idEspecialidadCurso, 10),
          idEspecialidad: 18,
          descripcion_curso: descripcionCurso,
        };
        console.log(data);
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
