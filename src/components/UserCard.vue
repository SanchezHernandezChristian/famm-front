<template>
  <div style="float: right; text-align: right">
    <v-menu offset-y open-on-hover>
      <template v-slot:activator="{ on }">
        <v-avatar color="primary" size="48" v-on="on">
          <span class="text-white"
            ><i class="fa fa-user-o" aria-hidden="true"
          /></span>
        </v-avatar>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="selectSection(item)"
        >
          <v-list-item-icon>
            <!--<v-icon>mdi-account-circle</v-icon>-->
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script>
import AuthService from "@/services/AuthService.js";

export default {
  props: {
    token: String,
    required: function () {
      return true;
    },
  },
  data: () => ({
    items: [
      {
        title: "",
        icon: "mdi-account-circle",
        colorfont: "#394f79",
        sizefont: "15px",
      },
      { title: "Perfil", icon: "" },
      { title: "Configuración", icon: "" },
      { title: "Cerrar sesión", icon: "" },
    ],
  }),

  async mounted() {
    let me = this;
    me.items[0].title = "mail.example@outlook.com";

    if (this.$store.getters.isLoggedIn) {
      try {
        const response = await AuthService.getProfile();
        me.items[0].title = response.Nombre;
      } catch (error) {
        console.log(error);
      }
    }
  },

  methods: {
    selectSection(item) {
      if (item.title == "Cerrar sesión") this.logout();
      if (item.title == "Perfil") this.profile();
    },

    async logout() {
      try {
        await AuthService.logout();
        this.logout_redirect();
      } catch (error) {
        if (error.response.status == 401) this.logout_redirect();
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

    logout_redirect() {
      this.$store.dispatch("logout");
      if (this.$route.name == "Home") this.$router.go();
      else this.$router.push("/");
    },
  },
};
</script>
