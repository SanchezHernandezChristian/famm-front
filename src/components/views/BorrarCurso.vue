<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <br />
      <p></p>
      <h2 style="color: #2b4c7b">Eliminar curso</h2>
    </v-row>
    <v-row justify="center" align="center" style="height: 70px">
      <div>
        <v-layout row justify-center>
          <br />
          <p></p>
          <v-flex align-self-baseline xs2
            ><label>Nombre del curso</label></v-flex
          >
          <v-flex align-self-baseline xs5>
            <v-text-field
              dense
              outlined
              class="bordeRedondoElement"
            >{{curso.nombre_curso}}</v-text-field>
          </v-flex>
          <v-flex align-self-center xs5> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center" style="height: 70px">
      <div>
        <v-layout row justify-center>
          <br />
          <p></p>
          <v-flex align-self-baseline xs2
            ><label>Duración de horas</label></v-flex
          >
          <v-flex align-self-center xs5>
            <v-text-field
              dense
              outlined
              class="bordeRedondoElement"
            >{{curso.duracion_horas}}</v-text-field>
          </v-flex>
          <v-flex align-self-center xs5> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center" style="height: 70px">
      <div>
        <v-layout row justify-center>
          <br />
          <p></p>
          <v-flex align-self-baseline xs2><label>Clave de curso</label></v-flex>
          <v-flex align-self-center xs5>
            <v-text-field
              dense
              outlined
              class="bordeRedondoElement"
              disabled
            >{{curso.clave_curso}}</v-text-field>
          </v-flex>
          <v-flex align-self-center xs5> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center" style="height: 80px">
      <div>
        <v-layout row justify-center>
          <v-flex align-self-baseline xs2><label>Especialidad</label></v-flex>
          <v-flex align-self-center xs5>
            <v-combobox
              dense
              outlined
              class="bordeRedondoElement"
              >{{curso.idEspecialidad}}</v-combobox
            >
          </v-flex>
          <v-flex align-self-center xs5> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center">
      <div>
        <v-layout row justify-center>
          <v-flex align-self-baseline xs2><label>Descripción</label></v-flex>
          <v-flex align-self-center xs5>
            <v-textarea
              outlined
              name="input-7-4"
              label=""
            >{{curso.descripcion_curso}}</v-textarea>
          </v-flex>
          <v-flex align-self-center xs5> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center" style="height: 70px">
      <div>
        <v-layout row justify-center>
          <v-flex align-self-baseline xs2><label></label></v-flex>
          <v-flex align-self-center xs5>
            <label
              >*Recuerda que una vez eliminado el curso no podrás recuperar la
              información. Si estás de acuerdo, da click en el botón
              "ELIMINAR"</label
            >
          </v-flex>
          <v-flex align-self-center xs5> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row> <br /> </v-row>
    <v-row justify="center" align="start" style="height: 80px">
      <div>
        <v-layout row justify-center>
          <v-flex align-self-baseline xs2></v-flex>
          <v-flex align-self-center xs5>
            <v-btn outlined color="gray" class="bordeRedondoElement" @click="deleteGrade"
              >ELIMINAR</v-btn
            >
          </v-flex>
          <v-flex align-self-center xs5> <v-alert type="success" v-if="mostrarAlert">{{ datarespuesta.mensaje }}</v-alert> </v-flex>
        </v-layout>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import AuthService from "@/services/AuthService.js";

export default {
  name: "EditarCurso",
  components: {},
  data: () => ({
    select: "Turismo",
    items: ["Turismo"],
    curso: [],
    datarespuesta: [],
    mostrarAlert: false,
  }),

  methods: {
    async createGrade() {
      try {
        let claveObtenida = this.$route.params.clave;
        console.log(claveObtenida);
        const cursoObtenido = await AuthService.getCursoIndividual(claveObtenida);
        this.curso = cursoObtenido;
        console.log(this.curso);
        /*if (response.serverCode == 200) {
          this.mostrarAlert = true;
        }*/
      } catch (error) {
        console.log(error);
      }
    }, 

    async deleteGrade() {
      try {
        let claveDelete = this.curso.idCurso;
        console.log(claveDelete);
        const response = await AuthService.deleteGrade(claveDelete);
        this.datarespuesta = response;
        if (response.serverCode == 200) {
          this.mostrarAlert = true;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
