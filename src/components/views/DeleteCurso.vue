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
            ><label>Clave del curso</label></v-flex
          >
          <v-flex align-self-baseline xs5>
            <v-text-field
              dense
              outlined
              class="bordeRedondoElement"
              placeholder="Escribe la clave del curso"
            ></v-text-field>
          </v-flex>
          <v-flex align-self-start xs2>
            <v-btn outlined color="gray" class="bordeRedondoElement" @click="buscar()"
              >BUSCAR</v-btn
            >
          </v-flex>
          <v-flex align-self-center xs3> </v-flex>
        </v-layout>
      </div>
    </v-row>    
    <v-row>
        <div style="height: 450px;"></div>
    </v-row>
  </v-container>
</template>


<script>
export default {
  name: "DeleteCurso",
  components: {},
  data: () => ({
  }),
  methods: {
    buscar() {
      this.find();
    },

    async find() {
      try {
        this.$router.push("autorizar-eliminar-curso");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

