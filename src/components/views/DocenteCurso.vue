<template>
  <v-container fluid class="max-height">
    <v-row>
      <v-layout>
        <v-flex xs5>
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
              <v-list-item-title style="font-size: 20px"
                >Cronograma
                <v-btn
                  color="white"
                  text
                  small
                  class="orange--text"
                  style="font-size: 14px"
                  @click="redirect('ViewAddCronograma')"
                  v-if="!valido_c"
                >
                  Capturar
                </v-btn>
                <v-btn
                  color="white"
                  text
                  small
                  class="orange--text"
                  style="font-size: 14px"
                  @click="validateCronograma(3)"
                >
                  Ver
                </v-btn>
                <v-btn
                  color="white"
                  text
                  small
                  class="orange--text"
                  style="font-size: 14px"
                  @click="editCronograma(1)"
                  v-if="!valido_c"
                >
                  Editar
                </v-btn>
                <v-btn
                  color="white"
                  text
                  small
                  class="orange--text"
                  style="font-size: 14px"
                  @click="validateCronograma(2)"
                  v-if="!valido_c"
                >
                  Validar
                </v-btn>
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title style="font-size: 20px"
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
              <v-list-item-title style="font-size: 20px"
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
              <v-list-item-title style="font-size: 20px"
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
              <v-list-item-title style="font-size: 20px">
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
                  >{{ item_cedula.periodoInicio }}
                </label>
              </v-flex>
              <v-flex>
                <br />
                <p></p>
                <br />
                <label
                  ><strong>TÉRMINO DE CURSO:</strong
                  >{{ item_cedula.periodoTermino }}
                </label>
              </v-flex>
            </v-card>
          </v-row>
        </v-flex>
        <v-flex xs1></v-flex>
        <v-flex xs3>
          <v-row>
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
                  >{{ item_cedula.totalInscritos }}
                </label>
              </v-flex>
              <v-flex> </v-flex>
              <v-flex>
                <br />
                <v-divider></v-divider>
                <p></p>
                <br />
                <strong>ENLACES</strong>
              </v-flex>
              <v-flex v-if="distancia"><a href="">zooom</a></v-flex>
            </v-card>
          </v-row>
        </v-flex>
      </v-layout>
    </v-row>
    <v-dialog v-model="dialog" persistent max-width="1200px">
      <v-card>
        <v-card-title>
          <v-btn icon outlined @click="closeCronograma" class="mr-2">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <span class="text-h5">Editar cronograma</span>
        </v-card-title>

        <v-card-text>
          <FormCronograma
            :id="item_cronograma.cronograma.idCronograma"
            :mode="mode"
            @close="closeCronograma"
            v-if="dialog"
          />
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogPreview" persistent max-width="1200px">
      <v-card>
        <v-card-title>
          <v-btn icon outlined @click="closeCronograma" class="mr-2">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <span class="text-h5">Ver cronograma</span>
        </v-card-title>

        <v-card-text>
          <FormCronogramaPreview
            :id="item_cronograma.cronograma.idCronograma"
            :mode="mode"
            @close="closeCronograma"
            v-if="dialogPreview"
          />
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import AuthService from "@/services/AuthService.js";
import EventBus from "@/services/EventBus.js";
import FormCronograma from "@/components/views/FormCronograma.vue";
import FormCronogramaPreview from "@/components/views/FormCronogramaPreview.vue";

export default {
  components: {
    FormCronograma,
    FormCronogramaPreview,
  },
  data: () => ({
    id_curso: null,
    nombre_curso: "",
    tipo_curso: "",
    distancia: false,
    valido_c: false,
    capturado: false,
    item_cedula: [],
    item_cronograma: [],
    dialog: false,
    dialogPreview: false,
    mode: 1,
  }),
  async created() {
    let clave_curso = this.$route.params.clave_curso;
    if (clave_curso) {
      this.fetchData(clave_curso);
    }
    EventBus.$on("change_curso", this.fetchData);
  },
  beforeDestroy() {
    EventBus.$off("change_curso", this.fetchData);
  },
  methods: {
    async fetchData(clave_curso) {
      let response = await AuthService.getCursoIndividual(clave_curso);
      this.id_curso = response.curso.idCurso;
      let response2 = await AuthService.getCedulaIdCurso(this.id_curso);
      let response3 = await AuthService.getCronogramaIdCurso(this.id_curso);
      this.nombre_curso = response.curso.nombre_curso;
      this.tipo_curso = response2.data[0].modalidadCurso;
      this.item_cedula = response2.data[0];
      this.item_cronograma = response3.data[0];
      this.valido_c =
        this.item_cronograma.cronograma.is_enviado_validacion == 1;
      if (this.item_cronograma.cronograma.tipo_curso === 4)
        this.distancia = true;
    },

    redirect(route) {
      if (this.item_cronograma.cronograma) {
        this.$router.push({
          name: route,
          params: {
            id: this.id_curso,
            tipo: this.tipo_curso,
          },
        });
      } else
        this.$swal(
          "Advertencia",
          "No ha seleccionado ningún curso.",
          "warning"
        );
    },

    editCronograma(mode) {
      if (this.item_cronograma.cronograma) {
        this.mode = mode;
        this.dialog = true;
      } else
        this.$swal(
          "Advertencia",
          "No ha seleccionado ningún curso.",
          "warning"
        );
    },

    validateCronograma(mode) {
      if (this.item_cronograma.cronograma) {
        this.mode = mode;
        this.dialogPreview = true;
      } else
        this.$swal(
          "Advertencia",
          "No ha seleccionado ningún curso.",
          "warning"
        );
    },

    closeCronograma() {
      this.fetchData(this.item_cedula.clave_curso);
      this.dialog = false;
      this.dialogPreview = false;
    },
  },
};
</script>
