<template>
  <v-container fluid style="background-color: #e0e0e0; height: 100%">
    <v-row>
      <v-layout style="background-color: #e0e0e0">
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
        <v-flex xs1></v-flex>
        <v-flex xs8> </v-flex>
      </v-layout>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PagePrincipalAlumno",
};
</script>
