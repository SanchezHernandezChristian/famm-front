<template>
  <v-container fluid>
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
                      >Lista de asistencia
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
  props: {
    clave_curso: {
      type: String,
      default: null,
    },
  },
  data: () => ({
    nombre_curso: "",
  }),
  async created() {
    let response = await AuthService.getCursoIndividual(this.clave_curso);
    this.nombre_curso = response.curso.nombre_curso;
  },
};
</script>
