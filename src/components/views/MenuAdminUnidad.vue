<template>
  <v-container fluid>
    <v-row class="fondodashboardadminnegro">
      <v-layout>
        <v-flex align-self-center xs2>
          <v-img
            max-height="25%"
            max-width="50%"
            src="@/assets/img/logo.png"
            @click="redirect"
          ></v-img>
        </v-flex>
        <v-flex align-self-center xs9> </v-flex>
        <v-flex align-self-center xs1>
          <label>Ayuda</label>
        </v-flex>
      </v-layout>
    </v-row>
    <v-row class="fondodashboardadminnaranja">
      <v-layout>
        <v-flex align-self-center xs2>
          <label>ADMINISTRADOR DE UNIDAD</label>
        </v-flex>
        <v-flex align-self-center xs5> </v-flex>
        <v-flex align-self-center xs2>
          <v-btn
            depressed
            color="#f46722"
            elevation="0"
            class="ma-2"
            v-bind="attrs"
            v-on="on"
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
            v-bind="attrs"
            v-on="on"
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
            v-bind="attrs"
            v-on="on"
            style="font-size: 20px; color: #ffffff"
            @click="logout"
            ><i class="fa fa-arrow-right" aria-hidden="true"></i>
            Salir
          </v-btn>
        </v-flex>
      </v-layout>
    </v-row>
    <v-row style="background-color: white">
      <v-layout>
        <v-flex align-self-center xs1>
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
                @click="selectDashboard()"
                ><v-icon color="#8996a0">mdi-home</v-icon>
                Dashboard
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
                style="font-size: 14px; color: #8996a0"
                ><i class="fa fa-users" aria-hidden="true"></i>
                Cédula de preautorización de cursos RUDC-06
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in roles"
                :key="index"
                @click="selectItem(item)"
                active-class="bg-active"
              >
                <!--<v-list-item-title>{{
                  item.cursos[0][nombre_curso]
                }}</v-list-item-title>-->
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
                style="font-size: 14px; color: #8996a0"
                ><i class="fa fa-users" aria-hidden="true"></i>
                Relación de Participantes
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in menu"
                :key="index"
                @click="selectItem(item)"
                active-class="bg-active"
              >
                <!--<v-list-item-title>{{
                  item.cursos[0][nombre_curso]
                }}</v-list-item-title>-->
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-flex>
        <v-flex align-self-center xs5>
          <v-menu transition="scroll-y-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                depressed
                color="#FFFFFF"
                elevation="0"
                class="ma-2"
                v-bind="attrs"
                v-on="on"
                style="font-size: 15x; color: #8996a0"
                ><i class="fa fa-users" aria-hidden="true"></i>
                Factibilidad y justificación de cursos de capacitación formato
                RUDC-04
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in menu2"
                :key="index"
                @click="selectItem(item)"
                active-class="bg-active"
              >
                <!--<v-list-item-title>{{
                  item.cursos[0][nombre_curso]
                }}</v-list-item-title>-->
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-flex>
        <v-flex align-self-center xs1>
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
                ><v-icon color="#8996a0">mdi-home</v-icon>
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
    roles: [{ title: "Cédulas de preautorización registradas" }],
    menu: [{ title: "Relación de participantes registrados" }],
    menu2: [{ title: "Factibilidades y justificaciones registradas" }],
    logged_in: false,
    dialog: false,
    items: [{ title: "Unidad" }],
    user: [{ title: "Cerrar sesión", icon: "" }],
  }),
  methods: {
    selectItem(item) {
      //if (item.title == 'Perfil') this.profile();
      if (item.title == "Cédulas de preautorización registradas")
        this.cedulaPreautorizacion();
      if (item.title == "Relación de participantes registrados")
        this.relacionParticipantes();
      if (item.title == "Factibilidades y justificaciones registradas")
        this.factibilidadJustificacion();
    },

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

    selectDashboard() {
      this.seleccionDashboard();
    },

    async seleccionDashboard() {
      try {
        this.$router.push("dashboard-admin-unidad");
      } catch (error) {
        console.log(error);
      }
    },

    async cedulaPreautorizacion() {
      try {
        this.$router.push("cedula-pre-autorizada");
      } catch (error) {
        console.log(error);
      }
    },

    async relacionParticipantes() {
      try {
        this.$router.push("relacion-participantes-registrados");
      } catch (error) {
        console.log(error);
      }
    },

    async factibilidadJustificacion() {
      try {
        this.$router.push("factibilidad-justificacion-registradas");
      } catch (error) {
        console.log(error);
      }
    },

    redirect() {
      this.$store.dispatch("logout");
      if (this.$route.name == "Home") this.$router.go();
      else this.$router.push("/");
    },

    async cursosAsignados(){
      try {
        this.$router.push("cursos-asignados-unidad");
      } catch (error) {
        console.log(error);
      }
    }
  },
};
</script>
