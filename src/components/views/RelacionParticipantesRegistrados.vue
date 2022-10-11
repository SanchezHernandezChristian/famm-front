<template>
  <v-container fluid class="max-height" pt-6>
    <v-row justify="center" align="center">
      <h2>RELACIÓN DE PARTICIPANTES FORMATO RUDC-05</h2>
    </v-row>
    <v-row justify="center" align="center" style="height: 70px">
      <v-layout row justify-start>
        <v-flex align-self-center xs3><h3 style="color: #2b4c7b">Relaciones de participante registradas</h3> </v-flex>
        <v-flex align-self-start xs1>
          <!-- <v-btn color="orange" @click="newForm">NUEVA RELACIÓN</v-btn> -->
        </v-flex>
        <v-flex align-self-center xs8> </v-flex>
      </v-layout>
    </v-row>
    <v-row>
      <v-card>
        <v-card-title>
          <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar" single-line hide-details></v-text-field>
        </v-card-title>
        <v-data-table :headers="headers" :items="items_cursos" item-key="nombre_curso" class="elevation-1" :search="search" multi-sort>
          <!-- <template v-slot:[`item.nombres`]="{ item }">
            <v-chip color="yellow">
              {{ item.nombres }}
            </v-chip>
          </template>
          <template v-slot:[`item.apellido_paterno`]="{ item }">
            <v-chip color="blue">
              {{ item.apellido_paterno }}
            </v-chip>
          </template> -->
          <template v-slot:[`item.duracion_horas`]="{ item }">
            <v-chip color="orange">
              {{ item.duracion_horas }}
            </v-chip>
          </template>
          <template v-slot:top>
            <v-toolbar flat>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              <v-dialog v-model="dialogEdit" width="1200">
                <v-card class="p-5">
                  <v-row justify="center" align="center">
                    <br />
                    <h2 style="color: #2b4c7b">Ver/Editar Relación de Participantes</h2>
                  </v-row>
                  <v-row justify="center" align="center">
                    <v-layout row justify-center>
                      <v-flex align-self-center xs2> </v-flex>
                      <v-flex align-self-center xs3><label>Relación de participantes</label></v-flex>
                      <v-flex align-self-center xs3>
                        <v-col> <v-text-field outlined class="bordeRedondoElement" v-model="editedItem.detalles" disabled></v-text-field></v-col>
                      </v-flex>
                      <v-flex align-self-center xs3> </v-flex>
                    </v-layout>
                  </v-row>
                  <v-row justify="center" align="center">
                    <v-layout row justify-center>
                      <v-flex align-self-center xs2> </v-flex>
                      <v-flex align-self-center xs3><label>Seleccione un capacitando</label></v-flex>
                      <v-flex align-self-center xs3>
                        <v-col>
                          <v-select
                            v-model="selectStudent"
                            :items="items_full"
                            item-text="fullnameStudent"
                            item-value="id"
                            :rules="rules"
                            required
                            return-object
                            dense
                            outlined
                            class="bordeRedondoElement"
                          ></v-select>
                        </v-col>
                      </v-flex>
                      <v-flex align-self-center xs3> </v-flex>
                    </v-layout>
                  </v-row>
                  <v-row justify="center" align="center" style="height: 65px">
                    <v-layout row justify-center>
                      <v-flex align-self-center xs4> </v-flex>
                      <v-flex align-self-center xs2></v-flex>
                      <v-flex align-self-center xs2>
                        <v-btn @click="addAlumno(editedItem)"> Añadir</v-btn>
                      </v-flex>
                      <v-flex align-self-center xs2> </v-flex>
                      <v-flex align-self-center xs2> </v-flex>
                    </v-layout>
                  </v-row>
                  <v-row justify="center" align="center" style="height: 220px">
                    <v-layout row justify-start>
                      <v-flex align-self-center xs2> </v-flex>
                      <v-flex align-self-start xs8>
                        <v-data-table :headers="headers_alumno" :items="items_relacionP" item-key="nombres" class="elevation-1">
                          <template v-slot:top>
                            <v-toolbar flat>
                              <v-dialog v-model="dialogDeleteAlumno" width="500">
                                <v-card>
                                  <v-card-title class="text-h5 white lighten-2"> Eliminar alumno </v-card-title>
                                  <v-card-text>
                                    ¿Estás seguro que quieres eliminar el alumno seleccionado? Recuerda que no podrás recuperar la información.
                                  </v-card-text>
                                  <v-card-actions>
                                    <v-btn outlined color="gray" class="bordeRedondoElement" @click="dialogDeleteAlumno = false"> Cancelar </v-btn>
                                    <v-btn outlined class="bordeRedondoElement" @click="deleteAlumno()">Continuar</v-btn>
                                  </v-card-actions>
                                </v-card>
                              </v-dialog>
                            </v-toolbar>
                          </template>
                          <template v-slot:[`item.actions`]="{ item }">
                            <v-btn text @click="deleteItem(item)"> <v-icon small>mdi-window-close</v-icon><small>Eliminar</small></v-btn>
                          </template></v-data-table
                        ></v-flex
                      >
                      <v-flex align-self-center xs2> </v-flex>
                    </v-layout>
                  </v-row>
                  <v-card-actions>
                    <v-btn outlined color="gray" class="bordeRedondoElement" @click="guardar">Guardar cambios</v-btn>
                    <v-btn outlined color="gray" class="bordeRedondoElement" @click="dialogEdit = false"> Cancelar </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="dialogDelete" width="500">
                <v-card>
                  <v-card-title class="text-h5 white lighten-2"> Eliminar relación de participantes </v-card-title>
                  <v-card-text>
                    ¿Estás seguro que quieres eliminar la relación de participantes seleccionada? Recuerda que no podrás recuperar la información.
                  </v-card-text>
                  <v-card-actions>
                    <v-btn outlined color="gray" class="bordeRedondoElement" @click="dialogDelete = false"> Cancelar </v-btn>
                    <v-btn outlined style="color: #ffffff; background-color: #2b4c7b" class="bordeRedondoElement" @click="deleteRelacion()">Continuar</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-btn text @click="editItem(item)"
              ><v-icon small>mdi-pencil</v-icon><small>Capturar</small><strong>/</strong><small>Editar</small>
              <!-- <v-icon small>mdi-eye-outline</v-icon><small>Ver</small> -->
            </v-btn>
            <v-btn text @click="deleteItem(item)"> <v-icon small>mdi-window-close</v-icon><small>Eliminar</small></v-btn>
          </template></v-data-table
        >
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import AuthService from '@/services/AuthService.js';

export default {
  name: 'RelacionParticpantesRegistrados',

  data: () => ({
    valid: false,
    rules: [(v) => !!v || 'Campo requerido'],
    datarespuesta: [],
    datarespuestaEdit: [],
    datarespuestaDelete: [],
    dialog: false,
    dialogDelete: false,
    dialogDeleteAlumno: false,
    dialogEdit: false,
    dialogCaptura: false,
    //Elementos para la tabla
    headers: [
      {
        text: 'Nombre del curso',
        align: 'start',
        sortable: false,
        value: 'nombre_curso',
      },
      { text: 'Clave del curso', value: 'clave_curso' },
      { text: 'Horas', value: 'duracion_horas' },
      // { text: "Especialidad", value: "item_especialidad.nombre_especialidad" },
      { text: ' ', value: 'actions' },
    ],
    headers_alumno: [
      {
        text: 'Nombre del alumno',
        align: 'start',
        sortable: false,
        value: 'nombres',
      },
      { text: 'Apellido P.', value: 'apellido_paterno' },
      { text: 'Apellido M.', value: 'apellido_materno' },
      { text: 'Edad', value: 'edad' },
      { text: 'Sexo', value: 'sexo' },
      { text: 'Teléfono', value: 'telefono' },
      // { text: "Especialidad", value: "item_especialidad.nombre_especialidad" },
      { text: ' ', value: 'actions' },
    ],
    participantes: [],
    editedItem: '',
    deleteId: 0,
    editedIndex: -1,
    editId: 0,
    search: '',
    cursos: [],
    items_students: [],
    user: {
      idUnidad: null,
    },
    items_cursos: [],
    relacionCapturada: false,
    items_factibilidades: [],
    items_relacionP: [],
    selectStudent: {
      id: null,
      nombres: '',
      primer_apellido: null,
      segundo_apellido: null,
      email: '',
      user_name: '',
      idCentro_capacitacion: null,
      idRol: null,
      nombre_rol: '',
    },
    item_especialidad: [],
    items_full: [],
    items_deleteFull: [],
  }),

  async mounted() {
    try {
      const response2 = await AuthService.getCursoFactibilidadIdCenter();
      this.items_cursos = response2.cursos;
      console.log('item_cursos', this.item_cursos);
      const response3 = await AuthService.fetchUsers();
      this.items_students = response3.data.filter((item) => {
        if (item.idRol == 1) return item;
      });
      this.items_full = this.items_students.map((item) => {
        item.fullnameStudent = `${item.nombres} ${item.primer_apellido} ${item.segundo_apellido}`;
        return item;
      });
      console.log('items_full', this.items_full);
      // const responseProfile = await AuthService.getProfile();
      // this.user.idUnidad = responseProfile.idCentro_capacitacion;
      // const response3 = await AuthService.fetchUsers();
      // this.items_students = response3.data.filter((item) => {
      //   if (item.idRol == 1) return item;
      // });
      // console.log("item_students", this.items_students);
      // const responseFact = await AuthService.getAllFactibilidades();
      // this.items_factibilidades = responseFact.data;
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    async reloadTable() {
      const response = await AuthService.getAllParticipantes();
      /*this.items_relacionP = response.data.filter((item) => {
        if (item.idFactibilidad == idFact) return item;
      });*/
      console.log('items_relacionparticipantes ', response);
    },

    async newForm() {
      try {
        //this.$router.push("form-relacion-participantes");
      } catch (error) {
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

    async deleteRelacion(delete_data) {
      try {
        let idFact = delete_data.idFactibilidad;
        const responseAll = await AuthService.getAllParticipantes();
        this.items_deleteFull = responseAll.data.filter((item) => {
          if (item.idFactibilidad == idFact) return item;
        });
        console.log('elementos a borrar: ', this.items_deleteFull);
        for (var i = 0; i < this.items_deleteFull.length; i++) {
          const response = await AuthService.deleteRelacionParticipante(this.items_deleteFull[i].idParticipante);
          this.datarespuestaDelete = response;
        }
        this.reloadTable();
      } catch (error) {
        console.log(error);
        console.log(error.response.data.errors);
        let error_msg = error.response.data.errors[Object.keys(error.response.data.errors)[0]][0];
        this.$swal('Error', error_msg, 'error');
      }
    },

    editItem(item) {
      this.editedIndex = this.items_cursos.indexOf(item);
      console.log('editedIndex ', this.editedIndex);
      this.editedItem = Object.assign({}, item);
      console.log('editedItem ', this.editedItem);
      this.dialogEdit = true;
      console.log('item edit ', item);
      this.editId = this.editedItem.idFactibilidad;
      console.log('editedItem.idFactibilidad ', this.editId);
      this.rellenar(this.editedItem);
    },
    deleteItem(item) {
      this.editedIndex = this.items_cursos.indexOf(item);
      console.log('deleteIndex ', this.editedIndex);
      this.editedItem = Object.assign({}, item);
      console.log('deleteItem ', this.editedItem);
      this.deleteId = this.editedItem.idFactibilidad;
      console.log('editedItem.idFactibilidad ', this.deleteId);
      this.dialogDelete = true;
    },

    async rellenar(data_p) {
      let idFact = data_p.idFactibilidad;
      const response = await AuthService.getAllParticipantes();
      this.items_relacionP = response.data.filter((item) => {
        if (item.idFactibilidad == idFact) return item;
      });
      console.log('items_relacionparticipantes ', this.items_relacionP);
      // this.items_relacionP = response.data.map((item) => {
      //   item.fullname = `${item.nombre} ${item.apellido_paterno} ${item.apellido_materno}`;
      //   return item;
      // });
    },

    async deleteAlumno() {},

    async addAlumno(data) {
      let alumno = {
        nombres: this.selectStudent.nombres,
        apellido_paterno: this.selectStudent.primer_apellido,
        apellido_materno: this.selectStudent.segundo_apellido,
        sexo: 'N',
        telefono: null,
        celular: null,
        idFactibilidad: data.idFactibilidad,
        numero_identificacion: this.selectStudent.id,
        edad: null,
      };
      console.log('data_alumno ', alumno);
      const responseAdd = await AuthService.addRelacionParticipante(alumno);
      let statusadd = responseAdd.data;
      console.log(statusadd);
    },

    async guardar() {
      this.$swal('Guardado', 'Relación del participantes guardada correctamente.', 'success');
    },
  },
};
</script>
