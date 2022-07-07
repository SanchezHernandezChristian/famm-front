<template>
  <v-container fluid>
    <v-row>
      <v-alert
        v-if="!dataUser.EstatusPerfil"
        border="left"
        justify="space-around"
        color="red"
        dark
      >
        <span class="float-left"
          >Los datos del instructor no han sido capturados.</span
        >
        <span class="float-right"
          >Click
          <v-btn dark outlined @click="redirectFormRegistro()"> aquí </v-btn>
          para capturarlos</span
        >
      </v-alert>
      <v-row v-else>
        <div>
          <p></p>
          <br />
          <br />
        </div>
      </v-row>
    </v-row>
    <v-row>
      <v-col>
        <div style="margin-left: 25px">
          <v-row>
            <v-layout column justify-center>
              <v-flex>
                <v-list>
                  <v-list-item
                    v-for="(item, index) in misCursos"
                    :key="index"
                    @click="selectSidebarItem(item)"
                  >
                    <v-list-item-title style="color: #394f79; font-size: 25px"
                      ><strong>{{ item.title }}</strong></v-list-item-title
                    >
                  </v-list-item>
                </v-list>
              </v-flex>
              <v-flex><br /></v-flex>
              <v-flex>
                <v-list>
                  <v-list-item v-for="(item, index) in main" :key="index">
                    <v-list-item-title
                      style="color: #aeacac; font-size: 20px"
                      >{{ item.title }}</v-list-item-title
                    >
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title style="color: #394f79; font-size: 20px"
                      >TODAS LAS ESPECIALIDADES
                      <i
                        class="fa fa-arrow-circle-right fa-lg"
                        aria-hidden="true"
                      ></i
                    ></v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-flex>
              <v-flex><br /></v-flex>
              <v-flex>
                <v-list>
                  <v-list-item v-for="(item, index) in extras" :key="index">
                    <v-list-item-title
                      style="color: #aeacac; font-size: 20px"
                      >{{ item.title }}</v-list-item-title
                    >
                  </v-list-item>
                </v-list>
              </v-flex>
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
export default {
  name: "PagePrincipalAlumno",
  data() {
    return {
      misCursos: [
        { title: "MIS CURSOS" },
        { title: "Mis apuntes" },
        { title: "Mis proyectos" },
        { title: "Mis certificados" },
        { title: "Editar datos" },
      ],
      main: [
        { title: "Unidades de capacitación" },
        { title: "Campos de formación profesional" },
        { title: "Cursos mejor valorados" },
        { title: "Cursos nuevos" },
        { title: "Cursos cerca de tu localidad" },
      ],
      extras: [{ title: "Configuración" }, { title: "Ayuda" }],
      dataUser: "",
    };
  },
  created() {
    this.dataUser = JSON.parse(localStorage.getItem("vuex")).user;
  },
  methods: {
    redirectFormRegistro() {
      this.$router.push("/form-registro-instructor");
    },

    selectSidebarItem(item) {
      if (item.title == "Editar datos") this.redirectFormRegistro();
    },
  },
};
</script>
