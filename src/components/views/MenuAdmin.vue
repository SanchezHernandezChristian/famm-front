<template>
  <v-container fluid>
    <v-row class="fondodashboardadmin">
      <v-layout>
        <v-flex align-self-center xs>
          <label>ADMINISTRATIVO</label>
        </v-flex>
        <v-flex align-self-center xs1
          ><i class="fa fa-envelope-open-o" aria-hidden="true"></i
        ></v-flex>
        <v-flex align-self-center xs1>
          <i class="fa fa-user-o" aria-hidden="true"></i>
        </v-flex>
        <v-flex align-self-center xs2>
          <!-- <v-menu transition="scroll-y-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                depressed
                color="#2b4c7b"
                elevation="0"
                class="ma-2"
                v-bind="attrs"
                v-on="on"
                style="font-size: 20px; color: #394f79"
              >
                {{ this.me.user[0].title }}
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="selectSection()">
                <v-list-item-title>{{
                  this.me.user[1].title
                }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu> -->
          <v-list color="#2b4c7b">
            <v-list-item link class="fondodashboardadmin">
              <v-list-item-content class="fondodashboardadmin">
                <v-list-item-title> CHRISTIAN HERNANDEZ </v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-icon color="#ffffff">mdi-menu-down</v-icon>
              </v-list-item-action>
            </v-list-item>
            <v-list-item
              link
              class="fondodashboardadmin"
              @click="selectSection()"
            >
              <v-list-item-content class="fondodashboardadmin">
                <v-list-item-title> Cerrar Sesión </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-flex>
      </v-layout>
    </v-row>
    <v-row>
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
                style="font-size: 20px; color: #bdbbbd"
                @click="selectDashboard()"
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
                style="font-size: 20px; color: #bdbbbd"
                ><v-icon color="#bdbbbd">mdi-chart-bar</v-icon>
                Gráficas
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
                style="font-size: 20px; color: #bdbbbd"
                ><v-icon color="#bdbbbd">mdi-email</v-icon>
                Email
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
                style="font-size: 20px; color: #bdbbbd"
                @click="selectPerfil()"
                ><v-icon color="#bdbbbd">mdi-account</v-icon>
                Perfil
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
                style="font-size: 20px; color: #bdbbbd"
                ><i class="fa fa-users" aria-hidden="true"></i>
                Roles de usuario
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in roles"
                :key="index"
                @click="selectItem(item)"
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
                style="font-size: 20px; color: #bdbbbd"
                ><i class="fa fa-users" aria-hidden="true"></i>
                Cursos
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in cursos"
                :key="index"
                @click="selectItem(item)"
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
                style="font-size: 20px; color: #bdbbbd"
                ><i class="fa fa-cogs" aria-hidden="true"></i>
                Configuración
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
    roles: [
      { title: "Usuarios registrados" },
      { title: "Añadir usuario" },
      { title: "Perfil" },
    ],
    cursos: [
      { title: "Nuevo curso" },
      { title: "Editar curso" },
      { title: "Eliminar curso" },
      { title: "Asignar curso" },
    ],
    items: [],
    logged_in: false,
    dialog: false,
    user: [
      { title: "", colorfont: "#2b4c7b", sizefont: "15px" },
      { title: "Cerrar sesión", icon: "" },
    ],
  }),
  methods: {
    selectItem(item) {
      if (item.title == "Perfil") this.profile();
      if (item.title == "Añadir usuario") this.addUser();
      if (item.title == "Nuevo curso") this.addCurso();
      if (item.title == "Editar curso") this.editarCurso();
      if (item.title == "Eliminar curso") this.deleteCurso();
      if (item.title == "Asignar curso") this.asignarCurso();
    },

    async mounted() {
      let me = this;
      me.user[0].title = "mail.example@outlook.com";
      try {
        const response = await AuthService.getProfile();
        me.user[0].title = response.Nombre;
      } catch (error) {
        console.log(error);
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
        console.log(error);
      }
    },

    selectDashboard() {
      this.seleccionDashboard();
    },

    selectPerfil() {
      this.profile();
    },

    async seleccionDashboard() {
      try {
        this.$router.push("dashboard-admin");
      } catch (error) {
        console.log(error);
      }
    },

    async profile() {
      try {
        this.$router.push("page-principal");
      } catch (error) {
        console.log(error);
      }
    },

    async addUser() {
      try {
        this.$router.push("agregar-usuario");
      } catch (error) {
        console.log(error);
      }
    },

    async addCurso() {
      try {
        this.$router.push("agregar-curso");
      } catch (error) {
        console.log(error);
      }
    },

    async editarCurso() {
      try {
        this.$router.push("editar-curso");
      } catch (error) {
        console.log(error);
      }
    },

    async deleteCurso() {
      try {
        this.$router.push("borrar-curso");
      } catch (error) {
        console.log(error);
      }
    },

    async asignarCurso() {
      try {
        this.$router.push("asignar-curso");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
