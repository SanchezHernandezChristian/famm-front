<template>
  <v-container fluid class="max-height">
    <v-row>
      <v-col>
        <div style="margin-left: 25px">
          <v-row>
            <v-layout column justify-center>
              <v-flex>
                <v-list>
                  <v-list-item v-for="(item, index) in misCursos" :key="index">
                    <v-list-item-title style="color: #394f79; font-size: 25px"
                      ><strong>{{ item.title }}</strong>
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-flex>
              <v-flex><br /></v-flex>
              <v-flex>
                <v-list>
                  <v-list-item v-for="(item, index) in main" :key="index">
                    <v-list-item-title style="color: #aeacac; font-size: 20px"
                      >{{ item.title }}
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title style="color: #394f79; font-size: 20px"
                      >TODAS LAS ESPECIALIDADES
                      <i
                        class="fa fa-arrow-circle-right fa-lg"
                        aria-hidden="true"
                      ></i
                    ></v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-flex>
              <v-flex><br /></v-flex>
              <v-flex>
                <v-list>
                  <v-list-item v-for="(item, index) in extras" :key="index">
                    <v-list-item-title style="color: #aeacac; font-size: 20px"
                      >{{ item.title }}
                    </v-list-item-title>
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
                <v-img
                  class="logo-curso-b"
                  :src="require(`@/assets/img/${item.img}`)"
                  :alt="item.img"
                  max-width="75%"
                  height="60%"
                ></v-img>
              </v-row>
              <v-row align-content-md="center">
                <v-col style="color: #394f79; font-size: 25px"
                  >{{ item.title }}
                </v-col>
              </v-row>
              <v-row align-content-md="center">
                <v-col style="color: #394f79; font-size: 20px"
                  >INSTRUCTOR:
                </v-col>
              </v-row>
              <v-row align-content-md="center">
                <v-col style="color: #394f79; font-size: 20px"
                  >Fecha de inicio:
                </v-col>
              </v-row>
              <v-row align-content-md="center">
                <v-col style="color: #394f79; font-size: 20px"
                  >Fecha de término:
                </v-col>
              </v-row>
              <v-row align-content-md="center">
                <v-btn style="width: 10px" @click="curso_access(item.id)">
                  Entrar
                </v-btn>
              </v-row>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
    <v-row><hr /></v-row>
    <v-row>
      <v-col>
        <div style="margin-left: 25px">
          <v-row>
            <v-layout column justify-center>
              <v-flex xs4> </v-flex>
              <v-flex xs4> <h2>CURSOS TERMINADOS</h2></v-flex>
              <v-flex xs4> </v-flex>
            </v-layout>
          </v-row>
        </div>
      </v-col>
      <v-col cols="8">
        <div style="margin-top: 50px">
          <v-row justify="center">
            <v-col cols="5" v-for="(item, index) in items" :key="index" pt-10>
              <v-row>
                <v-img
                  class="logo-curso-b"
                  :src="require(`@/assets/img/${item.img}`)"
                  :alt="item.img"
                  max-width="75%"
                  height="60%"
                ></v-img>
              </v-row>
              <v-row align-content-md="center">
                <v-col style="color: #394f79; font-size: 25px"
                  >{{ item.title }}
                </v-col>
              </v-row>
              <v-row align-content-md="center">
                <v-col style="color: #394f79; font-size: 20px"
                  >INSTRUCTOR:
                </v-col>
              </v-row>
              <v-row align-content-md="center">
                <v-col style="color: #394f79; font-size: 20px"
                  >Fecha de inicio:
                </v-col>
              </v-row>
              <v-row align-content-md="center">
                <v-col style="color: #394f79; font-size: 20px"
                  >Fecha de término:
                </v-col>
              </v-row>
              <v-row align-content-md="center">
                <v-btn style="width: 10px">Ver</v-btn>
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
import AuthService from "@/services/AuthService.js";

export default {
  name: "PagePrincipalAlumno",
  data() {
    return {
      items: [
        {
          id: 10,
          title: "Hotelería",
          img: "hoteleria.png",
        },
        // {
        //   title: 'Informática',
        //   img: 'informatica.png',
        // },
        // {
        //   title: 'Estilismo y Diseño de Imagen',
        //   img: 'estilismo.png',
        // },
        // {
        //   title: 'Inglés',
        //   img: 'ingles.png',
        // },
      ],
      misCursos: [
        { title: "MIS CURSOS" },
        { title: "Mis apuntes" },
        { title: "Mis proyectos" },
        { title: "Mis certificados" },
      ],
      main: [
        { title: "Unidades de capacitación" },
        { title: "Campos de formación profesional" },
        { title: "Cursos mejor valorados" },
        { title: "Cursos nuevos" },
        { title: "Cursos cerca de tu localidad" },
      ],
      extras: [{ title: "Configuración" }, { title: "Ayuda" }],
      items_cursos: [],
      data_user: [],
    };
  },

  async mounted() {
    try {
      const responseProfile = await AuthService.getProfile();
      this.data_user = responseProfile.data;
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    curso_access(id_curso) {
      this.$router.push({
        name: "ViewCronogramaCapacitando",
        params: {
          id: id_curso,
        },
      });
    },
  },
};
</script>
