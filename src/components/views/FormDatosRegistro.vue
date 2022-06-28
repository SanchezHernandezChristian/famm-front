<template>
  <v-container fluid>
    <v-row>
      <div class="indigo darken-4 text-center">
        <p class="white--text pt-3 mb-2">Facilitador para el Acceso a Módulos tecnológicos y Monitoreo educativo</p>
      </div>
    </v-row>
    <v-row>
      <v-alert :value="true" type="warning" class="font-weight-black font-italic"> Completa el registro de tus datos. </v-alert>
    </v-row>
    <div>
      <br />
    </div>
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
    <v-form ref="form_registro" v-model="valid" lazy-validation>
      <v-row justify="center" align="center" style="height: 65px">
        <div class="text-center">
          <v-layout row justify-center>
            <v-flex align-self-center xs2><label>NOMBRE</label></v-flex>
            <v-flex align-self-center xs2>
              <v-col md="12"> <v-text-field dense outlined label="Nombre(s)" :rules="[rules.required]" v-model="user.nombre" readonly></v-text-field></v-col>
            </v-flex>
            <v-flex align-self-center xs2>
              <v-col md="12"> <v-text-field dense outlined label="Primer Apellido" :rules="[rules.required]" v-model="user.apellido_paterno"></v-text-field></v-col>
            </v-flex>
            <v-flex align-self-center xs2>
              <v-col md="12"> <v-text-field dense outlined label="Segundo Apellido" v-model="user.apellido_materno"></v-text-field></v-col>
            </v-flex>
          </v-layout></div
      ></v-row>
      <!-- <v-row align="start" style="height: 25px">
        <div class="text-center">
          <v-layout row justify-center>
            <v-flex align-self-center xs2></v-flex>
            <v-flex align-self-center xs2>
              <label><small>NOMBRE(S)</small></label>
            </v-flex>
            <v-flex align-self-center xs2>
              <label><small>PRIMER APELLIDO</small></label>
            </v-flex>
            <v-flex align-self-center xs2>
              <label><small>SEGUNDO APELLIDO</small></label>
            </v-flex>
            <v-flex align-self-center xs1> </v-flex>
          </v-layout>
        </div>
      </v-row> -->
      <v-row justify="center" align="center" class="pt-3">
        <div class="text-center">
          <v-layout row justify-center>
            <v-flex align-self-center xs2><label>DOMICILIO</label></v-flex>
            <v-flex align-self-center xs2>
              <v-col md="12"> <v-text-field dense outlined label="Calle" :rules="[rules.required]" v-model="user.calle"></v-text-field></v-col>
            </v-flex>
            <v-flex align-self-center xs2>
              <v-col md="12"> <v-text-field dense outlined label="Número" :rules="[rules.required, rules.natural_number]" v-model="user.numero"></v-text-field></v-col>
            </v-flex>
            <v-flex align-self-center xs2>
              <v-col md="12"> <v-text-field dense outlined label="Colonia" :rules="[rules.required]" v-model="user.colonia"></v-text-field></v-col>
            </v-flex>
          </v-layout>
        </div>
      </v-row>
      <v-row justify="center" align="center" class="pt-3">
        <div class="text-center">
          <v-layout row justify-center>
            <v-flex align-self-center xs2><label>MUNICIPIO</label></v-flex>
            <v-flex align-self-center xs3>
              <v-autocomplete
                dense
                v-model="user.c_Municipio"
                :rules="[rules.required]"
                :items="items_municipios"
                item-text="Descripcion"
                item-value="c_Municipio"
                outlined
                style="height: 80px"
                class="bordeRedondoElement"
                label="Seleccione un municipio"
              ></v-autocomplete>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </div>
      </v-row>
      <v-row justify="center" align="center" class="pt-3">
        <div class="text-center">
          <v-layout row justify-center>
            <v-flex align-self-center xs2><label>LOCALIDAD</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col md="12"> <v-text-field dense outlined :rules="[rules.required]" v-model="user.localidad"></v-text-field></v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </div>
      </v-row>
      <v-row justify="center" align="center" class="pt-3">
        <div class="text-center">
          <v-layout row justify-center>
            <v-flex align-self-center xs2><label>CÓDIGO POSTAL</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col md="12"> <v-text-field dense outlined :rules="[rules.required, rules.natural_number]" v-model="user.cp"></v-text-field></v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </div>
      </v-row>
      <v-row justify="center" align="start" style="height: 60px" class="pt-3">
        <div class="text-center">
          <v-layout row justify-center>
            <v-flex align-self-center xs2><label>FOTOGRAFÍA</label></v-flex>
            <v-flex align-self-center xs3>
              <v-file-input
                label="Sube tu archivo"
                outlined
                dense
                show-size
                accept="image/png, image/jpeg, image/bmp"
                :rules="[rules.size]"
                v-model="user.fotografia"
              ></v-file-input>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
            <v-flex align-self-center> </v-flex>
          </v-layout>
        </div>
      </v-row>
      <v-row justify="center" align="center" class="pt-3">
        <div class="text-center">
          <v-layout row justify-center>
            <v-flex align-self-center xs2><label>CORREO ELECTRÓNICO</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col md="12"> <v-text-field dense outlined :rules="[rules.required, rules.email]" v-model="user.email"></v-text-field></v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </div>
      </v-row>
      <v-row justify="center" align="center" class="pt-3">
        <div class="text-center">
          <v-layout row justify-center>
            <v-flex align-self-center xs2><label>CURP</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col md="12"> <v-text-field dense outlined :rules="[rules.required]" v-model="user.curp"></v-text-field></v-col>
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
              <v-radio-group row :rules="[rules.required]" v-model="user.sexo">
                <v-radio dense label="FEMENINO" value="M" class="font-weight-black"></v-radio>
                <v-radio dense label="MASCULINO" value="H" class="font-weight-black"></v-radio>
                <v-spacer></v-spacer>
              </v-radio-group>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </div>
      </v-row>
      <v-row justify="center" align="center" class="pt-3">
        <div class="text-center">
          <v-layout row justify-center>
            <v-flex align-self-center xs2><label>FECHA DE NACIMIENTO</label></v-flex>
            <v-flex align-self-center xs2>
              <!-- <v-date-picker v-model="picker"></v-date-picker> -->
              <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="user.fecha_nacimiento"
                    label="Fecha de nacimiento"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    :rules="[rules.required]"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="user.fecha_nacimiento"
                  :max="new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10)"
                  locale="es-MX"
                  min="1950-01-01"
                  @change="save"
                ></v-date-picker>
              </v-menu>
            </v-flex>
            <v-flex align-self-center xs2>
              <!-- <v-combobox dense outlined></v-combobox> -->
            </v-flex>
            <v-flex align-self-center xs2>
              <!-- <v-combobox dense outlined></v-combobox> -->
            </v-flex>
          </v-layout>
        </div>
      </v-row>
      <v-row align="start" style="height: 25px">
        <!--   <div class="text-center">
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
        </div> -->
      </v-row>
      <v-row justify="center" align="center" class="pt-3">
        <div class="text-center">
          <v-layout row justify-center>
            <v-flex align-self-center xs2><label>NACIONALIDAD</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col md="12"> <v-text-field dense outlined :rules="[rules.required]" v-model="user.nacionalidad"></v-text-field></v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </div>
      </v-row>
      <v-row justify="center" align="center" class="pt-3">
        <div class="text-center">
          <v-layout row justify-center>
            <v-flex align-self-center xs2><label>EDAD</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col md="8"> <v-text-field dense outlined :rules="[rules.required, rules.natural_number]" v-model="user.edad"></v-text-field></v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </div>
      </v-row>
      <v-row justify="center" align="center" class="pt-3">
        <div class="text-center">
          <v-layout row justify-center>
            <v-flex align-self-center xs2><label>ESTADO CIVIL</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col md="12">
                <v-select
                  dense
                  outlined
                  :rules="[rules.required]"
                  :items="items_estadocivil"
                  item-text="text"
                  item-value="value"
                  v-model="user.estado_civil"
                  label="Seleccione una opción"
                ></v-select>
              </v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </div>
      </v-row>
      <v-row justify="center" align="center" class="pt-3">
        <div class="text-center">
          <v-layout row justify-center>
            <v-flex align-self-center xs2><label>NÚMERO DE CELULAR</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col md="8"> <v-text-field dense outlined :rules="[rules.required, rules.phone_number]" v-model="user.telefono"></v-text-field></v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </div>
      </v-row>
      <v-row justify="center" align="center" class="pt-3">
        <div class="text-center">
          <v-layout row justify-center>
            <v-flex align-self-center xs2><label>GRUPO VULNERABLE</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col md="12">
                <v-select
                  dense
                  outlined
                  :rules="[rules.required]"
                  :items="items_grupovulnerable"
                  item-text="nombre"
                  item-value="id"
                  v-model="user.grupo_vulnerable"
                  label="Seleccione una opción"
                ></v-select>
              </v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </div>
      </v-row>
      <v-row justify="center" align="center" class="pt-6">
        <div class="text-center">
          <v-layout row justify-center>
            <v-flex align-self-center xs2><label>DISCAPACIDAD</label></v-flex>
            <v-flex align-self-center xs3>
              <v-autocomplete
                dense
                outlined
                :rules="[rules.required]"
                :items="items_discapacidades"
                item-text="nombre"
                item-value="id"
                align="center"
                label="Seleccione una opción"
                v-model="user.idDiscapacidad"
              ></v-autocomplete>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </div>
      </v-row>
      <v-row justify="center" align="center" class="pt-6">
        <div class="text-center">
          <v-layout row justify-center>
            <v-flex align-self-center xs2><label>PERTENECE A</label></v-flex>
            <v-flex align-self-center xs3>
              <v-autocomplete
                dense
                outlined
                :rules="[rules.required]"
                :items="items_pertenece"
                item-text="nombre"
                item-value="id"
                label="Seleccione una opción"
                v-model="user.idPertenece"
              ></v-autocomplete>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </div>
      </v-row>
      <v-row justify="center" align="center" class="pt-6">
        <div class="text-center">
          <v-layout row justify-center>
            <v-flex align-self-center xs2><label>ESCOLARIDAD</label></v-flex>
            <v-flex align-self-center xs3>
              <v-autocomplete
                dense
                outlined
                :rules="[rules.required]"
                :items="items_escolaridad"
                item-text="nombre"
                item-value="id"
                label="Seleccione una opción"
                v-model="user.idEscolaridad"
              ></v-autocomplete>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </div>
      </v-row>
      <v-row justify="center" align="center" style="height: 70px">
        <div class="text-center">
          <v-layout row justify-center>
            <v-flex align-self-center xs2><label>HABLA LENGUA INDÍGENA</label></v-flex>
            <v-flex align-self-center xs3>
              <v-radio-group row :rules="[rules.required]" v-model="user.lengua_indigena">
                <v-radio dense label="SÍ" value="1" class="font-weight-black"></v-radio>
                <v-radio dense label="NO" value="0" class="font-weight-black"></v-radio>
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
            <v-flex align-self-center xs2><label>SITUACIÓN LABORAL</label></v-flex>
            <v-flex align-self-center xs3>
              <v-radio-group row :rules="[rules.required]" v-model="user.situacion_laboral">
                <v-radio dense label="EMPLEADO" value="1" class="font-weight-black"></v-radio>
                <v-radio dense label="DESEMPLEADO" value="0" class="font-weight-black"></v-radio>
                <v-spacer></v-spacer>
              </v-radio-group>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </div>
      </v-row>
      <v-row justify="center" align="center" class="pt-5">
        <div class="text-center">
          <v-layout row justify-center>
            <v-flex align-self-center xs2><label>MOTIVO</label></v-flex>
            <v-flex align-self-center xs3>
              <v-textarea dense auto-grow outlined rows="3" row-height="25" shaped :rules="[rules.required]" v-model="user.motivo"></v-textarea>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </div>
      </v-row>
      <v-row justify="center" align="center" class="pt-3 pb-3">
        <div class="text-center">
          <v-layout row justify-center>
            <v-flex align-self-center xs2><label>FIRMA DEL CAPACITANDO</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col md="8">
                <!--<v-text-field outlined :rules="[rules.required]" v-model="firma"></v-text-field>-->
                <VueSignaturePad width="500px" height="500px" ref="signaturePad" class="signature-pad" />
                <div class="d-flex flex-row m-1">
                  <v-btn @click="saveSignature">Guardar</v-btn>
                  <v-btn @click="undo">Deshacer</v-btn>
                </div></v-col
              >
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </div>
      </v-row>
    </v-form>
    <v-row>
      <v-col cols="12" align="center" class="pt-5">
        <v-btn color="success" dark x-large @click="register">Guardar</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AuthService from '@/services/AuthService.js';

export default {
  name: 'FormDatosRegistro',

  data: () => ({
    valid: true,
    band: false,
    logged_in: false,
    rules: {
      required: (value) => !!value || 'Campo requerido',
      counter: (value) => value.length <= 20 || 'Max 20 caracteres',
      phone_number: (value) => {
        const pattern_pnumber = /^\d{10}$/;
        return pattern_pnumber.test(value) || 'Número telefónico inválido';
      },
      natural_number: (value) => {
        const pattern_natnumber = /^[0-9]+$/;
        return pattern_natnumber.test(value) || 'Número inválido';
      },
      size: (value) => !value || value.size < 1000000 || 'El archivo debe pesar menos de 1 MB!',
      email: (value) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || 'Correo inválido';
      },
    },
    items_municipios: [],
    items_discapacidades: [],
    items_escolaridad: [],
    items_grupovulnerable: [
      { id: 1, nombre: 'SI' },
      { id: 2, nombre: 'NO' },
    ],
    items_estadocivil: [
      {value: 'S', text: 'SOLTERO(A)'},
      {value: 'C', text: 'CASADO(A)'},
      {value: 'V', text: 'VIUDO(A)'},
      {value: 'D', text: 'DIVORCIADO(A)'}
    ],
    items_pertenece: [],
    user: {
      nombre: "",
      apellido_paterno: "",
      apellido_materno: "",
      calle: "",
      numero: null,
      colonia: "",
      localidad: "",
      cp: null,
      fotografia: null,
      c_Municipio: null,
      email: "",
      curp: "",
      sexo: "",
      fecha_nacimiento: null,
      nacionalidad: "",
      edad: null,
      estado_civil: "",
      telefono: "",
      grupo_vulnerable: null,
      idDiscapacidad: null,
      idPertenece: null,
      idEscolaridad: null,
      lengua_indigena: null,
      motivo: "",
      situacion_laboral: null,
      firma_capacitando: "",
    },
    menu: false,
  }),

  async created() {
    this.logged_in = this.$store.getters.isLoggedIn != '';
  },
  async mounted() {
    let me = this;

    if (this.$store.getters.isLoggedIn) {
      try {
        const response = await AuthService.getProfile();
        const response2 = await AuthService.getMunicipios();
        const response3 = await AuthService.getDiscapacidades();
        const response4 = await AuthService.getEscolaridad();
        const response5 = await AuthService.getPertenece();
        me.items_municipios = response2.municipios;
        me.items_discapacidades = response3.data;
        me.items_escolaridad = response4.data;
        me.items_pertenece = response5.data;
        me.user.nombre = response.nombres;
        me.user.apellido_paterno = response.primer_apellido;
        me.user.apellido_materno = response.segundo_apellido;
        me.user.email = response.Email;
      } catch (error) {
        console.log('Error' + error);
      }
    }
  },

  methods: {
    async register() {
      let me = this;

      if (me.$refs.form_registro.validate()) {
        try {
          await AuthService.registerStudent(me.user);
          this.$swal('Registrado', 'Datos extras guardados correctamente.', 'success').then(() => {
            this.$router.push('/page-principal');
          });
        } catch (error) {
          console.log(error.response.data.errors);
          let error_msg = error.response.data.errors[Object.keys(error.response.data.errors)[0]][0];
          this.$swal('Error', error_msg, 'error');
        }
      } else {
        this.$swal('Advertencia', 'No ha completado la información solicitada', 'warning');
      }
    },

    save(date) {
      this.$refs.menu.save(date);
    },
    undo() {
      this.$refs.signaturePad.undoSignature();
    },
    saveSignature() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
      console.log(isEmpty);
      console.log(data);
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
