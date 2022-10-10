<template>
  <v-container fluid class="max-height">
    <v-row justify="center" align="center">
      <br />
      <p></p>
      <h2 style="color: #2b4c7b" v-if="mode < 1">Añadir cronograma</h2>
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
            :readonly="mode > 1"
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
              :label="item.descripcion"
              :value="item.idTipoCurso"
              class="font-weight-black"
              v-for="(item, index) in items_tiposcursos"
              :key="index"
              :readonly="mode > 1"
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
                      color="orange"
                      dark
                      class="mb-2"
                      v-bind="attrs"
                      v-on="on"
                      :disabled="mode > 1"
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
            <template v-slot:[`item.actions`]="{ item }">
              <v-btn text @click="editItem(item)" :disabled="mode > 1">
                <v-icon small class="mr-2"> mdi-pencil </v-icon>
                <small>Editar</small>
              </v-btn>
              <v-btn text @click="deleteItem(item)" :disabled="mode > 1">
                <v-icon small class="mr-2">mdi-delete</v-icon>
                <small>Eliminar</small>
              </v-btn>
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
            :rules="[rules.required, rules.letras]"
            v-model="cronograma.encargado_curso"
            :readonly="mode > 1"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center" v-if="mode == 2">
        <v-col cols="10">
          <v-textarea
            dense
            auto-grow
            outlined
            rows="3"
            row-height="25"
            shaped
            label="Comentarios"
            :rules="[rules.required]"
            v-model="cronograma.comentarios"
            v-if="role < 1"
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="12" class="text-center">
          <v-btn
            color="orange"
            elevation="2"
            raised
            rounded
            class="m-1"
            @click="validate()"
            v-show="role < 1 && mode == 2 && cronograma.valido < 1"
          >
            Validar
          </v-btn>
          <v-btn
            elevation="2"
            raised
            rounded
            class="m-1"
            @click="reject()"
            v-show="role < 1 && mode == 2 && cronograma.valido < 1"
          >
            Rechazar
          </v-btn>
          <v-btn
            color="orange"
            elevation="2"
            raised
            rounded
            class="mr-3"
            @click="store()"
            v-show="mode < 2"
          >
            Guardar cambios
          </v-btn>
          <v-btn elevation="2" raised rounded @click="redirect()">
            Cancelar
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import AuthService from "@/services/AuthService.js";

export default {
  name: "FormCronograma",
  props: {
    id: {
      type: Number,
      default: null,
    },
    mode: {
      type: Number,
      default: 0, // 0 = Registro, 1 = Edición, 2 = Validación, 3 = Visualización
    },
  },
  data: () => ({
    rules: {
      required: (value) => !!value || "Campo requerido",
      letras: (value) => {
        const pattern_pnumber = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s\\ ]+$/i;
        return pattern_pnumber.test(value) || "Nombre inválido";
      },
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
      valido: null,
      comentarios: null,
    },
    items_cursos: [],
    items_docentes: [],
    items_tiposcursos: [],
    role: 0, // 0 = ADMINISTRADOR UNIDAD, 1 = INSTRUCTOR
  }),

  async created() {
    let me = this;
    let auth;

    me.fetchCursos();
    me.fetchTiposCursos();
    me.fetchDocentes();
    auth = await AuthService.getProfile();

    if (auth.Rol == "ADMINISTRADOR UNIDAD") me.role = 0;
    else me.role = 1;

    if (me.id) me.getCronograma(me.id);
    else {
      let id_curso = this.$route.params.id;
      let tipo_curso = this.$route.params.tipo;

      if (id_curso && tipo_curso) me.setCurso(id_curso, tipo_curso);
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

    async fetchTiposCursos() {
      let response = await AuthService.getTiposCursos();
      this.items_tiposcursos = response.data.map((item) => {
        item.descripcion = item.descripcion.toUpperCase();
        return item;
      });
    },

    async getCronograma(id) {
      let me = this;
      try {
        let response = await AuthService.getCronograma(id);
        let data = response.data[0];
        me.cronograma = {
          idCronograma: data.cronograma.idCronograma,
          idCurso: data.cronograma.idCurso,
          tipo_curso: data.cronograma.tipo_curso,
          encargado_curso: data.cronograma.encargado_curso,
          contenido_cronograma: data.contenido_cronograma,
          valido: data.valido == 1 ? 1 : 0,
          comentarios: data.cronograma.comentarios,
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

    async update() {
      let me = this;
      let data;
      if (me.cronograma.idCronograma) {
        try {
          data = {
            idCronograma: me.cronograma.idCronograma,
            valido: me.cronograma.valido,
            comentarios: me.cronograma.comentarios,
          };
          await AuthService.updateCronograma(data);
          me.$swal(
            "Hecho",
            "La información del cronograma se ha guardado correctamente.",
            "success"
          ).then(() => {
            Object.assign(me.$data, me.$options.data());
            me.redirect();
          });
        } catch (error) {
          me.$swal("Error", error.response.data.message, "error");
        }
      }
    },

    validate() {
      this.cronograma.valido = 1;
      this.update();
    },

    reject() {
      this.cronograma.valido = -1;
      this.update();
    },

    setCurso(id, type) {
      this.cronograma.idCurso = id;
      switch (type.toUpperCase()) {
        case "curso de competencia laboral":
          this.cronograma.tipo_curso = 1;
          break;
        case "curso regular EBC":
          this.cronograma.tipo_curso = 2;
          break;
        case "curso regular":
          this.cronograma.tipo_curso = 3;
          break;
        case "curso de capacitación acelerada específica a distancia":
          this.cronograma.tipo_curso = 4;
          break;
        case "curso de extensión":
          this.cronograma.tipo_curso = 5;
          break;
        case "evaluación ROCO":
          this.cronograma.tipo_curso = 6;
          break;

        default:
          this.cronograma.tipo_curso = 5;
          break;
      }
    },

    redirect() {
      if (this.$route.name == "ViewAddCronograma")
        if (this.$store.getters.getUser.Rol == "PROFESOR")
          this.$router.push("dashboard-instructor");
        else this.$router.push("cronograma");
      else this.$emit("close");
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
