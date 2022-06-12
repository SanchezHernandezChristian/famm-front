<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" color="#394F79" class="ma-2" outlined> Iniciar sesión </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5"><i class="fa fa-sign-in" aria-hidden="true"></i> Entrar</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="form_login" lazy-validation>
              <v-row>
                <v-col cols="12">
                  <v-text-field label="Correo*" :rules="[rules.required, rules.email]" v-model="email"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field 
                  label="Contraseña*"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'"
                  :rules="[rules.required, rules.counter]"
                  v-model="password"
                   @click:append="show1 = !show1"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <small class="v-messages theme--light error--text" v-show="error">Error: {{ error_msg }}</small>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close"> Cerrar </v-btn>
          <v-btn color="blue darken-1" text @click="login"> Entrar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import AuthService from '@/services/AuthService.js';

export default {
  data: () => ({
    dialog: false,
    error: false,
    error_msg: 'Usuario o contraseña inválidos',
    show1: false,
    email: '',
    password: '',
    rules: {
      required: (value) => !!value || 'Campo requerido',
      counter: (value) => value.length <= 20 || 'Max 20 caracteres',
      email: (value) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || 'Correo inválido';
      },
    },
  }),
  methods: {
    async login() {
      let me = this;

      if (me.$refs.form_login.validate()) {
        try {
          const credentials = {
            email: me.email,
            password: me.password,
          };
          const response = await AuthService.login(credentials);
          const token = response.token;
          const user = response.user;
          const rol = response.user.Rol;
          me.dialog = false;
          this.$store.dispatch('login', { token, user });
          if (rol == 'ADMINISTRADOR') this.$router.push('/dashboard-admin');
          else this.$router.push('/page-principal');
          //else this.$router.push('/form-registro');
        } catch (error) {
          me.error = !me.error;
          me.error_msg = error.response.data.mensaje;
        }
      }
    },

    close() {
      let me = this;

      Object.assign(me.$data, me.$options.data());
      me.$refs.form_login.resetValidation();
    },
  },
};
</script>
