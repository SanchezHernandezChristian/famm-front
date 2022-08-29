<template>
  <v-container fluid :class="!user_estatus ? 'pb-0 mb-0' : ''">
    <v-row class="black">
      <v-col cols="2">
        <v-img
          max-width="55%"
          src="@/assets/img/logo.png"
          class="clickable"
        ></v-img>
      </v-col>
    </v-row>
    <v-row :class="`${color} d-flex justify-space-between`" v-if="user_logged">
      <v-col cols="2">
        <label class="white--text mt-1">{{ user_rol }}</label>
      </v-col>
      <v-col cols="2">
        <UserCard :color="color" />
      </v-col>
    </v-row>
    <component :is="actions" v-if="user_logged"></component>
    <v-row v-if="user_logged && !user_estatus">
      <v-alert justify="space-around" color="red" dark>
        <span class="float-left"
          >Los datos del usuario no han sido capturados.</span
        >
        <span class="float-right"
          >Click
          <v-btn dark outlined @click="redirect()"> aquí </v-btn>
          para capturarlos</span
        >
      </v-alert>
    </v-row>
  </v-container>
</template>

<script>
import UserCard from "../UserCard.vue";

export default {
  props: {
    actions: {
      type: String,
      default: "NavOptionsAdmin",
    },
    color: {
      type: String,
      default: "fondodashboardadmingeneral",
    },
  },
  components: {
    UserCard,
  },
  data: () => ({
    user_logged: false,
    user_estatus: 0,
    user_rol: "",
  }),
  async created() {
    this.user_estatus =
      this.$store.getters.getUser.Rol == "ALUMNO"
        ? this.$store.getters.getUser.EstatusPerfil == 1
        : 1;
    this.user_rol = this.$store.getters.getUser.Rol;
    this.user_logged = this.$store.getters.isLoggedIn;
  },
  methods: {
    redirect() {
      switch (this.user_rol) {
        case "ALUMNO":
          this.$router.push("/form-registro");
          break;
        case "PROFESOR":
          this.$router.push("/form-registro-instructor");
          break;

        default:
          break;
      }
    },
  },
};
</script>
