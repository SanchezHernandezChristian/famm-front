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
                v-model="user.username"
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
                :rules="[rules.required]"
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
                :rules="[rules.required]"
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
                :rules="[rules.required]"
                v-model="user.password2"
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
                item-text="nombre"
                item-value="id"
                v-model="user.role"
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
      username: null,
      email: null,
      name: null,
      surname: null,
      lastname: null,
      password: null,
      password2: null,
      role: null,
      rolename: null,
      date: "13/06/2022",
    },
  }),

  created() {
    let me = this;

    if (me.$store.getters.isLoggedIn) {
      me.getRoles();
    }

    if (me.$route.params.id) {
      let data = JSON.parse(localStorage.getItem("adm_users"));
      me.user = data[me.$route.params.id];
    }
  },

  methods: {
    getRoles() {
      let me = this;

      me.items_roles = [
        { id: 1, nombre: "ALUMNO" },
        { id: 2, nombre: "PROFESOR" },
        { id: 3, nombre: "ADMINISTRADOR" },
      ];
    },

    store() {
      let me = this;

      if (me.$refs.form_addusr.validate()) {
        let data = localStorage.getItem("adm_users")
          ? JSON.parse(localStorage.getItem("adm_users"))
          : {};
        let id = localStorage.getItem("auto_id")
          ? parseInt(localStorage.getItem("auto_id")) + 1
          : 1;

        if (me.user.id) id = me.user.id;

        for (const iterator of me.items_roles) {
          if (iterator.id == me.user.role) me.user.rolename = iterator.nombre;
        }

        me.user.id = id;
        data[id] = me.user;
        localStorage.setItem("adm_users", JSON.stringify(data));
        localStorage.setItem("auto_id", id);
        Object.assign(me.$data, me.$options.data());
        me.$refs.form_addusr.resetValidation();
        me.getRoles();
        this.$swal(
          "Todo listo",
          "La información del usuario se ha guardado correctamente.",
          "success"
        ).then(() => {});
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
