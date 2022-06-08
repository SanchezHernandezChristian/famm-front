<template>
  <v-container fluid>
    <v-row>
      <v-alert v-if="!dataUser.EstatusPerfil" border="left" justify="space-around" color="red" dark>
        <span class="float-left">Los datos del usuario no han sido capturados.</span>
        <span class="float-right">Click <v-btn dark outlined @click="formRegistro()"> aquí </v-btn> para capturarlos</span>
      </v-alert>
      <v-row v-else>
        <div>
          <p></p>
          <br />
          <br />
        </div>
      </v-row>
    </v-row>
    <v-row>
      <v-col>
        <div style="margin-left: 25px">
          <v-row>
            <v-layout column justify-center>
              <v-flex>
                <v-list>
                  <v-list-item v-for="(item, index) in misCursos" :key="index">
                    <v-list-item-title style="color: #394f79; font-size: 25px"
                      ><strong>{{ item.title }}</strong></v-list-item-title
                    >
                  </v-list-item>
                </v-list>
              </v-flex>
              <v-flex><br /></v-flex>
              <v-flex>
                <v-list>
                  <v-list-item v-for="(item, index) in main" :key="index">
                    <v-list-item-title style="color: #aeacac; font-size: 20px">{{ item.title }}</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title style="color: #394f79; font-size: 20px"
                      >TODAS LAS ESPECIALIDADES <i class="fa fa-arrow-circle-right fa-lg" aria-hidden="true"></i
                    ></v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-flex>
              <v-flex><br /></v-flex>
              <v-flex>
                <v-list>
                  <v-list-item v-for="(item, index) in extras" :key="index">
                    <v-list-item-title style="color: #aeacac; font-size: 20px">{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-flex>
            </v-layout>
          </v-row>
        </div>
      </v-col>
      <v-col cols="8">
        <div style="margin-top: 50px">
          <v-row justify="center">
            <v-col cols="5" v-for="(item, index) in items" :key="index" pt-10>
              <v-row>
                <v-img class="logo-curso-b" :src="require(`@/assets/img/${item.img}`)" :alt="item.img" max-width="75%" height="60%"></v-img>
              </v-row>
              <v-row align-content-md="center">
                <v-col style="color: #394f79; font-size: 20px">{{ item.title }} </v-col>
              </v-row>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <div style="height: 200px"></div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PagePrincipalAlumno',
  data() {
    return {
      items: [
        {
          title: 'Hotelería',
          img: 'hoteleria.png',
        },
        {
          title: 'Informática',
          img: 'informatica.png',
        },
        {
          title: 'Estilismo y Diseño de Imagen',
          img: 'estilismo.png',
        },
        {
          title: 'Inglés',
          img: 'ingles.png',
        },
      ],
      misCursos: [{ title: 'MIS CURSOS' }, { title: 'Mis apuntes' }, { title: 'Mis proyectos' }, { title: 'Mis certificados' }],
      main: [
        { title: 'Unidades de capacitación' },
        { title: 'Campos de formación profesional' },
        { title: 'Cursos mejor valorados' },
        { title: 'Cursos nuevos' },
        { title: 'Cursos cerca de tu localidad' },
      ],
      extras: [{ title: 'Configuración' }, { title: 'Ayuda' }],
      dataUser: '',
    };
  },
  created() {
    this.dataUser = localStorage.getItem('vuex');

    console.log(localStorage.getItem('vuex'));
  },
  methods: {
    getImgUrl(pic) {
      var images = require.context('@/assets/', false);
      return images('./' + pic);
    },
    formRegistro() {
      this.$router.push('/form-registro');
    },
  },
};
</script>
