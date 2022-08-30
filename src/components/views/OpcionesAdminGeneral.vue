<template>
  <v-container fluid>
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
        <v-flex align-self-center xs2>
          <v-menu transition="scroll-y-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-btn depressed color="#FFFFFF" elevation="0" class="ma-2" v-bind="attrs" v-on="on" style="font-size: 20px; color: #bdbbbd"
                ><v-icon color="#bdbbbd">mdi-chart-bar</v-icon>
                Gráficas
              </v-btn>
            </template>
          </v-menu>
        </v-flex>
        <v-flex align-self-center xs2>
          <v-menu transition="scroll-y-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-btn depressed color="#FFFFFF" elevation="0" class="ma-2" v-bind="attrs" v-on="on" style="font-size: 20px; color: #bdbbbd"
                ><v-icon color="#bdbbbd">mdi-email</v-icon>
                Email
              </v-btn>
            </template>
          </v-menu>
        </v-flex>
        <v-flex align-self-center xs2>
          <v-menu transition="scroll-y-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-btn depressed color="#FFFFFF" elevation="0" class="ma-2" v-bind="attrs" v-on="on" style="font-size: 20px; color: #bdbbbd"
                ><v-icon color="#bdbbbd">mdi-account</v-icon>
                Perfil
              </v-btn>
            </template>
          </v-menu>
        </v-flex>
        <v-flex align-self-center xs3>
          <v-menu transition="scroll-y-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-btn depressed color="#FFFFFF" elevation="0" class="ma-2" v-bind="attrs" v-on="on" style="font-size: 20px; color: #bdbbbd"
                ><i class="fa fa-users" aria-hidden="true"></i>
                Roles de usuario
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
        <v-flex align-self-center xs2>
          <v-menu transition="scroll-y-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-btn depressed color="#FFFFFF" elevation="0" class="ma-2" v-bind="attrs" v-on="on" style="font-size: 20px; color: #bdbbbd"
                ><i class="fa fa-users" aria-hidden="true"></i>
                Cursos
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in cursos" :key="index" @click="selectItem(item)">
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
              <v-btn depressed color="#FFFFFF" elevation="0" class="ma-2" v-bind="attrs" v-on="on" style="font-size: 20px; color: #bdbbbd"
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
import AuthService from '@/services/AuthService.js';

export default {
  name: 'MenuAdmin',
  components: {},
  data: () => ({
    roles: [{ title: 'Usuarios registrados' }, { title: 'Añadir usuario' }],
    cursos: [{ title: 'Cursos registrados' }, { title: 'Asignar curso' }, { title: 'Centros de capacitación' }, { title: 'Especialidades registradas' }, { title: 'Cursos asignados' }],
    logged_in: false,
    dialog: false,
    //items: [{ title: 'CHRISTIAN HERNANDEZ' }],
    user: [{ title: 'Cerrar sesión', icon: '' }],
  }),
  methods: {
    selectItem(item) {
      //if (item.title == 'Perfil') this.profile();
      if (item.title == 'Añadir usuario') this.addUser();
      if (item.title == 'Usuarios registrados') this.redirectUsers();
      if (item.title == 'Cursos registrados') this.addCurso();
      if (item.title == 'Asignar curso') this.asignarCurso();
      if (item.title == 'Centros de capacitación') this.centrosCapacitacion();
      if (item.title == 'Especialidades registradas') this.addEspecialidad();
      if (item.title == 'Cursos asignados') this.asignCurso();
    },

    async mounted() {
      //let me = this;

      if (this.$store.getters.isLoggedIn) {
        try {
          const response = await AuthService.getProfile();
          //me.items[0].title = response.Nombre;
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

    // selectPerfil() {
    //   this.profile();
    // },

    async seleccionDashboard() {
      try {
        this.$router.push('dashboard-admin');
      } catch (error) {
        console.log(error);
      }
    },

    // async profile() {
    //   try {
    //     this.$router.push('page-principal');
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },

    async addUser() {
      try {
        this.$router.push('agregar-usuario');
      } catch (error) {
        console.log(error);
      }
    },

    redirectUsers() {
      this.$router.push('users');
    },

    async addCurso() {
      try {
        this.$router.push('agregar-curso');
      } catch (error) {
        console.log(error);
      }
    },

    async asignarCurso() {
      try {
        this.$router.push('asignar-curso');
      } catch (error) {
        console.log(error);
      }
    },

    async centrosCapacitacion() {
      try {
        this.$router.push('centros-capacitacion');
      } catch (error) {
        console.log(error);
      }
    },

    async addEspecialidad() {
      try {
        this.$router.push('agregar-especialidad');
      } catch (error) {
        console.log(error);
      }
    },

    redirect() {
      this.$store.dispatch('logout');
      if (this.$route.name == 'Home') this.$router.go();
      else this.$router.push('/');
    },

    async asignCurso(){
      try {
        this.$router.push('cursos-asignados');
      } catch (error) {
        console.log(error);
      }
    }
  },
};
</script>
