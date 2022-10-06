<template>
  <v-container fluid class="max-height">
    <v-row>
      <div style="margin-left: 25px; margin-right: 2000px">
        <v-row>
          <v-layout>
            <v-flex xs4>
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
                      style="font-size: 18px"
                      @click="redirect('ViewAddCronograma')"
                    >
                      Capturar
                    </v-btn>
                    <v-btn
                      color="white"
                      text
                      small
                      class="orange--text mr-3"
                      style="font-size: 18px"
                      @click="redirect('ViewAddCronograma')"
                    >
                      Ver/Editar
                    </v-btn>
                    <v-btn
                      v-if="!valido_c"
                      color="white"
                      text
                      small
                      class="orange--text mr-3"
                      style="font-size: 18px"
                      @click="redirect('ViewAddCronograma')"
                    >
                      Validar
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
            <v-flex xs1><br /></v-flex>
            <v-flex xs3
              ><v-row>
                <v-card
                  color="white darken-2"
                  class="gray--text"
                  style="height: 250px; width: 400px; font-size: 20px"
                >
                  <v-flex align-self-center xs12>
                    <p></p>
                    <br />
                    <label
                      ><strong>INICIO DE CURSO:</strong
                      >{{ this.item_cedula.periodoInicio }}</label
                    >
                  </v-flex>
                  <v-flex
                    ><br />
                    <p></p>
                    <br />
                    <label
                      ><strong>TÉRMINO DE CURSO:</strong
                      >{{ this.item_cedula.periodoTermino }}</label
                    ></v-flex
                  >
                </v-card>
              </v-row></v-flex
            >
            <v-flex xs1></v-flex>
            <v-flex xs3
              ><v-row>
                <v-card
                  color="white darken-2"
                  class="gray--text"
                  style="height: 250px; width: 400px; font-size: 20px"
                >
                  <v-flex align-self-center xs12>
                    <p></p>
                    <br />
                    <label
                      ><strong>Alumnos inscritos:</strong
                      >{{ this.item_cedula.totalInscritos }}</label
                    >
                  </v-flex>
                  <v-flex> </v-flex>
                  <v-flex
                    ><br />
                    <v-divider></v-divider>
                    <p></p>
                    <br />
                    <strong>ENLACES</strong></v-flex
                  >
                  <v-flex v-if="distancia"><a href="">zoom</a></v-flex>
                </v-card>
              </v-row></v-flex
            >
          </v-layout>
        </v-row>
      </div>
    </v-row>
    <!-- <v-row>
      <div style="height: 200px"></div>
    </v-row> -->
  </v-container>
</template>

<script>
import AuthService from "@/services/AuthService.js";

export default {
  data: () => ({
    nombre_curso: "",
    distancia: false,
    valido_c: false,
    capturado: false,
    id_curso: null,
    item_cedula: [],
    item_cronograma: [],
  }),
  async created() {
    let clave_curso = this.$route.params.clave_curso;
    if (clave_curso) {
      let response = await AuthService.getCursoIndividual(clave_curso);
      this.nombre_curso = response.curso.nombre_curso;
      this.id_curso = response.curso.idCurso;
      let response2 = await AuthService.getCedulaIdCurso(this.id_curso);
      this.item_cedula = response2.data;
      console.log("cedulacurso ", this.item_cedula);
      let response3 = await AuthService.getCronogramaIdCurso(this.id_curso);
      this.item_cronograma = response3.data;
      console.log("cronogramacurso ", this.item_cronograma);
      this.valido_c = this.item_cronograma.valido;
      if (this.item_cronograma.tipo_curso === 3) this.distancia = true;
    }
  },
  methods: {
    redirect(route) {
      this.$router
        .push({
          name: route,
          params: {
            e: 1,
          },
        })
        .catch((error) => {
          if (
            error.name !== "NavigationDuplicated" &&
            !error.message.includes(
              "Avoided redundant navigation to current location"
            )
          ) {
            console.log(error);
          }
        });
    },
  },
};
</script>
