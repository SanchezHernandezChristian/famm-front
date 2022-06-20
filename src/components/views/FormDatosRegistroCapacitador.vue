<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" class="m-0 p-0">
        <div class="indigo darken-4 text-center">
          <p class="white--text pt-3 mb-2">
            Facilitador para el Acceso a Módulos tecnológicos y Monitoreo
            educativo
          </p>
        </div>
      </v-col>
      <v-col cols="12" class="m-0 p-0">
        <div class="text-center">
          <h5>
            <p style="color: #394f79">
              <strong
                >CÉDULA DE IDENTIFICACIÓN DEL INSTRUCTOR FORMATO RPDC-11</strong
              >
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
      <v-col cols="12" class="m-0 p-0">
        <div class="text-center">
          <h5>
            <p style="color: #394f79"><strong>DATOS DEL INSTRUCTOR</strong></p>
          </h5>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-form ref="form_teacher" lazy-validation>
          <v-stepper non-linear v-model="e1">
            <v-stepper-header>
              <v-stepper-step step="1" editable :rules="[() => s1_valid]">
                Información
              </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step step="2" editable :rules="[() => s1_valid]">
                Experiencia
              </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step step="3" editable :rules="[() => s1_valid]">
                Documentos
              </v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
              <v-stepper-content step="1">
                <v-card class="mb-12">
                  <v-row justify="center">
                    <v-col cols="3">
                      <v-text-field
                        label="Nombre"
                        :rules="[rules.required]"
                        v-model="teacher.nombre"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-text-field
                        label="Primer apellido"
                        :rules="[rules.required]"
                        v-model="teacher.apellido_paterno"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-text-field
                        label="Segundo apellido"
                        :rules="[rules.required]"
                        v-model="teacher.apellido_materno"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row justify="center"
                    ><v-col cols="2"
                      ><v-text-field
                        label="Calle"
                        :rules="[rules.required]"
                        v-model="teacher.calle"
                      ></v-text-field></v-col
                    ><v-col cols="2">
                      <v-text-field
                        label="Número"
                        :rules="[rules.required, rules.natural_number]"
                        v-model="teacher.numero"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="2">
                      <v-text-field
                        label="Colonia"
                        :rules="[rules.required]"
                        v-model="teacher.colonia"
                      ></v-text-field></v-col
                  ></v-row>
                  <v-row justify="center">
                    <v-col cols="4">
                      <v-file-input
                        label="Fotografía"
                        outlined
                        dense
                        show-size
                        accept="image/png, image/jpeg, image/bmp"
                        :rules="[rules.size]"
                        v-model="teacher.fotografia"
                      ></v-file-input>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="4">
                      <v-autocomplete
                        dense
                        v-model="teacher.c_Municipio"
                        :rules="[rules.required]"
                        :items="items_municipios"
                        item-text="Descripcion"
                        item-value="c_Municipio"
                        outlined
                        style="height: 80px"
                        class="bordeRedondoElement"
                        label="Seleccione un municipio"
                      ></v-autocomplete>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="4">
                      <v-text-field
                        label="Email"
                        dense
                        outlined
                        :rules="[rules.required, rules.email]"
                        v-model="teacher.email"
                      ></v-text-field
                    ></v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="3">
                      <v-text-field
                        label="Curp"
                        dense
                        outlined
                        :rules="[rules.required]"
                        v-model="teacher.curp"
                      ></v-text-field
                    ></v-col>
                    <v-col cols="3">
                      <v-text-field
                        label="RFC"
                        dense
                        outlined
                        :rules="[rules.required]"
                        v-model="teacher.rfc"
                      ></v-text-field
                    ></v-col>
                  </v-row>
                  <v-row justify="center">
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
                            new Date(
                              Date.now() -
                                new Date().getTimezoneOffset() * 60000
                            )
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
                        label="Nacionalidad"
                        dense
                        outlined
                        :rules="[rules.required]"
                        v-model="teacher.nacionalidad"
                      ></v-text-field
                    ></v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="4">
                      <v-text-field
                        label="Edad"
                        dense
                        outlined
                        :rules="[rules.required, rules.natural_number]"
                        v-model="teacher.edad"
                      ></v-text-field
                    ></v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="4">
                      <v-select
                        dense
                        outlined
                        :rules="[rules.required]"
                        :items="items_estadocivil"
                        item-text="text"
                        item-value="value"
                        v-model="teacher.estado_civil"
                        label="Estado civil"
                      ></v-select>
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
                      ></v-text-field
                    ></v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="4">
                      <v-select
                        dense
                        outlined
                        :rules="[rules.required]"
                        :items="items_grupovulnerable"
                        item-text="nombre"
                        item-value="id"
                        v-model="teacher.grupo_vulnerable"
                        label="Grupo vulnerable"
                      ></v-select>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="4">
                      <v-autocomplete
                        dense
                        outlined
                        :rules="[rules.required]"
                        :items="items_discapacidades"
                        item-text="nombre"
                        item-value="id"
                        align="center"
                        label="Discapacidad"
                        v-model="teacher.idDiscapacidad"
                      ></v-autocomplete>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="4">
                      <v-autocomplete
                        dense
                        outlined
                        :rules="[rules.required]"
                        :items="items_pertenece"
                        item-text="nombre"
                        item-value="id"
                        label="Pertenece a"
                        v-model="teacher.idPertenece"
                      ></v-autocomplete>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="3">
                      <v-autocomplete
                        dense
                        outlined
                        :rules="[rules.required]"
                        :items="items_escolaridad"
                        item-text="nombre"
                        item-value="id"
                        label="Escolaridad"
                        v-model="teacher.idEscolaridad"
                      ></v-autocomplete>
                    </v-col>
                    <v-col cols="3">
                      <v-autocomplete
                        dense
                        outlined
                        :rules="[rules.required]"
                        :items="items_documentos"
                        item-text="nombre"
                        item-value="id"
                        label="Documento obtenido"
                        v-model="teacher.idDocumento"
                      ></v-autocomplete>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="4">
                      <v-radio-group
                        label="Lengua indígena"
                        row
                        :rules="[rules.required]"
                        v-model="teacher.lengua_indigena"
                      >
                        <v-radio
                          dense
                          label="SÍ"
                          value="1"
                          class="font-weight-black"
                        ></v-radio>
                        <v-radio
                          dense
                          label="NO"
                          value="0"
                          class="font-weight-black"
                        ></v-radio>
                        <v-spacer></v-spacer>
                      </v-radio-group>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="4">
                      <v-textarea
                        dense
                        auto-grow
                        outlined
                        rows="3"
                        row-height="25"
                        shaped
                        :rules="[rules.required]"
                        v-model="teacher.motivo"
                      ></v-textarea>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="4">
                      <v-radio-group
                        label="Situación laboral"
                        row
                        :rules="[rules.required]"
                        v-model="teacher.situacion_laboral"
                      >
                        <v-radio
                          dense
                          label="EMPLEADO"
                          value="1"
                          class="font-weight-black"
                        ></v-radio>
                        <v-radio
                          dense
                          label="DESEMPLEADO"
                          value="0"
                          class="font-weight-black"
                        ></v-radio>
                        <v-spacer></v-spacer>
                      </v-radio-group>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="4">
                      <label for="signature">Firma del capacitando:</label>
                      <VueSignaturePad
                        name="signature"
                        width="500px"
                        height="500px"
                        ref="signaturePad"
                        class="signature-pad"
                      />
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="4">
                      <v-text-field
                        label="Fecha de ingreso"
                        prepend-icon="mdi-calendar"
                        :rules="[rules.required]"
                        v-model="teacher.fecha_ingreso"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="4">
                      <v-radio-group
                        label="Estatus"
                        row
                        :rules="[rules.required]"
                        v-model="teacher.estatus"
                      >
                        <v-radio
                          dense
                          label="NUEVO INGRESO"
                          value="N"
                          class="font-weight-black"
                        ></v-radio>
                        <v-radio
                          dense
                          label="EN SERVICIO"
                          value="S"
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
                        outlined
                        :rules="[rules.required]"
                        v-model="teacher.clave"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="6">
                      <v-radio-group
                        label="Certificado"
                        row
                        :rules="[rules.required]"
                        v-model="teacher.certificado"
                      >
                        <v-radio
                          dense
                          label="EN COMPETENCIA LABORAL"
                          value="C"
                          class="font-weight-black"
                        ></v-radio>
                        <v-radio
                          dense
                          label="EN ROCO"
                          value="R"
                          class="font-weight-black"
                        ></v-radio>
                        <v-spacer></v-spacer>
                      </v-radio-group>
                    </v-col>
                  </v-row>
                  <v-row justify="center"
                    ><v-col cols="4">
                      <v-text-field
                        label="Registro número"
                        dense
                        outlined
                        :rules="[rules.required]"
                        v-model="teacher.registro"
                      ></v-text-field> </v-col
                  ></v-row>
                </v-card>

                <v-btn color="primary" @click="e1++"> Continuar </v-btn>

                <v-btn text> Volver </v-btn>
              </v-stepper-content>

              <v-stepper-content step="2">
                <v-card class="mb-12">
                  <strong>EXPERIENCIA COMO INSTRUCTOR</strong>
                  <v-row justify="center" class="mt-1">
                    <v-col cols="6">
                      <v-text-field
                        label="Nombre del curso o especialidad"
                        dense
                        outlined
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        label="Institución o empresa en que impartió"
                        dense
                        outlined
                      >
                      </v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        label="Periodo inicio - término"
                        dense
                        outlined
                      >
                      </v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        label="Comprobante o documento que lo acredita"
                        dense
                        outlined
                      >
                      </v-text-field>
                    </v-col>
                  </v-row>
                  <strong>FORMACIÓN DOCENTE (PARA INSTRUCTOR)</strong>
                  <v-row justify="center" class="mt-1">
                    <v-col cols="6">
                      <v-text-field label="Curso recibido" dense outlined>
                      </v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field label="Institución" dense outlined>
                      </v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        label="Periodo inicio - término"
                        dense
                        outlined
                      >
                      </v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        label="Documento que lo acredita"
                        dense
                        outlined
                      >
                      </v-text-field>
                    </v-col>
                  </v-row>
                  <strong>EXPERIENCIA LABORAL</strong>
                  <v-row justify="center" class="mt-1">
                    <v-col cols="6">
                      <v-text-field
                        label="Institución, organización o empresa"
                        dense
                        outlined
                      >
                      </v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field label="Puesto" dense outlined>
                      </v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field label="Periodo: año-mes" dense outlined>
                      </v-text-field>
                    </v-col>
                  </v-row>
                  <strong>OFERTA DE CAPACITACIÓN</strong>
                  <v-row justify="center" class="mt-1">
                    <v-col cols="6">
                      <v-text-field
                        label="Enliste los cursos que puede impartir"
                        dense
                        outlined
                      >
                      </v-text-field>
                    </v-col>
                  </v-row>
                </v-card>

                <v-btn color="primary" @click="e1++"> Continuar </v-btn>

                <v-btn text @click="e1--"> Volver </v-btn>
              </v-stepper-content>

              <v-stepper-content step="3">
                <v-card class="mb-12">
                  <strong>DOCUMENTOS QUE PRESENTA</strong>
                  <v-row justify="center">
                    <v-col cols="4">
                      <v-file-input
                        label="Acta de nacimiento (copia)"
                        outlined
                        dense
                        show-size
                        accept="image/png, image/jpeg, image/bmp, application/pdf"
                        :rules="[rules.size]"
                      ></v-file-input>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="4">
                      <v-file-input
                        label="Comprobante de domicilio (copia)"
                        outlined
                        dense
                        show-size
                        accept="image/png, image/jpeg, image/bmp, application/pdf"
                        :rules="[rules.size]"
                      ></v-file-input>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="4">
                      <v-file-input
                        label="Credencial de elector (copia)"
                        outlined
                        dense
                        show-size
                        accept="image/png, image/jpeg, image/bmp, application/pdf"
                        :rules="[rules.size]"
                      ></v-file-input>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="4">
                      <v-file-input
                        label="Curriculum vitae (original y 2 copias)"
                        outlined
                        dense
                        show-size
                        accept="image/png, image/jpeg, image/bmp, application/pdf"
                        :rules="[rules.size]"
                      ></v-file-input>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="4">
                      <v-file-input
                        label="CURP (copia)"
                        outlined
                        dense
                        show-size
                        accept="image/png, image/jpeg, image/bmp, application/pdf"
                        :rules="[rules.size]"
                      ></v-file-input>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="4">
                      <v-file-input
                        label="Registro Secretaría del Trabajo y Prevención Social (copia)"
                        outlined
                        dense
                        show-size
                        accept="image/png, image/jpeg, image/bmp, application/pdf"
                        :rules="[rules.size]"
                      ></v-file-input>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="4">
                      <v-file-input
                        label="Título o carta de pasante (copia)"
                        outlined
                        dense
                        show-size
                        accept="image/png, image/jpeg, image/bmp, application/pdf"
                        :rules="[rules.size]"
                      ></v-file-input>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="4">
                      <v-file-input
                        label="Diplomas y constancias (copias)"
                        outlined
                        dense
                        show-size
                        accept="image/png, image/jpeg, image/bmp, application/pdf"
                        :rules="[rules.size]"
                      ></v-file-input>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="4">
                      <v-file-input
                        label="Otros (certificado)"
                        outlined
                        dense
                        show-size
                        accept="image/png, image/jpeg, image/bmp, application/pdf"
                        :rules="[rules.size]"
                      ></v-file-input>
                    </v-col>
                  </v-row>
                </v-card>

                <v-btn class="m-1" @click="e1--"> Volver </v-btn>

                <v-btn color="success" dark class="m-1" @click="store"
                  >Guardar</v-btn
                >
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AuthService from "@/services/AuthService.js";

export default {
  data() {
    return {
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
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Correo inválido";
        },
      },
      e1: 1,
      s1_valid: true,
      s2_valid: true,
      s3_valid: true,
      menu: false,
      items_municipios: [],
      items_discapacidades: [],
      items_pertenece: [],
      items_escolaridad: [],
      items_documentos: [
        { id: 1, nombre: "CARTA DE PASANTE" },
        { id: 2, nombre: "CERTIFICADO" },
        { id: 3, nombre: "TÍTULO PROFESIONAL" },
      ],
      items_grupovulnerable: [
        { id: 1, nombre: "SI" },
        { id: 2, nombre: "NO" },
      ],
      items_estadocivil: [
        { value: "S", text: "SOLTERO(A)" },
        { value: "C", text: "CASADO(A)" },
        { value: "V", text: "VIUDO(A)" },
        { value: "D", text: "DIVORCIADO(A)" },
      ],
      teacher: {
        nombre: null,
        apellido_paterno: null,
        apellido_materno: null,
        domicilio: null,
        calle: null,
        numero: null,
        colonia: null,
        fotografia: null,
        c_Municipio: null,
        email: null,
        curp: null,
        sexo: null,
        fecha_nacimiento: null,
        nacionalidad: null,
        edad: null,
        estado_civil: null,
        telefono: null,
        grupo_vulnerable: null,
        idDiscapacidad: null,
        idPertenece: null,
        idEscolaridad: null,
        lengua_indigena: null,
        motivo: null,
        situacion_laboral: null,
        firma_capacitando: null,
        /**Nuevos datos */
        fecha_ingreso: null,
        estatus: null,
        clave: null,
        certificado: null,
        rfc: null,
        registro: null,
        idDocumento: null,
      },
    };
  },

  async mounted() {
    let me = this;
    if (me.$store.getters.isLoggedIn) {
      try {
        const response2 = await AuthService.getMunicipios();
        const response3 = await AuthService.getDiscapacidades();
        const response4 = await AuthService.getEscolaridad();
        const response5 = await AuthService.getPertenece();
        me.items_municipios = response2.municipios;
        me.items_discapacidades = response3.data;
        me.items_escolaridad = response4.data;
        me.items_pertenece = response5.data;
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
          me.teacher.grupo_vulnerable == 2 ? 0 : 1;
          me.teacher.domicilio = `${me.teacher.calle} ${me.teacher.numero} ${me.teacher.colonia}`;
          await AuthService.addTeacher(me.teacher);
          Object.assign(me.$data, me.$options.data());
          me.$refs.form_teacher.resetValidation();
          me.$swal(
            "Hecho",
            "Información guardada correctamente.",
            "success"
          ).then(() => {
            me.$router.push("/page-principal");
          });
        } catch (error) {
          console.log(error.response);
          me.$swal(
            "Error",
            "Error al intentar guardar la información.",
            "error"
          );
        }
      } else {
        me.s1_valid = false;
        me.$swal(
          "Advertencia",
          "No ha completado la información solicitada.",
          "warning"
        );
      }
    },
  },
};
</script>

<style scoped>
.signature-pad {
  border-style: solid;
  border-width: 1px;
}
</style>
