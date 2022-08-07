<template>
  <v-container fluid>
    <v-row class="fondodashboardadmin">
      <v-layout>
        <v-flex align-self-center xs2>
          <v-img
            max-height="25%"
            max-width="50%"
            src="@/assets/img/logoBlanco.png"
            @click="redirect"
          ></v-img>
        </v-flex>
        <v-flex align-self-center xs>
          <label>UNIDAD DE CAPACITACIÓN</label>
        </v-flex>
        <v-flex align-self-center xs1
          ><i class="fa fa-envelope-open-o" aria-hidden="true"></i
        ></v-flex>
        <v-flex align-self-center xs1>
          <i class="fa fa-user-o" aria-hidden="true"></i>
        </v-flex>
        <v-flex align-self-center xs2>
          <v-menu offset-y v-for="(item, index) in items" :key="index">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                style="color: #ffffff; background-color: #2b4c7b"
                elevation="0"
              >
                {{ item.title }}
                <v-icon color="#ffffff">mdi-menu-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in user"
                :key="index"
                link
                @click="selectSection()"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-flex>
      </v-layout>
    </v-row>
    <v-row style="background-color: white">
      <v-layout>
        <v-flex align-self-center xs2>
          <v-menu transition="scroll-y-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                depressed
                color="#FFFFFF"
                elevation="0"
                class="ma-2"
                v-bind="attrs"
                v-on="on"
                style="font-size: 15px; color: #bdbbbd"
                @click="selectItem('')"
                ><v-icon color="#bdbbbd">mdi-home</v-icon>
                Dashboard
              </v-btn>
            </template>
          </v-menu>
        </v-flex>
        <v-flex align-self-center xs2>
          <v-menu transition="scroll-y-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                depressed
                color="#FFFFFF"
                elevation="0"
                class="ma-2"
                v-bind="attrs"
                v-on="on"
                style="font-size: 15px; color: #bdbbbd"
                ><v-icon color="#bdbbbd">mdi-chart-bar</v-icon>
                Graficas
              </v-btn>
            </template>
          </v-menu>
        </v-flex>
        <v-flex align-self-center xs3>
          <v-menu transition="scroll-y-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                depressed
                color="#FFFFFF"
                elevation="0"
                class="ma-2"
                v-bind="attrs"
                v-on="on"
                style="font-size: 15px; color: #bdbbbd"
                ><v-icon color="#bdbbbd">mdi-swap-horizontal-bold</v-icon>
                Pre autorización de cursos
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in items_preautorizacion"
                :key="index"
                @click="selectItem(item.value)"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-flex>
        <v-flex align-self-center xs2>
          <v-menu transition="scroll-y-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                depressed
                color="#FFFFFF"
                elevation="0"
                class="ma-2"
                v-bind="attrs"
                v-on="on"
                style="font-size: 15x; color: #bdbbbd"
                ><v-icon color="#bdbbbd">mdi-check-bold</v-icon>
                Cursos activos
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in items_cursos"
                :key="index"
                @click="selectItem(item.value)"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-flex>
        <v-flex align-self-center xs2>
          <v-menu transition="scroll-y-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-bind="attrs"
                v-on="on"
                label="Buscar"
                prepend-icon="mdi-magnify"
              ></v-text-field>
            </template>
          </v-menu>
        </v-flex>
      </v-layout>
    </v-row>
  </v-container>
</template>

<script>
import AuthService from "@/services/AuthService.js";

export default {
  name: "MenuAdmin",
  components: {},
  data: () => ({
    items: [{ title: "Unidad" }],
    user: [{ title: "Cerrar sesión", icon: "" }],
    items_cursos: [
      { title: "Validación de calificaciones", value: "" },
      { title: "Oficio de remisión RUDC-13", value: "" },
      { title: "Acta", value: "" },
      { title: "Reporte", value: "" },
      { title: "Control", value: "" },
      { title: "Registro", value: "" },
      { title: "Acta de clausura RUDC-21", value: "" },
    ],
    items_preautorizacion: [
      { title: "Validar RDPC-11", value: "validacion-instructores" },
      { title: "Cédula de preautorización", value: "cedula-pre-autorizada" },
      { title: "Validar cronograma RUDC-08", value: "cronograma" },
      {
        title: "Relación de participntes",
        value: "relacion-participantes-registrados",
      },
      { title: "Croquis formato RUDC-10", value: "" },
      { title: "Validar lista de asistencia RUDC-15", value: "" },
      {
        title: "Factibilidad y justificación",
        value: "factibilidad-justificacion-registradas",
      },
      { title: "Formato de autorización", value: "" },
      { title: "Oficio y bitácora RUDC-03", value: "" },
    ],
  }),
  methods: {
    async mounted() {
      let me = this;

      if (this.$store.getters.isLoggedIn) {
        try {
          const response = await AuthService.getProfile();
          me.items[0].title = response.Nombre;
          console.log(response.Nombre);
        } catch (error) {
          console.log(error);
        }
      }
    },

    selectItem(route) {
      if (route) {
        this.$router.push(route);
      }
    },

    selectSection() {
      this.logout();
    },

    async logout() {
      try {
        await AuthService.logout();
        this.$store.dispatch("logout");
        if (this.$route.name == "Home") this.$router.go();
        else this.$router.push("/");
      } catch (error) {
        if (error.response.status == 401) this.redirect();
        console.log(error);
      }
    },

    redirect() {
      this.$store.dispatch("logout");
      if (this.$route.name == "Home") this.$router.go();
      else this.$router.push("/");
    },
  },
};
</script>
