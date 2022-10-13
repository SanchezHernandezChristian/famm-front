<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" class="d-flex flex-column">
        <span class="text-h5"
          >{{ cronograma.nombre_curso }}
          <a
            :href="zoom_link"
            target="_blank"
            rel="noopener noreferrer"
            class="orange--text text-decoration-none"
            v-if="student"
            >Iniciar curso
          </a>
        </span>
        <span>{{ cronograma.encargado_curso }}</span>
      </v-col>
      <v-col cols="12">
        <span class="font-weight-bold">Temario</span>
        <v-list-item
          two-line
          v-for="(item, index) in cronograma.contenido_cronograma"
          :key="index"
        >
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">
              {{ item.unidad }}. {{ item.tema }} / {{ item.periodo }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ item.unidad }}.1 {{ item.subtema }} ({{ item.horas }} hrs.)
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" class="text-center">
        <v-btn elevation="2" raised rounded @click="close()" v-if="!student">
          Cancelar
        </v-btn>
        <v-btn
          color="orange"
          elevation="2"
          raised
          rounded
          class="m-1"
          @click="validate()"
          v-show="mode == 2 && cronograma.is_enviado_validacion < 1"
        >
          Validar
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AuthService from "@/services/AuthService.js";

export default {
  name: "FormCronogramaPreview",
  props: {
    id: { type: Number, required: true },
    mode: {
      type: Number,
      default: 0, // 2 = Validación, 3 = Visualización
    },
    student: {
      type: Boolean,
      default: false,
    },
    zoom_link: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    cronograma: {
      idCurso: 0,
      nombre_curso: "",
      encargado_curso: "",
      contenido_cronograma: [],
      is_enviado_validacion: 1,
    },
  }),

  async created() {
    await this.getCronograma();
  },

  methods: {
    async getCronograma() {
      try {
        let response = await AuthService.getCronograma(this.id);
        let data = response.data[0];
        let response2 = await AuthService.getGradeUnic(data.cronograma.idCurso);
        this.cronograma = {
          idCurso: data.cronograma.idCurso,
          nombre_curso: response2.curso.nombre_curso,
          encargado_curso: data.cronograma.encargado_curso,
          contenido_cronograma: data.contenido_cronograma,
          is_enviado_validacion: data.cronograma.is_enviado_validacion,
        };
      } catch (error) {
        console.log(error);
        this.$swal(
          "Error",
          "No se pudo recuperar la información del cronograma.",
          "error"
        );
      }
    },

    async validate() {
      this.$swal({
        title: "¿Desea enviar a validación?",
        text: "Esta acción no se puede deshacer.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, enviar",
        cancelButtonText: "Cancelar",
      })
        .then((result) => {
          if (result.isConfirmed) {
            let data = {
              idCronograma: this.id,
              is_enviado_validacion: 1,
            };
            return AuthService.updateCronograma(data);
          }
        })
        .then((response) => {
          if (response && response.serverCode == 200) {
            this.$swal("Hecho", "Cronograma enviado a validación.", "success");
            Object.assign(this.$data, this.$options.data());
            this.close();
          }
        })
        .catch((error) => {
          console.log(error);
          this.$swal(
            "Error",
            "No se pudo enviar a validación el cronograma.",
            "error"
          );
        });
    },

    close() {
      this.$emit("close");
    },
  },
};
</script>