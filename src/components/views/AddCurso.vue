<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <br />
      <p></p>
      <h2 style="color: #2b4c7b">Nuevo curso</h2>
    </v-row>
    <v-row justify="center" align="center" style="height: 70px">
      <div>
        <v-layout row justify-center>
          <br />
          <p></p>
          <v-flex align-self-baseline xs2
            ><label>Nombre del curso</label></v-flex
          >
          <v-flex align-self-baseline xs5>
            <v-text-field
              dense
              outlined
              class="bordeRedondoElement"
              :rules="rules"
              v-model="nombreCurso"
            ></v-text-field>
          </v-flex>
          <v-flex align-self-center xs5>
              <!-- <label>{{ nombreCurso }}</label> -->
          </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center" style="height: 70px">
      <div>
        <v-layout row justify-center>
          <br />
          <p></p>
          <v-flex align-self-baseline xs2
            ><label>Duración de horas</label></v-flex
          >
          <v-flex align-self-center xs5>
            <v-text-field
              dense
              outlined
              class="bordeRedondoElement"
              :rules="rules"
              v-model="duracion"
            ></v-text-field>
          </v-flex>
          <v-flex align-self-center xs5>
            <!-- <label>{{ duracion }}</label> -->
          </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center" style="height: 70px">
      <div>
        <v-layout row justify-center>
          <br />
          <p></p>
          <v-flex align-self-baseline xs2><label>Clave de curso</label></v-flex>
          <v-flex align-self-center xs5>
            <v-text-field
              dense
              outlined
              class="bordeRedondoElement"
              :rules="rules"
              v-model="claveCurso"
            ></v-text-field>
          </v-flex>
          <v-flex align-self-center xs5>
            <!-- <label>{{claveCurso}}</label> -->
          </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center" style="height: 80px">
      <div>
        <v-layout row justify-center>
          <v-flex align-self-baseline xs2><label>Especialidad</label></v-flex>
          <v-flex align-self-center xs5>
            <!--<v-combobox
              dense
              outlined
              class="bordeRedondoElement"
              v-model="select"
              :item="items.especialidades"
              >{{ item.nombre_especialidad }}</v-combobox
            >-->
            <!--<v-combobox dense outlined class="bordeRedondoElement"></v-combobox>-->
            <!--<select outlined class="bordeRedondoElement">
              <option value="0" disabled>Seleccione</option>
              <option
                v-for="item in items"
                :key="item.idEspecialidad"
                :value="item.idEspecialidad"
                v-text="item.nombre_especialidad"
              ></option>
            </select>-->
            <v-select
              v-model="select"
              :items="items"
              item-text="nombre_especialidad"
              item-value="idEspecialidad"
              return-object
              outlined
              style="height: 80px"
              class="bordeRedondoElement"
              label="Seleccione una especialidad"
            ></v-select>
          </v-flex>
          <v-flex align-self-center xs5>
            <!--<label>{{select.idEspecialidad}}</label>-->
          </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center">
      <div>
        <v-layout row justify-center>
          <v-flex align-self-baseline xs2><label>Descripción</label></v-flex>
          <v-flex align-self-center xs5>
            <v-textarea
              outlined
              name="input-7-4"
              label=""
              value=""
              v-model="descripcionCurso"
            ></v-textarea>
          </v-flex>
          <v-flex align-self-center xs5> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="center" style="height: 70px">
      <div>
        <v-layout row justify-center>
          <v-flex align-self-baseline xs2><label></label></v-flex>
          <v-flex align-self-center xs5>
            <label
              >*Revisa que la información esté correcta y da click en el botón
              de "AGREGAR"</label
            >
          </v-flex>
          <v-flex align-self-center xs5> </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row> <br /> </v-row>
    <v-row justify="center" align="start" style="height: 80px">
      <div>
        <v-layout row justify-center>
          <v-flex align-self-baseline xs2></v-flex>
          <v-flex align-self-center xs5>
            <v-btn
              outlined
              color="gray"
              class="bordeRedondoElement"
              @click="createGrade"
              >Agregar</v-btn
            >
          </v-flex>
          <v-flex align-self-center xs5>
            <v-alert type="success" v-if="mostrarAlert">{{ datarespuesta.mensaje }}</v-alert>            
          </v-flex>
        </v-layout>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import AuthService from "@/services/AuthService.js";

export default {
  name: "AddCurso",

  data: () => ({
    valid: true,
    rules: [(v) => !!v || "Required"],
    nombreCurso: "",
    duracion: "",
    claveCurso: "",
    descripcionCurso: "",
    select: {
      idEspecialidad: 0,
      nombre_especialidad: "",
      clave_especialidad: "",
      campo_formacion: "",
      subsector: "",
      sector: "",
    }, //<-- el seleccionado estará aquí
    items: [], // <-- La lista de especliades
    mostrarAlert: false,
    datarespuesta: [],
  }),

  async mounted() {
    try {
      const listespecialidades = await AuthService.getEspecialidades();
      this.items = listespecialidades.especialidades;
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    async createGrade() {
      try {
        let data = {
          nombre_curso: this.nombreCurso,
          duracion_horas: parseInt(this.duracion, 10),
          //duracion_horas: this.duracion,
          clave_curso: this.claveCurso,
          //idEspecialidad: String(this.select.idEspecialidad),
          idEspecialidad: this.select.idEspecialidad,
          descripcion_curso: this.descripcion,
        };
        console.log(data);
        const response = await AuthService.addGrade(data);
        this.datarespuesta = response;
        if (response.serverCode == 200) {
          this.mostrarAlert = true;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
