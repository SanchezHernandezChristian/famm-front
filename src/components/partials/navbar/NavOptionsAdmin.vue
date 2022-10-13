<template>
  <v-row>
    <v-layout>
      <v-flex align-self-center xs1>
        <v-menu transition="scroll-y-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              depressed
              color="#FFFFFF"
              elevation="0"
              class="ma-2"
              v-bind="attrs"
              v-on="on"
              style="font-size: 20px; color: #bdbbbd"
              @click="seleccionDashboard()"
              ><v-icon color="#bdbbbd">mdi-home</v-icon>
              Dashboard
            </v-btn>
          </template>
        </v-menu>
      </v-flex>
      <v-flex align-self-center xs1>
        <v-menu transition="scroll-y-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              depressed
              color="#FFFFFF"
              elevation="0"
              class="ma-2"
              v-bind="attrs"
              v-on="on"
              style="font-size: 20px; color: #bdbbbd"
              ><v-icon color="#bdbbbd">mdi-chart-bar</v-icon>
              Gráficas
            </v-btn>
          </template>
        </v-menu>
      </v-flex>
      <v-flex align-self-center xs1>
        <v-menu transition="scroll-y-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              depressed
              color="#FFFFFF"
              elevation="0"
              class="ma-2"
              v-bind="attrs"
              v-on="on"
              style="font-size: 20px; color: #bdbbbd"
              ><i class="fa fa-users" aria-hidden="true"></i>
              Usuarios
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in users"
              :key="index"
              @click="selectItem(item)"
            >
              <!--<v-list-item-title>{{
                  item.cursos[0][nombre_curso]
                }}</v-list-item-title>-->
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-flex>
      <v-flex align-self-center xs2>
        <v-menu transition="scroll-y-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              depressed
              color="#FFFFFF"
              elevation="0"
              class="ma-2"
              v-bind="attrs"
              v-on="on"
              style="font-size: 20px; color: #bdbbbd"
              ><v-icon color="#bdbbbd">mdi-monitor</v-icon>
              Cursos
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in cursos"
              :key="index"
              @click="selectItem(item)"
            >
              <!--<v-list-item-title>{{
                  item.cursos[0][nombre_curso]
                }}</v-list-item-title>-->
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-flex>
      <v-flex align-self-center xs2>
        <v-menu transition="scroll-y-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              depressed
              color="#FFFFFF"
              elevation="0"
              class="ma-2"
              v-bind="attrs"
              v-on="on"
              style="font-size: 20px; color: #bdbbbd"
              ><v-icon color="#bdbbbd">mdi-school</v-icon>
              Especialidades
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in especialidades"
              :key="index"
              @click="selectItem(item)"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-flex>
      <v-flex align-self-center xs2>
        <v-menu transition="scroll-y-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              depressed
              color="#FFFFFF"
              elevation="0"
              class="ma-2"
              v-bind="attrs"
              v-on="on"
              style="font-size: 20px; color: #bdbbbd"
              ><v-icon color="#bdbbbd">mdi-map</v-icon>
              Unidades
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in unidades"
              :key="index"
              @click="selectItem(item)"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu> </v-flex
      ><v-flex align-self-center xs2>
        <v-menu transition="scroll-y-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              depressed
              color="#FFFFFF"
              elevation="0"
              class="ma-2"
              v-bind="attrs"
              v-on="on"
              style="font-size: 20px; color: #bdbbbd"
              >
              Inicio de Cursos
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in inicio_cursos"
              :key="index"
              @click="selectItem(item)"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-flex>
      <v-flex align-self-center xs2>
        <v-icon color="#bdbbbd">mdi-magnify</v-icon
        ><input type="search" placeholder="Buscar..." />
      </v-flex>
    </v-layout>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    users: [
      { title: "Usuarios registrados" }, //{ title: "Añadir usuario" }
    ],
    cursos: [
      { title: "Cursos registrados" },
      { title: "Asignar curso" },
      // { title: "Centros de capacitación" },
      // { title: "Especialidades registradas" },
      // { title: "Cursos asignados" },
    ],
    especialidades: [{ title: "Especialidades registradas" }],
    unidades: [{ title: "Unidades de capacitación" }],
    inicio_cursos: [{ title: "Generar Accesos" }],
  }),
  methods: {
    selectItem(item) {
      //if (item.title == 'Perfil') this.profile();
      if (item.title == "Añadir usuario") this.addUser();
      if (item.title == "Usuarios registrados") this.redirectUsers();
      if (item.title == "Cursos registrados") this.addCurso();
      if (item.title == "Asignar curso") this.asignarCurso();
      if (item.title == "Unidades de capacitación") this.centrosCapacitacion();
      if (item.title == "Especialidades registradas") this.addEspecialidad();
      if (item.title == "Cursos asignados") this.asignCurso();
      if (item.title == "Generar Accesos") this.accesos();
    },

    async seleccionDashboard() {
      try {
        this.$router.push("dashboard-admin");
      } catch (error) {
        console.log(error);
      }
    },

    async addUser() {
      try {
        this.$router.push("agregar-usuario");
      } catch (error) {
        console.log(error);
      }
    },

    redirectUsers() {
      this.$router.push("users");
    },

    async addCurso() {
      try {
        this.$router.push("agregar-curso");
      } catch (error) {
        console.log(error);
      }
    },

    async asignarCurso() {
      try {
        this.$router.push("asignar-curso");
      } catch (error) {
        console.log(error);
      }
    },

    async centrosCapacitacion() {
      try {
        this.$router.push("centros-capacitacion");
      } catch (error) {
        console.log(error);
      }
    },

    async addEspecialidad() {
      try {
        this.$router.push("agregar-especialidad");
      } catch (error) {
        console.log(error);
      }
    },

    async asignCurso() {
      try {
        this.$router.push("cursos-asignados");
      } catch (error) {
        console.log(error);
      }
    },

    async accesos() {
      try {
        this.$router.push("generar-accesos");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>