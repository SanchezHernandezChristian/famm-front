<template>
  <v-container fluid>
    <v-row class="fondodashboardadmin">
      <v-layout>
        <v-flex align-self-center xs2>
          <v-img max-height="25%" max-width="50%" src="@/assets/img/logoBlanco.png" @click="redirect"></v-img>
        </v-flex>
        <v-flex align-self-center xs>
          <label>UNIDAD DE CAPACITACIÓN</label>
        </v-flex>
        <v-flex align-self-center xs1><i class="fa fa-envelope-open-o" aria-hidden="true"></i></v-flex>
        <v-flex align-self-center xs1>
          <i class="fa fa-user-o" aria-hidden="true"></i>
        </v-flex>
        <v-flex align-self-center xs2>
          <v-menu offset-y v-for="(item, index) in items" :key="index">
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" style="color: #ffffff; background-color: #2b4c7b" elevation="0">
                {{ item.title }}
                <v-icon color="#ffffff">mdi-menu-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in user" :key="index" link @click="selectSection()">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-flex>
      </v-layout>
    </v-row>
    <v-row style="background-color: white">
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
        <v-flex align-self-center xs3>
          <v-menu transition="scroll-y-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-btn depressed color="#FFFFFF" elevation="0" class="ma-2" v-bind="attrs" v-on="on" style="font-size: 20px; color: #bdbbbd"
                ><i class="fa fa-users" aria-hidden="true"></i>
                Cédula de preautorización de cursos-RUDC-06
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in roles" :key="index" @click="selectItem(item)">
                <!--<v-list-item-title>{{
                  item.cursos[0][nombre_curso]
                }}</v-list-item-title>-->
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-flex>
      </v-layout>
    </v-row>
  </v-container>
</template>

<script>
import AuthService from '@/services/AuthService.js';

export default {
  name: 'MenuAdmin',
  components: {},
  data: () => ({
    roles: [{ title: 'Cédulas de preautorización registradas' },],
    logged_in: false,
    dialog: false,
    items: [{ title: 'Unidad' }],
    user: [{ title: 'Cerrar sesión', icon: '' }],
  }),
  methods: {
    selectItem(item) {
      //if (item.title == 'Perfil') this.profile();
      if (item.title == 'Cédulas de preautorización registradas') this.cedulaPreautorizacion();
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
        this.$store.dispatch('logout');
        if (this.$route.name == 'Home') this.$router.go();
        else this.$router.push('/');
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
        this.$router.push('dashboard-admin-unidad');
      } catch (error) {
        console.log(error);
      }
    },

    async cedulaPreautorizacion() {
      try {
        this.$router.push('cedula-pre-autorizada');
      } catch (error) {
        console.log(error);
      }
    },

    redirect() {
      this.$store.dispatch('logout');
      if (this.$route.name == 'Home') this.$router.go();
      else this.$router.push('/');
    },
  },
};
</script>
