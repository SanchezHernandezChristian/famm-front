<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <p class="text-right">
          Santa María Huatulco, Oaxaca a 19 de septiembre de 2022
        </p>
      </v-col>
      <v-col cols="12" class="mb-4">
        <p class="font-weight-bold m-0 p-0">
          MTRO. FRANCISCO ANGEL MALDONADO MARTINEZ
        </p>
        <p class="m-0 p-0">DIRECTOR DEL ICAPET OAXACA.</p>
        <p class="m-0 p-0">PRESENTE:</p>
      </v-col>
      <v-col cols="12" class="mt-4">
        <p>
          Con el propósito de impulsar las actividades productivas de esta
          localidad me dirijo a usted para solicitar de la manera más atenta el
          otorgamiento del {{ tipo_curso }} en:
        </p>
      </v-col>
      <v-col cols="12">
        <p class="text-center font-weight-bold border-bottom">
          {{ nombre_curso }}
        </p>
      </v-col>
      <v-col cols="12">
        <p>
          Para ser impartido a: <strong>{{ impartido }}</strong>
        </p>
      </v-col>
      <v-col cols="12" class="mb-4">
        <p>
          Sin más por el momento y en espera de su respuesta favorable le
          enviamos un cordial saludo.
        </p>
      </v-col>
      <v-col cols="12" class="mt-4">
        <p class="font-weight-bold mb-4">Atentamente</p>
        <br />
        <p class="font-weight-bold border-top m-0 p-0">
          LCDO. Juan Aragón Alcántara
        </p>
        <p class="font-weight-bold m-0 p-0">
          Encargado de la Oficina de Atención ICAPET HUATULCO
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import AuthService from "@/services/AuthService.js";

export default {
  name: "PreviewOficioSolicitud",
  props: {
    id: {
      type: Number,
      default: null,
    },
    name: {
      type: String,
      default: "",
    },
  },

  data: () => ({
    nombre_curso: "",
    impartido: "",
    tipo_curso: "",
  }),

  async mounted() {
    if (this.id) {
      await this.getOficio(this.id);
    }
  },

  methods: {
    getOficio(id) {
      console.log("Oficio", id);
      this.nombre_curso = this.name;
      this.impartido = "PÚBLICO GENERAL";
      this.tipo_curso = "Curso de competencia laboral";
    },
  },
};
</script>