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
                    v-model="name"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Primer apellido*"
                    hint="Ingrese su primer apellido"
                    :rules="[rules.required]"
                    v-model="midname"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Segundo apellido*"
                    hint="Ingrese su segundo apellido"
                    :rules="[rules.required]"
                    v-model="lastname"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Correo*"
                    :rules="[rules.required, rules.email]"
                    v-model="email"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Contraseña*"
                    type="password"
                    :rules="[rules.required, rules.min, rules.max]"
                    v-model="password"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Confirmación de contraseña*"
                    type="password"
                    :rules="[rules.required, rules.min, rules.max, rules.match]"
                    v-model="password_confirmation"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <small class="text-danger">*Campo requerido</small>
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
    name: "",
    midname: "",
    lastname: "",
    email: "",
    password: "",
    password_confirmation: "",
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
          const pattern_pass = "";
          return pattern_pass.test(value) || "Contraseña inválida";
        }, */
        match: (value) =>
          (!!value && value) === me.password || "Las contraseñas no coinciden",
      };
    },
  },
  methods: {
    async register() {
      let me = this;

      if (me.$refs.form_user.validate()) {
        try {
          const user_data = {
            name: `${me.name} ${me.midname} ${me.lastname}`,
            email: me.email,
            password: me.password,
            password_confirmation: me.password_confirmation,
          };
          await AuthService.signUp(user_data);
          me.dialog = false;
        } catch (error) {
          me.error = !me.error;
          me.error_msg = error.response.data.mensaje;
        }
      }
    },

    close() {
      let me = this;

      Object.assign(me.$data, me.$options.data());
      me.$refs.form_user.resetValidation();
    },
  },
};
</script>
