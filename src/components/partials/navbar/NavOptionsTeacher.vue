<template>
  <v-row>
    <v-col cols="1">
      <v-btn
        depressed
        color="#FFFFFF"
        elevation="0"
        style="font-size: 12px; color: #8996a0"
        @click="goHome()"
        ><v-icon color="#8996a0">mdi-home</v-icon>
        Inicio
      </v-btn>
    </v-col>
    <v-col cols="1">
      <v-btn
        depressed
        color="#FFFFFF"
        elevation="0"
        style="font-size: 12px; color: #8996a0"
        ><v-icon color="#8996a0">mdi-chart-bar</v-icon>
        Graficas
      </v-btn>
    </v-col>
    <v-col cols="1">
      <v-menu transition="scroll-y-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            depressed
            color="#FFFFFF"
            elevation="0"
            v-bind="attrs"
            v-on="on"
            style="font-size: 13px; color: #8996a0"
            ><v-icon color="#8996a0">mdi-monitor</v-icon>
            Mis cursos
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items_cursos"
            :key="index"
            @click="selectItem(item.clave_curso)"
          >
            <v-list-item-title>{{ item.nombre_curso }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-col>
    <v-col cols="1">
      <v-btn
        depressed
        color="#FFFFFF"
        elevation="0"
        style="font-size: 12px; color: #8996a0"
        @click="editProfile()"
        ><v-icon color="#8996a0">mdi-account-edit</v-icon>
        Mis datos
      </v-btn>
    </v-col>
    <!--<v-col cols="1">
      <v-menu transition="scroll-y-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            depressed
            color="#FFFFFF"
            elevation="0"
            v-bind="attrs"
            v-on="on"
            style="font-size: 13px; color: #8996a0"
            @click="redirect()"
            ><v-icon color="#8996a0">mdi-format-list-bulleted-square</v-icon>
            Cronogramas
          </v-btn>
        </template>
      </v-menu>
    </v-col>-->
  </v-row>
</template>

<script>
import AuthService from "@/services/AuthService.js";

export default {
  data: () => ({
    items_cursos: [],
  }),
  async created() {
    const response = await AuthService.getProfileDocente();
    if (response) {
      // Se cambia la llamada a getAllAssignGradeByTeacher por getCursosDocenteCedula
      const response2 = await AuthService.getCursosDocenteCedula(
        response.idDocente
      );
      this.items_cursos = response2.data;
    }
  },
  methods: {
    selectItem(clave_curso) {
      this.$router.push({
        name: "ViewDocenteCurso",
        params: {
          clave_curso: clave_curso,
        },
      });
    },

    goHome() {
      this.$router.push("dashboard-instructor");
    },

    editProfile() {
      this.$router.push("form-registro-instructor");
    },

    redirect() {
      this.$router.push("cronograma");
    },
  },
};
</script>