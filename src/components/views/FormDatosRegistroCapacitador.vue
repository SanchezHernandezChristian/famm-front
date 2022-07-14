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
        <v-stepper non-linear v-model="e1">
          <v-stepper-header>
            <v-stepper-step step="1" editable :rules="[() => s1_valid]">
              Información
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="2" editable :rules="[() => s2_valid]">
              Experiencia
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="3" editable :rules="[() => s3_valid]">
              Documentos
            </v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <v-card class="mb-12">
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
                </v-form>
              </v-card>

              <v-btn color="primary" @click="store"> Guardar </v-btn>

              <v-btn text> Volver </v-btn>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-card class="mb-12">
                <v-form ref="form_experiencia" lazy-validation>
                  <strong>EXPERIENCIA COMO INSTRUCTOR</strong>
                  <ExperienciaDocente
                    v-for="(row, index) in s2row1"
                    :key="'s2row1' + index"
                  />
                  <v-row justify="center" class="mt-1">
                    <v-col cols="3">
                      <v-btn elevation="2" small class="mr-2" @click="s2row1++"
                        >Añadir otro</v-btn
                      >
                      <v-btn
                        elevation="2"
                        small
                        @click="s2row1 > 1 ? s2row1-- : s2row1"
                        >Borrar</v-btn
                      >
                    </v-col>
                  </v-row>
                  <strong>FORMACIÓN DOCENTE (PARA INSTRUCTOR)</strong>
                  <FormacionDocente
                    v-for="(row, index) in s2row2"
                    :key="'s2row2' + index"
                  />
                  <v-row justify="center" class="mt-1">
                    <v-col cols="3">
                      <v-btn elevation="2" small class="mr-2" @click="s2row2++"
                        >Añadir otro</v-btn
                      >
                      <v-btn
                        elevation="2"
                        small
                        @click="s2row2 > 1 ? s2row2-- : s2row2"
                        >Borrar</v-btn
                      >
                    </v-col>
                  </v-row>
                  <strong>EXPERIENCIA LABORAL</strong>
                  <ExperienciaLaboralDocente
                    v-for="(row, index) in s2row3"
                    :key="'s2row3' + index"
                  />
                  <v-row justify="center" class="mt-1">
                    <v-col cols="3">
                      <v-btn elevation="2" small class="mr-2" @click="s2row3++"
                        >Añadir otro</v-btn
                      >
                      <v-btn
                        elevation="2"
                        small
                        @click="s2row3 > 1 ? s2row3-- : s2row3"
                        >Borrar</v-btn
                      >
                    </v-col>
                  </v-row>
                  <strong>OFERTA DE CAPACITACIÓN</strong>
                  <v-row class="mt-1">
                    <v-col cols="8">
                      <v-autocomplete
                        dense
                        outlined
                        multiple
                        :rules="[rules.required]"
                        :items="items_cursos"
                        item-text="nombre_curso"
                        item-value="idCurso"
                        label="Enliste los cursos que puede impartir"
                        v-model="expTeacher.cursos"
                      ></v-autocomplete>
                    </v-col>
                    <v-col cols="6"></v-col>
                  </v-row>
                </v-form>
              </v-card>

              <v-btn color="primary" @click="store2"> Guardar </v-btn>

              <v-btn text @click="e1--"> Volver </v-btn>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-card class="mb-12">
                <v-form ref="form_documentos" lazy-validation>
                  <strong>DOCUMENTOS QUE PRESENTA</strong>
                  <v-row justify="center">
                    <v-col cols="4">
                      <v-file-input
                        label="Acta de nacimiento (copia)"
                        outlined
                        dense
                        show-size
                        accept="image/png, image/jpeg, image/bmp, application/pdf"
                        :rules="[rules.required, rules.size]"
                        ref="acta_nacimiento"
                        v-model="files.acta_nacimiento"
                      ></v-file-input>
                    </v-col>
                    <v-col cols="2">
                      <v-btn elevation="2" small class="mr-2">Cargar</v-btn>
                      <v-btn
                        elevation="2"
                        small
                        @click="removeFile('acta_nacimiento')"
                        >Borrar</v-btn
                      >
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
                        :rules="[rules.required, rules.size]"
                        ref="comprobante"
                        v-model="files.comprobante"
                      ></v-file-input>
                    </v-col>
                    <v-col cols="2">
                      <v-btn elevation="2" small class="mr-2">Cargar</v-btn>
                      <v-btn
                        elevation="2"
                        small
                        @click="removeFile('comprobante')"
                        >Borrar</v-btn
                      >
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
                        :rules="[rules.required, rules.size]"
                        ref="ine"
                        v-model="files.ine"
                      ></v-file-input>
                    </v-col>
                    <v-col cols="2">
                      <v-btn elevation="2" small class="mr-2">Cargar</v-btn>
                      <v-btn elevation="2" small @click="removeFile('ine')"
                        >Borrar</v-btn
                      >
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
                        :rules="[rules.required, rules.size]"
                        ref="cv"
                        v-model="files.cv"
                      ></v-file-input>
                    </v-col>
                    <v-col cols="2">
                      <v-btn elevation="2" small class="mr-2">Cargar</v-btn>
                      <v-btn elevation="2" small @click="removeFile('cv')"
                        >Borrar</v-btn
                      >
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
                        :rules="[rules.required, rules.size]"
                        ref="curp"
                        v-model="files.curp"
                      ></v-file-input>
                    </v-col>
                    <v-col cols="2">
                      <v-btn elevation="2" small class="mr-2">Cargar</v-btn>
                      <v-btn elevation="2" small @click="removeFile('curp')"
                        >Borrar</v-btn
                      >
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
                        :rules="[rules.required, rules.size]"
                        ref="registro"
                        v-model="files.registro"
                      ></v-file-input>
                    </v-col>
                    <v-col cols="2">
                      <v-btn elevation="2" small class="mr-2">Cargar</v-btn>
                      <v-btn elevation="2" small @click="removeFile('registro')"
                        >Borrar</v-btn
                      >
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
                        :rules="[rules.required, rules.size]"
                        ref="titulo"
                        v-model="files.titulo"
                      ></v-file-input>
                    </v-col>
                    <v-col cols="2">
                      <v-btn elevation="2" small class="mr-2">Cargar</v-btn>
                      <v-btn elevation="2" small @click="removeFile('titulo')"
                        >Borrar</v-btn
                      >
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
                        :rules="[rules.required, rules.size]"
                        ref="diplomas"
                        v-model="files.diplomas"
                      ></v-file-input>
                    </v-col>
                    <v-col cols="2">
                      <v-btn elevation="2" small class="mr-2">Cargar</v-btn>
                      <v-btn elevation="2" small @click="removeFile('diplomas')"
                        >Borrar</v-btn
                      >
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
                        :rules="[rules.required, rules.size]"
                        ref="otros"
                        v-model="files.otros"
                      ></v-file-input>
                    </v-col>
                    <v-col cols="2">
                      <v-btn elevation="2" small class="mr-2">Cargar</v-btn>
                      <v-btn elevation="2" small @click="removeFile('otros')"
                        >Borrar</v-btn
                      >
                    </v-col>
                  </v-row>
                </v-form>
              </v-card>

              <v-btn color="primary" dark class="m-1" @click="store3"
                >Guardar</v-btn
              >

              <v-btn class="m-1" @click="e1--"> Volver </v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AuthService from "@/services/AuthService.js";
import ExperienciaDocente from "@/components/partials/ExperienciaDocente.vue";
import ExperienciaLaboralDocente from "@/components/partials/ExperienciaLaboralDocente.vue";
import FormacionDocente from "@/components/partials/FormacionDocente.vue";

export default {
  components: {
    ExperienciaDocente,
    ExperienciaLaboralDocente,
    FormacionDocente,
  },
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
      },
      e1: 1,
      s1_valid: true,
      s2_valid: true,
      s3_valid: true,
      menu: false,
      menu2: false,
      s2row1: 1,
      s2row2: 1,
      s2row3: 1,
      items_municipios: [],
      items_escolaridad: [],
      items_cursos: [],
      teacher: {
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
      expTeacher: {
        experienciaDocente: [],
        formacionDocente: [],
        experienciaLaboral: [],
        cursos: [],
      },
      files: {
        acta_nacimiento: null,
        comprobante: null,
        ine: null,
        cv: null,
        curp: null,
        registro: null,
        titulo: null,
        diplomas: null,
        otros: null,
      },
      formData: null,
    };
  },

  async mounted() {
    let me = this;
    if (me.$store.getters.isLoggedIn) {
      try {
        const response = await AuthService.getMunicipios();
        const response2 = await AuthService.getEscolaridad();
        const response3 = await AuthService.getCursos();
        const response4 = await AuthService.getProfile();
        me.items_municipios = response.municipios;
        me.items_escolaridad = response2.data;
        me.items_cursos = response3.cursos;
        me.teacher.nombre = response4.nombres;
        me.teacher.apellido_paterno = response4.primer_apellido;
        me.teacher.apellido_materno = response4.segundo_apellido;
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
          me.formData = new FormData();
          for (const key in me.teacher) {
            me.formData.append(key, me.teacher[key]);
          }
          const responseStore1 = await AuthService.addTeacher(me.formData);
          Object.assign(me.$data, me.$options.data());
          me.$refs.form_teacher.resetValidation();
          me.$swal(
            "Hecho",
            "Información guardada correctamente.",
            "success"
          ).then(() => {
            me.e1 = 2;
            me.teacher.idDocente = responseStore1.data;
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
        me.s1_valid = false;
        me.$swal(
          "Advertencia",
          "No ha completado la información solicitada.",
          "warning"
        );
      }
    },

    /* async */ store2() {
      let me = this;
      let id = me.teacher.idDocente;
      if (me.$refs.form_experiencia.validate()) {
        try {
          // await AuthService.addTeacher(me.expTeacher, 2);
          Object.assign(me.$data, me.$options.data());
          me.$refs.form_teacher.resetValidation();
          me.$swal(
            "Hecho",
            "Información guardada correctamente.",
            "success"
          ).then(() => {
            me.e1 = 3;
            me.teacher.idDocente = id;
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
        me.s2_valid = false;
        me.$swal(
          "Advertencia",
          "No ha completado la información solicitada.",
          "warning"
        );
      }
    },

    store3() {
      let me = this;
      if (me.$refs.form_documentos.validate()) {
        me.$swal(
          "Hecho",
          "Información guardada correctamente.",
          "success"
        ).then(() => {
          Object.assign(me.$data, me.$options.data());
          me.$refs.form_documentos.resetValidation();
          me.$router.push("/dashboard-instructor");
        });
      } else {
        me.s3_valid = false;
        me.$swal(
          "Advertencia",
          "No ha completado la información solicitada.",
          "warning"
        );
      }
    },

    removeFile(input_name) {
      this.files[input_name] = null;
    },

    selectFile(file) {
      this.teacher.fotografia = file;
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
