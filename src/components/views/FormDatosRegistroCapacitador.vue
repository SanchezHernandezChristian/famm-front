<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" class="m-0 p-0">
        <div class="darken-4 text-center" style="background-color: #8996a0">
          <p class="white--text pt-3 mb-2">
            Facilitador para el Acceso a Módulos tecnológicos y Monitoreo
            educativo
          </p>
        </div>
      </v-col>
      <v-col cols="12" class="m-0 p-0">
        <div class="text-center">
          <h5>
            <p style="color: #f46722">
              <strong
                >CÉDULA DE IDENTIFICACIÓN DEL INSTRUCTOR FORMATO RPDC-11</strong
              >
            </p>
          </h5>
        </div>
      </v-col>
      <v-col cols="12" class="m-0 p-0">
        <div class="text-center">
          <p style="color: #8996a0">
            <strong
              >Rellena todos los campos para completar tu registro.</strong
            >
          </p>
          <p style="color: #8996a0">
            <strong>*Todos los campos son obligatorios.</strong>
          </p>
        </div>
      </v-col>
      <v-col cols="12" class="m-0 p-0">
        <div class="text-center">
          <h5>
            <p style="color: #394f79"><strong>DATOS DEL INSTRUCTOR</strong></p>
          </h5>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-stepper non-linear v-model="e1">
          <v-stepper-header>
            <v-stepper-step step="1" editable :rules="[() => s1_valid]">
              Información
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="2" editable :rules="[() => s2_valid]">
              Experiencia
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="3" editable :rules="[() => s3_valid]">
              Documentos
            </v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <v-card class="mb-12">
                <FormValidacionInstructor ref="teacher" @saved="saved" />
              </v-card>

              <v-btn color="primary" @click="store"> Guardar </v-btn>

              <v-btn text> Volver </v-btn>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-card class="mb-12">
                <v-form ref="form_experiencia" lazy-validation>
                  <strong class="font-text-instructor"
                    >EXPERIENCIA COMO INSTRUCTOR</strong
                  >
                  <ExperienciaDocente
                    v-for="(row, index) in items_expdocente"
                    :key="'s2row1' + index"
                    v-model="items_expdocente[index]"
                  />
                  <v-row justify="center" class="mt-1">
                    <v-col cols="3">
                      <v-btn
                        elevation="2"
                        small
                        class="mr-2"
                        @click="addDocenteExp('items_expdocente')"
                        >Añadir otro</v-btn
                      >
                      <v-btn
                        elevation="2"
                        small
                        @click="deleteDocenteExp('items_expdocente')"
                        >Borrar</v-btn
                      >
                    </v-col>
                  </v-row>
                  <strong class="font-text-instructor"
                    >FORMACIÓN DOCENTE (PARA INSTRUCTOR)</strong
                  >
                  <FormacionDocente
                    v-for="(row, index) in items_instdocente"
                    :key="'s2row2' + index"
                    v-model="items_instdocente[index]"
                  />
                  <v-row justify="center" class="mt-1">
                    <v-col cols="3">
                      <v-btn
                        elevation="2"
                        small
                        class="mr-2"
                        @click="addDocenteExp('items_instdocente')"
                        >Añadir otro</v-btn
                      >
                      <v-btn
                        elevation="2"
                        small
                        @click="deleteDocenteExp('items_instdocente')"
                        >Borrar</v-btn
                      >
                    </v-col>
                  </v-row>
                  <strong class="font-text-instructor"
                    >EXPERIENCIA LABORAL</strong
                  >
                  <ExperienciaLaboralDocente
                    v-for="(row, index) in items_explabdocente"
                    :key="'s2row3' + index"
                  />
                  <v-row justify="center" class="mt-1">
                    <v-col cols="3">
                      <v-btn
                        elevation="2"
                        small
                        class="mr-2"
                        @click="addDocenteExp('items_explabdocente', true)"
                        >Añadir otro</v-btn
                      >
                      <v-btn
                        elevation="2"
                        small
                        @click="deleteDocenteExp('items_explabdocente')"
                        >Borrar</v-btn
                      >
                    </v-col>
                  </v-row>
                  <strong class="font-text-instructor"
                    >OFERTA DE CAPACITACIÓN</strong
                  >
                  <v-row class="mt-1">
                    <v-col cols="8">
                      <v-autocomplete
                        dense
                        outlined
                        multiple
                        :rules="[rules.required]"
                        :items="items_cursos"
                        item-text="nombre_curso"
                        item-value="idCurso"
                        label="Enliste los cursos que puede impartir"
                        v-model="expTeacher.cursos"
                      ></v-autocomplete>
                    </v-col>
                    <v-col cols="6"></v-col>
                  </v-row>
                </v-form>
              </v-card>

              <v-btn color="primary" @click="store2"> Guardar </v-btn>

              <v-btn text @click="e1--"> Volver </v-btn>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-card class="mb-12">
                <v-form ref="form_documentos" lazy-validation>
                  <strong class="font-text-instructor"
                    >DOCUMENTOS QUE PRESENTA</strong
                  >
                  <v-row justify="center">
                    <v-col cols="6">
                      <v-file-input
                        label="Acta de nacimiento (copia)"
                        outlined
                        dense
                        show-size
                        accept="image/png, image/jpeg, image/bmp, application/pdf"
                        :rules="[rules.required, rules.size]"
                        ref="acta_nacimiento"
                        v-model="files.acta_nacimiento"
                      ></v-file-input>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="6">
                      <v-file-input
                        label="Comprobante de domicilio (copia)"
                        outlined
                        dense
                        show-size
                        accept="image/png, image/jpeg, image/bmp, application/pdf"
                        :rules="[rules.required, rules.size]"
                        ref="comprobante"
                        v-model="files.comprobante"
                      ></v-file-input>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="6">
                      <v-file-input
                        label="Credencial de elector (copia)"
                        outlined
                        dense
                        show-size
                        accept="image/png, image/jpeg, image/bmp, application/pdf"
                        :rules="[rules.required, rules.size]"
                        ref="ine"
                        v-model="files.ine"
                      ></v-file-input>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="6">
                      <v-file-input
                        label="Curriculum vitae (original y 2 copias)"
                        outlined
                        dense
                        show-size
                        accept="image/png, image/jpeg, image/bmp, application/pdf"
                        :rules="[rules.required, rules.size]"
                        ref="cv"
                        v-model="files.cv"
                      ></v-file-input>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="6">
                      <v-file-input
                        label="CURP (copia)"
                        outlined
                        dense
                        show-size
                        accept="image/png, image/jpeg, image/bmp, application/pdf"
                        :rules="[rules.required, rules.size]"
                        ref="curp"
                        v-model="files.curp"
                      ></v-file-input>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="6">
                      <v-file-input
                        label="Registro Secretaría del Trabajo y Prevención Social (copia)"
                        outlined
                        dense
                        show-size
                        accept="image/png, image/jpeg, image/bmp, application/pdf"
                        :rules="[rules.required, rules.size]"
                        ref="registro"
                        v-model="files.registro"
                      ></v-file-input>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="6">
                      <v-file-input
                        label="Título o carta de pasante (copia)"
                        outlined
                        dense
                        show-size
                        accept="image/png, image/jpeg, image/bmp, application/pdf"
                        :rules="[rules.required, rules.size]"
                        ref="titulo"
                        v-model="files.titulo"
                      ></v-file-input>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="6">
                      <v-file-input
                        label="Diplomas y constancias (copias)"
                        outlined
                        dense
                        show-size
                        accept="image/png, image/jpeg, image/bmp, application/pdf"
                        :rules="[rules.required, rules.size]"
                        ref="diplomas"
                        v-model="files.diplomas"
                      ></v-file-input>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="6">
                      <v-file-input
                        label="Otros (certificado)"
                        outlined
                        dense
                        show-size
                        accept="image/png, image/jpeg, image/bmp, application/pdf"
                        :rules="[rules.required, rules.size]"
                        ref="otros"
                        v-model="files.otros"
                      ></v-file-input>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card>

              <v-btn color="primary" dark class="m-1" @click="store3"
                >Guardar</v-btn
              >

              <v-btn class="m-1" @click="e1--"> Volver </v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AuthService from "@/services/AuthService.js";
import ExperienciaDocente from "@/components/partials/ExperienciaDocente.vue";
import ExperienciaLaboralDocente from "@/components/partials/ExperienciaLaboralDocente.vue";
import FormacionDocente from "@/components/partials/FormacionDocente.vue";
import FormValidacionInstructor from "@/components/views/FormValidacionInstructor.vue";

export default {
  components: {
    ExperienciaDocente,
    ExperienciaLaboralDocente,
    FormacionDocente,
    FormValidacionInstructor,
  },
  data() {
    return {
      rules: {
        required: (value) => !!value || "Campo requerido",
        size: (value) =>
          !value ||
          value.size < 1000000 ||
          "El archivo debe pesar menos de 1 MB!",
      },
      e1: 1,
      s1_valid: true,
      s2_valid: true,
      s3_valid: true,
      items_cursos: [],
      expTeacher: {
        idDocente: null,
        experienciaDocente: [],
        formacionDocente: [],
        experienciaLaboral: [],
        cursos: [],
      },
      files: {
        acta_nacimiento: null,
        comprobante: null,
        ine: null,
        cv: null,
        curp: null,
        registro: null,
        titulo: null,
        diplomas: null,
        otros: null,
      },
      items_expdocente: [],
      items_instdocente: [],
      items_explabdocente: [],
    };
  },

  async mounted() {
    let me = this;
    if (me.$store.getters.isLoggedIn) {
      try {
        const response = await AuthService.getCursos();
        me.items_cursos = response.cursos;
      } catch (error) {
        console.log("Error", error.response);
      }

      me.addDocenteExp("items_expdocente");
      me.addDocenteExp("items_instdocente");
      me.addDocenteExp("items_explabdocente");
    }
  },

  methods: {
    async store() {
      this.$refs.teacher.store();
    },

    async store2() {
      let me = this;
      let id = me.expTeacher.idDocente;
      if (me.$refs.form_experiencia.validate()) {
        try {
          await AuthService.addTeacher(me.expTeacher, 2);
          Object.assign(me.$data, me.$options.data());
          me.$refs.form_experiencia.resetValidation();
          me.$swal(
            "Hecho",
            "Información guardada correctamente.",
            "success"
          ).then(() => {
            me.e1 = 3;
            me.expTeacher.idDocente = id;
          });
        } catch (error) {
          console.log(error);
          me.$swal(
            "Error",
            "Error al intentar guardar la información.",
            "error"
          );
        }
      } else {
        me.s2_valid = false;
        me.$swal(
          "Advertencia",
          "No ha completado la información solicitada.",
          "warning"
        );
      }
    },

    store3() {
      let me = this;
      if (me.$refs.form_documentos.validate()) {
        me.$swal(
          "Hecho",
          "Información guardada correctamente.",
          "success"
        ).then(() => {
          Object.assign(me.$data, me.$options.data());
          me.$refs.form_documentos.resetValidation();
          me.$router.push("/dashboard-instructor");
        });
      } else {
        me.s3_valid = false;
        me.$swal(
          "Advertencia",
          "No ha completado la información solicitada.",
          "warning"
        );
      }
    },

    addDocenteExp(a, case2 = false) {
      let me = this;
      if (case2) {
        me.$data[a].push({
          idDocente: me.idDocente,
          nombre_institucion: null,
          puesto: null,
          periodo: null,
        });
      } else {
        me.$data[a].push({
          idDocente: me.idDocente,
          nombre_curso: null,
          nombre_institucion: null,
          periodo: null,
          documento: null,
        });
      }
    },

    deleteDocenteExp(a) {
      if (this.$data[a].length > 1) this.$data[a].pop();
    },

    saved(idDocente) {
      this.expTeacher.idDocente = idDocente;
      this.e1 = 2;
    },
  },
};
</script>

<style scoped>
.signature-pad {
  border-style: solid;
  border-width: 1px;
}
</style>
