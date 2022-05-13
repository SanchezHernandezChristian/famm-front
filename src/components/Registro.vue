<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="error" dark v-bind="attrs" v-on="on" outlined>
          Registro
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
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Nombre*"
                  required
                  v-model="name"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Primer apellido*"
                  hint="Ingrese su primer apellido"
                  required
                  v-model="midname"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Segundo apellido*"
                  hint="Ingrese su segundo apellido"
                  persistent-hint
                  required
                  v-model="lastname"
                ></v-text-field>
              </v-col>
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
              <v-col cols="12">
                <v-text-field
                  label="Confirmación de contraseña*"
                  type="password"
                  required
                  v-model="password_confirmation"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <v-row>
            <v-col cols="12">
              <small class="text-danger">*Campo requerido</small>
            </v-col>
            <v-col cols="12">
              <small class="text-danger" v-show="error">Datos inválidos</small>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Cerrar
          </v-btn>
          <v-btn color="blue darken-1" text @click="register"> Guardar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    dialog: false,
    error: false,
    name: "",
    midname: "",
    lastname: "",
    email: "",
    password: "",
    password_confirmation: "",
  }),
  methods: {
    register() {
      let me = this;

      if (
        !me.name ||
        !me.midname ||
        !me.lastname ||
        !me.email ||
        !me.password ||
        !me.password_confirmation
      ) {
        me.error = !me.error;
        return;
      }

      axios
        .post("http://54.243.26.45/api/register", {
          name: `${me.name} ${me.midname} ${me.lastname}`,
          email: me.email,
          password: me.password,
          password_confirmation: me.password_confirmation,
        })
        .then(function (response) {
          me.dialog = false;
          console.log(response.data.mensaje);
        })
        .catch(function (error) {
          me.error = !me.error;
          console.log(error.response.data.mensaje);
        });
    },
  },
};
</script>