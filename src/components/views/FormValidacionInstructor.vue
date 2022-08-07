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
          ></v-file-input>
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
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
            label="Primer apellido"
            dense
            outlined
            :rules="[rules.required]"
            v-model="teacher.apellido_paterno"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
            label="Segundo apellido"
            dense
            outlined
            v-model="teacher.apellido_materno"
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
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
            label="Número"
            dense
            outlined
            :rules="[rules.required, rules.natural_number]"
            v-model="teacher.numero"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
            label="Colonia"
            dense
            outlined
            :rules="[rules.required]"
            v-model="teacher.colonia"
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
          ></v-autocomplete>
        </v-col>
        <v-col cols="3">
          <v-text-field
            label="Localidad"
            dense
            outlined
            :rules="[rules.required]"
            v-model="teacher.localidad"
          ></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-text-field
            label="Código postal"
            dense
            outlined
            :rules="[rules.required, rules.natural_number]"
            v-model="teacher.cp"
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
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
            label="CURP"
            dense
            outlined
            :rules="[rules.required]"
            v-model="teacher.curp"
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
          ></v-autocomplete>
        </v-col>
        <v-col cols="3">
          <v-text-field
            dense
            outlined
            :rules="[rules.required]"
            item-text="nombre"
            item-value="id"
            label="Documento obtenido"
            v-model="teacher.documento_obtenido"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center" v-if="validate == 1">
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
            v-model="checkTeacher.comentarios"
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" class="text-right">
          <v-btn
            color="warning"
            dark
            class="m-1"
            @click="store(true)"
            v-show="validate == 1"
            >Validar</v-btn
          >
          <v-btn class="m-1" @click="reject" v-show="validate == 1"
            >Rechazar</v-btn
          >
          <v-btn
            color="primary"
            dark
            class="m-1"
            @click="store"
            v-show="validate == 0"
            >Guardar cambios</v-btn
          >
          <v-btn class="m-1" @click="close">Cancelar</v-btn>
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
    validate: {
      type: Number,
      default: 0,
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
      nombre: null,
      apellido_paterno: null,
      apellido_materno: null,
      calle: null,
      numero: null,
      colonia: null,
      localidad: null,
      cp: null,
      fotografia: null,
      c_Municipio: null,
      curp: null,
      sexo: null,
      fecha_nacimiento: null,
      nacionalidad: null,
      edad: null,
      estado_civil: null,
      telefono: null,
      idEscolaridad: null,
      fecha_ingreso: null,
      estatus: null,
      clave: null,
      certificado: null,
      rfc: null,
      numero_registro: null,
      documento_obtenido: null,
      lengua_indigena: 0,
      motivo: "EMPLEO",
      situacion_laboral: 1,
    },
    checkTeacher: {
      idDocente: null,
      comentarios: null,
    },
  }),

  async mounted() {
    let me = this;
    if (me.$store.getters.isLoggedIn) {
      try {
        const response = await AuthService.getMunicipios();
        const response2 = await AuthService.getEscolaridad();
        const response3 = await AuthService.getDocente(me.id);
        me.items_municipios = response.municipios;
        me.items_escolaridad = response2.data;
        me.teacher = response3.data;
        me.teacher.estatus = response3.data.estatus.toString();
        me.teacher.certificado = response3.data.certificado.toString();
        me.teacher.id = me.teacher.idDocente;
        me.teacher.documento_obtenido = "TITULO PROFESIONAL";
      } catch (error) {
        console.log("Error", error.response);
      }
    }
  },

  methods: {
    async store(validate = false) {
      let me = this;
      if (me.$refs.form_teacher.validate()) {
        try {
          /* let data = new FormData();
          for (const key in me.teacher) {
            data.append(key, me.teacher[key]);
          }
          console.log(data); */
          if (validate) {
            me.teacher.estatus = 1;
          }
          await AuthService.updateTeacher(me.teacher);
          Object.assign(me.$data, me.$options.data());
          me.$refs.form_teacher.resetValidation();
          me.$swal(
            "Hecho",
            "Información guardada correctamente.",
            "success"
          ).then(() => {
            me.close();
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

    reject() {},

    selectFile(file) {
      this.teacher.fotografia = file;
    },

    close() {
      this.$emit("close");
    },
  },
};
</script>
