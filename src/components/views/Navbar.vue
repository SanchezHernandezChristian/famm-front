<template>
  <v-app-bar fill-height>
    <v-app-bar absolute color="white" class="hidden-sm-and-down">
      <v-toolbar-title class="col-2"
        ><v-img
          max-height="25%"
          max-width="50%"
          src="@/assets/img/logo.png"
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
              <v-list-item v-for="(item, index) in cursos" :key="index" @click="selectElement()">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
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
              <v-list-item v-for="(item, index) in especialidades" :key="index" @click="selectElement()">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu></v-col
        >
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
          <v-row
            justify="center"
            align="center"
            style="height: 65px"
            v-if="logged_in"
          >
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
      { title: "Todos los cursos" },
      { title: "Atención al Cliente" },
      { title: "Atención a Comensales" },
      { title: "Informática" },
      { title: "Excel " },
      { title: "Formación de Banda de Música" },
      { title: "Contabilidad" },
      { title: "Elaboración de Cremas de Mezcal" },
    ],
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
    logged_in: false,
    dialog: false,
  }),
  async created() {
    this.logged_in = this.$store.getters.isLoggedIn != "";
  },
  methods: {
    selectElement() {
      this.especialidadCurso();
    },

    async especialidadCurso() {
      try {
        this.$router.push('especialidad');
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
