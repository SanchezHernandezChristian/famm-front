<template>
  <v-container fluid pt-6>
    <v-row justify="center" align="center">
      <h2 style="color: #2b4c7b">Agregar curso</h2>
    </v-row>
    <v-row justify="center" align="center" class="pb-3 pt-6 mb-2">
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
          <div class="text-center pb-2"><label>Especialidad</label></div>
        </v-flex>
        <v-flex align-self-center xs6>
          <div class="text-center"><label>Descripción</label></div>
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
              :rules="rules"
              v-model="nombreCurso"
            ></v-text-field>
          </v-flex>
          <v-flex align-self-center xs1>
            <v-text-field
              dense
              outlined
              :rules="rules"
              v-model="duracion"
              type="number"
            ></v-text-field>
          </v-flex>
          <v-flex align-self-center xs1>
            <v-text-field
              dense
              outlined
              :rules="rules"
              v-model="claveCurso"
            ></v-text-field>
          </v-flex>
          <v-flex align-self-center xs2 cols-2>
            <v-select
              v-model="select"
              :items="items"
              item-text="nombre_especialidad"
              item-value="idEspecialidad"
              :rules="rules"
              required
              return-object
              dense
              outlined
            ></v-select>
          </v-flex>
          <v-flex align-self-center xs6>
            <v-text-field
              dense
              outlined
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
      <h2 style="color: #2b4c7b">Cursos registrados</h2>
      <v-data-table
        :headers="headers"
        :items="cursos"
        item-key="nombre_curso"
        class="elevation-1"
      >
        <template v-slot:[`item.duracion_horas`]="{ item }">
          <v-chip color="yellow">
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
        <template v-slot:top>
          <v-toolbar flat>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialogEdit" width="700">
              <v-card class="p-5">
                <v-row justify="center" align="center">
                  <br />
                  <h2 style="color: #2b4c7b">Editar curso</h2>
                </v-row>
                <v-row justify="center" align="center" style="height: 70px">
                  <v-layout row justify-center>
                    <v-flex align-self-baseline xs4
                      ><label> Nombre del curso</label></v-flex
                    >
                    <v-flex align-self-baseline xs7>
                      <v-text-field
                        dense
                        outlined
                        class="bordeRedondoElement"
                        v-model="editedItem.nombre_curso"
                      ></v-text-field>
                    </v-flex>
                    <v-flex align-self-baseline xs1></v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center" style="height: 70px">
                  <div>
                    <v-layout row justify-center>
                      <v-flex align-self-baseline xs4
                        ><label>Duración de horas</label></v-flex
                      >
                      <v-flex align-self-center xs7>
                        <v-text-field
                          dense
                          outlined
                          class="bordeRedondoElement"
                          v-model="editedItem.duracion_horas"
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
                        ><label>Clave de curso</label></v-flex
                      >
                      <v-flex align-self-center xs7>
                        <v-text-field
                          dense
                          outlined
                          class="bordeRedondoElement"
                          disabled
                          v-model="editedItem.clave_curso"
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
                          v-model="editedItem.nombre_especialidad"
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
                          v-model="editedItem.descripcion_curso"
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
                        editedItem.nombre_curso,
                        editedItem.duracion_horas,
                        editedItem.clave_curso,
                        editedItem.idEspecialidad,
                        editedItem.descripcion_curso
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
                    @click="deleteCurso()"
                    >Continuar</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:[`item.asignar`]="{ item }">
          <v-btn @click="asignarCurso(item)">Asignar</v-btn> </template
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
  name: "AddCurso",

  data: () => ({
    valid: false,
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
        text: "Nombre del curso",
        align: "start",
        sortable: false,
        value: "nombre_curso",
      },
      { text: "Horas", value: "duracion_horas" },
      { text: "Clave de curso", value: "clave_curso" },
      { text: "Especialidad", value: "nombre_especialidad" },
      { text: "Descripcion", value: "descripcion_curso" },
      { text: " ", value: "asignar" },
      { text: " ", value: "actions" },
    ],
    cursos: [],
    editedItem: "",
    selected: [],
    deleteId: 0,
    editedIndex: -1,
    especialidadValid: false,
    editId: 0,
  }),

  async mounted() {
    try {
      const listespecialidades = await AuthService.getEspecialidades();
      this.items = listespecialidades.especialidades;
      const listcursos = await AuthService.getCursos();
      this.cursos = listcursos.cursos;
      console.log("cursos", this.cursos);
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
        if (this.select.idEspecialidad != 0) {
          this.especialidadValid = true;
        }
        if (!this.especialidadValid) {
          this.$swal("Advertencia", "Seleccione una especialidad", "warning");
        } else {
          const response = await AuthService.addGrade(data);
          this.datarespuesta = response;
          if (response.serverCode == 200) {
            this.dialog = false;
            //this.mostrarAlert = true;
            this.$swal(
              "Registrado",
              "Curso registrado correctamente.",
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
      const listcursos = await AuthService.getCursos();
      this.cursos = listcursos.cursos;
      console.log("cursosReload", this.cursos);
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
      nombre_cursoEdit,
      duracion_horasEdit,
      clave_cursoEdit,
      idEspecialidadEdit,
      descripcion_cursoEdit
    ) {
      try {
        let data = {
          id: this.editId,
          nombre_curso: nombre_cursoEdit,
          duracion_horas: parseInt(duracion_horasEdit, 10),
          clave_curso: clave_cursoEdit,
          idEspecialidad: parseInt(idEspecialidadEdit, 10),
          descripcion_curso: descripcion_cursoEdit,
        };
        console.log("dataEdit", data);
        const responseUpdate = await AuthService.updateGrade(data);
        this.datarespuestaEdit = responseUpdate;
        if (responseUpdate.serverCode == 200) {
          this.dialogEdit = false;
          //this.mostrarAlertEdit = true;
          this.$swal("Editado", "Curso editado correctamente.", "success");
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

    async deleteCurso() {
      try {
        let idDeleteCurso = this.deleteId;
        console.log("confirmDeleteid ", idDeleteCurso);
        const response = await AuthService.deleteGrade(idDeleteCurso);
        this.datarespuestaDelete = response;
        if (response.serverCode == 200) {
          this.dialogDelete = false;
          //this.mostrarAlertDelete = true;
          this.$swal("Eliminado", "Curso borrado correctamente.", "success");
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

    async asignarCurso() {
      try {
        this.$router.push("asignar-curso");
      } catch (error) {
        console.log(error);
      }
    },

    editItem(item) {
      this.editedIndex = this.cursos.indexOf(item);
      console.log("editedIndex ", this.editedIndex);
      this.editedItem = Object.assign({}, item);
      console.log("editedItem ", this.editedItem);
      this.dialogEdit = true;
      console.log("item edit ", item);
      this.editId = this.editedItem.idCurso;
      console.log("editedItem.idCurso ", this.editId);      
    },
    deleteItem(item) {
      this.editedIndex = this.cursos.indexOf(item);
      console.log("deleteIndex ", this.editedIndex);
      this.editedItem = Object.assign({}, item);
      console.log("deleteItem ", this.editedItem);
      this.deleteId = this.editedItem.idCurso;
      console.log("editedItem.idCurso ", this.deleteId);
      this.dialogDelete = true;
    },
  },
};
</script>
