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
                v-model="user.primer_apellido"
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
                v-model="user.segundo_apellido"
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
                v-on:change="selectUnidadCapacitacion"
              ></v-select>
            </v-flex>
            <v-flex align-self-center xs6> </v-flex>
          </v-layout>
        </div>
      </v-row>
      <v-row
        justify="center"
        align="center"
        style="height: 70px"
        v-if="mostrarUnidadCap || user.idRol === 5"
      >
        <div>
          <v-layout row justify-center>
            <v-flex align-self-baseline xs2
              ><label>Unidad de capacitación</label></v-flex
            >
            <v-flex align-self-center xs4>
              <v-select
                v-model="select"
                :items="items"
                item-text="nombre"
                item-value="id"
                :rules="[rules.required]"
                class="bordeRedondoElement"
                label="Seleccione una unidad de capacitación"
                required
                return-object
                dense
                outlined
              ></v-select>
            </v-flex>
            <v-flex align-self-center xs6> </v-flex>
          </v-layout>
        </div>
      </v-row>
      <v-row> <br /> </v-row>
      <v-row justify="center" align="start" style="height: 80px">
        <v-col cols="12">
          <v-btn class="bordeRedondoElement ml-3" @click="clean()">
            Borrar los campos
          </v-btn>
          <v-btn class="bordeRedondoElement ml-3" @click="cancel()">
            Cancelar
          </v-btn>
          <v-btn color="orange" class="bordeRedondoElement ml-3" @click="store">
            Guardar
          </v-btn>
        </v-col>
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
      primer_apellido: null,
      segundo_apellido: null,
      password: null,
      password_confirmation: null,
      idRol: null,
      idCentro_capacitacion: null, //agregar id para almacenar la unidad de capacitación
    },
    email_edit: null,
    select: {
      id: null,
      nombre: "",
      director: "",
      telefono: "",
      direccion: "",
      tipo: "",
      created_at: null,
      updated_at: null,
    }, //<-- el seleccionado estará aquí
    items: [], // <-- La lista de unidades de capacitación
    mostrarUnidadCap: false,
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
        const listCenters = await AuthService.getAllCenters();
        this.items = listCenters.data;
        if (me.user.idCentro_capacitacion != null) {
          const responseC = await AuthService.getCenterUnic(me.user.idCentro_capacitacion);
          this.select = responseC.data;
        }
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
      } catch (error) {
        me.$swal(
          "Error",
          "No se pudo recuperar la unformación del usuario.",
          "error"
        );
      }
    },

    async selectUnidadCapacitacion() {
      if (this.user.idRol == 5) {
        this.mostrarUnidadCap = true;
      } else {
        this.mostrarUnidadCap = false;
      }
    },

    async store() {
      let me = this;
      if (me.$refs.form_addusr.validate()) {
        try {
          if (me.user.id) {
            if (me.user.email == me.email_edit) me.user.email = null;            
            me.user.idCentro_capacitacion = this.select.id;
            await AuthService.updateUser(me.user);
          } else {
            me.user.idCentro_capacitacion = this.select.id;
            await AuthService.signUp(me.user);
          }
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

    clean() {
      Object.assign(this.$data, this.$options.data());
      this.$refs.form_addusr.resetValidation();
      this.fetchRoles();
    },

    cancel() {
      this.$router.push("users");
    },
  },
};
</script>
