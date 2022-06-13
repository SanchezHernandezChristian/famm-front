<template>
  <v-container fluid pt-6>
    <v-row justify="center" align="center">
      <h2 style="color: #2b4c7b">Agregar curso</h2>
    </v-row>
    <v-row justify="center" align="center" class="pb-3 pt-6 mb-2">
      <v-layout row justify-center>
        <v-flex align-self-center xs2>
          <div class="text-center"><label>Nombre</label></div></v-flex
        >
        <v-flex align-self-center xs1>
          <div class="text-center"><label>Director</label></div>
        </v-flex>
        <v-flex align-self-center xs1>
          <div class="text-center"><label>Teléfono</label></div>
        </v-flex>
        <v-flex align-self-center xs6>
          <div class="text-center"><label>Dirección</label></div>
        </v-flex>
        <v-flex align-self-center xs2>
          <div class="text-center"><label>Tipo</label></div>
        </v-flex>
      </v-layout>
    </v-row>
    <v-row justify="center" align="center" class="pt-3">
      <v-form ref="form">
        <v-layout row justify-center>
          <v-flex align-self-center xs2>
            <v-text-field dense outlined class="bordeRedondoElement" :rules="rules" v-model="nombreCentro"></v-text-field>
          </v-flex>
          <v-flex align-self-center xs1>
            <v-text-field dense outlined class="bordeRedondoElement" :rules="rules" v-model="directorCentro"></v-text-field>
          </v-flex>
          <v-flex align-self-center xs1>
            <v-text-field dense outlined class="bordeRedondoElement" :rules="rules" v-model="telefonoCentro"></v-text-field>
          </v-flex>
          <v-flex align-self-center xs6>
            <v-text-field dense outlined class="bordeRedondoElement" :rules="rules" v-model="direccionCentro"></v-text-field>
          </v-flex>
          <v-flex align-self-center xs2>
            <v-text-field dense outlined class="bordeRedondoElement" :rules="rules" v-model="tipoCentro"></v-text-field>
          </v-flex>
        </v-layout>
      </v-form>
    </v-row>
    <v-row justify="center" align="center" style="height: 30px">
      <v-layout row justify-start>
        <v-flex align-self-center xs10> </v-flex>
        <v-flex align-self-start xs1>
          <v-btn outlined color="gray" @click="clean">Borrar</v-btn>
        </v-flex>
        <v-flex align-self-center xs1>
          <template>
            <div class="text-center">
              <v-dialog v-model="dialog" width="500">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn outlined color="gray" v-bind="attrs" v-on="on"> Agregar </v-btn>
                </template>
                <v-card>
                  <v-card-title class="text-h5 white lighten-2"> ¡ATENCIÓN! </v-card-title>
                  <v-card-text> SI TODOS LOS DATOS SON CORRECTOS DA CLICK EN CONTINUAR </v-card-text>
                  <v-card-actions>
                    <v-btn outlined color="gray" @click="dialog = false"> Cancelar </v-btn>
                    <v-btn outlined style="color: #ffffff; background-color: #2b4c7b" @click="createGrade">Continuar</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </template>
        </v-flex>
      </v-layout>
    </v-row>
    <v-row justify="center" align="start" style="height: 80px">
      <div>
        <v-layout row justify-center>
          <v-flex align-self-baseline xs2></v-flex>
          <v-flex align-self-center xs5></v-flex>
          <v-flex align-self-center xs5>
            <v-alert type="success" v-if="mostrarAlert">{{ datarespuesta.mensaje }}</v-alert>
          </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row>
      <h2 style="color: #2b4c7b">Centros registrados</h2>
      <v-data-table :headers="headers" :items="centros" item-key="nombre_curso" class="elevation-1">
        <template v-slot:[`item.director`]="{ item }">
          <v-chip color="yellow">
            {{ item.director }}
          </v-chip>
        </template>
        <template v-slot:[`item.telefono`]="{ item }">
          <v-chip color="blue">
            {{ item.telefono }}
          </v-chip>
        </template>
        <template v-slot:[`item.direccion`]="{ item }">
          <v-chip color="orange">
            {{ item.direccion }}
          </v-chip>
        </template>
        <template v-slot:top>
          <v-toolbar flat>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialogEdit" width="700">
              <v-card class="p-5">
                <v-row justify="center" align="center">
                  <br />
                  <h2 style="color: #2b4c7b">Editar Centro de Capacitación</h2>
                </v-row>
                <v-row justify="center" align="center" style="height: 70px">
                  <div>
                    <v-layout row justify-center>
                      <br />
                      <p></p>
                      <v-flex align-self-baseline xs4><label> Nombre</label></v-flex>
                      <v-flex align-self-baseline xs7>
                        <v-text-field dense outlined class="bordeRedondoElement" v-model="editedItem.nombre"></v-text-field>
                      </v-flex>
                      <v-flex align-self-baseline xs1></v-flex>
                    </v-layout>
                  </div>
                </v-row>
                <v-row justify="center" align="center" style="height: 70px">
                  <div>
                    <v-layout row justify-center>
                      <br />
                      <p></p>
                      <v-flex align-self-baseline xs4><label>Director</label></v-flex>
                      <v-flex align-self-center xs7>
                        <v-text-field dense outlined class="bordeRedondoElement" v-model="editedItem.director"></v-text-field>
                      </v-flex>
                      <v-flex align-self-center xs1> </v-flex>
                    </v-layout>
                  </div>
                </v-row>
                <v-row justify="center" align="center" style="height: 70px">
                  <div>
                    <v-layout row justify-center>
                      <br />
                      <p></p>
                      <v-flex align-self-baseline xs4><label>Teléfono</label></v-flex>
                      <v-flex align-self-center xs7>
                        <v-text-field dense outlined class="bordeRedondoElement" v-model="editedItem.telefono"></v-text-field>
                      </v-flex>
                      <v-flex align-self-center xs1> </v-flex>
                    </v-layout>
                  </div>
                </v-row>
                <v-row justify="center" align="center" style="height: 70px">
                  <div>
                    <v-layout row justify-center>
                      <br />
                      <p></p>
                      <v-flex align-self-baseline xs4><label>Dirección</label></v-flex>
                      <v-flex align-self-center xs7>
                        <v-text-field dense outlined class="bordeRedondoElement" v-model="editedItem.direccion"></v-text-field>
                      </v-flex>
                      <v-flex align-self-center xs1> </v-flex>
                    </v-layout>
                  </div>
                </v-row>
                <v-row justify="center" align="center">
                  <div>
                    <v-layout row justify-center>
                      <v-flex align-self-baseline xs4><label>Tipo</label></v-flex>
                      <v-flex align-self-center xs7>
                        <v-textarea outlined name="input-7-4" label="" v-model="editedItem.tipo"></v-textarea>
                      </v-flex>
                      <v-flex align-self-center xs1> </v-flex>
                    </v-layout>
                  </div>
                </v-row>
                <v-card-actions>
                  <v-btn
                    outlined
                    color="gray"
                    class="bordeRedondoElement"
                    @click="editCurso(editedItem.nombre, editedItem.director, editedItem.telefono, editedItem.direccion, editedItem.tipo)"
                    >Guardar cambios</v-btn
                  >
                  <v-btn outlined color="gray" class="bordeRedondoElement" @click="dialogEdit = false"> Cancelar </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" width="500">
              <v-card>
                <v-card-title class="text-h5 white lighten-2"> Eliminar centro </v-card-title>
                <v-card-text> ¿Estás seguro que quieres eliminar el centro seleccionado? Recuerda que no podrás recuperar la información. </v-card-text>
                <v-card-actions>
                  <v-btn outlined color="gray" class="bordeRedondoElement" @click="dialogDelete = false"> Cancelar </v-btn>
                  <v-btn outlined style="color: #ffffff; background-color: #2b4c7b" class="bordeRedondoElement" @click="deleteCurso(editedItem.id)"
                    >Continuar</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        ><template v-slot:[`item.actions`]="{ item }">
          <v-btn text @click="editItem(item)"><v-icon small>mdi-pencil</v-icon><small>Editar</small></v-btn>
          <v-btn text @click="deleteItem(item)"> <v-icon small>mdi-window-close</v-icon><small>Eliminar</small></v-btn>
        </template></v-data-table
      >
    </v-row>
    <v-row justify="center" align="start" style="height: 80px">
      <div>
        <v-layout row justify-center>
          <v-flex align-self-baseline xs2></v-flex>
          <v-flex align-self-center xs5></v-flex>
          <v-flex align-self-center xs5>
            <v-alert type="success" v-if="mostrarAlertDelete">{{ datarespuestaDelete.mensaje }}</v-alert>
          </v-flex>
        </v-layout>
      </div>
    </v-row>
    <v-row justify="center" align="start" style="height: 80px">
      <div>
        <v-layout row justify-center>
          <v-flex align-self-baseline xs2></v-flex>
          <v-flex align-self-center xs5></v-flex>
          <v-flex align-self-center xs5>
            <v-alert type="success" v-if="mostrarAlertEdit">{{ datarespuestaEdit.mensaje }}</v-alert>
          </v-flex>
        </v-layout>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import AuthService from '@/services/AuthService.js';

export default {
  name: 'CentrosCapacitacion',

  data: () => ({
    valid: true,
    rules: [(v) => !!v || 'Required'],
    nombreCentro: '',
    directorCentro: '',
    telefonoCentro: '',
    direccionCentro: '',
    tipoCentro: '',
    select: {
      idEspecialidad: 0,
      nombre_especialidad: '',
      clave_especialidad: '',
      campo_formacion: '',
      subsector: '',
      sector: '',
    }, //<-- el seleccionado estará aquí
    items: Array, // <-- La lista de especliades
    mostrarAlert: false,
    mostrarAlertEdit: false,
    mostrarAlertDelete: false,
    datarespuesta: [],
    datarespuestaEdit: [],
    datarespuestaDelete: [],
    dialog: false,
    dialogDelete: false,
    dialogEdit: false,
    //Elementos para la tabla
    headers: [
      {
        text: 'Nombre del centro de capacitación',
        align: 'start',
        sortable: false,
        value: 'nombre',
      },
      { text: 'Director', value: 'director' },
      { text: 'Teléfono', value: 'telefono' },
      { text: 'Dirección', value: 'direccion' },
      { text: 'Tipo', value: 'tipo' },
      { text: ' ', value: 'asignar' },
      { text: ' ', value: 'actions' },
    ],
    centros: [],
    editedItem: '',
    selected: [],
  }),

  async mounted() {
    try {
      const listespecialidades = await AuthService.getEspecialidades();
      this.items = listespecialidades.especialidades;
      const listCenters = await AuthService.getAllCenters();
      this.centros = listCenters.data;
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
          descripcion_curso: this.descripcionCurso,
        };
        const response = await AuthService.addGrade(data);
        this.datarespuesta = response;
        if (response.serverCode == 200) {
          this.dialog = false;
          this.mostrarAlert = true;
        } else {
          this.$swal('Error', response.message, 'error');
        }
      } catch (error) {
        this.$swal('Error', 'Capture los datos requeridos', 'error');
        this.dialog = false;
        console.log(error);
      }
    },

    async clean() {
      try {
        this.$refs.form.reset();
        this.mostrarAlert = false;
      } catch (error) {
        console.log(error);
      }
    },

    async editCurso(nombreCurso1, duracionHoras, claveCurso, especialidadCurso, descripcionCurso) {
      try {
        let data = {
          nombre: nombreCurso1,
          director: duracionHoras,
          telefono: claveCurso,
          direccion: especialidadCurso,
          tipo: descripcionCurso,
        };
        console.log(data);
        const responseUpdate = await AuthService.updateCenter(data);
        this.datarespuestaEdit = responseUpdate;
        if (responseUpdate.serverCode == 200) {
          this.dialogEdit = false;
          this.mostrarAlertEdit = true;
        }
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },

    async deleteCurso(idCurso) {
      try {
        const response = await AuthService.deleteCenter(idCurso);
        this.datarespuestaDelete = response;
        if (response.serverCode == 200) {
          this.dialogDelete = false;
          this.mostrarAlertDelete = true;
        }
      } catch (error) {
        console.log(error);
      }
    },

    async asignarCurso() {
      try {
        this.$router.push('asignar-curso');
      } catch (error) {
        console.log(error);
      }
    },

    editItem(item) {
      this.editedIndex = this.centros.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogEdit = true;
    },
    deleteItem(item) {
      this.editedIndex = this.centros.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
  },
};
</script>
