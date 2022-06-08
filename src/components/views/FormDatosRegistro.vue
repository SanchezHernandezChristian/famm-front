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
              <v-col md="12"> <v-text-field dense outlined label="Nombre(s)" :rules="[rules.required]" v-model="nombre"></v-text-field></v-col>
            </v-flex>
            <v-flex align-self-center xs2>
              <v-col md="12"> <v-text-field dense outlined label="Primer Apellido" :rules="[rules.required]" v-model="primer_apellido"></v-text-field></v-col>
            </v-flex>
            <v-flex align-self-center xs2>
              <v-col md="12"> <v-text-field dense outlined label="Segundo Apellido" :rules="[rules.required]" v-model="segundo_apellido"></v-text-field></v-col>
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
            <v-flex align-self-center xs3>
              <v-col md="8"> <v-text-field dense outlined :rules="[rules.required]" v-model="domicilio"></v-text-field></v-col>
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
              <v-file-input
                label="Sube tu archivo"
                outlined
                dense
                show-size
                accept="image/png, image/jpeg, image/bmp"
                :rules="[rules.required, rules.size]"
                v-model="fotografia"
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
            <v-flex><p></p></v-flex>
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
                v-model="select_municipio"
                :rules="[rules.required]"
                :items="items_municipios"
                item-text="Descripcion"
                item-value="c_Municipio"
                return-object
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
            <v-flex align-self-center xs2><label>CORREO ELECTRÓNICO</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col md="8"> <v-text-field dense outlined :rules="[rules.required, rules.email]" v-model="email"></v-text-field></v-col>
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
              <v-col md="8"> <v-text-field dense outlined :rules="[rules.required]" v-model="curp"></v-text-field></v-col>
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
              <v-radio-group row :rules="[rules.required]" v-model="radioGroupSexo">
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
                    v-model="date"
                    label="Fecha de nacimiento"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    :rules="[rules.required]"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
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
              <v-col md="8"> <v-text-field dense outlined :rules="[rules.required]" v-model="nacionalidad"></v-text-field></v-col>
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
              <v-col md="8"> <v-text-field dense outlined :rules="[rules.required, rules.natural_number]" v-model="edad"></v-text-field></v-col>
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
              <v-col md="8"> <v-text-field dense outlined :rules="[rules.required]" v-model="estado_civil"></v-text-field></v-col>
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
              <v-col md="8"> <v-text-field dense outlined :rules="[rules.required, rules.phone_number]" v-model="numero_celular"></v-text-field></v-col>
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
              <v-col md="8">
                <v-select
                  dense
                  outlined
                  :rules="[rules.required]"
                  :items="items_grupovulnerable"
                  item-text="nombre"
                  item-value="id"
                  v-model="grupo_vulnerable"
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
                v-model="discapacidad"
              ></v-autocomplete>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </div>
      </v-row>
      <v-row justify="center" align="center" class="pt-3">
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
                v-model="pertenece"
              ></v-autocomplete>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </div>
      </v-row>
      <v-row justify="center" align="center" class="pt-3">
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
                v-model="escolaridad"
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
              <v-radio-group row :rules="[rules.required]" v-model="radioGroupLengua">
                <v-radio dense label="SÍ" value="1" class="font-weight-black"></v-radio>
                <v-radio dense label="NO" value="0" class="font-weight-black"></v-radio>
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
            <v-flex align-self-center xs2><label>MOTIVO</label></v-flex>
            <v-flex align-self-center xs3>
              <v-textarea dense auto-grow outlined rows="3" row-height="25" shaped v-model="motivo"></v-textarea>
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
              <v-radio-group row :rules="[rules.required]" v-model="radioGroupSituacion">
                <v-radio dense label="EMPLEADO" value="1" class="font-weight-black"></v-radio>
                <v-radio dense label="DESEMPLEADO" value="0" class="font-weight-black"></v-radio>
                <v-spacer></v-spacer>
              </v-radio-group>
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
                <v-text-field outlined :rules="[rules.required]" v-model="firma"></v-text-field>
                <VueSignaturePad width="500px" height="500px" ref="signaturePad" />
                <div>
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
      <v-col cols="12" align="center" class="pt-3">
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
    items_pertenece: [],
    nombre: '',
    primer_apellido: '',
    segundo_apellido: '',
    domicilio: '',
    fotografia: null,
    select_municipio: null,
    email: '',
    curp: '',
    nacionalidad: '',
    edad: null,
    estado_civil: '',
    numero_celular: '',
    grupo_vulnerable: '',
    discapacidad: null,
    pertenece: '',
    escolaridad: null,
    motivo: '',
    firma: '',
    date: null,
    radioGroupLengua: null,
    radioGroupSexo: null,
    radioGroupSituacion: null,
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
        let band = response.EstatusPerfil;
        band = 0;
        if (band === 0) band = true;
      } catch (error) {
        console.log(error);
      }

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
        console.log('Error' + error);
      }
    }
  },

  methods: {
    async register() {
      let me = this;

      if (me.$refs.form_registro.validate()) {
        try {
          await AuthService.registerStudent({
            nombre: me.nombre,
            apellido_paterno: me.primer_apellido,
            apellido_materno: me.segundo_apellido,
            domicilio: me.domicilio,
            fotografia: me.fotografia,
            c_Municipio: me.select_municipio.c_Municipio,
            email: me.email,
            curp: me.curp,
            sexo: me.radioGroupSexo,
            fecha_nacimiento: me.date,
            nacionalidad: me.nacionalidad,
            edad: me.edad,
            estado_civil: me.estado_civil,
            telefono: me.numero_celular,
            grupo_vulnerable: me.grupo_vulnerable == 2 ? 0 : 1,
            idDiscapacidad: me.discapacidad,
            idPertenece: me.pertenece,
            idEscolaridad: me.escolaridad,
            lengua_indigena: me.radioGroupLengua,
            motivo: me.motivo,
            situacion_laboral: me.radioGroupSituacion,
            firma_capacitando: me.firma,
          });
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
