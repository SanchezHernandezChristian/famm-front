<template>
  <v-container fluid>
    <PreviewOficioSolicitud :id="id" v-if="showPreview" />
    <v-form ref="form_oficio" v-else>
      <v-row>
        <v-col cols="12">
          <v-select
            :items="items_cursos"
            item-text="nombre_curso"
            item-value="idCurso"
            label="Curso"
            :rules="rules"
            required
            dense
            outlined
            v-model="form.idCurso"
            :disabled="!showStore"
          ></v-select>
        </v-col>
        <v-col cols="12">
          <v-select
            :items="items_tiposcursos"
            item-text="descripcion"
            item-value="idTipoCurso"
            label="Tipo de curso"
            :rules="rules"
            required
            dense
            outlined
            v-model="form.idTipoCurso"
            :disabled="!showStore"
          ></v-select>
        </v-col>
        <v-col cols="12">
          <v-text-field
            outlined
            label="Para ser impartido a"
            :rules="rules"
            v-model="form.recibiraCurso"
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
            @click="validate()"
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
import AuthService from "@/services/AuthService.js";
import PreviewOficioSolicitud from "@/components/partials/PreviewOficioSolicitud.vue";

const ROL_ADMIN_UNIDAD = "ADMINISTRADOR UNIDAD";
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
  },
  data: () => ({
    rules: [(v) => !!v || "Campo requerido"],
    items_tiposcursos: [],
    items_cursos: [],
    form: {
      id: null,
      idCurso: null,
      idTipoCurso: null,
      recibiraCurso: null,
      valido: 1,
    },
  }),

  async mounted() {
    await this.fetchCursos();
    await this.fetchTipos();
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
    async fetchCursos() {
      let cursos = [];
      let profile = await AuthService.getProfile();
      this.role = this.$store.getters.getUser.Rol;

      if (this.role == ROL_ADMIN_UNIDAD) {
        cursos = await AuthService.getAllAssignUnidad(
          profile.idCentro_capacitacion
        );
      } else {
        cursos = await AuthService.getAllAssignGrade();
      }

      this.items_cursos = cursos.cursos;
    },

    async fetchTipos() {
      const tipos = await AuthService.getTiposCursos();
      this.items_tiposcursos = tipos.data;
    },

    async getOficio(id) {
      const oficio = await AuthService.getOficioSolicitud(id);
      this.form.id = this.id;
      this.form.idCurso = oficio.data[0].idCurso;
      this.form.idTipoCurso = oficio.data[0].idTipoCurso;
      this.form.recibiraCurso = oficio.data[0].recibiraCurso;
      this.form.valido = oficio.data[0].valido;
    },

    send() {
      this.form.valido = ESTATUS_ENVIADO_VALIDACION;
      this.store();
    },

    validate() {
      this.form.valido = ESTATUS_VALIDADO;
      this.store();
    },

    async store() {
      if (this.$refs.form_oficio.validate()) {
        try {
          if (this.id) await AuthService.updateOficioSolicitud(this.form);
          else {
            this.form.fecha = new Date().toISOString().split("T")[0];
            this.form.calle = "NA";
            this.form.numero = "NA";
            this.form.colonia = "NA";
            this.form.localidad = "NA";
            this.form.c_Municipio = 67;
            this.form.cp = "NA";
            this.form.director_general = "NA";
            this.form.contenido = "NA";
            await AuthService.createOficioSolicitud(this.form);
          }
          Object.assign(this.$data, this.$options.data());
          this.$refs.form_oficio.resetValidation();
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
