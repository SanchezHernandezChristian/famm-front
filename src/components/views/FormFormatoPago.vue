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
              <strong>FORMATO DE PAGO</strong>
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
          <p></p>
        </div>
      </v-col>
    </v-row>
    <v-row
      ><br />
      <p></p>
      <br /><br />
      <p></p
    ></v-row>
    <v-form ref="form_formato_pago">
      <v-layout row>
        <v-row justify="center" align="center" style="height: 100px">
          <v-layout row justify-center>
            <v-flex align-self-center xs3> </v-flex>
            <v-flex align-self-center xs2
              ><label>CURSO SOLICITADO</label></v-flex
            >
            <v-flex align-self-center xs5>
              <v-col>
                <v-select
                  v-model="selectCurso"
                  :items="items_cursos"
                  item-text="nombre_curso"
                  item-value="idCurso"
                  :rules="rules.required"
                  required
                  return-object
                  dense
                  outlined
                  class="bordeRedondoElement"
                  label="Nombre del curso"
                ></v-select>
              </v-col>
            </v-flex>
            <v-flex align-self-center xs2> </v-flex>
          </v-layout>
        </v-row>
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs3> </v-flex>
            <v-flex align-self-center xs2><label>VOUCHER</label></v-flex>
            <v-flex align-self-center xs5>
              <v-col>
                <v-file-input
                  label="Fotografía voucher"
                  outlined
                  dense
                  show-size
                  accept="image/png, image/jpeg, image/bmp, application/pdf, image/jpg"
                  :rules="[rules.required, rules.size]"
                  ref="file_voucher"
                  v-model="file_voucher"
                ></v-file-input>
              </v-col>
            </v-flex>
            <v-flex align-self-center xs2> </v-flex>
          </v-layout>
        </v-row>
      </v-layout>
    </v-form>
    <v-row style="height: 90px"></v-row>
    <v-row>
      <div class="text-center">
        <v-layout row justify-end>
          <v-flex align-self-center xs3></v-flex>
          <v-flex align-self-center xs2>
            <template>
              <div class="text-center">
                <v-dialog v-model="dialog" width="500">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" v-bind="attrs" v-on="on">
                      GUARDAR
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title class="text-h5 white lighten-2">
                      ¡ATENCIÓN!
                    </v-card-title>
                    <v-card-text>
                      SI TODOS LOS DATOS SON CORRECTOS DA CLICK EN CONTINUAR
                    </v-card-text>
                    <v-card-actions>
                      <v-btn outlined color="gray" @click="dialog = false">
                        Cancelar
                      </v-btn>
                      <v-btn
                        outlined
                        style="color: #ffffff; background-color: #2b4c7b"
                        @click="createPayment"
                        >Continuar</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>
            </template>
          </v-flex>
          <v-flex align-self-center xs2
            ><v-btn outlined color="gray" @click="clean">LIMPIAR</v-btn></v-flex
          >
          <v-flex align-self-center xs2
            ><v-btn outlined color="gray" @click="cancelar"
              >CANCELAR</v-btn
            ></v-flex
          >
          <v-flex align-self-center xs3></v-flex>
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
      rules: {
        required: (v) => !!v || "Campo requerido",
        size: (v) =>
          !v || v.size < 1000000 || "El archivo debe pesar menos de 1 MB!",
      },
      dialog: false,
      form_participantes: {
        nombres: null,
        apellido_paterno: null,
        apellido_materno: null,
        sexo: null,
        telefono: null,
        celular: null,
      },
      user: {
        idUnidad: null,
      },
      items_cursos: [],
      selectCurso: {},
      file_voucher: null,
    };
  },

  async mounted() {
    let me = this;
    if (me.$store.getters.isLoggedIn) {
      try {
        const response = await AuthService.getProfile();
        this.user.idUnidad = response.idCentro_capacitacion;
        console.log("idUnidad", this.user.idUnidad);
        const response2 = await AuthService.getAllAssignUnidad(
          this.user.idUnidad
        );
        //const response2 = await AuthService.getCursos();
        this.items_cursos = response2.cursos;
        console.log("cursosAsignados", this.items_cursos);
      } catch (error) {
        console.log("Error", error.response);
      }
    }
  },

  methods: {
    async createPayment() {
      let me = this;
      if (me.$refs.form_formato_pago.validate()) {
        try {
          let data = {
            idCurso: this.selectCurso.idCurso,
            voucher: this.file_voucher.name,
          };
          console.log(data);
          await AuthService.createPayment(data);
          Object.assign(me.$data, me.$options.data());
          me.$refs.form_formato_pago.resetValidation();
          me.$swal(
            "Guardado",
            "Información guardada correctamente.",
            "success"
          ).then(() => {
            me.$router.push("/formatos-pago-registrados");
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
        me.$swal(
          "Advertencia",
          "No ha completado la información solicitada.",
          "warning"
        );
      }
    },

    async clean() {
      try {
        this.$refs.form_formato_pago.reset();
      } catch (error) {
        console.log(error);
      }
    },

    async cancelar() {
      try {
        this.$refs.form_formato_pago.reset();
        this.$router.push("/formatos-pago-registrados");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
