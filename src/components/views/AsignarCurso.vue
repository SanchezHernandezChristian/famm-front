<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <br />
      <p></p>
      <h2 style="color: #2b4c7b">Asignar curso</h2>
    </v-row>
    <v-form ref="form_asigna_curso">
      <v-row justify="center" align="center" style="height: 70px">
        <div>
          <v-layout row justify-center>
            <br />
            <p></p>
            <v-flex align-self-baseline xs2><label>Nombre del curso</label></v-flex>
            <v-flex align-self-baseline xs3>
              <v-autocomplete
                v-model="selectCurso"
                :items="items_cursos"
                item-text="nombre_curso"
                item-value="idCurso"
                :rules="rules"
                required
                return-object
                dense
                outlined
                class="bordeRedondoElement"
                placeholder="Busque o seleccione un curso"
              ></v-autocomplete>
            </v-flex>
            <v-flex align-self-start xs2> </v-flex>
            <v-flex align-self-center xs5> </v-flex>
          </v-layout>
        </div>
      </v-row>
      <v-row justify="center" align="center" style="height: 80px">
        <div>
          <v-layout row justify-center>
            <v-flex align-self-baseline xs2><label>Asignar a</label></v-flex>
            <v-flex align-self-center xs3>
              <v-autocomplete
                v-model="selectUnidad"
                :items="items_unidad"
                item-text="nombre"
                item-value="id"
                :rules="rules"
                required
                return-object
                dense
                outlined
                class="bordeRedondoElement"
                placeholder="Busque o seleccione una unidad de capacitación"
                :hint="hintunidad"
                persistent-hint
              ></v-autocomplete>
            </v-flex>
            <v-flex align-self-center xs7> </v-flex>
          </v-layout>
        </div>
      </v-row>
    </v-form>
    <v-row class="pt-6" justify="center" align="start" style="height: 80px">
      <div>
        <v-layout row justify-center>
          <v-flex align-self-baseline xs2></v-flex>
          <v-flex align-self-center xs2>
            <v-btn outlined color="gray" class="bordeRedondoElement" @click="asignaCurso()">ASIGNAR</v-btn>
          </v-flex>
          <v-flex align-self-center xs2>
            <v-btn outlined color="gray" class="bordeRedondoElement" @click="cancel">CANCELAR</v-btn>
          </v-flex>
          <v-flex align-self-center xs6></v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row>
      <div style="height: 450px"></div>
    </v-row>
  </v-container>
</template>
<script>
import AuthService from '@/services/AuthService.js';

export default {
  data() {
    return { rules: [(v) => !!v || 'Campo requerido'], items_cursos: [], selectCurso: '', items_unidad: [], selectUnidad: '' };
  },
  async mounted() {
    let me = this;
    if (me.$store.getters.isLoggedIn) {
      try {
        const response1 = await AuthService.getCursos();
        const response2 = await AuthService.getAllCenters();
        const response3 = await AuthService.getAllAssignGradeByCenter();
        console.log(response3);
        me.items_cursos = response1.cursos;
        me.items_unidad = response2.data;
      } catch (error) {
        console.log('Error', error.response);
      }
    }
  },
  computed: {
    hintunidad() {
      return this.selectUnidad.director ? this.selectUnidad.director : '';
    },
  },
  methods: {
    async asignaCurso() {
      let me = this;
      if (me.$refs.form_asigna_curso.validate()) {
        try {
          let data = {
            idCurso: this.selectCurso.idCurso,
            idUnidad: this.selectUnidad.id,
          };
          const response = await AuthService.assignGrade(data);
          this.datarespuesta = response;
          if (response.serverCode == 200) {
            this.$swal('Asignado', 'Curso asignado correctamente.', 'success');
            //this.reloadTable();
          } else {
            this.$swal('Error', response.message, 'error');
          }
        } catch (error) {
          if (error.response && error.response.data && error.response.data.errors) {
            console.log(error.response.data.errors);
            let error_msg = error.response.data.errors[Object.keys(error.response.data.errors)[0]][0];
            this.$swal('Error', error_msg, 'error');
          } else {
            this.$swal('Error', 'Ha ocurrido un error en el sistema.', 'error');
          }
        }
      }
    },
    async cancel() {
      this.$router.push('/dashboard-admin');
    },
  },
};
</script>
