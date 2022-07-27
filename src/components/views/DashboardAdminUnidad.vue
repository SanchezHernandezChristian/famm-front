<template>
  <v-container fluid style="background-color: #e0e0e0">
    <v-row>
      <v-layout>
        <v-flex xs4>
          <br />
          <v-card color="white darken-2" class="gray--text">
            <v-flex align-self-center xs10>
              <v-layout>
                <v-flex xs3></v-flex>
                <v-card-title>
                  <div class="headline centrartextocard text-center">
                    Registros exitosos
                  </div>
                </v-card-title>
              </v-layout>
            </v-flex>
            <v-divider dark></v-divider>
            <v-flex>
              <v-img
                src="@/assets/img/registrosexitosos.png"
                height="125px"
                contain
              ></v-img>
            </v-flex>
            <v-flex><br /></v-flex>
          </v-card>
        </v-flex>
        <v-flex xs1></v-flex>
        <v-flex xs4>
          <br />
          <v-card color="white darken-2" class="gray--text">
            <v-flex align-self-center xs10>
              <v-layout>
                <v-flex xs3></v-flex>
                <v-card-title>
                  <div class="centrartextocard text-center">
                    Ranking de docentes
                  </div>
                </v-card-title>
              </v-layout>
            </v-flex>
            <v-divider dark></v-divider>
            <v-flex>
              <v-img
                src="@/assets/img/registrosexitosos.png"
                height="125px"
                contain
              ></v-img>
            </v-flex>
            <v-flex><br /></v-flex>
          </v-card>
        </v-flex>
        <v-flex xs1></v-flex>
        <v-flex xs4>
          <br />
          <v-card color="white darken-2" class="gray--text">
            <v-flex align-self-center xs10>
              <v-layout>
                <v-flex xs2></v-flex>
                <v-card-title>
                  <div class="centrartextocard text-center">Cédulas</div>
                </v-card-title>
              </v-layout>
            </v-flex>
            <v-divider dark></v-divider>
            <v-flex>
              <v-list dense>
                <v-list-item-group color="primary">
                  <v-list-item @click="redirect('validacion-instructores')">
                    <v-list-item-content>
                      <v-list-item-title
                        ><strong
                          >IDENTIFICACIÓN DEL INSTRUCTOR FORMATO RPDC-11</strong
                        >
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item @click="redirect('cedula-pre-autorizada')">
                    <v-list-item-content>
                      <v-list-item-title
                        ><strong>PREAUTORIZACIÓN DE CURSOS-RUDC-06</strong>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item
                    @click="redirect('factibilidad-justificacion-registradas')"
                  >
                    <v-list-item-content>
                      <v-list-item-title
                        ><strong
                          >FACTIBILIDAD Y JUSTIFICACIÓN DE CURSOS DE
                          CAPACITACIÓN FORMATO RUDC-04</strong
                        >
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-flex>
            <v-flex><br /></v-flex>
          </v-card>
        </v-flex>
      </v-layout>
    </v-row>
    <v-row>
      <v-layout style="background-color: #e0e0e0; margin-right: 195px">
        <v-flex xs4>
          <br />
          <v-card color="white darken-2" class="gray--text">
            <v-flex align-self-center xs8>
              <v-layout>
                <v-flex xs3></v-flex>
                <v-card-title>
                  <div class="centrartextocard text-center">
                    Lorem ipsum dolor
                  </div>
                </v-card-title>
              </v-layout>
            </v-flex>
            <v-flex><br /></v-flex>
            <v-flex>
              <v-img
                src="@/assets/img/graficacircular.png"
                height="130px"
                contain
              ></v-img>
            </v-flex>
            <v-flex><br /></v-flex>
          </v-card>
        </v-flex>
        <v-flex xs1></v-flex>
        <v-layout column>
          <v-flex xs3>
            <br />
            <v-card color="white darken-2" class="gray--text">
              <v-flex align-self-center xs>
                <v-layout>
                  <v-card-title>
                    <div class="centrartextocard text-center">
                      Alumnos registrados
                    </div>
                  </v-card-title>
                  <v-card-title>
                    <div
                      class="centrartextocard text-center"
                      style="color: green; font-size: 20px"
                    >
                      600
                    </div>
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
                    <div class="centrartextocard text-center">
                      Docentes registrados
                    </div>
                  </v-card-title>
                  <v-card-title>
                    <div
                      class="centrartextocard text-center"
                      style="color: green; font-size: 20px"
                    >
                      600
                    </div>
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
                    <div class="centrartextocard text-center">
                      Alumnos de baja
                    </div>
                  </v-card-title>
                  <v-card-title>
                    <div
                      class="centrartextocard text-center"
                      style="color: red; font-size: 20px"
                    >
                      56
                    </div>
                  </v-card-title>
                </v-layout>
              </v-flex>
            </v-card>
          </v-flex>
        </v-layout>
        <v-flex xs3></v-flex>
      </v-layout>
    </v-row>
    <v-row>
      <div style="background-color: #e0e0e0">
        <br />
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({}),
  methods: {
    redirect(url) {
      this.$router.push(url);
    },
  },
};
</script>
