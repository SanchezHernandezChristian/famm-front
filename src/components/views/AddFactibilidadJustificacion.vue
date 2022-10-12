<template>
  <v-container class="max-height" fluid>
    <v-row>
      <v-col cols="12" class="m-0 p-0">
        <div>
          <p class="white--text pt-3 mb-2"></p>
        </div>
      </v-col>
      <v-col cols="12" class="m-0 p-0">
        <div class="text-center">
          <h5>
            <p style="color: #394f79">
              <strong>FACTIBILIDAD Y JUSTIFICACIÓN DE CURSOS DE CAPACITACIÓN</strong>
            </p>
          </h5>
          <h5>
            <p style="color: #394f79">
              <strong>FORMATO RUDC-04</strong>
            </p>
          </h5>
        </div>
      </v-col>
      <v-col cols="12" class="m-0 p-0">
        <div class="text-center">
          <p style="color: #aeacac">
            <strong>Rellena todos los campos para completar tu registro.</strong>
          </p>
          <p style="color: #aeacac">
            <strong>*Todos los campos son obligatorios.</strong>
          </p>
          <p></p>
        </div>
      </v-col>
    </v-row>
    <v-row
      ><br />
      <p></p>
      <br /><br />
      <p></p>
      <br
    /></v-row>
    <v-form ref="form_factibilidad">
      <v-layout row>
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2><label>NOMBRE DEL CURSO SOLICITADO</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col>
                <v-select
                  v-model="selectCurso"
                  :items="items_cursos"
                  item-text="nombre_curso"
                  item-value="idOficio"
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
            <v-flex align-self-center xs2><label>LUGAR</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col> <v-text-field outlined class="bordeRedondoElement" :rules="rules" v-model="form_f.lugar"></v-text-field></v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row>
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2><label>FECHA</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col>
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="form_f.fecha"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="form_f.fecha"
                      label="FECHA"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      :rules="rules"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="form_f.fecha" no-title scrollable locale="es-MX" :rules="rules">
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
                    <v-btn text color="primary" @click="$refs.menu.save(form_f.fecha)"> OK </v-btn>
                  </v-date-picker>
                </v-menu></v-col
              >
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
                <v-text-field outlined class="bordeRedondoElement" :rules="rules" v-model="form_f.region"></v-text-field>
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
                <v-text-field outlined class="bordeRedondoElement" :rules="rules" v-model="form_f.distrito"></v-text-field>
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
                  v-model="selectMunicipio"
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
            <v-flex align-self-center xs2><label>LOCALIDAD</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col>
                <v-text-field outlined class="bordeRedondoElement" :rules="rules" v-model="form_f.localidad"></v-text-field>
              </v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row>
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2><label>NOMBRE DEL REPRESENTANTE DEL GRUPO DE CAPACITACIÓN</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col> <v-text-field outlined class="bordeRedondoElement" :rules="rules" v-model="form_f.nombre_representante"></v-text-field></v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row>
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2><label>DOMICILIO</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col> <v-text-field outlined class="bordeRedondoElement" :rules="rules" v-model="form_f.domicilio"></v-text-field></v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row>
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2><label>TELÉFONO</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col>
                <v-text-field outlined class="bordeRedondoElement" :rules="[rules, rules_number.phone_number]" v-model="form_f.telefono"></v-text-field
              ></v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row>
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2><label>TOTAL PARTICIPANTES HOMBRES</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col>
                <v-text-field
                  outlined
                  class="bordeRedondoElement"
                  :rules="[rules, rules_number.natural_number]"
                  type="number"
                  v-model="form_f.total_hombres"
                  @input="ctotalInscritos"
                ></v-text-field
              ></v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row>
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2><label>TOTAL PARTICIPANTES MUJERES</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col>
                <v-text-field
                  outlined
                  class="bordeRedondoElement"
                  :rules="[rules, rules_number.natural_number]"
                  type="number"
                  v-model="form_f.total_mujeres"
                  @input="ctotalInscritos"
                ></v-text-field
              ></v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row>
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2><label>TOTAL INSCRITOS</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col>
                <v-text-field
                  outlined
                  class="bordeRedondoElement"
                  :rules="[rules, rules_number.natural_number]"
                  type="number"
                  v-model="form_f.total"
                  disabled
                ></v-text-field
              ></v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row>
        <v-row justify="center" align="start">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2>
              <label>INFRAESTRUCTURA ADECUADA Y SUFICIENTE</label>
            </v-flex>
            <v-flex align-self-center xs4>
              <v-radio-group row :rules="rules" v-model="form_f.infraestructura_adecuada">
                <v-radio label="SÍ" value="1"></v-radio>
                <v-radio label="NO" value="0"></v-radio>
              </v-radio-group>
            </v-flex>
            <v-flex align-self-center xs2> </v-flex>
          </v-layout>
        </v-row>
        <v-row style="height: 45px"></v-row>
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2><label>DETALLE EN QUÉ CONSISTE LA INFRAESTRUCTURA</label></v-flex>
            <v-flex align-self-center xs3>
              <v-textarea outlined name="input-7-5" v-model="form_f.detalles" class="bordeRedondoElement"></v-textarea>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row>
        <v-row style="height: 45px"></v-row>
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2><label>EXPLICAR DETALLADAMENTE LAS RAZONES POR LAS QUE ES NECESARIO OPERAR EL CURSO SOLICITADO</label></v-flex>
            <v-flex align-self-center xs3>
              <v-textarea outlined name="input-7-5" v-model="form_f.explicacion" class="bordeRedondoElement"></v-textarea>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row>
        <v-row justify="center" align="start">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2> </v-flex>
            <v-flex align-self-center xs4>
              <v-radio-group row :rules="rules" v-model="form_f.positivo">
                <v-radio label="POSITIVO" value="1"></v-radio>
                <v-radio label="NEGATIVO" value="0"></v-radio>
              </v-radio-group>
            </v-flex>
            <v-flex align-self-center xs2> </v-flex>
          </v-layout>
        </v-row>
        <v-row style="height: 35px"></v-row>
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2><label>RAZONES</label></v-flex>
            <v-flex align-self-center xs3>
              <v-textarea outlined name="input-7-5" v-model="form_f.razones" class="bordeRedondoElement"></v-textarea>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row>
        <v-row style="height: 40px"></v-row>
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2><label>NOMBRE DEL ADMINISTRATIVO DE LA OFICINA DE ATENCIÓN ICAPET QUE VERIFICÓ</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col>
                <!-- <v-text-field
                  outlined
                  class="bordeRedondoElement"
                  :rules="rules"
                  v-model="form_f.nombre_administrativo"
                ></v-text-field
              > -->
                <v-select
                  v-model="select"
                  :items="items_admis"
                  item-text="nombres"
                  item-value="id"
                  :rules="[rules.required]"
                  class="bordeRedondoElement"
                  label="Seleccione un administrativo"
                  required
                  return-object
                  dense
                  outlined
                ></v-select>
              </v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row>
      </v-layout>
    </v-form>
    <v-row style="height: 90px"></v-row>
    <v-row>
      <div class="text-center">
        <v-layout row justify-end>
          <v-flex align-self-center xs3></v-flex>
          <v-flex align-self-center xs2> </v-flex>
          <v-flex align-self-center xs2>
            <template>
              <div class="text-center">
                <v-dialog v-model="dialog" width="500">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" v-bind="attrs" v-on="on"> GUARDAR </v-btn>
                  </template>
                  <v-card>
                    <v-card-title class="text-h5 white lighten-2"> ¡ATENCIÓN! </v-card-title>
                    <v-card-text> SI TODOS LOS DATOS SON CORRECTOS DA CLICK EN CONTINUAR </v-card-text>
                    <v-card-actions>
                      <v-btn outlined color="gray" @click="dialog = false"> Cancelar </v-btn>
                      <v-btn outlined style="color: #ffffff; background-color: #2b4c7b" @click="createFactibilidad">Continuar</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>
            </template>
          </v-flex>
          <v-flex align-self-center xs2><v-btn outlined color="gray" @click="clean">LIMPIAR</v-btn></v-flex>
          <v-flex align-self-center xs2><v-btn outlined color="gray" @click="cancelar">CANCELAR</v-btn></v-flex>
          <v-flex align-self-center xs1></v-flex>
        </v-layout>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import AuthService from '@/services/AuthService.js';

export default {
  data() {
    return {
      rules: [(v) => !!v || 'Campo requerido'],
      rules_number: {
        phone_number: (value) => {
          const pattern_pnumber = /^\d{10}$/;
          return pattern_pnumber.test(value) || 'Número telefónico inválido';
        },
        natural_number: (value) => {
          const pattern_natnumber = /^[0-9]+$/;
          return pattern_natnumber.test(value) || 'Número inválido';
        },
      },
      dialog: false,
      menu: false,
      form_f: {
        idCurso: null,
        lugar: null,
        fecha: null,
        region: null,
        distrito: null,
        c_Municipio: null,
        localidad: null,
        nombre_representante: null,
        domicilio: null,
        telefono: null,
        total_hombres: null,
        total_mujeres: null,
        total: null,
        infraestructura_adecuada: null,
        detalles: null,
        explicacion: null,
        positivo: null,
        razones: null,
        idUsuario: null,
      },
      items_municipios: [],
      items_cursos: [],
      selectMunicipio: {},
      selectCurso: {},
      user: {
        idUnidad: null,
      },
      items_admis: [],
      select: {},
    };
  },

  async mounted() {
    let me = this;
    if (me.$store.getters.isLoggedIn) {
      try {
        const response = await AuthService.getMunicipios();
        me.items_municipios = response.municipios;
        const responseUser = await AuthService.getProfile();
        this.user.idUnidad = responseUser.idCentro_capacitacion;
        console.log('idUnidad', this.user.idUnidad);
        const response2 = await AuthService.getCursoSolicitudValida(this.user.idUnidad);
        this.items_cursos = response2.data;
        console.log('cursosAsignados', this.cursosAsignados);
        const response3 = await AuthService.getAllAssignUnidad(this.user.idUnidad);
        this.items_admis = response3.data;
        console.log('administradores ', this.items_admis);
        // const response3 = await AuthService.getCursos();
        // me.items_cursos = response3.cursos;
      } catch (error) {
        console.log('Error', error.response);
      }
    }
  },

  methods: {
    async createFactibilidad() {
      let me = this;
      if (me.$refs.form_factibilidad.validate()) {
        try {
          me.form_f.c_Municipio = this.selectMunicipio.c_Municipio;
          me.form_f.idCurso = this.selectCurso.idCurso;
          me.form_f.idUsuario = this.select.id;
          console.log(me.form_f);
          await AuthService.addFactibilidadJustificacion(me.form_f);
          Object.assign(me.$data, me.$options.data());
          me.$refs.form_factibilidad.resetValidation();
          me.$swal('Guardado', 'Información guardada correctamente.', 'success').then(() => {
            me.$router.push('/factibilidad-justificacion-registradas');
          });
        } catch (error) {
          console.log(error.response);
          me.$swal('Error', 'Error al intentar guardar la información.', 'error');
        }
      } else {
        me.$swal('Advertencia', 'No ha completado la información solicitada.', 'warning');
      }
    },

    async clean() {
      try {
        this.$refs.form_factibilidad.reset();
      } catch (error) {
        console.log(error);
      }
    },

    async cancelar() {
      try {
        this.$refs.form_factibilidad.reset();
        this.$router.push('/factibilidad-justificacion-registradas');
      } catch (error) {
        console.log(error);
      }
    },

    async ctotalInscritos() {
      this.form_f.total = parseInt(this.form_f.total_mujeres, 10) + parseInt(this.form_f.total_hombres, 10);
    },
  },
};
</script>
