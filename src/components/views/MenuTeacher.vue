<template>
  <v-container fluid :class="!dataUser.EstatusPerfil ? 'pb-0 mb-0' : ''">
    <v-row class="black d-flex justify-space-between">
      <v-col cols="2">
        <v-img max-width="55%" src="@/assets/img/logo.png" class="clickable"></v-img>
      </v-col>
      <v-col cols="1" class="mt-1">
        <a href="/" class="white--text text-decoration-none">Ayuda</a>
      </v-col>
    </v-row>
    <v-row class="orange d-flex justify-space-between" v-if="isLoggedIn">
      <v-col cols="2"
        ><label class="white--text mt-1">{{ username }}</label></v-col
      >
      <v-col cols="2">
        <UserCard />
      </v-col>
    </v-row>
    <v-row v-if="isLoggedIn">
      <v-col cols="1">
        <v-btn depressed color="#FFFFFF" elevation="0" style="font-size: 12px; color: #8996a0"
          ><v-icon color="#8996a0">mdi-home</v-icon>
          Inicio
        </v-btn>
      </v-col>
      <v-col cols="1">
        <v-btn depressed color="#FFFFFF" elevation="0" style="font-size: 12px; color: #8996a0"
          ><v-icon color="#8996a0">mdi-chart-bar</v-icon>
          Graficas
        </v-btn>
      </v-col>
      <v-col cols="1">
        <v-menu transition="scroll-y-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn depressed color="#FFFFFF" elevation="0" v-bind="attrs" v-on="on" style="font-size: 13px; color: #8996a0"
              ><v-icon color="#8996a0">mdi-monitor</v-icon>
              Mis cursos
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items_cursos" :key="index" @click="selectItem(item.clave_curso)">
              <v-list-item-title>{{ item.nombre_curso }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
      <v-col cols="1">
        <v-btn depressed color="#FFFFFF" elevation="0" style="font-size: 12px; color: #8996a0"
          ><v-icon color="#8996a0">mdi-chart-bar</v-icon>
          Mis datos
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-alert v-if="!dataUser.EstatusPerfil" border="left" justify="space-around" color="red" dark>
        <span class="float-left">Los datos del usuario no han sido capturados.</span>
        <span class="float-right">Click <v-btn dark outlined @click="formRegistro()"> aquí </v-btn> para capturarlos</span>
      </v-alert>
    </v-row>
  </v-container>
</template>

<script>
import AuthService from '@/services/AuthService.js';
import UserCard from '../UserCard.vue';

export default {
  components: {
    UserCard,
  },
  async created() {
    this.dataUser = JSON.parse(localStorage.getItem('vuex')).user;
    this.dataUser.EstatusPerfil = 1;

    const response = await AuthService.getProfileDocente();
    const response2 = await AuthService.getAllAssignGradeByTeacher(response.idDocente);
    this.items_cursos = response2.data;
  },
  data: () => ({
    isLoggedIn: true,
    username: 'INSTRUCTOR',
    dataUser: null,
    items_cursos: [],
  }),
  methods: {
    formRegistro() {
      let me = this;

      if (me.dataUser.Rol == 'ALUMNO') {
        me.$router.push('/form-registro');
      } else if (me.dataUser.Rol == 'PROFESOR') {
        me.$router.push('/form-registro-instructor');
      }
    },

    selectItem(clave_curso) {
      this.$router.push({
        name: 'ViewDocenteCurso',
        params: {
          clave_curso: clave_curso,
        },
      });
    },
  },
};
</script>
