<template>
  <v-app-bar fill-height elevation="0">
    <v-app-bar absolute color="white" class="hidden-sm-and-down" elevation="0">
      <v-toolbar-title class="col-2"
        ><v-img
          max-height="25%"
          max-width="50%"
          src="@/assets/img/logo.png"
          class="clickable"
          @click="redirect"
        ></v-img
      ></v-toolbar-title>
      <v-toolbar-items class="row">
        <v-col cols="2">
          <v-menu transition="scroll-y-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                depressed
                color="#FFFFFF"
                elevation="0"
                class="ma-2"
                v-bind="attrs"
                v-on="on"
                style="font-size: 20px; color: #394f79"
              >
                Cursos
              </v-btn>
            </template>
            <v-list>
              <v-list-item>
                <v-list-item-title>Todos los cursos</v-list-item-title>
              </v-list-item>
              <v-list-item
                v-for="(item, index) in itemsCursos.cursos"
                :key="index"
                @click="selectElement()"
              >
                <v-list-item-title>{{ item.nombre_curso }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
        <v-col cols="2">
          <v-menu transition="scroll-y-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                depressed
                color="#FFFFFF"
                elevation="0"
                class="ma-2"
                v-bind="attrs"
                v-on="on"
                style="font-size: 20px; color: #394f79"
              >
                Especialidades
              </v-btn>
            </template>
            <v-list>
              <v-list-item>
                <v-list-item-title>Todas las especialidades</v-list-item-title>
              </v-list-item>
              <v-list-item
                v-for="(item, index) in itemsEspecialidades.especialidades"
                :key="index"
                @click="selectElement()"
              >
                <v-list-item-title>{{
                  item.nombre_especialidad
                }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu></v-col
        >
        <v-col cols="2" class="pt-4">
          <v-spacer></v-spacer>
          <v-responsive max-width="260">
            <v-text-field
              dense
              flat
              hide-details
              rounded
              solo-inverted
              prepend-inner-icon="mdi-magnify"
            ></v-text-field>
          </v-responsive>
        </v-col>
        <v-col cols="6">
          <v-row
            justify="center"
            align="center"
            style="height: 65px"
            v-if="logged_in"
          >
            <UserCard />
          </v-row>
          <v-row flex v-else>
            <v-col cols="4" class="ma-2">
              <Registro />
            </v-col>
            <v-col cols="4" class="ma-2">
              <Login />
            </v-col>
            <v-col cols="3" class="ma-1">
              <v-btn outlined @click="login_teacher">Acceso docente</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-toolbar-items>
    </v-app-bar>
    <v-app-bar dark color="white" class="hidden-md-and-up">
      <v-toolbar-title
        ><v-img
          max-height="25%"
          max-width="25%"
          src="@/assets/img/logo.png"
        ></v-img
      ></v-toolbar-title>
      <v-spacer></v-spacer>

      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            <v-icon>mdi-menu</v-icon></v-btn
          >
        </template>
        <v-card>
          <v-toolbar flat color="white">
            <v-toolbar-title
              ><v-img
                max-height="25%"
                max-width="25%"
                src="@/assets/img/logo.png"
              ></v-img
            ></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-spacer></v-spacer>
          <v-responsive max-width="260">
            <v-text-field
              mt-3
              dense
              flat
              hide-details
              rounded
              solo-inverted
              prepend-inner-icon="mdi-magnify"
            ></v-text-field>
          </v-responsive>
          <v-row justify="center" v-if="logged_in">
            <UserCard />
          </v-row>
          <v-row class="ma-2" v-else>
            <v-col cols="5" class="ma-2">
              <Registro />
            </v-col>
            <v-col cols="5" class="ma-2">
              <Login />
            </v-col>
            <v-col cols="5">
              <v-btn outlined @click="login_teacher">Acceso docente</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-dialog>
    </v-app-bar>
  </v-app-bar>
</template>

<script>
import AuthService from "@/services/AuthService.js";
import Login from "../Login.vue";
import Registro from "../Registro.vue";
import UserCard from "../UserCard.vue";

export default {
  name: "Navbar",
  components: {
    Login,
    Registro,
    UserCard,
  },
  data: () => ({
    itemsCursos: [],
    itemsEspecialidades: [],
    logged_in: false,
    dialog: false,
  }),
  async created() {
    this.logged_in = this.$store.getters.isLoggedIn != "";
  },
  async mounted() {
    try {
      const listcursos = await AuthService.getCursos();
      this.itemsCursos = listcursos;
      const listespecialidades = await AuthService.getEspecialidades();
      this.itemsEspecialidades = listespecialidades;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    selectElement() {
      this.especialidadCurso();
    },

    async especialidadCurso() {
      try {
        this.$router.push("especialidad");
      } catch (error) {
        console.log(error);
      }
    },

    redirect() {
      if (this.$route.name == "Home") this.$router.go();
      else this.$router.push("/");
    },

    login_teacher() {
      this.$router.push("login");
    },
  },
};
</script>

<style>
.clickable {
  cursor: pointer;
}
</style>
