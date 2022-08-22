<template>
  <div style="float: right; text-align: right">
    <v-menu offset-y open-on-hover>
      <template v-slot:activator="{ on }">
        <v-avatar color="primary" size="38" v-on="on" class="clickable">
          <v-icon dark> mdi-account-circle </v-icon>
        </v-avatar>
      </template>
      <v-list class="orange">
        <v-list-item
          class="white--text"
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
        title: "Perfil",
        icon: "mdi-account-circle-outline",
        value: 1,
      },
      { title: "Configuración", icon: "mdi-cog-outline", value: 2 },
      { title: "Salir", icon: "mdi-arrow-right-bold-outline", value: 3 },
    ],
  }),

  methods: {
    selectSection(item) {
      switch (item.value) {
        case 1:
          this.profile();
          break;
        case 3:
          this.logout();
          break;
        default:
          break;
      }
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
        if (JSON.parse(localStorage.getItem("vuex")).user.Rol == "PROFESOR")
          this.$router.push("form-cedula-instructor");
        else this.$router.push("page-principal");
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
