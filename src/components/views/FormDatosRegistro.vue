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
    <v-row>
      <v-alert :value="true" type="warning">
        Completa el registro de tus datos.
      </v-alert>
    </v-row>
    <v-row>
      <div class="text-center">
        <h2>
          <p style="color: #394f79">
            <strong>CÉDULA DE IDENTIFICACIÓN DEL CAPACITANDO</strong>
          </p>
          <p style="color: #394f79"><strong>FORMATO RUDC-12 DIGITAL</strong></p>
        </h2>
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
    <v-row justify="center" align="center" style="height: 65px">
      <div class="text-center">
        <v-layout row justify-center>
          <v-flex align-self-center xs2><label>NOMBRE</label></v-flex>
          <v-flex align-self-center xs3>
            <v-col md="8">
              <v-text-field outlined label="NOMBRES(S)"></v-text-field
            ></v-col>
          </v-flex>
          <v-flex align-self-center xs3>
            <v-col md="8">
              <v-text-field outlined label="APELLIDO(S)"></v-text-field
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
    <v-row justify="center" align="center">
      <div class="text-center">
        <v-layout row justify-center>
          <v-flex align-self-center xs2><label>DOMICILIO</label></v-flex>
          <v-flex align-self-center xs3>
            <v-col md="8"> <v-text-field outlined></v-text-field></v-col>
          </v-flex>
          <v-flex align-self-center xs3> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="start" style="height: 60px">
      <div class="text-center">
        <v-layout row justify-center>
          <v-flex align-self-center xs2><label>FOTOGRAFÍA</label></v-flex>
          <v-flex align-self-center xs3>
            <v-btn outline color="gray">Sube tu archivo</v-btn>
          </v-flex>
          <v-flex align-self-center xs3> </v-flex>
          <v-flex align-self-center> </v-flex>
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
    <v-row justify="center" align="center">
      <div class="text-center">
        <v-layout row justify-center>
          <v-flex align-self-center xs2><label>MUNICIPIO</label></v-flex>
          <v-flex align-self-center xs3>
            <v-combobox dense outlined></v-combobox>
          </v-flex>
          <v-flex align-self-center xs3> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row align="start" style="height: 25px">
      <div class="text-center">
        <v-layout row justify-center>
          <v-flex align-self-center xs2></v-flex>
          <v-flex align-self-center xs3>
            <label><small>SELECCIONA TU LOCALIDAD</small></label>
          </v-flex>
          <v-flex align-self-center xs3></v-flex>
          <v-flex align-self-center xs1> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center">
      <div class="text-center">
        <v-layout row justify-center>
          <v-flex align-self-center xs2
            ><label>CORREO ELECTRÓNICO</label></v-flex
          >
          <v-flex align-self-center xs3>
            <v-col md="8"> <v-text-field outlined></v-text-field></v-col>
          </v-flex>
          <v-flex align-self-center xs3> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center">
      <div class="text-center">
        <v-layout row justify-center>
          <v-flex align-self-center xs2><label>CURP</label></v-flex>
          <v-flex align-self-center xs3>
            <v-col md="8"> <v-text-field outlined></v-text-field></v-col>
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
    <v-row justify="center" align="center">
      <div class="text-center">
        <v-layout row justify-center>
          <v-flex align-self-center xs2
            ><label>FECHA DE NACIMIENTO</label></v-flex
          >
          <v-flex align-self-center xs2>
            <v-combobox dense outlined></v-combobox>
          </v-flex>
          <v-flex align-self-center xs2>
            <v-combobox dense outlined></v-combobox>
          </v-flex>
          <v-flex align-self-center xs2>
            <v-combobox dense outlined></v-combobox>
          </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row align="start" style="height: 25px">
      <div class="text-center">
        <v-layout row justify-center>
          <v-flex align-self-center xs2></v-flex>
          <v-flex align-self-center xs2>
            <label><small>DÍA</small></label>
          </v-flex>
          <v-flex align-self-center xs2>
            <label><small>MES</small></label>
          </v-flex>
          <v-flex align-self-center xs2
            ><label><small>AÑO</small></label>
          </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center">
      <div class="text-center">
        <v-layout row justify-center>
          <v-flex align-self-center xs2><label>NACIONALIDAD</label></v-flex>
          <v-flex align-self-center xs3>
            <v-col md="8"> <v-text-field outlined></v-text-field></v-col>
          </v-flex>
          <v-flex align-self-center xs3> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center">
      <div class="text-center">
        <v-layout row justify-center>
          <v-flex align-self-center xs2><label>EDAD</label></v-flex>
          <v-flex align-self-center xs3>
            <v-col md="8"> <v-text-field outlined></v-text-field></v-col>
          </v-flex>
          <v-flex align-self-center xs3> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center">
      <div class="text-center">
        <v-layout row justify-center>
          <v-flex align-self-center xs2><label>ESTADO CIVIL</label></v-flex>
          <v-flex align-self-center xs3>
            <v-col md="8"> <v-text-field outlined></v-text-field></v-col>
          </v-flex>
          <v-flex align-self-center xs3> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center">
      <div class="text-center">
        <v-layout row justify-center>
          <v-flex align-self-center xs2
            ><label>NÚMERO DE CELULAR</label></v-flex
          >
          <v-flex align-self-center xs3>
            <v-col md="8"> <v-text-field outlined></v-text-field></v-col>
          </v-flex>
          <v-flex align-self-center xs3> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center">
      <div class="text-center">
        <v-layout row justify-center>
          <v-flex align-self-center xs2><label>GRUPO VULNERABLE</label></v-flex>
          <v-flex align-self-center xs3>
            <v-col md="8"> <v-text-field outlined></v-text-field></v-col>
          </v-flex>
          <v-flex align-self-center xs3> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center">
      <div class="text-center">
        <v-layout row justify-center>
          <v-flex align-self-center xs2><label>DISCAPACIDAD</label></v-flex>
          <v-flex align-self-center xs3>
            <v-combobox dense outlined></v-combobox>
          </v-flex>
          <v-flex align-self-center xs3> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center">
      <div class="text-center">
        <v-layout row justify-center>
          <v-flex align-self-center xs2><label>PERTENECE A</label></v-flex>
          <v-flex align-self-center xs3>
            <v-col md="8"> <v-text-field outlined></v-text-field></v-col>
          </v-flex>
          <v-flex align-self-center xs3> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center">
      <div class="text-center">
        <v-layout row justify-center>
          <v-flex align-self-center xs2><label>ESCOLARIDAD</label></v-flex>
          <v-flex align-self-center xs3>
            <v-combobox dense outlined></v-combobox>
          </v-flex>
          <v-flex align-self-center xs3> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center" style="height: 70px">
      <div class="text-center">
        <v-layout row justify-center>
          <v-flex align-self-center xs2
            ><label>HABLA LENGUA INDÍGENA</label></v-flex
          >
          <v-flex align-self-center xs3>
            <v-radio-group row>
              <v-radio label="SÍ"></v-radio>
              <v-radio label="NO"></v-radio>
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
          <v-flex align-self-center xs2><label>MOTIVO</label></v-flex>
          <v-flex align-self-center xs3>
            <v-textarea
              auto-grow
              outlined
              rows="3"
              row-height="25"
              shaped
            ></v-textarea>
          </v-flex>
          <v-flex align-self-center xs3> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center" style="height: 70px">
      <div class="text-center">
        <v-layout row justify-center>
          <v-flex align-self-center xs2
            ><label>SITUACIÓN LABORAL</label></v-flex
          >
          <v-flex align-self-center xs3>
            <v-radio-group row>
              <v-radio label="EMPLEADO"></v-radio>
              <v-radio label="DESEMPLEADO"></v-radio>
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
            ><label>FIRMA DEL CAPACITANDO</label></v-flex
          >
          <v-flex align-self-center xs3>
            <v-col md="8"> <v-text-field outlined></v-text-field></v-col>
          </v-flex>
          <v-flex align-self-center xs3> </v-flex>
        </v-layout>
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "FormDatosRegistro",
};
</script>
