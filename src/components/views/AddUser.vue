<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <br />
      <p></p>
      <h2 style="color: #2b4c7b" v-if="user.id">Añadir usuario/Editar</h2>
      <h2 style="color: #2b4c7b" v-else>Añadir usuario</h2>
    </v-row>
    <v-form ref="form_addusr" lazy-validation>
      <v-row justify="center" align="center" style="height: 70px">
        <div>
          <v-layout row justify-center>
            <br />
            <p></p>
            <v-flex align-self-baseline xs2
              ><label>Nombre de usuario</label></v-flex
            >
            <v-flex align-self-baseline xs5>
              <v-text-field
                dense
                outlined
                class="bordeRedondoElement"
                :rules="[rules.required]"
                v-model="user.user_name"
              ></v-text-field>
            </v-flex>
            <v-flex align-self-center xs5> </v-flex>
          </v-layout>
        </div>
      </v-row>
      <v-row justify="center" align="center" style="height: 70px">
        <div>
          <v-layout row justify-center>
            <br />
            <p></p>
            <v-flex align-self-baseline xs2><label>Email</label></v-flex>
            <v-flex align-self-center xs5>
              <v-text-field
                dense
                outlined
                class="bordeRedondoElement"
                :rules="[rules.required, rules.email]"
                v-model="user.email"
              ></v-text-field>
            </v-flex>
            <v-flex align-self-center xs5> </v-flex>
          </v-layout>
        </div>
      </v-row>
      <v-row justify="center" align="center" style="height: 70px">
        <div>
          <v-layout row justify-center>
            <br />
            <p></p>
            <v-flex align-self-baseline xs2><label>Nombres (s)</label></v-flex>
            <v-flex align-self-center xs5>
              <v-text-field
                dense
                outlined
                class="bordeRedondoElement"
                :rules="[rules.required]"
                v-model="user.name"
              ></v-text-field>
            </v-flex>
            <v-flex align-self-center xs5> </v-flex>
          </v-layout>
        </div>
      </v-row>
      <v-row justify="center" align="center" style="height: 70px">
        <div>
          <v-layout row justify-center>
            <br />
            <p></p>
            <v-flex align-self-baseline xs2
              ><label>Primer apellido</label></v-flex
            >
            <v-flex align-self-center xs5>
              <v-text-field
                dense
                outlined
                class="bordeRedondoElement"
                :rules="user.id ? [] : [rules.required]"
                v-model="user.surname"
              ></v-text-field>
            </v-flex>
            <v-flex align-self-center xs5> </v-flex>
          </v-layout>
        </div>
      </v-row>
      <v-row justify="center" align="center" style="height: 70px">
        <div>
          <v-layout row justify-center>
            <br />
            <p></p>
            <v-flex align-self-baseline xs2
              ><label>Segundo apellido</label></v-flex
            >
            <v-flex align-self-center xs5>
              <v-text-field
                dense
                outlined
                class="bordeRedondoElement"
                :rules="[rules.required]"
                v-model="user.lastname"
              ></v-text-field>
            </v-flex>
            <v-flex align-self-center xs5> </v-flex>
          </v-layout>
        </div>
      </v-row>
      <v-row justify="center" align="center" style="height: 70px">
        <div>
          <v-layout row justify-center>
            <br />
            <p></p>
            <v-flex align-self-baseline xs2><label>Contraseña</label></v-flex>
            <v-flex align-self-center xs5>
              <v-text-field
                dense
                outlined
                class="bordeRedondoElement"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                :rules="user.id ? [] : [rules.required]"
                v-model="user.password"
                @click:append="show1 = !show1"
              ></v-text-field>
            </v-flex>
            <v-flex align-self-center xs5> </v-flex>
          </v-layout>
        </div>
      </v-row>
      <v-row justify="center" align="center" style="height: 70px">
        <div>
          <v-layout row justify-center>
            <br />
            <p></p>
            <v-flex align-self-baseline xs2
              ><label>Repetir contraseña</label></v-flex
            >
            <v-flex align-self-center xs5>
              <v-text-field
                dense
                outlined
                class="bordeRedondoElement"
                :type="show1 ? 'text' : 'password'"
                :rules="user.id ? [] : [rules.required]"
                v-model="user.password_confirmation"
              ></v-text-field>
            </v-flex>
            <v-flex align-self-center xs5> </v-flex>
          </v-layout>
        </div>
      </v-row>
      <v-row justify="center" align="center" style="height: 80px">
        <div>
          <v-layout row justify-center>
            <v-flex align-self-baseline xs2
              ><label>Rol de usuario</label></v-flex
            >
            <v-flex align-self-center xs4>
              <v-select
                dense
                outlined
                class="bordeRedondoElement"
                :items="items_roles"
                :rules="[rules.required]"
                item-text="nombre_rol"
                item-value="idRol"
                v-model="user.idRol"
                label="Seleccione una opción"
              ></v-select>
            </v-flex>
            <v-flex align-self-center xs6> </v-flex>
          </v-layout>
        </div>
      </v-row>
      <v-row> <br /> </v-row>
      <v-row justify="center" align="start" style="height: 80px">
        <div class="text-center">
          <v-layout row justify-center>
            <v-flex align-self-baseline xs1>
              <v-btn
                outlined
                color="gray"
                class="bordeRedondoElement"
                @click="store"
                >Guardar</v-btn
              >
            </v-flex>
            <v-flex align-self-center xs11> </v-flex>
          </v-layout>
        </div>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import AuthService from "@/services/AuthService.js";

export default {
  name: "ViewAddUser",
  data: () => ({
    rules: {
      required: (value) => !!value || "Campo requerido",
      email: (value) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Correo inválido";
      },
    },
    show1: false,
    items_roles: [],
    user: {
      id: null,
      user_name: null,
      email: null,
      name: null,
      surname: null,
      lastname: null,
      apellidos: null,
      password: null,
      password_confirmation: null,
      idRol: null,
    },
    email_edit: null,
  }),

  created() {
    let me = this;

    if (me.$store.getters.isLoggedIn) {
      me.fetchRoles();
    }

    if (me.$route.params.id) {
      me.getUser(me.$route.params.id);
    }
  },

  methods: {
    async fetchRoles() {
      let me = this;
      try {
        const response = await AuthService.fetchRoles();
        me.items_roles = response.data;
      } catch (error) {
        console.log(error);
      }
    },

    async getUser(id) {
      let me = this;
      try {
        let response2 = await AuthService.getUser(id);
        response2 = response2.data[0];
        me.user = response2;
        me.user.name = response2.nombres;
        me.email_edit = response2.email;
        if (response2.apellidos) {
          me.user.surname = response2.apellidos.split(" ")[0];
          me.user.lastname = response2.apellidos.split(" ")[1];
        }
      } catch (error) {
        me.$swal(
          "Error",
          "No se pudo recuperar la unformación del usuario.",
          "error"
        );
      }
    },

    async store() {
      let me = this;
      if (me.$refs.form_addusr.validate()) {
        try {
          me.user.apellidos = `${me.user.surname} ${me.user.lastname}`;
          if (me.user.id) {
            if (me.user.email == me.email_edit) me.user.email = null;
            await AuthService.updateUser(me.user);
          } else await AuthService.addUser(me.user);
          Object.assign(me.$data, me.$options.data());
          me.$refs.form_addusr.resetValidation();
          me.fetchRoles();
          me.$swal(
            "Hecho",
            "La información del usuario se ha guardado correctamente.",
            "success"
          );
        } catch (error) {
          me.$swal("Error", error.response.data.message, "error");
        }
      } else {
        this.$swal(
          "Advertencia",
          "No ha completado la información solicitada",
          "warning"
        );
      }
    },
  },
};
</script>
