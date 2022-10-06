<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <p class="text-right">{{ municipio }}, Oaxaca a {{ fecha }}</p>
      </v-col>
      <v-col cols="12" class="mb-4">
        <p class="font-weight-bold m-0 p-0">MTRO. FRANCISCO ANGEL MALDONADO MARTINEZ</p>
        <p class="m-0 p-0">DIRECTOR DEL ICAPET OAXACA.</p>
        <p class="m-0 p-0">PRESENTE:</p>
      </v-col>
      <v-col cols="12" class="mt-4">
        <p>
          Con el propósito de impulsar las actividades productivas de esta localidad me dirijo a usted para solicitar de la manera más atenta el otorgamiento
          del {{ tipo_curso }} en:
        </p>
      </v-col>
      <v-col cols="12">
        <p class="text-center font-weight-bold border-bottom">
          {{ nombre_curso }}
        </p>
      </v-col>
      <v-col cols="12">
        <p>
          Para ser impartido a: <strong>{{ recibiraCurso }}</strong>
        </p>
      </v-col>
      <v-col cols="12" class="mb-4">
        <p>Sin más por el momento y en espera de su respuesta favorable le enviamos un cordial saludo.</p>
      </v-col>
      <v-col cols="12" class="mt-4">
        <p class="font-weight-bold mb-4">Atentamente</p>
        <br />
        <p class="font-weight-bold border-top m-0 p-0">
          {{ director }}
        </p>
        <p class="font-weight-bold m-0 p-0">{{ tipoUnidad }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AuthService from '@/services/AuthService.js';
import DateService from '@/services/DateService.js';

export default {
  name: 'PreviewOficioSolicitud',
  props: {
    id: {
      type: Number,
      default: null,
    },
  },

  data: () => ({
    fecha: '',
    nombre_curso: '',
    recibiraCurso: '',
    tipo_curso: '',
    director: '',
    municipio: 'NA',
    tipoUnidad: '',
  }),

  async mounted() {
    if (this.id) {
      await this.getOficio(this.id);
    }
  },

  methods: {
    async getOficio(id) {
      const oficio = await AuthService.getOficioSolicitud(id);
      let nombre = oficio.data[0].nombre.split(', ');

      if (nombre.length > 1) this.municipio = nombre[1];
      console.log(oficio.data[0]);

      this.fecha = DateService.dateToString(oficio.data[0].fecha);
      this.nombre_curso = oficio.data[0].nombre_curso;
      this.recibiraCurso = oficio.data[0].recibiraCurso;
      this.tipo_curso = oficio.data[0].descripcion;
      this.director = oficio.data[0].director;
      this.municipio = oficio.data[0].Descripcion;
      this.tipoUnidad = oficio.data[0].nombre;
    },
  },
};
</script>
