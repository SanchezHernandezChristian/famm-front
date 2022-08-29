<template>
  <v-container fluid class="max-height">
    <v-form ref="form_login_teacher" lazy-validation>
      <v-row justify="center" dense>
        <v-col cols="5">
          <v-img src="@/assets/img/logo.png"></v-img>
        </v-col>
      </v-row>
      <v-row justify="center" dense>
        <v-col cols="5">
          <v-text-field
            dense
            outlined
            label="Correo"
            prepend-icon="mdi-account"
            v-model="email"
            :rules="[rules.required, rules.email]"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center" dense>
        <v-col cols="5">
          <v-text-field
            dense
            outlined
            label="Contraseña"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            prepend-icon="mdi-account-key"
            :type="show1 ? 'text' : 'password'"
            :rules="[rules.required, rules.counter]"
            v-model="password"
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center" dense>
        <v-col cols="5">
          <v-btn block color="warning" class="text-black" @click="login"
            >INICIO DE SESIÓN</v-btn
          >
        </v-col>
      </v-row>
      <v-row justify="center" dense class="mt-4">
        <v-col cols="4" class="text-center">
          <p>¿Olvidaste tu contraseña?</p>
          <p>
            ¿No eres miembro todavía?
            <a href="/" class="orange--text text-decoration-none">Regístrate</a>
          </p>
        </v-col>
      </v-row>
      <v-row justify="center" dense class="mt-4">
        <v-col cols="4" class="d-flex justify-space-between">
          <p>Ayuda</p>
          <p>Soporte</p>
          <p>Reporta un problema</p>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import AuthService from "@/services/AuthService.js";

export default {
  name: "LoginTeacher",
  data: () => ({
    rules: {
      required: (value) => !!value || "Campo requerido",
      counter: (value) => value.length <= 20 || "Max 20 caracteres",
      email: (value) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Correo inválido";
      },
    },
    show1: false,
    email: "",
    password: "",
  }),

  methods: {
    async login() {
      if (this.$refs.form_login_teacher.validate()) {
        try {
          const credentials = {
            email: this.email,
            password: this.password,
          };
          const response = await AuthService.login(credentials);
          const token = response.token;
          const user = response.user;
          const rol = response.user.Rol;
          this.$store.dispatch("login", { token, user });
          switch (rol) {
            case "ADMINISTRADOR GENERAL":
              this.$router.push("/dashboard-admin");
              break;
            case "ADMINISTRADOR UNIDAD":
              this.$router.push("/dashboard-admin-unidad");
              break;
            case "DEPARTAMENTO DE SUPERVISIÓN ACADEMICA":
              this.$router.push("/dashboard-admin-unidad");
              break;
            case "PROFESOR":
              this.$router.push("/dashboard-instructor");
              break;
            default:
              this.$router.push("/page-principal");
              break;
          }
        } catch (error) {
          this.$swal("Error", error.response.data.mensaje, "error");
        }
      }
    },
  },
};
</script>
