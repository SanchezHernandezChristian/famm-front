<template>
  <v-container fluid>
    <v-row>
      <!--<img class="main-img" src="@/assets/img/banner.png" alt="FAMM" />-->
      <div class="indigo darken-4 text-center">
        <p class="white--text pt-3 mb-2">Facilitador para el Acceso a Módulos tecnológicos y Monitoreo educativo</p>
      </div>
    </v-row>
    <v-row class="bannerCentral pt-16">
      <v-col>
        <div>
          <h1 style="color: white" align="left" class="pa-3">
            <strong>Conoce toda nuestra oferta de cursos y talleres, crece profesionalmente</strong>
          </h1>
          <h3 style="color: white" class="pa-3" align="left">Aprende en cualquier momento y forma parte de esta gran comunidad</h3>
        </div>
        <div class="buttonAcountFree">
          <v-btn class="ma-2" outlined color="white"> Crea tu cuenta gratis </v-btn>
        </div>
      </v-col>
      <v-col></v-col>
      <v-col cols="4" xs="6" class="hidden-sm-and-down"><v-img max-height="100%" max-width="100%" src="@/assets/img/banner-pareja.png"></v-img></v-col>
    </v-row>
    <v-row style="background-color: #87356e; color: white" justify="center">
      <v-col md="2"><span class="h1">12</span> <span class="subtitle-1">Unidades de capacitación</span></v-col>
      <v-col md="2"><span class="h1">394</span> <span class="subtitle-1">Cursos</span></v-col>
      <v-col md="2"><span class="h1">85</span> <span class="subtitle-1">Especialidades</span></v-col>
      <v-col md="2"><span class="h1">32</span> <span class="subtitle-1">Campos de formación profesional</span></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Body',
};
</script>
