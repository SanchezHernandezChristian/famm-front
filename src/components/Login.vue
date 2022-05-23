<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" color="#394F79" class="ma-2" outlined>
          Iniciar sesión
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5"
            ><i class="fa fa-sign-in" aria-hidden="true"></i> Entrar</span
          >
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Correo*"
                  required
                  v-model="email"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Contraseña*"
                  type="password"
                  required
                  v-model="password"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <v-row>
            <v-col cols="12">
              <small class="text-danger">*Campo requerido</small>
            </v-col>
            <v-col cols="12">
              <small class="text-danger" v-show="error"
                >Usuario o contraseña inválidos</small
              >
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Cerrar
          </v-btn>
          <v-btn color="blue darken-1" text @click="login"> Entrar </v-btn>
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
    email: "",
    password: "",
  }),
  methods: {
    async login() {
      let me = this;

      if (!me.email || !me.password) {
        me.error = !me.error;
        return;
      }

      try {
        const credentials = {
          email: me.email,
          password: me.password,
        };
        const response = await AuthService.login(credentials);
        const token = response.token;
        const user = response.user;
        me.dialog = false;
        this.$store.dispatch("login", { token, user });
        if (this.$route.name == "RegistroForm") this.$router.go();
        else this.$router.push("/form-registro");
      } catch (error) {
        me.error = !me.error;
        console.log(error);
      }
    },
  },
};
</script>
