<template>
  <v-container fluid>
    <v-row class="fondodashboardadminnegro">
      <v-layout>
        <v-flex align-self-center xs2>
          <v-img
            max-height="25%"
            max-width="50%"
            src="@/assets/img/logo.png"
            class="clickable"
            @click="redirect"
          ></v-img>
        </v-flex>
        <v-flex align-self-center xs9> </v-flex>
        <v-flex align-self-center xs1>
          <label>Ayuda</label>
        </v-flex>
      </v-layout>
    </v-row>
    <v-row class="fondodashboardadminnaranja" v-if="isLoggedIn">
      <v-layout>
        <v-flex align-self-center xs2>
          <label>{{ username }}</label>
        </v-flex>
        <v-flex align-self-center xs5> </v-flex>
        <v-flex align-self-center xs2>
          <v-btn
            depressed
            color="#f46722"
            elevation="0"
            class="ma-2"
            style="font-size: 20px; color: #ffffff"
            ><i class="fa fa-cogs" aria-hidden="true"></i>
            Configuración
          </v-btn>
        </v-flex>
        <v-flex align-self-center xs2>
          <v-btn
            depressed
            color="#f46722"
            elevation="0"
            class="ma-2"
            style="font-size: 20px; color: #ffffff"
            ><i class="fa fa-user-o" aria-hidden="true"></i>
            Mi cuenta
          </v-btn></v-flex
        >
        <v-flex align-self-center xs1
          ><v-btn
            depressed
            color="#f46722"
            elevation="0"
            class="ma-2"
            style="font-size: 20px; color: #ffffff"
            @click="logout"
            ><i class="fa fa-arrow-right" aria-hidden="true"></i>
            Salir
          </v-btn>
        </v-flex>
      </v-layout>
    </v-row>
    <v-row style="background-color: white" v-if="isLoggedIn">
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
                style="font-size: 13px; color: #8996a0"
                ><v-icon color="#8996a0">mdi-home</v-icon>
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
                style="font-size: 13px; color: #8996a0"
                ><v-icon color="#8996a0">mdi-chart-bar</v-icon>
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
                style="font-size: 13px; color: #8996a0"
                ><v-icon color="#8996a0">mdi-swap-horizontal-bold</v-icon>
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
                style="font-size: 13px; color: #8996a0"
                ><v-icon color="#8996a0">mdi-check-bold</v-icon>
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
              <v-btn
                depressed
                color="#FFFFFF"
                elevation="0"
                class="ma-2"
                v-bind="attrs"
                v-on="on"
                style="font-size: 13px; color: #8996a0"
                @click="cursosAsignados()"
                ><v-icon color="#8996a0">mdi-check-all</v-icon>
                Cursos asignados
              </v-btn>
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
    items_cursos: [
      { title: "Validación de calificaciones", value: "" },
      {
        title: "Oficio de remisión del expediente técnico 2° RUDC-13",
        value: "",
      },
      { title: "Acta de inicio del curso de capacitación", value: "" },
      { title: "Reporte de supervisión unidad de capacitación", value: "" },
      { title: "Control estadístico por curso", value: "" },
      {
        title: "Registro de inscripción, acreditación y certificación",
        value: "",
      },
      {
        title: "Acta de clausura del curso de capacitación RUDC-21",
        value: "",
      },
    ],
    items_preautorizacion: [
      {
        title: "Validar cédulas de identificación del instructor RDPC-11",
        value: "validacion-instructores",
      },
      {
        title: "Cédulas de pre-autorización de cursos de capacitación",
        value: "cedula-pre-autorizada",
      },
      {
        title: "Validar cronogramas de actividades RUDC-08",
        value: "cronograma",
      },
      {
        title: "Relaciones de participantes",
        value: "relacion-participantes-registrados",
      },
      { title: "Croquis formato RUDC-10", value: "" },
      { title: "Validar lista de asistencia RUDC-15", value: "" },
      {
        title: "Factibilidad y justificación de cursos de capacitación",
        value: "factibilidad-justificacion-registradas",
      },
      {
        title: "Formato de pago",
        value: "formatos-pago-registrados",
      },
      { title: "Oficio de autorización", value: "" },
      { title: "Oficio de solicitud de curso y bitácora RUDC-03", value: "" },
    ],
    isLoggedIn: false,
    username: "",
  }),
  async mounted() {
    let me = this;

    me.isLoggedIn = me.$store.getters.isLoggedIn;
    if (me.isLoggedIn) {
      try {
        const response = await AuthService.getProfile();
        me.username = response.Rol;
      } catch (error) {
        console.log(error);
      }
    }
  },
  methods: {
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

    async cursosAsignados() {
      try {
        this.$router.push("cursos-asignados-unidad");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
