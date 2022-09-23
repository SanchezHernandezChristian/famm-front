<template>
  <v-container fluid class="max-height" style="background-color: #e0e0e0">
    <v-row>
      <v-alert v-if="!dataUser.EstatusPerfil" border="left" justify="space-around" color="red" dark>
        <span class="float-left">Los datos del usuario no han sido capturados.</span>
        <span class="float-right">Click <v-btn dark outlined @click="formRegistro()"> aquí </v-btn> para capturarlos</span>
      </v-alert>
    </v-row>
    <v-row>
      <v-layout style="background-color: #e0e0e0">
        <v-layout column>
          <v-flex xs3>
            <v-card color="white darken-2" class="gray--text">
              <v-flex align-self-center xs>
                <v-layout>
                  <v-card-title>
                    <div class="centrartextocard text-center">Alumnos registrados</div>
                  </v-card-title>
                  <v-card-title>
                    <div class="centrartextocard text-center" style="color: green; font-size: 20px">600</div>
                  </v-card-title>
                </v-layout>
              </v-flex>
            </v-card>
          </v-flex>
          <v-flex xs4>
            <br />
            <v-card color="white darken-2" class="gray--text">
              <v-flex align-self-center xs>
                <v-layout>
                  <v-card-title>
                    <div class="centrartextocard text-center">Docentes registrados</div>
                  </v-card-title>
                  <v-card-title>
                    <div class="centrartextocard text-center" style="color: green; font-size: 20px">600</div>
                  </v-card-title>
                </v-layout>
              </v-flex>
            </v-card>
          </v-flex>
          <v-flex xs4>
            <br />
            <v-card color="white darken-2" class="gray--text">
              <v-flex align-self-center xs>
                <v-layout>
                  <v-card-title>
                    <div class="centrartextocard text-center">Alumnos de baja</div>
                  </v-card-title>
                  <v-card-title>
                    <div class="centrartextocard text-center" style="color: red; font-size: 20px">56</div>
                  </v-card-title>
                </v-layout>
              </v-flex>
            </v-card>
          </v-flex>
        </v-layout>
        <v-flex xs1></v-flex>
        <v-flex xs8> </v-flex>
      </v-layout>
    </v-row>
  </v-container>
</template>

<script>
import AuthService from '@/services/AuthService.js';
export default {
  name: 'PagePrincipalAlumno',
  data: () => ({
    isLoggedIn: true,
    username: 'INSTRUCTOR',
    dataUser: [],
    items_cursos: [],
  }),

  async created() {
    this.dataUser = JSON.parse(localStorage.getItem('vuex')).user;
    console.log(this.dataUser);
    //this.dataUser.EstatusPerfil = 1;

    const response = await AuthService.getProfileDocente();
    const response2 = await AuthService.getAllAssignGradeByTeacher(response.idDocente);
    this.items_cursos = response2.data;
  },
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
