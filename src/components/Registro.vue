<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" color="#87356E" class="ma-2" dark>
          Registrarse
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5"
            ><i class="fa fa-user-o" aria-hidden="true"></i> Registro de
            usuario</span
          >
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="form_user" lazy-validation>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Nombre*"
                    hint="Ingrese su nombre"
                    :rules="[rules.required]"
                    v-model="user.name"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Primer apellido*"
                    hint="Ingrese su primer apellido"
                    :rules="[rules.required]"
                    v-model="user.primer_apellido"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Segundo apellido*"
                    hint="Ingrese su segundo apellido"
                    v-model="user.segundo_apellido"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Correo*"
                    :rules="[rules.required, rules.email]"
                    v-model="user.email"
                  ></v-text-field>
                </v-col>
                <v-col cols="10">
                  <v-text-field
                    label="Contraseña*"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'"
                    :rules="[rules.required, rules.min, rules.max]"
                    v-model="user.password"
                    @click:append="show1 = !show1"
                  ></v-text-field>
                </v-col>
                <v-col cols="2">
                  <v-tooltip right>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        class="mx-1"
                        fab
                        dark
                        x-small
                        color="primary"
                        v-bind="attrs"
                        v-on="on"
                        @click="showPasswordRules"
                      >
                        <v-icon dark> mdi-information-variant </v-icon>
                      </v-btn>
                    </template>
                    <span>Información contraseña</span>
                  </v-tooltip>
                </v-col>
                <v-col cols="12" v-if="show_pass_rules">
                  <v-card class="mx-auto" max-width="500" tile>
                    <v-subheader
                      >La contraseña deberá conformarse por:</v-subheader
                    >
                    <v-list dense>
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title
                            >Una longitud de 8 a 20
                            caracteres.</v-list-item-title
                          >
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title
                            >Como mínimo una letra minúscula.</v-list-item-title
                          >
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title
                            >Como mínimo una letra mayúscula.</v-list-item-title
                          >
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title
                            >Como mínimo un número.</v-list-item-title
                          >
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title
                            >No debe contener espacios.</v-list-item-title
                          >
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-card>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Confirmación de contraseña*"
                    :type="show1 ? 'text' : 'password'"
                    :rules="[rules.required, rules.min, rules.max, rules.match]"
                    v-model="user.password_confirmation"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <small>*Campo requerido</small>
                </v-col>
                <v-col cols="12">
                  <small
                    class="v-messages theme--light error--text"
                    v-show="error"
                    >Error: {{ error_msg }}</small
                  >
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close"> Cerrar </v-btn>
          <v-btn color="blue darken-1" text @click="register"> Guardar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import AuthService from "@/services/AuthService.js";

export default {
  data: () => ({
    dialog: false,
    error: false,
    error_msg: "Datos inválidos",
    show_pass_rules: false,
    show1: false,
    user: {
      name: "",
      primer_apellido: "",
      segundo_apellido: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
  }),
  computed: {
    rules() {
      let me = this;

      return {
        required: (value) => !!value || "Campo requerido",
        min: (value) => value.length >= 8 || "Min 8 caracteres",
        max: (value) => value.length <= 15 || "Max 15 caracteres",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Correo inválido";
        },
        /* password: (value) => {
          const pattern_pass =
            /^(?=.[a-záéíóú\u00f1].)(?=.[A-ZÁÉÍÓÚ\u00d1].)(?=.\d.)(?=(?:.*[@$&?¡\-+.=!¿#]))([A-ZÁÉÍÓÚ\u00d1a-záéíóú\u00f1\d@$&?¡\-+.=!¿#]|[^ ]){8,15}$/;
          return pattern_pass.test(value) || "Contraseña inválida";
        }, */
        match: (value) =>
          (!!value && value) === me.user.password ||
          "Las contraseñas no coinciden",
      };
    },
  },
  methods: {
    async register() {
      let me = this;

      if (me.$refs.form_user.validate()) {
        try {
          await AuthService.signUp(me.user);
          me.dialog = false;
          this.$swal(
            "Registrado",
            "Usuario registrado correctamente, inicie sesión",
            "success"
          );
        } catch (error) {
          me.error = !me.error;
          me.error_msg =
            error.response.data.errors[
              Object.keys(error.response.data.errors)[0]
            ][0];
        }
      }
    },

    close() {
      let me = this;

      Object.assign(me.$data, me.$options.data());
      me.$refs.form_user.resetValidation();
    },

    showPasswordRules() {
      let me = this;

      me.show_pass_rules = !me.show_pass_rules;
    },
  },
};
</script>
