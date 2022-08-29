<template>
  <v-row>
    <v-col cols="1">
      <v-btn
        depressed
        color="#FFFFFF"
        elevation="0"
        style="font-size: 12px; color: #8996a0"
        @click="seleccionDashboard()"
        ><v-icon color="#8996a0">mdi-home</v-icon>
        Inicio
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    items_cursos: [],
  }),
  methods: {
    seleccionDashboard() {
      this.$router.push("page-principal");
    },
  },
};
</script>