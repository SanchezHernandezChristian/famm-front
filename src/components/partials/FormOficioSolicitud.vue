<template>
  <v-container fluid>
    <PreviewOficioSolicitud :id="id" :name="name" v-if="showPreview" />
    <v-form ref="form_oficio" v-else>
      <v-row>
        <v-col cols="12">
          <v-text-field
            outlined
            label="Curso"
            v-model="form.nombre_curso"
            readonly
          ></v-text-field
        ></v-col>
        <v-col cols="12">
          <v-select
            :items="items_tiposcursos"
            item-text="nombre"
            item-value="id"
            label="Tipo de curso"
            :rules="rules"
            required
            dense
            outlined
            v-model="form.tipo_curso"
            :disabled="!showStore"
          ></v-select>
        </v-col>
        <v-col cols="12">
          <v-text-field
            outlined
            label="Para ser impartido a"
            :rules="rules"
            v-model="form.impartido"
            :readonly="!showStore"
          ></v-text-field
        ></v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-btn
            color="orange"
            class="mr-2"
            @click="store()"
            v-show="showStore"
          >
            GUARDAR
          </v-btn>
          <v-btn
            color="orange"
            class="mr-2"
            @click="store()"
            v-show="showValidate"
          >
            VALIDAR
          </v-btn>
          <v-btn
            color="orange"
            class="mr-2"
            @click="send()"
            v-show="showSendValidate"
          >
            ENVIAR A VALIDACION
          </v-btn>
          <v-btn outlined color="gray" @click="cancel">CANCELAR</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
// import AuthService from "@/services/AuthService.js";
import PreviewOficioSolicitud from "@/components/partials/PreviewOficioSolicitud.vue";

const REGISTER_MODE = 0;
// const EDIT_MODE = 1;
const VALIDATE_MODE = 2;
const VIEW_MODE = 3;
const SEND_VALIDATE_MODE = 4;
const ESTATUS_ENVIADO_VALIDACION = 2;
const ESTATUS_VALIDADO = 3;

export default {
  name: "FormOficioSolicitud",
  components: {
    PreviewOficioSolicitud,
  },
  props: {
    id: {
      type: Number,
      default: null,
    },
    mode: {
      type: Number,
      default: REGISTER_MODE, // 0 = Registro, 1 = Edición, 2 = Validación, 3 = Visualización, 4 = Enviar a validación
    },
    name: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    rules: [(v) => !!v || "Campo requerido"],
    items_tiposcursos: [
      { id: 1, nombre: "Curso de competencia laboral" },
      { id: 2, nombre: "Curso regular EBC" },
      { id: 3, nombre: "Curso regular" },
      {
        id: 4,
        nombre: "Curso de capacitación acelerada específica a distancia",
      },
      { id: 5, nombre: "Curso de extensión" },
      { id: 6, nombre: "Evaluación ROCO" },
    ],
    form: {
      id: null,
      nombre_curso: "",
      impartido: null,
      tipo_curso: null,
      estatus: 0,
    },
  }),

  async mounted() {
    if (this.id) {
      await this.getOficio(this.id);
    }
  },

  computed: {
    showPreview() {
      return this.mode == VIEW_MODE;
    },
    showStore() {
      return this.mode < VALIDATE_MODE;
    },
    showValidate() {
      return this.mode == VALIDATE_MODE;
    },
    showSendValidate() {
      return this.mode == SEND_VALIDATE_MODE;
    },
  },

  methods: {
    getOficio(id) {
      this.form.id = id;
      this.form.nombre_curso = this.name;
      this.form.impartido = "PÚBLICO GENERAL";
      this.form.tipo_curso = 1;
    },

    send() {
      this.form.estatus = ESTATUS_ENVIADO_VALIDACION;
      this.store();
    },

    validate() {
      this.form.estatus = ESTATUS_VALIDADO;
      this.store();
    },

    store() {
      if (this.$refs.form_oficio.validate()) {
        try {
          this.$swal(
            "Hecho",
            "Información guardada correctamente.",
            "success"
          ).then(() => {
            this.cancel();
          });
        } catch (error) {
          console.log(error);
          this.$swal(
            "Error",
            "Error al intentar guardar la información.",
            "error"
          );
        }
      } else {
        this.$swal(
          "Advertencia",
          "No ha completado la información solicitada.",
          "warning"
        );
      }
    },

    cancel() {
      Object.assign(this.$data, this.$options.data());
      this.$refs.form_oficio.resetValidation();
      this.$emit("close");
    },
  },
};
</script>
