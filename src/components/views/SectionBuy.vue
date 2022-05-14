<template>
  <v-container fluid pt-4>
    <h1 class="text-center pb-6 text-3xl md:text-4xl lg:text-5xl font-semibold text-indigo-500">
      <strong>Explora y aprende</strong>
    </h1>
    <p class="text-indigo-600 text-center lg:px-24 pb-5">Accede a nuestros mejores cursos y mejora en tu vida profesional</p>
    <v-row justify="center" pt-6>
      <v-col cols="3" v-for="(item, index) in items" :key="index" pt-10>
        <v-row>
          <v-img class="logo-curso-b" :src="require(`@/assets/img/${item.img}`)" :alt="item.img" max-width="75%" height="60%"></v-img>
        </v-row>
        <v-row align-content-md="center">
          <v-col flex
            ><strong class="pt-5 pb-5">{{ item.title }}</strong>
          </v-col>
          <v-col cols="12" align="left">{{ item.text }}</v-col>
          <v-col cols="12" align="left"
            ><strong>Duración: {{ item.hrs }}</strong>
          </v-col>
        </v-row>
        <v-row align="center" justify="space-around">
          <v-col
            ><v-btn small :x-small="$vuetify.breakpoint.mdAndDown" color="warning" dark> <v-icon left> mdi-cart </v-icon> Inscribirme </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'SectionBuy',
  data() {
    return {
      items: [
        {
          title: 'Diseño de cursos de formación',
          img: 'formacion.jpg',
          text: 'Conocimientos basicos de computación | Disponibilidad para conectarte en linea',
          hrs: '20 horas',
        },
        {
          title: 'Atención al ciudadano en sector Público',
          img: 'sectorPublico.jpg',
          text: 'Conocimientos basicos de computación | Disponibilidad para conectarte en linea',
          hrs: '20 horas',
        },
        {
          title: 'Reposteria',
          img: 'reposteria.jpg',
          text: 'Equipamiento básico para elaborar productos de reposteria | Disponibilidad para conectarte en linea',
          hrs: '30 horas',
        },
        {
          title: 'Formación del capital humano  ',
          img: 'capitalHumano.jpg',
          text: 'Conocimientos basicos de computación| Disponibilidad para conectarte en linea ',
          hrs: '20 horas',
        },
      ],
    };
  },
  methods: {
    getImgUrl(pic) {
      var images = require.context('@/assets/', false);
      return images('./' + pic);
    },
  },
};
</script>
