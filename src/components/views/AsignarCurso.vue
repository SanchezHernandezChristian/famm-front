<template>
  <v-container fluid class="max-height">
    <v-row justify="center" align="center">
      <br />
      <p></p>
      <h2 style="color: #2b4c7b">Asignar curso</h2>
    </v-row>
    <v-form ref="form_asigna_curso">
      <v-row justify="center" align="center" style="height: 70px">
        <div>
          <v-layout row justify-center>
            <br />
            <p></p>
            <v-flex align-self-baseline xs2>
              <label>Nombre del curso</label>
            </v-flex>
            <v-flex align-self-baseline xs3>
              <v-autocomplete
                v-model="selectCurso"
                :items="items_cursos"
                item-text="nombre_curso"
                item-value="idCurso"
                :rules="rules"
                required
                return-object
                dense
                outlined
                class="bordeRedondoElement"
                placeholder="Busque o seleccione un curso"
              ></v-autocomplete>
            </v-flex>
            <v-flex align-self-start xs2> </v-flex>
            <v-flex align-self-center xs5> </v-flex>
          </v-layout>
        </div>
      </v-row>
      <v-row justify="center" align="center" style="height: 80px">
        <div>
          <v-layout row justify-center>
            <v-flex align-self-baseline xs2><label>Asignar a</label></v-flex>
            <v-flex align-self-center xs3>
              <v-autocomplete
                v-model="selectUnidad"
                :items="items_unidad"
                item-text="nombre"
                item-value="id"
                :rules="rules"
                required
                return-object
                dense
                outlined
                class="bordeRedondoElement"
                placeholder="Busque o seleccione una unidad de capacitación"
                :hint="hintunidad"
                persistent-hint
              ></v-autocomplete>
            </v-flex>
            <v-flex align-self-center xs7> </v-flex>
          </v-layout>
        </div>
      </v-row>
    </v-form>
    <v-row
      class="pt-6 mb-4"
      justify="center"
      align="start"
      style="height: 80px"
    >
      <v-col cols="2"></v-col>
      <v-col cols="10">
        <v-btn outlined class="bordeRedondoElement" @click="clean">
          BORRAR
        </v-btn>
        <v-btn outlined class="bordeRedondoElement ml-2" @click="cancel">
          CANCELAR
        </v-btn>
        <v-btn
          color="orange"
          class="bordeRedondoElement ml-2"
          @click="asignaCurso()"
          >ASIGNAR</v-btn
        >
      </v-col>
    </v-row>
    <br />
    <v-row>
      <v-col cols="12">
        <h3 style="color: #2b4c7b">Cursos asignados</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-data-table
        :headers="headers"
        :items="items_cursos_asignados"
        :items-per-page="5"
        :single-select="false"
        item-key="idCurso"
        show-select
        class="elevation-1"
      >
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
                    color="orange"
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
        <template v-slot:[`item.actions`]="{ item }">
          <v-btn text @click="editItem(item)">
            <v-icon small>mdi-eye</v-icon><small>Ver/Editar</small>
          </v-btn>
          <v-btn text @click="deleteItem(item)">
            <v-icon small>mdi-window-close</v-icon><small>Eliminar</small>
          </v-btn>
        </template>
      </v-data-table>
    </v-row>
  </v-container>
</template>
<script>
import AuthService from "@/services/AuthService.js";

export default {
  data() {
    return {
      rules: [(v) => !!v || "Campo requerido"],
      items_cursos: [],
      items_cursos_asignados: [],
      selectCurso: "",
      items_unidad: [],
      selectUnidad: "",
      headers: [
        { text: "Nombre del curso", value: "nombre_curso" },
        { text: "Clave del curso", value: "clave_curso" },
        { text: "Unidad", value: "idUnidad" },
        { text: "", align: "center", value: "actions" },
      ],
      dialogDelete: false,
      dialogEdit: false,
      editedItem: "",
      selected: [],
      deleteId: 0,
      deleteIdUnidad: 0,
      editedIndex: -1,
      especialidadValid: false,
      editId: 0,
    };
  },
  async mounted() {
    if (this.$store.getters.isLoggedIn) {
      try {
        this.fetchCursos();
        if (this.$route.params.curso) {
          this.selectCurso = this.$route.params.curso;
        }
      } catch (error) {
        console.log("Error", error);
      }
    }
  },
  computed: {
    hintunidad() {
      return this.selectUnidad.director ? this.selectUnidad.director : "";
    },
  },
  methods: {
    async fetchCursos(){
      let me = this;
      const response1 = await AuthService.getCursos();
      const response2 = await AuthService.getAllCenters();
      const response3 = await AuthService.getAllAssignGrade();
      me.items_cursos = response1.cursos;
      me.items_unidad = response2.data;
      me.items_cursos_asignados = response3.cursos;
    },
    async asignaCurso() {
      let me = this;
      if (me.$refs.form_asigna_curso.validate()) {
        try {
          let data = {
            idCurso: this.selectCurso.idCurso,
            idUnidad: this.selectUnidad.id,
          };
          const response = await AuthService.assignGrade(data);
          this.datarespuesta = response;
          if (response.serverCode == 200) {
            this.$swal("Asignado", "Curso asignado correctamente.", "success");
          } else {
            this.$swal("Error", response.message, "error");
          }
        } catch (error) {
          if (
            error.response &&
            error.response.data &&
            error.response.data.errors
          ) {
            console.log(error.response.data.errors);
            let error_msg =
              error.response.data.errors[
                Object.keys(error.response.data.errors)[0]
              ][0];
            this.$swal("Error", error_msg, "error");
          } else {
            this.$swal("Error", "Ha ocurrido un error en el sistema.", "error");
          }
        }
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
        const response = await AuthService.deleteAssignGrade(
          this.deleteId,
          this.deleteIdUnidad
        );
        if (response.serverCode == 200) {
          this.dialogDelete = false;
          this.$swal(
            "Eliminado",
            "Curso removido de la lista de asignados.",
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
    async reloadTable() {
      const listcursos = await AuthService.getAllAssignGrade();
      this.items_cursos_asignados = listcursos.cursos;
    },
    clean() {
      Object.assign(this.$data, this.$options.data());
      this.$refs.form_asigna_curso.resetValidation();
      this.fetchCursos();
    },
    cancel() {
      this.$router.push("agregar-curso");
    },
    editItem(item) {
      this.editedIndex = this.items_cursos_asignados.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogEdit = true;
      this.editId = this.editedItem.idCurso;
    },
    deleteItem(item) {
      this.editedIndex = this.items_cursos_asignados.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.deleteId = this.editedItem.idCurso;
      this.deleteIdUnidad = this.editedItem.idUnidad;
      this.dialogDelete = true;
    },
  },
};
</script>
