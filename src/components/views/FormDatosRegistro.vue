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
    <v-row justify="center" align="center">
      <div class="text-center">
        <v-card-actions class="px-3 pb-3">
          <v-flex align-self-center><label>NOMBRE</label></v-flex>
          <v-flex align-self-center>
            <v-col md="8">
              <v-text-field outlined label="NOMBRES(S)"></v-text-field
            ></v-col>
          </v-flex>
          <v-flex align-self-center>
            <v-col md="8">
              <v-text-field outlined label="APELLIDO(S)"></v-text-field
            ></v-col>
          </v-flex>
        </v-card-actions></div
    ></v-row>
    <v-row justify="center" align="center">
      <div class="text-center">
        <v-layout justify-center>
          <v-flex align-self-center><label>DOMICILIO</label></v-flex>
          <v-flex align-self-center>
            <v-col md="8"> <v-text-field outlined></v-text-field></v-col>
          </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center">
      <div class="text-center">
        <v-layout justify-center>
          <v-flex align-self-center><label>FOTOGRAFÍA</label></v-flex>
          <v-flex align-self-center>
            <v-btn outline color="gray">Sube tu archivo</v-btn>
          </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center">
      <div class="text-center">
        <v-layout justify-center>
          <v-flex align-self-center><label>MUNICIPIO</label></v-flex>
          <v-flex align-self-center>
            <v-combobox dense outlined></v-combobox>
          </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center">
      <div class="text-center">
        <v-layout justify-center>
          <v-flex align-self-center><label>CORREO ELECTRÓNICO</label></v-flex>
          <v-flex align-self-center>
            <v-col md="8"> <v-text-field outlined></v-text-field></v-col>
          </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center">
      <div class="text-center">
        <v-layout justify-center>
          <v-flex align-self-center><label>CURP</label></v-flex>
          <v-flex align-self-center>
            <v-col md="8"> <v-text-field outlined></v-text-field></v-col>
          </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center">
      <div class="text-center">
        <v-layout justify-center>
          <v-flex align-self-center><label>SEXO</label></v-flex>
          <v-flex align-self-center>
            <v-radio-group row>
              <v-radio label="FEMENINO"></v-radio>
              <v-radio label="MASCULINO"></v-radio>              
              <v-spacer></v-spacer>
            </v-radio-group>
          </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center">
      <div class="text-center">
        <v-layout justify-center>
          <v-flex align-self-center><label>FECHA DE NACIMIENTO</label></v-flex>
          <v-flex align-self-center>
            <v-combobox dense outlined></v-combobox>
          </v-flex>
          <v-flex align-self-center>
            <v-combobox dense outlined></v-combobox>
          </v-flex>
          <v-flex align-self-center>
            <v-combobox dense outlined></v-combobox>
          </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center">
      <div class="text-center">
        <v-layout justify-center>
          <v-flex align-self-center><label>NACIONALIDAD</label></v-flex>
          <v-flex align-self-center>
            <v-col md="8"> <v-text-field outlined></v-text-field></v-col>
          </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center">
      <div class="text-center">
        <v-layout justify-center>
          <v-flex align-self-center><label>EDAD</label></v-flex>
          <v-flex align-self-center>
            <v-col md="8"> <v-text-field outlined></v-text-field></v-col>
          </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center">
      <div class="text-center">
        <v-layout justify-center>
          <v-flex align-self-center><label>ESTADO CIVIL</label></v-flex>
          <v-flex align-self-center>
            <v-col md="8"> <v-text-field outlined></v-text-field></v-col>
          </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center">
      <div class="text-center">
        <v-layout justify-center>
          <v-flex align-self-center><label>NÚMERO DE CELULAR</label></v-flex>
          <v-flex align-self-center>
            <v-col md="8"> <v-text-field outlined></v-text-field></v-col>
          </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center">
      <div class="text-center">
        <v-layout justify-center>
          <v-flex align-self-center><label>GRUPO VULNERABLE</label></v-flex>
          <v-flex align-self-center>
            <v-col md="8"> <v-text-field outlined></v-text-field></v-col>
          </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center">
      <div class="text-center">
        <v-layout justify-center>
          <v-flex align-self-center><label>DISCAPACIDAD</label></v-flex>
          <v-flex align-self-center>
            <v-combobox dense outlined></v-combobox>
          </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center">
      <div class="text-center">
        <v-layout justify-center>
          <v-flex align-self-center><label>PERTENECE A</label></v-flex>
          <v-flex align-self-center>
            <v-col md="8"> <v-text-field outlined></v-text-field></v-col>
          </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center">
      <div class="text-center">
        <v-layout justify-center>
          <v-flex align-self-center><label>ESCOLARIDAD</label></v-flex>
          <v-flex align-self-center>
            <v-combobox dense outlined></v-combobox>
          </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center">
      <div class="text-center">
        <v-layout justify-center>
          <v-flex align-self-center
            ><label>HABLA LENGUA INDÍGENA</label></v-flex
          >
          <v-flex align-self-center>
            <v-radio-group row>
              <v-radio label="SÍ"></v-radio>
              <v-radio label="NO"></v-radio>
              <v-spacer></v-spacer>
            </v-radio-group>
          </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center">
      <div class="text-center">
        <v-layout justify-center>
          <v-flex align-self-center><label>MOTIVO</label></v-flex>
          <v-flex align-self-center>
            <v-textarea
              auto-grow
              outlined
              rows="3"
              row-height="25"
              shaped
            ></v-textarea>
          </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center">
      <div class="text-center">
        <v-layout justify-center>
          <v-flex align-self-center
            ><label>HABLA LENGUA INDÍGENA</label></v-flex
          >
          <v-flex align-self-center>
            <v-radio-group row>
              <v-radio label="EMPLEADO"></v-radio>
              <v-radio label="DESEMPLEADO"></v-radio>
              <v-spacer></v-spacer>
            </v-radio-group>
          </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center">
      <div class="text-center">
        <v-layout justify-center>
          <v-flex align-self-center
            ><label>FIRMA DEL CAPACITANDO</label></v-flex
          >
          <v-flex align-self-center>
            <v-col md="8"> <v-text-field outlined></v-text-field></v-col>
          </v-flex>
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
