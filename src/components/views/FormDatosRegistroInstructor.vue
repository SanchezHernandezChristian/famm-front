<template>
  <v-container fluid>
    <v-row>
      <div class="indigo darken-4 text-center">
        <p class="white--text pt-3 mb-2">
          Facilitador para el Acceso a Módulos tecnológicos y Monitoreo
          educativo
        </p>
      </div>
    </v-row>
    <div>
      <br />
    </div>
    <v-row>
      <div class="text-center">
        <h5>
          <p style="color: #394f79">
            <strong
              >CÉDULA DE IDENTIFICACIÓN DEL INSTRUCTOR FORMATO RPDC-11</strong
            >
          </p>
        </h5>
      </div>
    </v-row>
    <v-row>
      <div class="text-center">
        <p style="color: #aeacac">
          <strong>Rellena todos los campos para completar tu registro.</strong>
        </p>
        <p style="color: #aeacac">
          <strong>*Todos los campos son obligatorios.</strong>
        </p>
      </div>
    </v-row>
    <v-row>
      <div class="text-center">
        <h5>
          <p style="color: #394f79"><strong>DATOS DEL INSTRUCTOR</strong></p>
        </h5>
      </div>
    </v-row>
    <v-row justify="center" align="center">
      <div class="text-center">
        <v-layout row justify-center>
          <v-flex align-self-center xs2><label>FECHA DE INGRESO</label></v-flex>
          <v-flex align-self-center xs3>
            <v-col>
              <v-text-field outlined class="bordeRedondoElement"></v-text-field
            ></v-col>
          </v-flex>
          <v-flex align-self-center xs3> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="start" style="height: 70px">
      <div class="text-center">
        <v-layout row justify-center>
          <v-flex align-self-center xs2><label>ESTATUS</label></v-flex>
          <v-flex align-self-center xs3>
            <v-radio-group row>
              <v-radio label="NUEVO INGRESO"></v-radio>
              <v-radio label="EN SERVICIO"></v-radio>
              <v-spacer></v-spacer>
            </v-radio-group>
          </v-flex>
          <v-flex align-self-center xs3> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center">
      <div class="text-center">
        <v-layout row justify-center>
          <v-flex align-self-center xs2
            ><label>CLAVE DEL INSTRUCTOR</label></v-flex
          >
          <v-flex align-self-center xs3>
            <v-col>
              <v-text-field outlined class="bordeRedondoElement"></v-text-field
            ></v-col>
          </v-flex>
          <v-flex align-self-center xs3> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center" style="height: 80px">
      <div class="text-center">
        <v-layout row justify-center>
          <v-flex align-self-center xs3
            ><label>CERTIFICADO EN COMPETENCIA LABORAL</label></v-flex
          >
          <v-flex align-self-center xs4>
            <v-combobox dense outlined></v-combobox>
          </v-flex>
          <v-flex align-self-center xs3> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center" style="height: 80px">
      <div class="text-center">
        <v-layout row justify-center>
          <v-flex align-self-center xs2
            ><label>CERTIFICADO EN ROCO</label></v-flex
          >
          <v-flex align-self-center xs3>
            <v-combobox dense outlined class="bordeRedondoElement"></v-combobox>
          </v-flex>
          <v-flex align-self-center xs3> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="start" style="height: 75px">
      <div class="text-center">
        <v-layout row justify-center>
          <v-flex align-self-center xs2><label>FOTOGRAFÍA</label></v-flex>
          <v-flex align-self-center xs3>
            <v-btn outlined color="gray" class="bordeRedondoElement"
              >Sube tu archivo</v-btn
            >
          </v-flex>
          <v-flex align-self-center xs3> </v-flex>
          <v-flex align-self-center> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center" style="height: 65px">
      <div class="text-center">
        <v-layout row justify-center>
          <v-flex align-self-center xs2><label>NOMBRE</label></v-flex>
          <v-flex align-self-center xs3>
            <v-col>
              <v-text-field outlined class="bordeRedondoElement"></v-text-field
            ></v-col>
          </v-flex>
          <v-flex align-self-center xs3>
            <v-col>
              <v-text-field outlined class="bordeRedondoElement"></v-text-field
            ></v-col>
          </v-flex>
        </v-layout></div
    ></v-row>
    <v-row align="start" style="height: 25px">
      <div class="text-center">
        <v-layout row justify-center>
          <v-flex align-self-center xs2></v-flex>
          <v-flex align-self-center xs3>
            <label><small>NOMBRE(S)</small></label>
          </v-flex>
          <v-flex align-self-center xs3>
            <label><small>APELLIDOS(S)</small></label>
          </v-flex>
          <v-flex align-self-center xs1> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center" style="height: 65px">
      <div class="text-center">
        <v-layout row justify-center>
          <v-flex align-self-center xs2><label>DOMICILIO</label></v-flex>
          <v-flex align-self-center xs3>
            <v-col>
              <v-text-field outlined class="bordeRedondoElement"></v-text-field
            ></v-col>
          </v-flex>
          <v-flex align-self-center xs3>
            <v-col>
              <v-text-field outlined class="bordeRedondoElement"></v-text-field
            ></v-col>
          </v-flex>
        </v-layout></div
    ></v-row>
    <v-row align="start" style="height: 25px">
      <div class="text-center">
        <v-layout row justify-center>
          <v-flex align-self-center xs2></v-flex>
          <v-flex align-self-center xs3>
            <label><small>CALLE Y NÚMERO</small></label>
          </v-flex>
          <v-flex align-self-center xs3>
            <label><small>COLONIA</small></label>
          </v-flex>
          <v-flex align-self-center xs1> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center" style="height: 65px">
      <div class="text-center">
        <v-layout row justify-center>
          <v-flex align-self-center xs2><label>LOCALIDAD</label></v-flex>
          <v-flex align-self-center xs3>
            <v-col>
              <v-text-field outlined class="bordeRedondoElement"></v-text-field
            ></v-col>
          </v-flex>
          <v-flex align-self-center xs3>
            <v-col>
              <v-text-field outlined class="bordeRedondoElement"></v-text-field
            ></v-col>
          </v-flex>
        </v-layout></div
    ></v-row>
    <v-row align="start" style="height: 25px">
      <div class="text-center">
        <v-layout row justify-center>
          <v-flex align-self-center xs2></v-flex>
          <v-flex align-self-center xs3>
            <label><small>MUNICIPIO</small></label>
          </v-flex>
          <v-flex align-self-center xs3>
            <label><small>CÓDIGO POSTAL</small></label>
          </v-flex>
          <v-flex align-self-center xs1> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center">
      <div class="text-center">
        <v-layout row justify-center>
          <v-flex align-self-center xs2><label>TEL. MÓVIL</label></v-flex>
          <v-flex align-self-center xs3>
            <v-col>
              <v-text-field outlined class="bordeRedondoElement"></v-text-field
            ></v-col>
          </v-flex>
          <v-flex align-self-center xs3> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center">
      <div class="text-center">
        <v-layout row justify-center>
          <v-flex><p></p></v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center" style="height: 70px">
      <div class="text-center">
        <v-layout row justify-center>
          <v-flex align-self-center xs2
            ><label>FECHA DE NACIMIENTO</label></v-flex
          >
          <v-flex align-self-center xs2>
            <v-combobox dense outlined class="bordeRedondoElement"></v-combobox>
          </v-flex>
          <v-flex align-self-center xs2>
            <v-combobox dense outlined class="bordeRedondoElement"></v-combobox>
          </v-flex>
          <v-flex align-self-center xs2>
            <v-combobox dense outlined class="bordeRedondoElement"></v-combobox>
          </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center" style="height: 70px">
      <div class="text-center">
        <v-layout row justify-center>
          <v-flex align-self-center xs2><label>EDAD</label></v-flex>
          <v-flex align-self-center xs3>
            <v-text-field
              dense
              outlined
              class="bordeRedondoElement"
            ></v-text-field>
          </v-flex>
          <v-flex align-self-center xs3> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="start" style="height: 70px">
      <div class="text-center">
        <v-layout row justify-center>
          <v-flex align-self-center xs2><label>SEXO</label></v-flex>
          <v-flex align-self-center xs3>
            <v-radio-group row>
              <v-radio label="FEMENINO"></v-radio>
              <v-radio label="MASCULINO"></v-radio>
              <v-spacer></v-spacer>
            </v-radio-group>
          </v-flex>
          <v-flex align-self-center xs3> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center" style="height: 70px">
      <div class="text-center">
        <v-layout row justify-center>
          <v-flex align-self-center xs2><label>NACIONALIDAD</label></v-flex>
          <v-flex align-self-center xs3>
            <v-col>
              <v-text-field
                outlined
                style="width: 270px; height: 70px"
                class="bordeRedondoElement"
              ></v-text-field
            ></v-col>
          </v-flex>
          <v-flex align-self-center xs3> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center" style="height: 70px">
      <div class="text-center">
        <v-layout row justify-center>
          <v-flex align-self-center xs2><label>IDENTIFICACIÓN</label></v-flex>
          <v-flex align-self-center xs3>
            <v-col>
              <v-text-field outlined class="bordeRedondoElement"></v-text-field
            ></v-col>
          </v-flex>
          <v-flex align-self-center xs3>
            <v-col>
              <v-text-field outlined class="bordeRedondoElement"></v-text-field
            ></v-col>
          </v-flex>
        </v-layout></div
    ></v-row>
    <v-row align="start" style="height: 25px">
      <div class="text-center">
        <v-layout row justify-center>
          <v-flex align-self-center xs2></v-flex>
          <v-flex align-self-center xs3>
            <label><small>RFC</small></label>
          </v-flex>
          <v-flex align-self-center xs3>
            <label><small>CURP</small></label>
          </v-flex>
          <v-flex align-self-center xs1> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center" style="height: 70px">
      <div class="text-center">
        <v-layout row justify-center>
          <v-flex align-self-center xs2><label></label></v-flex>
          <v-flex align-self-center xs3>
            <v-col>
              <v-text-field outlined class="bordeRedondoElement"></v-text-field
            ></v-col>
          </v-flex>
          <v-flex align-self-center xs3>
            <v-col>
              <v-text-field outlined class="bordeRedondoElement"></v-text-field
            ></v-col>
          </v-flex>
        </v-layout></div
    ></v-row>
    <v-row align="start" style="height: 15px">
      <div class="text-center">
        <v-layout row justify-center>
          <v-flex align-self-center xs4>
            <label style="font-size: x-small">REGISTRO N°</label>
          </v-flex>
          <v-flex align-self-center xs2></v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row align="start" style="height: 25px">
      <div class="text-center">
        <v-layout row justify-center>
          <v-flex align-self-center xs4>
            <label style="font-size: x-small"
              >(ANTE LA SECRETARÍA DEL TRABAJO Y PREVENCIÓN SOCIAL)</label
            >
          </v-flex>
          <v-flex align-self-center xs2></v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center" style="height: 70px">
      <div class="text-center">
        <v-layout row justify-center>
          <v-flex align-self-center xs2><label>ESCOLARIDAD</label></v-flex>
          <v-flex align-self-center xs3>
            <v-combobox dense outlined class="bordeRedondoElement"></v-combobox>
          </v-flex>
          <v-flex align-self-center xs3
            ><v-combobox
              dense
              outlined
              class="bordeRedondoElement"
            ></v-combobox>
          </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row align="start" style="height: 25px">
      <div class="text-center">
        <v-layout row justify-center>
          <v-flex align-self-center xs2></v-flex>
          <v-flex align-self-center xs3>
            <label><small>NIVEL ACADÉMICO</small></label>
          </v-flex>
          <v-flex align-self-center xs3
            ><label><small>ÚLTIMO GRADO DE ESTUDIOS</small></label></v-flex
          >
          <v-flex align-self-center xs1> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center" style="height: 70px">
      <div class="text-center">
        <v-layout row justify-center>
          <v-flex align-self-center xs2><label></label></v-flex>
          <v-flex align-self-center xs3>
            <v-combobox class="bordeRedondoElement" dense outlined></v-combobox>
          </v-flex>
          <v-flex align-self-center xs3> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row align="start" style="height: 35px">
      <div class="text-center">
        <v-layout row justify-center>
          <v-flex align-self-center xs3></v-flex>
          <v-flex align-self-center xs4>
            <label><small>DOCUMENTO OBTENIDO</small></label>
          </v-flex>
          <v-flex align-self-center xs3></v-flex>
          <v-flex align-self-center xs1> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row style="height: 70px"></v-row>
    <v-row>
      <div class="text-center">
        <v-layout row justify-end>
          <v-flex align-self-center xs2></v-flex>
          <v-flex align-self-center xs3>
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
          <v-flex align-self-center xs1></v-flex>
          <v-flex align-self-center xs1><label>Página</label></v-flex>
          <v-flex align-self-center xs1
            ><v-text-field
              value=" 1"
              outlined
              disabled
              style="width: 50px; height: 50px"
            ></v-text-field>
          </v-flex>
          <v-flex align-self-center xs1><label>de 3</label></v-flex>
          <v-flex align-self-center xs3
            ><v-pagination
              dark
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
  name: "FormDatosRegistro",

  data: () => ({
    band: false,
    logged_in: false,
  }),

  async created() {
    this.logged_in = this.$store.getters.isLoggedIn != "";
  },
  async mounted() {
    if (this.$store.getters.isLoggedIn) {
      try {
        const response = await AuthService.getProfile();
        let band = response.EstatusPerfil;
        band = 0;
        if (band === 0) band = true;
      } catch (error) {
        console.log(error);
      }
    }
  },

  methods: {
    siguiente() {},
  },
};
</script>
