<template>
  <v-container fluid>
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
              <strong>RELACIÓN DE PARTICIPANTES FORMATO RUDC-05</strong>
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
      <br
    /></v-row>
    <v-form ref="form_relP">
      <v-layout row>
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs1> </v-flex>
            <v-flex align-self-baseline xs2
              ><label>APELLIDO PATERNO</label></v-flex
            >
            <v-flex align-self-baseline xs3>
              <v-col>
                <v-text-field
                  outlined
                  class="bordeRedondoElement"
                  :rules="rules"
                  v-model="form_participantes.apellido_paterno"
                ></v-text-field
              ></v-col>
            </v-flex>
            <v-flex align-self-baseline xs2
              ><label>APELLIDO MATERNO</label></v-flex
            >
            <v-flex align-self-center xs3>
              <v-col>
                <v-text-field
                  outlined
                  class="bordeRedondoElement"
                  :rules="rules"
                  v-model="form_participantes.apellido_materno"
                ></v-text-field
              ></v-col>
            </v-flex>
            <v-flex align-self-center xs1> </v-flex>
          </v-layout>
        </v-row>
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs1> </v-flex>
            <v-flex align-self-baseline xs2><label>NOMBRE</label></v-flex>
            <v-flex align-self-baseline xs3>
              <v-col>
                <v-text-field
                  outlined
                  class="bordeRedondoElement"
                  :rules="rules"
                  v-model="form_participantes.nombres"
                ></v-text-field
              ></v-col>
            </v-flex>
            <v-flex align-self-baseline xs2><label>SEXO</label></v-flex>
            <v-flex align-self-center xs3>
              <v-radio-group
                row
                :rules="rules"
                v-model="form_participantes.sexo"
              >
                <v-radio label="MASCULINO" value="M"></v-radio>
                <v-radio label="FEMENINO" value="F"></v-radio>
              </v-radio-group>
            </v-flex>
            <v-flex align-self-center xs1> </v-flex>
          </v-layout>
        </v-row>
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs1> </v-flex>
            <v-flex align-self-baseline xs2><label>TELÉFONO</label></v-flex>
            <v-flex align-self-baseline xs3>
              <v-col>
                <v-text-field
                  outlined
                  class="bordeRedondoElement"
                  :rules="rules"
                  v-model="form_participantes.telefono"
                ></v-text-field
              ></v-col>
            </v-flex>
            <v-flex align-self-baseline xs2><label>CELULAR</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col>
                <v-text-field
                  outlined
                  class="bordeRedondoElement"
                  :rules="rules"
                  v-model="form_participantes.celular"
                ></v-text-field
              ></v-col>
            </v-flex>
            <v-flex align-self-center xs1> </v-flex>
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
                        @click="createRelacion"
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
          <v-flex align-self-center xs1></v-flex>
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
      dialog: false,
      form_participantes: {
        nombres: null,
        apellido_paterno: null,
        apellido_materno: null,
        sexo: null,
        telefono: null,
        celular: null,
      },
    };
  },

  methods: {
    async createRelacion() {
      let me = this;
      if (me.$refs.form_relP.validate()) {
        try {
          console.log(me.form_participantes);
          await AuthService.addRelacionParticipante(me.form_participantes);
          Object.assign(me.$data, me.$options.data());
          me.$refs.form_relP.resetValidation();
          me.$swal(
            "Guardado",
            "Información guardada correctamente.",
            "success"
          ).then(() => {
            me.$router.push("/relacion-participantes-registrados");
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
        this.$refs.form_relP.reset();
      } catch (error) {
        console.log(error);
      }
    },

    async cancelar() {
      try {
        this.$refs.form_relP.reset();
        this.$router.push("/relacion-participantes-registrados");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
