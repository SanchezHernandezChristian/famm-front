<template>
  <v-app-bar fill-height>
    <v-app-bar absolute color="white" class="hidden-sm-and-down">
      <v-toolbar-title class="col-2"
        ><v-img
          max-height="25%"
          max-width="50%"
          src="@/assets/img/logo.png"
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
              >
                Cursos
              </v-btn>
            </template>
            <v-list class="p-0">
              <v-list-group
                v-for="item in cursos"
                :key="item.title"
                v-model="item.active"
                no-action
              >
                <v-list-item
                  class="pl-5"
                  v-for="child in item.cursos"
                  :key="child.title"
                >
                  <v-list-item-content>
                    <v-list-item-title v-text="child.title"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
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
              >
                Especialidades
              </v-btn>
            </template>
            <v-list class="p-0">
              <v-list-group
                v-for="item in especialidades"
                :key="item.title"
                v-model="item.active"
                no-action
              >
                <v-list-item
                  class="pl-5"
                  v-for="child in item.especialidades"
                  :key="child.title"
                >
                  <v-list-item-content>
                    <v-list-item-title v-text="child.title"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
            </v-list> </v-menu
        ></v-col>
        <v-col cols="2"></v-col>
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
        <v-col cols="4">
          <v-row justify="center" v-if="logged_in">
            <UserCard />
          </v-row>
          <v-row flex v-else>
            <v-col cols="5" class="ma-2">
              <Registro />
            </v-col>
            <v-col cols="5" class="ma-2">
              <Login />
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
          </v-row>
        </v-card>
      </v-dialog>
    </v-app-bar>
  </v-app-bar>
</template>

<script>
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
    cursos: [
      {
        action: "mdi-ticket",
        cursos: [
          { title: "Todos los cursos" },
          { title: "Atención al Cliente" },
          { title: "Atención a Comensales" },
          { title: "Informática" },
          { title: "Excel " },
          { title: "Formación de Banda de Música" },
          { title: "Contabilidad" },
          { title: "Elaboración de Cremas de Mezcal" },
        ],
        title: "Cursos",
      },
    ],
    especialidades: [
      {
        action: "mdi-ticket",
        especialidades: [
          { title: "Todas las especialidades" },
          { title: "Hotelería" },
          { title: "Administración" },
          { title: "Bordado Regional" },
          { title: "Inglés " },
          { title: "Artesanías con fibras Textiles" },
          { title: "Estilismo y Diseño de Imagen" },
          { title: "Diseño y Elaboración de cerámica" },
        ],
        title: "Especialidades",
        link: "/account",
      },
    ],
    logged_in: false,
    dialog: false,
  }),
  async created() {
    this.logged_in = this.$store.getters.isLoggedIn != "";
  },
  methods: {
    redirect() {
      if (this.$route.name == "Home") this.$router.go();
      else this.$router.push("/");
    },
  },
};
</script>
