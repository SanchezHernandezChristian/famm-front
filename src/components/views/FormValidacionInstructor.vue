<template>
  <v-container fluid>
    <v-form ref="form_teacher" lazy-validation>
      <v-row justify="center" dense class="mt-1">
        <v-col cols="4">
          <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                dense
                outlined
                label="Fecha de ingreso"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                :rules="[rules.required]"
                v-model="teacher.fecha_ingreso"
              ></v-text-field>
            </template>
            <v-date-picker
              :max="
                new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                  .toISOString()
                  .substr(0, 10)
              "
              locale="es-MX"
              min="1950-01-01"
              :rules="[rules.required]"
              v-model="teacher.fecha_ingreso"
              @input="menu2 = false"
              :disabled="mode > 1"
            ></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
      <v-row justify="center" class="mt-0">
        <v-col cols="5">
          <v-radio-group
            label="Estatus"
            dense
            row
            :rules="[rules.required]"
            v-model="teacher.estatus"
            :readonly="mode > 1"
          >
            <v-radio
              dense
              label="NUEVO INGRESO"
              value="0"
              class="font-weight-black"
            ></v-radio>
            <v-radio
              dense
              label="EN SERVICIO"
              value="1"
              class="font-weight-black"
            ></v-radio>
            <v-spacer></v-spacer>
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="4">
          <v-text-field
            label="Clave del instructor"
            dense
            outlined
            :rules="[rules.required]"
            v-model="teacher.clave"
            :readonly="mode > 1"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center" class="mt-0">
        <v-col cols="5">
          <v-radio-group
            label="Certificado"
            dense
            row
            :rules="[rules.required]"
            v-model="teacher.certificado"
            :readonly="mode > 1"
          >
            <v-radio
              dense
              label="EN COMPETENCIA LABORAL"
              value="0"
              class="font-weight-black"
            ></v-radio>
            <v-radio
              dense
              label="EN ROCO"
              value="1"
              class="font-weight-black"
            ></v-radio>
            <v-spacer></v-spacer>
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="4">
          <v-file-input
            label="Fotografía"
            outlined
            dense
            show-size
            accept="image/png, image/jpeg, image/bmp"
            :rules="[rules.size]"
            @change="selectFile"
            v-show="enableEditPicture || mode < 1"
            :disabled="mode > 1"
          ></v-file-input>
          <div id="input-usage">
            <v-input
              append-icon="mdi-close"
              prepend-icon="mdi-paperclip"
              @click="clickedEditPicture"
              v-show="!enableEditPicture && mode > 0"
              :disabled="mode > 1"
            >
              imagen_guardada.jpg
            </v-input>
          </div>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="2" class="text-right">
          <strong>NOMBRE:</strong>
        </v-col>
        <v-col cols="3">
          <v-text-field
            label="Nombre"
            dense
            outlined
            :rules="[rules.required]"
            v-model="teacher.nombre"
            :readonly="mode > 1"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
            label="Primer apellido"
            dense
            outlined
            :rules="[rules.required]"
            v-model="teacher.apellido_paterno"
            :readonly="mode > 1"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
            label="Segundo apellido"
            dense
            outlined
            v-model="teacher.apellido_materno"
            :readonly="mode > 1"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="2" class="text-right">
          <strong>DOMICILIO:</strong>
        </v-col>
        <v-col cols="3">
          <v-text-field
            label="Calle"
            dense
            outlined
            :rules="[rules.required]"
            v-model="teacher.calle"
            :readonly="mode > 1"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
            label="Número"
            dense
            outlined
            :rules="[rules.required, rules.natural_number]"
            v-model="teacher.numero"
            :readonly="mode > 1"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
            label="Colonia"
            dense
            outlined
            :rules="[rules.required]"
            v-model="teacher.colonia"
            :readonly="mode > 1"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="3">
          <v-autocomplete
            dense
            outlined
            v-model="teacher.c_Municipio"
            :rules="[rules.required]"
            :items="items_municipios"
            item-text="Descripcion"
            item-value="c_Municipio"
            class="bordeRedondoElement"
            label="Municipio"
            :readonly="mode > 1"
          ></v-autocomplete>
        </v-col>
        <v-col cols="3">
          <v-text-field
            label="Localidad"
            dense
            outlined
            :rules="[rules.required]"
            v-model="teacher.localidad"
            :readonly="mode > 1"
          ></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-text-field
            label="Código postal"
            dense
            outlined
            :rules="[rules.required, rules.natural_number]"
            v-model="teacher.cp"
            :readonly="mode > 1"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="4">
          <v-text-field
            label="Número de celular"
            dense
            outlined
            :rules="[rules.required, rules.phone_number]"
            v-model="teacher.telefono"
            :readonly="mode > 1"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="4">
          <v-text-field
            label="Estado civil"
            dense
            outlined
            :rules="[rules.required]"
            v-model="teacher.estado_civil"
            :readonly="mode > 1"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="4">
          <v-text-field
            label="Nacionalidad"
            dense
            outlined
            :rules="[rules.required]"
            v-model="teacher.nacionalidad"
            :readonly="mode > 1"
          ></v-text-field
        ></v-col>
      </v-row>
      <v-row justify="center" dense>
        <v-col cols="4">
          <v-menu
            v-model="menu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                dense
                outlined
                label="Fecha de nacimiento"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                :rules="[rules.required]"
                v-model="teacher.fecha_nacimiento"
              ></v-text-field>
            </template>
            <v-date-picker
              :max="
                new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                  .toISOString()
                  .substr(0, 10)
              "
              locale="es-MX"
              min="1950-01-01"
              :rules="[rules.required]"
              v-model="teacher.fecha_nacimiento"
              @input="menu = false"
              :disabled="mode > 1"
            ></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="4">
          <v-text-field
            label="Edad"
            dense
            outlined
            :rules="[rules.required, rules.natural_number]"
            v-model="teacher.edad"
            :readonly="mode > 1"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center" dense>
        <v-col cols="4">
          <v-radio-group
            label="Sexo"
            row
            :rules="[rules.required]"
            v-model="teacher.sexo"
            :readonly="mode > 1"
          >
            <v-radio
              dense
              label="FEMENINO"
              value="M"
              class="font-weight-black"
            ></v-radio>
            <v-radio
              dense
              label="MASCULINO"
              value="H"
              class="font-weight-black"
            ></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="2" class="text-right">
          <strong>IDENTIFICACIÓN:</strong>
        </v-col>
        <v-col cols="3">
          <v-text-field
            label="RFC"
            dense
            outlined
            :rules="[rules.required]"
            v-model="teacher.rfc"
            :readonly="mode > 1"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
            label="CURP"
            dense
            outlined
            :rules="[rules.required]"
            v-model="teacher.curp"
            :readonly="mode > 1"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="4">
          <v-text-field
            label="Registro NSS"
            dense
            outlined
            :rules="[rules.required]"
            v-model="teacher.numero_registro"
            :readonly="mode > 1"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="2" class="text-right">
          <strong>ESCOLARIDAD:</strong>
        </v-col>
        <v-col cols="3">
          <v-autocomplete
            dense
            outlined
            :rules="[rules.required]"
            :items="items_escolaridad"
            item-text="nombre"
            item-value="id"
            label="Último grado de estudios"
            v-model="teacher.idEscolaridad"
            :readonly="mode > 1"
          ></v-autocomplete>
        </v-col>
        <v-col cols="3">
          <v-text-field
            dense
            outlined
            :rules="[rules.required]"
            item-text="nombre"
            item-value="id"
            label="Carrera"
            v-model="teacher.profesion"
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
            v-model="teacher.comentarios_valido"
            v-if="role < 1"
          ></v-textarea>
          <v-textarea
            dense
            auto-grow
            outlined
            rows="3"
            row-height="25"
            shaped
            label="Comentarios"
            :rules="[rules.required]"
            v-model="teacher.comentarios_valido_ds"
            v-else
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row justify="center" v-if="mode > 0">
        <v-col cols="12" class="text-right">
          <v-btn
            color="warning"
            dark
            class="m-1"
            @click="validate()"
            v-show="showValidateButton()"
          >
            Validar
          </v-btn>
          <v-btn class="m-1" @click="reject()" v-show="showValidateButton()">
            Rechazar
          </v-btn>
          <v-btn
            color="orange"
            dark
            class="m-1"
            @click="store()"
            v-show="mode == 1"
          >
            Guardar cambios
          </v-btn>
          <v-btn class="m-1" @click="close()">Cancelar</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import AuthService from "@/services/AuthService.js";

export default {
  name: "FormValidacionInstructor",
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
      counter: (value) => value.length <= 20 || "Max 20 caracteres",
      phone_number: (value) => {
        const pattern_pnumber = /^\d{10}$/;
        return pattern_pnumber.test(value) || "Número telefónico inválido";
      },
      natural_number: (value) => {
        const pattern_natnumber = /^[0-9]+$/;
        return pattern_natnumber.test(value) || "Número inválido";
      },
      size: (value) =>
        !value ||
        value.size < 1000000 ||
        "El archivo debe pesar menos de 1 MB!",
    },
    menu: false,
    menu2: false,
    items_municipios: [],
    items_escolaridad: [],
    teacher: {
      id: null,
      idDocente: null,
      fecha_ingreso: null,
      estatus: null,
      clave: null,
      certificado: null,
      fotografia: null,
      nombre: null,
      apellido_paterno: null,
      apellido_materno: null,
      calle: null,
      numero: null,
      colonia: null,
      localidad: null,
      c_Municipio: null,
      cp: null,
      telefono: null,
      estado_civil: null,
      nacionalidad: null,
      fecha_nacimiento: null,
      edad: null,
      sexo: null,
      rfc: null,
      curp: null,
      numero_registro: null,
      idEscolaridad: null,
      profesion: null,
      esValido: null,
      esValidoDs: null,
      comentarios_valido: null,
      comentarios_valido_ds: null,
    },
    role: 0, // 0 = ADMINISTRADOR UNIDAD, 1 = DEPARTAMENTO DE SUPERVISIÓN ACADEMICA
    enableEditPicture: false,
    teacherEdit: false, // Determina si un docente accesa el formulario
  }),

  async mounted() {
    let me = this;
    if (me.$store.getters.isLoggedIn) {
      try {
        const response = await AuthService.getMunicipios();
        const response2 = await AuthService.getEscolaridad();
        const response4 = await AuthService.getProfile();
        me.items_municipios = response.municipios;
        me.items_escolaridad = response2.data;
        if (me.mode > 0) {
          const response3 = await AuthService.getDocente(me.id);
          me.teacher = response3.data;
          me.teacher.c_Municipio = parseInt(response3.data.c_Municipio);
          me.teacher.estatus = response3.data.estatus.toString();
          me.teacher.certificado = response3.data.certificado.toString();
          me.teacher.esValido = response3.data.esValido == 1 ? 1 : 0;
          me.teacher.esValidoDs = response3.data.esValidoDs == 1 ? 1 : 0;
          me.teacher.id = me.teacher.idDocente;
        } else {
          me.teacher.nombre = response4.nombres;
          me.teacher.apellido_paterno = response4.primer_apellido;
          me.teacher.apellido_materno = response4.segundo_apellido;
        }
        if (response4.Rol == "ADMINISTRADOR UNIDAD") me.role = 0;
        else me.role = 1;
        me.teacherEdit = response4.Rol == "PROFESOR";
      } catch (error) {
        console.log("Error", error.response);
      }
    }
  },

  methods: {
    async store() {
      let me = this;
      if (me.$refs.form_teacher.validate()) {
        try {
          let formData = new FormData();
          let idDocente = me.teacher.idDocente;
          if (me.teacherEdit) {
            me.teacher.esValido = -1;
            me.teacher.esValidoDs = -1;
          }
          for (const key in me.teacher) {
            formData.append(key, me.teacher[key]);
          }
          if (me.mode > 0) {
            formData.append("_method", "PUT");
            await AuthService.updateTeacher(formData);
          } else {
            let response = await AuthService.addTeacher(formData);
            idDocente = response.data;
          }
          Object.assign(me.$data, me.$options.data());
          me.$refs.form_teacher.resetValidation();
          me.$swal(
            "Hecho",
            "Información guardada correctamente.",
            "success"
          ).then(() => {
            me.close();
            this.$emit("saved", idDocente);
          });
        } catch (error) {
          console.log(error);
          me.$swal(
            "Error",
            "Error al intentar guardar la información.",
            "error"
          );
        }
      } else {
        me.$swal(
          "Advertencia",
          "No ha completado la información solicitada.",
          "warning"
        );
      }
    },

    validate() {
      if (this.role < 1) this.teacher.esValido = 1;
      else this.teacher.esValidoDs = 1;
      this.store();
    },

    reject() {
      if (this.role < 1) this.teacher.esValido = 0;
      else this.teacher.esValidoDs = 0;
      this.store();
    },

    showValidateButton() {
      if (this.role < 1) {
        return this.mode == 2 && this.teacher.esValido < 1;
      } else {
        return this.mode == 2 && this.teacher.esValidoDs < 1;
      }
    },

    selectFile(file) {
      this.teacher.fotografia = file;
    },

    clickedEditPicture() {
      this.enableEditPicture = true;
    },

    close() {
      this.$emit("close");
    },
  },
};
</script>

<style>
#input-usage .v-input__slot {
  border: 1px solid rgba(0, 0, 0, 0.4);
  padding-bottom: 12px;
  padding-top: 12px;
  padding-left: 10px;
}
</style>
