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
    <v-row class="fondodashboardadmingeneral" v-if="isLoggedIn">
      <v-layout>
        <v-flex align-self-center xs2>
          <label>{{ username }}</label>
        </v-flex>
        <v-flex align-self-center xs5> </v-flex>
        <v-flex align-self-center xs2></v-flex>
        <v-flex align-self-center xs2>
          <v-menu transition="scroll-y-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                depressed
                color="#FFFFFF"
                elevation="0"
                class="ma-2 fondodashboardadmingeneral"
                v-bind="attrs"
                v-on="on"
                ><v-img
                  max-height="15%"
                  max-width="30%"
                  src="@/assets/img/logoTab.png"
                ></v-img>
                Mi cuenta
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in opciones"
                :key="index"
                @click="selectItem(item)"
              >
                <v-list-item-title
                  ><v-icon color="#FFFFFF">{{ item.icon }}</v-icon>
                  {{ item.title }}</v-list-item-title
                >
              </v-list-item>
            </v-list>
          </v-menu>
        </v-flex>
        <v-flex align-self-center xs1></v-flex>
      </v-layout>
    </v-row>
  </v-container>
</template>

<script>
import AuthService from "@/services/AuthService.js";

export default {
  name: "MenuAdminGeneral",
  components: {},
  data: () => ({
    opciones: [
      { title: "Configuración", icon: "mdi-settings" },
      { title: "Salir", icon: "mdi-arrow-right-bold" },
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
    selectItem(item) {
      if (item.title == 'Salir') this.logout();      
      //if (item.title == 'Configuración') this.configuration();
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
