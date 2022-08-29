<template>
  <v-container fluid class="max-height">
    <v-row justify="center" align="center">
      <br />
      <p></p>
      <h2 style="color: #2b4c7b" v-if="cronograma.idCronograma">
        Añadir cronograma/Editar
      </h2>
      <h2 style="color: #2b4c7b" v-else>Añadir cronograma</h2>
    </v-row>
    <v-row>
      <v-col cols="12" class="m-0 p-0">
        <div class="text-center">
          <h5>
            <p style="color: #394f79">
              <strong>CRONOGRAMA DE ACTIVIDADES RUDC-08</strong>
            </p>
          </h5>
        </div>
      </v-col>
      <v-col cols="12" class="m-0 p-0">
        <div class="text-center">
          <p style="color: #aeacac">
            <strong
              >Rellena todos los campos para completar tu registro.</strong
            >
          </p>
          <p style="color: #aeacac">
            <strong>*Todos los campos son obligatorios.</strong>
          </p>
        </div>
      </v-col>
    </v-row>
    <v-form ref="form_addcron" lazy-validation>
      <v-row justify="center" align="center">
        <v-col cols="5">
          <v-autocomplete
            dense
            outlined
            :rules="[rules.required]"
            :items="items_cursos"
            item-text="nombre_curso"
            item-value="idCurso"
            label="Nombre del curso"
            v-model="cronograma.idCurso"
          ></v-autocomplete>
        </v-col>
      </v-row>
      <v-row justify="center" class="mt-0">
        <v-col cols="5">
          <v-radio-group
            dense
            :rules="[rules.required]"
            v-model="cronograma.tipo_curso"
          >
            <v-radio
              dense
              label="CURSO DE EXTENSIÓN"
              value="1"
              class="font-weight-black"
            ></v-radio>
            <v-radio
              dense
              label="CRUSO CAE"
              value="2"
              class="font-weight-black"
            ></v-radio>
            <v-radio
              dense
              label="A DISTANCIA"
              value="3"
              class="font-weight-black"
            ></v-radio>
            <v-spacer></v-spacer>
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row justify="center" align="center" class="mb-4">
        <v-col cols="10">
          <v-data-table
            :headers="headers"
            :items="cronograma.contenido_cronograma"
            hide-default-footer
            sort-by="tema"
            class="elevation-1"
          >
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title>Contenido</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" max-width="800px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="primary"
                      dark
                      class="mb-2"
                      v-bind="attrs"
                      v-on="on"
                    >
                      Nuevo elemento
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="text-h5">{{ formTitle }}</span>
                    </v-card-title>

                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              v-model="editedItem.unidad"
                              label="Unidad"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              v-model="editedItem.tema"
                              label="Tema"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              v-model="editedItem.subtema"
                              label="Subtema"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              v-model="editedItem.horas"
                              label="Horas"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              v-model="editedItem.periodo"
                              label="Periodo"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="close">
                        Cancelar
                      </v-btn>
                      <v-btn color="blue darken-1" text @click="save">
                        Guardar
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <v-dialog v-model="dialogDelete" max-width="500px">
                  <v-card>
                    <v-card-title class="text-h5">¿Desea remover?</v-card-title>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="closeDelete"
                        >Cancelar</v-btn
                      >
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="deleteItemConfirm"
                        >OK</v-btn
                      >
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">
              <v-icon small class="mr-2" @click="editItem(item)">
                mdi-pencil
              </v-icon>
              <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="5">
          <v-text-field
            label="NOMBRE DEL INSTRUCTOR QUE ELABORÓ"
            dense
            outlined
            :rules="[rules.required]"
            v-model="cronograma.encargado_curso"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="12" class="text-center">
          <v-btn elevation="2" raised rounded class="mr-3" @click="store"
            >Guardado</v-btn
          >
          <v-btn color="primary" elevation="2" raised rounded @click="redirect"
            >Cancelar</v-btn
          >
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import AuthService from "@/services/AuthService.js";

export default {
  name: "ViewAddCronograma",
  data: () => ({
    rules: {
      required: (value) => !!value || "Campo requerido",
    },
    dialog: false,
    dialogDelete: false,
    headers: [
      { text: "UNIDADES", value: "unidad" },
      { text: "TEMA", value: "tema" },
      { text: "SUBTEMA", value: "subtema" },
      { text: "NO. DE HORAS", value: "horas" },
      { text: "PERIODO", value: "periodo" },
      { text: "", value: "actions", sortable: false },
    ],
    editedIndex: -1,
    editedItem: {},
    defaultItem: {
      unidad: null,
      tema: null,
      subtema: null,
      horas: null,
      periodo: null,
    },
    cronograma: {
      idCronograma: null,
      idCurso: null,
      tipo_curso: null,
      encargado_curso: null,
      contenido_cronograma: [],
    },
    items_cursos: [],
    items_docentes: [],
  }),

  async created() {
    let me = this;

    me.fetchCursos();
    me.fetchDocentes();
    if (me.$route.params.id) {
      me.getCronograma(me.$route.params.id);
    } else {
      let auth = await AuthService.getProfile();
      me.cronograma.encargado_curso = `${auth.nombres} ${auth.primer_apellido} ${auth.segundo_apellido}`;
    }
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo" : "Editar";
    },
  },

  methods: {
    async fetchCursos() {
      let response = await AuthService.getCursos();
      this.items_cursos = response.cursos;
    },

    async fetchDocentes() {
      let response = await AuthService.getDocentes();
      this.items_docentes = response.data;
    },

    async getCronograma(id) {
      let me = this;
      try {
        let response = await AuthService.getCronograma(id);
        let data = response.data[0];
        me.cronograma = {
          idCronograma: data.cronograma.idCronograma,
          idCurso: data.cronograma.idCurso,
          tipo_curso: data.cronograma.tipo_curso.toString(),
          encargado_curso: data.cronograma.encargado_curso,
          contenido_cronograma: data.contenido_cronograma,
        };
      } catch (error) {
        console.log(error);
        me.$swal(
          "Error",
          "No se pudo recuperar la información del cronograma.",
          "error"
        );
      }
    },

    async store() {
      let me = this;
      if (me.$refs.form_addcron.validate()) {
        try {
          if (me.cronograma.idCronograma) {
            await AuthService.deleteCronograma(me.cronograma.idCronograma);
          }
          await AuthService.addCronograma(me.cronograma);
          Object.assign(me.$data, me.$options.data());
          me.$refs.form_addcron.resetValidation();
          me.$swal(
            "Hecho",
            "La información del cronograma se ha guardado correctamente.",
            "success"
          ).then(() => {
            me.redirect();
          });
        } catch (error) {
          me.$swal("Error", error.response.data.message, "error");
        }
      } else {
        me.$swal(
          "Advertencia",
          "No ha completado la información solicitada",
          "warning"
        );
      }
    },

    redirect() {
      this.$router.push("cronograma");
    },

    editItem(item) {
      this.editedIndex = this.cronograma.contenido_cronograma.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.cronograma.contenido_cronograma.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.cronograma.contenido_cronograma.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(
          this.cronograma.contenido_cronograma[this.editedIndex],
          this.editedItem
        );
      } else {
        this.cronograma.contenido_cronograma.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>
