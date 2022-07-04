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
                >CÉDULA DE PRE-AUTORIZACIÓN DE CURSOS DE CAPACITACIÓN FORMATO
                RUDC-06</strong
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
    </v-row>
    <v-row
      ><br />
      <p></p
    ></v-row>
    <v-row justify="center" align="center">
      <v-layout row justify-center>
        <v-flex align-self-center xs4> </v-flex>
        <v-flex align-self-center xs2><label>CURSO SOLICITADO</label></v-flex>
        <v-flex align-self-center xs3>
          <v-col>
            <v-select
              v-model="select"
              :items="items_cursos"
              item-text="nombre_curso"
              item-value="idCurso"
              :rules="rules"
              required
              return-object
              dense
              outlined
              class="bordeRedondoElement"
            ></v-select>
          </v-col>
        </v-flex>
        <v-flex align-self-center xs3> </v-flex>
      </v-layout>
    </v-row>
    <v-row justify="center" align="center">
      <v-layout row justify-center>
        <v-flex align-self-center xs4> </v-flex>
        <v-flex align-self-center xs2><label>CLAVE</label></v-flex>
        <v-flex align-self-center xs3>
          <v-col>
            <v-text-field outlined class="bordeRedondoElement" :rules="rules"></v-text-field
          ></v-col>
        </v-flex>
        <v-flex align-self-center xs3> </v-flex>
      </v-layout>
    </v-row>
    <v-row justify="center" align="center">
      <v-layout row justify-center>
        <v-flex align-self-center xs4> </v-flex>
        <v-flex align-self-center xs2
          ><label
            >NOMBRE DEL SOLICITANTE O REPRESENTANTE DEL GRUPO</label
          ></v-flex
        >
        <v-flex align-self-center xs3>
          <v-col>
            <v-text-field outlined class="bordeRedondoElement" :rules="rules"></v-text-field
          ></v-col>
        </v-flex>
        <v-flex align-self-center xs3> </v-flex>
      </v-layout>
    </v-row>
    <v-row justify="center" align="start">
      <v-layout row justify-center>
        <v-flex align-self-center xs4> </v-flex>
        <v-flex align-self-center xs2>
          <label>QUIEN SOLICITA</label>
        </v-flex>
        <v-flex align-self-center xs4>
          <v-col cols="8">
            <v-radio-group row :rules="rules">
              <v-radio label="EMPRESA"></v-radio>
              <v-radio label="ORGANIZACIÓN"></v-radio>
              <v-radio label="GRUPO PRODUCTIVO"></v-radio>
              <v-radio label="DEPENDENCIA"></v-radio> </v-radio-group
          ></v-col>
        </v-flex>
        <v-flex align-self-center xs2> </v-flex>
      </v-layout>
    </v-row>
    <v-row justify="center" align="center">
      <v-layout row justify-center>
        <v-flex align-self-center xs4> </v-flex>
        <v-flex align-self-center xs2><label>CUAL</label></v-flex>
        <v-flex align-self-center xs3>
          <v-col>
            <v-text-field outlined class="bordeRedondoElement" :rules="rules"></v-text-field
          ></v-col>
        </v-flex>
        <v-flex align-self-center xs3> </v-flex>
      </v-layout>
    </v-row>
    <v-row justify="center" align="center">
      <v-layout row justify-center>
        <v-flex align-self-center xs4> </v-flex>
        <v-flex align-self-center xs2><label>REGIÓN</label></v-flex>
        <v-flex align-self-center xs3>
          <v-col>
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
              class="bordeRedondoElement"
            ></v-select>
          </v-col>
        </v-flex>
        <v-flex align-self-center xs3> </v-flex>
      </v-layout>
    </v-row>
    <v-row justify="center" align="center">
      <v-layout row justify-center>
        <v-flex align-self-center xs4> </v-flex>
        <v-flex align-self-center xs2><label>DISTRITO</label></v-flex>
        <v-flex align-self-center xs3>
          <v-col>
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
              class="bordeRedondoElement"
            ></v-select>
          </v-col>
        </v-flex>
        <v-flex align-self-center xs3> </v-flex>
      </v-layout>
    </v-row>
    <v-row justify="center" align="center">
      <v-layout row justify-center>
        <v-flex align-self-center xs4> </v-flex>
        <v-flex align-self-center xs2><label>MUNICIPIO</label></v-flex>
        <v-flex align-self-center xs3>
          <v-col>
            <v-select
              v-model="select"
              :items="items_municipios"
              item-text="Descripcion"
              item-value="c_Municipio"
              :rules="rules"
              required
              return-object
              dense
              outlined
              class="bordeRedondoElement"
            ></v-select>
          </v-col>
        </v-flex>
        <v-flex align-self-center xs3> </v-flex>
      </v-layout>
    </v-row>
    <v-row justify="center" align="center">
      <v-layout row justify-center>
        <v-flex align-self-center xs4> </v-flex>
        <v-flex align-self-center xs2><label>SEDE DEL CURSO</label></v-flex>
        <v-flex align-self-center xs3>
          <v-col>
            <v-text-field outlined class="bordeRedondoElement" :rules="rules"></v-text-field
          ></v-col>
        </v-flex>
        <v-flex align-self-center xs3> </v-flex>
      </v-layout>
    </v-row>
    <v-row justify="center" align="center">
      <v-layout row justify-center>
        <v-flex align-self-center xs4> </v-flex>
        <v-flex align-self-center xs2><label>NOMBRE</label></v-flex>
        <v-flex align-self-center xs3>
          <v-col>
            <v-text-field outlined class="bordeRedondoElement" :rules="rules"></v-text-field
          ></v-col>
        </v-flex>
        <v-flex align-self-center xs3> </v-flex>
      </v-layout>
    </v-row>
    <v-row justify="center" align="center">
      <v-layout row justify-center>
        <v-flex align-self-center xs4> </v-flex>
        <v-flex align-self-center xs2><label>RFC</label></v-flex>
        <v-flex align-self-center xs3>
          <v-col>
            <v-text-field outlined class="bordeRedondoElement" :rules="rules"></v-text-field
          ></v-col>
        </v-flex>
        <v-flex align-self-center xs3> </v-flex>
      </v-layout>
    </v-row>
    <v-row justify="center" align="center">
      <v-layout row justify-center>
        <v-flex align-self-center xs4> </v-flex>
        <v-flex align-self-center xs2><label>CURP</label></v-flex>
        <v-flex align-self-center xs3>
          <v-col>
            <v-text-field outlined class="bordeRedondoElement" :rules="rules"></v-text-field
          ></v-col>
        </v-flex>
        <v-flex align-self-center xs3> </v-flex>
      </v-layout>
    </v-row>
    <v-row justify="center" align="center">
      <v-layout row justify-center>
        <v-flex align-self-center xs4> </v-flex>
        <v-flex align-self-center xs2><label>PROFESIÓN</label></v-flex>
        <v-flex align-self-center xs3>
          <v-col>
            <v-text-field outlined class="bordeRedondoElement" :rules="rules"></v-text-field
          ></v-col>
        </v-flex>
        <v-flex align-self-center xs3> </v-flex>
      </v-layout>
    </v-row>
    <v-row justify="center" align="start">
      <v-layout row justify-center>
        <v-flex align-self-center xs4> </v-flex>
        <v-flex align-self-center xs2>
          <label>MODALIDAD</label>
        </v-flex>
        <v-flex align-self-center xs5>
          <v-col cols="9">
            <v-radio-group row :rules="rules">
              <v-radio label="CURSO DE COMPETENCIA LABORAL"></v-radio>
              <v-radio label="CURSO REGULAR EBC"></v-radio>
              <v-radio label="CURSO REGULAR TRADICIONAL"></v-radio>
              <v-radio
                label="CURSO DE CAPACITACIÓN ACELERADA ESPECÍFICA A DISTANCIA"
              ></v-radio>
              <v-radio label="CURSO DE EXTENSIÓN"></v-radio>
              <v-radio label="EVALUACIÓN ROCO"></v-radio> </v-radio-group
          ></v-col>
        </v-flex>
        <v-flex align-self-center xs1> </v-flex>
      </v-layout>
    </v-row>
    <v-row justify="center" align="center">
      <v-layout row justify-center>
        <v-flex align-self-center xs4> </v-flex>
        <v-flex align-self-center xs2><label>TOTAL HORAS</label></v-flex>
        <v-flex align-self-center xs3>
          <v-col>
            <v-text-field outlined class="bordeRedondoElement" :rules="rules"></v-text-field
          ></v-col>
        </v-flex>
        <v-flex align-self-center xs3> </v-flex>
      </v-layout>
    </v-row>
    <v-row justify="center" align="center">
      <v-layout row justify-center>
        <v-flex align-self-center xs4> </v-flex>
        <v-flex align-self-center xs2><label>COSTO HORA</label></v-flex>
        <v-flex align-self-center xs3>
          <v-col>
            <v-text-field outlined class="bordeRedondoElement" :rules="rules"></v-text-field
          ></v-col>
        </v-flex>
        <v-flex align-self-center xs3> </v-flex>
      </v-layout>
    </v-row>
    <v-row justify="center" align="center">
      <v-layout row justify-center>
        <v-flex align-self-center xs4> </v-flex>
        <v-flex align-self-center xs2><label>COSTO TOTAL</label></v-flex>
        <v-flex align-self-center xs3>
          <v-col>
            <v-text-field outlined class="bordeRedondoElement" :rules="rules"></v-text-field
          ></v-col>
        </v-flex>
        <v-flex align-self-center xs3> </v-flex>
      </v-layout>
    </v-row>
    <v-row style="height: 70px"></v-row>
    <v-row>
      <div class="text-center">
        <v-layout row justify-end>
          <v-flex align-self-center xs5></v-flex>
          <v-flex align-self-center xs2>
            <v-btn
              depressed
              color="#FFFFFF"
              elevation="0"
              class="ma-2"
              @click="siguiente"
              >Siguiente
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i
            ></v-btn>
          </v-flex>
          <v-flex align-self-center xs3></v-flex>
          <v-flex align-self-center xs1><label>Página 1 de 2</label></v-flex>
          <!-- <v-flex align-self-center xs1
            ><v-text-field
              value=" 1"
              outlined
              disabled
              style="width: 50px; height: 50px"
            ></v-text-field>
          </v-flex>
          <v-flex align-self-center xs1><label>de 3</label></v-flex> -->
          <v-flex align-self-center xs1
            ><v-pagination
              prev-icon="mdi-menu-left"
              next-icon="mdi-menu-right"
            ></v-pagination
          ></v-flex>
        </v-layout>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import AuthService from "@/services/AuthService.js";

export default {
  data() {
    return {
      rules: [(v) => !!v || "Campo requerido"],
      e1: 1,
      s1_valid: true,
      s2_valid: true,
      s3_valid: true,
      menu: false,
      menu2: false,
      items_municipios: [],
      items_escolaridad: [],
      items_cursos: [],
      form_pre_aut: {
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
        registro: null,
        documento_obtenido: null,
        lengua_indigena: 0,
        motivo: "EMPLEO",
        situacion_laboral: 1,
      },
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
