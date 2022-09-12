<template>
  <v-container fluid class="max-height">
    <v-row>
      <v-col>
        <div style="margin-left: 25px">
          <v-row>
            <v-layout column justify-center>
              <v-flex>
                <v-list>
                  <v-list-item>
                    <v-list-item-title style="font-size: 25px"
                      ><strong>Curso: </strong>
                      <strong class="orange--text">
                        {{ nombre_curso }}</strong
                      ></v-list-item-title
                    >
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title style="font-size: 25px"
                      >Cronograma
                      <v-btn
                        color="white"
                        text
                        small
                        class="orange--text mr-3"
                        @click="redirect('ViewAddCronograma')"
                      >
                        Capturar
                      </v-btn>
                      <v-btn
                        color="white"
                        text
                        small
                        class="orange--text mr-3"
                        @click="redirect('ViewAddCronograma')"
                      >
                        Ver/Editar
                      </v-btn>
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title style="font-size: 25px"
                      >Lista de asistencia
                      <a
                        href=""
                        class="orange--text text-decoration-none mr-4"
                        style="font-size: 18px"
                        >Capturar</a
                      >
                      <a
                        href=""
                        class="orange--text text-decoration-none"
                        style="font-size: 18px"
                        >Ver/Editar</a
                      >
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title style="font-size: 25px"
                      >Memoria RUDC-18
                      <a
                        href=""
                        class="orange--text text-decoration-none mr-4"
                        style="font-size: 18px"
                        >Capturar</a
                      >
                      <a
                        href=""
                        class="orange--text text-decoration-none"
                        style="font-size: 18px"
                        >Ver/Editar</a
                      >
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title style="font-size: 25px"
                      >Calificaciones
                      <a
                        href=""
                        class="orange--text text-decoration-none mr-4"
                        style="font-size: 18px"
                        >Capturar</a
                      >
                      <a
                        href=""
                        class="orange--text text-decoration-none"
                        style="font-size: 18px"
                        >Ver/Editar</a
                      >
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title style="font-size: 25px">
                      Reporte de supervisión
                      <a
                        href=""
                        class="orange--text text-decoration-none mr-4"
                        style="font-size: 18px"
                        >Capturar</a
                      >
                      <a
                        href=""
                        class="orange--text text-decoration-none"
                        style="font-size: 18px"
                        >Ver/Editar</a
                      >
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-flex>
              <v-flex><br /></v-flex>
            </v-layout>
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
  data: () => ({
    nombre_curso: "",
  }),
  async created() {
    let clave_curso = this.$route.params.clave_curso;
    if (clave_curso) {
      let response = await AuthService.getCursoIndividual(clave_curso);
      this.nombre_curso = response.curso.nombre_curso;
    }
  },
  methods: {
    redirect(route) {
      this.$router.push({
        name: route,
        params: {
          e: 1,
        },
      });
    },
  },
};
</script>
