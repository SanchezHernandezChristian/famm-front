<template>
  <v-container fluid pt-6>
    <v-row justify="center" align="center">
      <h2 style="color: #2b4c7b">Cédulas de Pre-autorización registradas</h2>
    </v-row>
    <v-row justify="center" align="center" style="height: 70px">
      <v-layout row justify-start>
        <v-flex align-self-center xs1>
          <v-btn
            outlined
            style="background-color: #f46722; color: #ffffff"
            @click="newForm"
            >Crear nueva cédula</v-btn
          >
        </v-flex>
        <v-flex align-self-center xs10> </v-flex>
        <v-flex align-self-start xs1> </v-flex>
      </v-layout>
    </v-row>
    <v-row>
      <v-card>
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Buscar"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="cedulas"
          item-key="id"
          class="elevation-1"
          :search="search"
          multi-sort
        >
          <template v-slot:[`item.duracion_horas`]="{ item }">
            <v-chip color="orange">
              {{ item.duracion_horas }}
            </v-chip>
          </template>

          <template v-slot:[`item.esValido`]="{ item }">
            <v-chip v-if="item.esValido" color="green"> VALIDADO </v-chip>
            <v-chip v-else color="yellow"> EN ESPERA </v-chip>
          </template>
          <template v-slot:[`item.esValido_DA`]="{ item }">
            <v-chip v-if="item.esValido_DA" color="green"> VALIDADO </v-chip>
            <v-chip v-else color="yellow"> EN ESPERA </v-chip>
          </template>
          <template v-slot:[`item.esValido_DT`]="{ item }">
            <v-chip v-if="item.esValido_DT" color="green"> VALIDADO </v-chip>
            <v-chip v-else color="yellow"> EN ESPERA </v-chip>
          </template>

          <template v-slot:[`item.clave_curso`]="{ item }">
            <v-chip color="blue">
              {{ item.clave_curso }}
            </v-chip>
          </template>
          <template v-slot:top>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialogVer" width="1200">
              <v-card class="p-5">
                <v-row justify="center" align="center">
                  <br />
                  <h2 style="color: #2b4c7b">
                    Detalles cédula de pre-autorización
                  </h2>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>CURSO SOLICITADO</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          v-model="editedItem.nombre_curso"
                          disabled
                        ></v-text-field>
                      </v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2><label>CLAVE</label></v-flex>
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          v-model="editedItem.clave_curso"
                          disabled
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label
                        >NOMBRE DEL SOLICITANTE O REPRESENTANTE DEL GRUPO</label
                      ></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          v-model="editedItem.nombreRepresentante"
                          disabled
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="start">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2>
                      <label>QUIEN SOLICITA</label>
                    </v-flex>
                    <v-flex align-self-center xs4>
                      <v-radio-group
                        column
                        :rules="rules"
                        v-model="editedItem.solicitaCurso"
                        disabled
                      >
                        <v-radio label="EMPRESA" value="EMPRESA"></v-radio>
                        <v-radio
                          label="ORGANIZACIÓN"
                          value="ORGANIZACIÓN"
                        ></v-radio>
                        <v-radio
                          label="GRUPO PRODUCTIVO"
                          value="GRUPO PRODUCTIVO"
                        ></v-radio>
                        <v-radio
                          label="DEPENDENCIA"
                          value="DEPENDENCIA"
                        ></v-radio>
                      </v-radio-group>
                    </v-flex>
                    <v-flex align-self-center xs2> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2><label>CUAL</label></v-flex>
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          v-model="editedItem.nombreSolicitaCurso"
                          disabled
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2><label>REGIÓN</label></v-flex>
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          v-model="editedItem.region"
                          disabled
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>DISTRITO</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          v-model="editedItem.distrito"
                          disabled
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>MUNICIPIO</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-select
                          v-model="editedItem.c_Municipio"
                          :items="items_municipios"
                          item-text="Descripcion"
                          item-value="c_Municipio"
                          :rules="rules"
                          required
                          return-object
                          dense
                          outlined
                          class="bordeRedondoElement"
                          disabled
                        ></v-select>
                      </v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>LOCALIDAD</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          v-model="editedItem.localidad"
                          disabled
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>SEDE DEL CURSO</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          v-model="editedItem.sedeCurso"
                          disabled
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>DOCENTE</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-select
                          v-model="docenteCedula.idDocente"
                          :items="items_docentes"
                          item-text="fullname"
                          item-value="idDocente"
                          :rules="rules"
                          required
                          return-object
                          dense
                          outlined
                          class="bordeRedondoElement"
                          disabled
                        ></v-select>
                      </v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2><label>RFC</label></v-flex>
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          v-model="docenteCedula.rfc"
                          disabled
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2><label>CURP</label></v-flex>
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          v-model="docenteCedula.curp"
                          disabled
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>PROFESIÓN</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          v-model="docenteCedula.profesion"
                          disabled
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="start">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2>
                      <label>MODALIDAD</label>
                    </v-flex>
                    <v-flex align-self-center xs5>
                      <v-radio-group
                        column
                        :rules="rules"
                        v-model="editedItem.modalidadCurso"
                        disabled
                      >
                        <v-radio
                          label="CURSO DE COMPETENCIA LABORAL"
                          value="CURSO DE COMPETENCIA LABORAL"
                        ></v-radio>
                        <v-radio
                          label="CURSO REGULAR EBC"
                          value="CURSO REGULAR EBC"
                        ></v-radio>
                        <v-radio
                          label="CURSO REGULAR TRADICIONAL"
                          value="CURSO REGULAR TRADICIONAL"
                        ></v-radio>
                        <v-radio
                          label="CURSO DE CAPACITACIÓN ACELERADA ESPECÍFICA A DISTANCIA"
                          value="CURSO DE CAPACITACIÓN ACELERADA ESPECÍFICA A DISTANCIA"
                        ></v-radio>
                        <v-radio
                          label="CURSO DE EXTENSIÓN"
                          value="CURSO DE EXTENSIÓN"
                        ></v-radio>
                        <v-radio
                          label="EVALUACIÓN ROCO"
                          value="EVALUACIÓN ROCO"
                        ></v-radio>
                      </v-radio-group>
                    </v-flex>
                    <v-flex align-self-center xs1> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>TOTAL HORAS</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          type="number"
                          v-model="editedItem.totalHorasCurso"
                          disabled
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>COSTO HORA</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          type="number"
                          v-model="editedItem.costoHora"
                          disabled
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>COSTO TOTAL</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          type="number"
                          v-model="editedItem.costoTotal"
                          disabled
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>PERIODO DE INICIO</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-menu
                          ref="menu"
                          v-model="menu"
                          :close-on-content-click="false"
                          :return-value.sync="editedItem.periodoInicio"
                          transition="scale-transition"
                          offset-y
                          min-width="auto"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="editedItem.periodoInicio"
                              label="PERIODO DE INICIO"
                              prepend-icon="mdi-calendar"
                              readonly
                              v-bind="attrs"
                              v-on="on"
                              :rules="rules"
                              disabled
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            v-model="editedItem.periodoInicio"
                            no-title
                            scrollable
                            locale="es-MX"
                            :rules="rules"
                          >
                            <v-spacer></v-spacer>
                            <v-btn text color="primary" @click="menu = false">
                              Cancel
                            </v-btn>
                            <v-btn
                              text
                              color="primary"
                              @click="$refs.menu.save(editedItem.periodoInicio)"
                            >
                              OK
                            </v-btn>
                          </v-date-picker>
                        </v-menu></v-col
                      >
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>PERIODO DE TÉRMINO</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-menu
                          ref="menu2"
                          v-model="menu2"
                          :close-on-content-click="false"
                          :return-value.sync="editedItem.periodoTermino"
                          transition="scale-transition"
                          offset-y
                          min-width="auto"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="editedItem.periodoTermino"
                              label="PERIODO DE TÉRMINO"
                              prepend-icon="mdi-calendar"
                              readonly
                              v-bind="attrs"
                              v-on="on"
                              :rules="rules"
                              disabled
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            v-model="editedItem.periodoTermino"
                            no-title
                            scrollable
                            locale="es-MX"
                            :rules="rules"
                          >
                            <v-spacer></v-spacer>
                            <v-btn text color="primary" @click="menu2 = false">
                              Cancel
                            </v-btn>
                            <v-btn
                              text
                              color="primary"
                              @click="
                                $refs.menu2.save(editedItem.periodoTermino)
                              "
                            >
                              OK
                            </v-btn>
                          </v-date-picker>
                        </v-menu></v-col
                      >
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2><label>TOTAL</label></v-flex>
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          label="DÍAS DE CAPACITACIÓN"
                          type="number"
                          v-model="editedItem.totalDiasCapacitacion"
                          disabled
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="start">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2>
                      <label>ACCIÓN MÓVIL</label>
                    </v-flex>
                    <v-flex align-self-center xs4>
                      <v-radio-group
                        column
                        :rules="rules"
                        v-model="editedItem.accionMovil"
                        disabled
                      >
                        <v-radio
                          label="DESPLAZAMIENTO INSTRUCTOR"
                          value="DESPLAZAMIENTO INSTRUCTOR"
                        ></v-radio>
                        <v-radio
                          label="DESPLAZAMIENTO INSTRUCTOR Y EQUIPO"
                          value="DESPLAZAMIENTO INSTRUCTOR Y EQUIPO"
                        ></v-radio>
                        <v-radio
                          label="DESPLAZAMIENTO INSTRUCTOR Y UNIDAD MÓVIL"
                          value="DESPLAZAMIENTO INSTRUCTOR Y UNIDAD MÓVIL"
                        ></v-radio>
                      </v-radio-group>
                    </v-flex>
                    <v-flex align-self-center xs2> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="start">
                  <v-layout row justify-center style="height: 120px">
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2>
                      <label>HORARIO</label>
                    </v-flex>
                    <v-flex align-self-center xs3>
                      <v-col> </v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2></v-flex>
                    <v-flex align-self-center xs2> </v-flex>
                    <v-flex align-self-center xs2> </v-flex>
                    <v-flex align-self-center xs2> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center" style="height: 220px">
                  <v-layout row justify-start>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-start xs6>
                      <v-data-table
                        :headers="headersDia"
                        :items="horariosCedula"
                        item-key="nombreDia"
                        class="elevation-1"
                      ></v-data-table
                    ></v-flex>
                    <v-flex align-self-center xs2> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center" style="height: 200px">
                </v-row>
                <v-row justify="center" align="center" style="height: 120px">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>TOTAL HORAS POR SEMANA</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          type="number"
                          v-model="editedItem.totalHorasSemana"
                          disabled
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>ESPECIALIDAD</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          v-model="especialidad.nombre_especialidad"
                          disabled
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>SUBSECTOR</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          v-model="especialidad.subsector"
                          disabled
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>CAMPO DE FORMACIÓN PROFESIONAL</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          v-model="especialidad.campo_formacion"
                          disabled
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>GRUPO ÉTNICO</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          v-model="editedItem.grupoEtnico"
                          disabled
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>TOTAL PARTICIPANTES HOMBRES</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          type="number"
                          v-model="editedItem.totalHombres"
                          disabled
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>TOTAL PARTICIPANTES MUJERES</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          type="number"
                          v-model="editedItem.totalMujeres"
                          disabled
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>TOTAL INSCRITOS</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          type="number"
                          v-model="editedItem.totalInscritos"
                          disabled
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-card-actions>
                  <v-btn
                    outlined
                    color="gray"
                    class="bordeRedondoElement"
                    @click="dialogVer = false"
                  >
                    Cancelar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogEdit" width="1200">
              <v-card class="p-5">
                <v-row justify="center" align="center">
                  <br />
                  <h2 style="color: #2b4c7b">
                    Editar cédula de pre-autorización
                  </h2>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>CURSO SOLICITADO</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          v-model="editedItem.nombre_curso"
                        ></v-text-field>
                      </v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2><label>CLAVE</label></v-flex>
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          v-model="editedItem.clave_curso"
                          disabled
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label
                        >NOMBRE DEL SOLICITANTE O REPRESENTANTE DEL GRUPO</label
                      ></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          v-model="editedItem.nombreRepresentante"
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="start">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2>
                      <label>QUIEN SOLICITA</label>
                    </v-flex>
                    <v-flex align-self-center xs4>
                      <v-radio-group
                        column
                        :rules="rules"
                        v-model="editedItem.solicitaCurso"
                      >
                        <v-radio label="EMPRESA" value="EMPRESA"></v-radio>
                        <v-radio
                          label="ORGANIZACIÓN"
                          value="ORGANIZACIÓN"
                        ></v-radio>
                        <v-radio
                          label="GRUPO PRODUCTIVO"
                          value="GRUPO PRODUCTIVO"
                        ></v-radio>
                        <v-radio
                          label="DEPENDENCIA"
                          value="DEPENDENCIA"
                        ></v-radio>
                      </v-radio-group>
                    </v-flex>
                    <v-flex align-self-center xs2> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2><label>CUAL</label></v-flex>
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          v-model="editedItem.nombreSolicitaCurso"
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2><label>REGIÓN</label></v-flex>
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          v-model="editedItem.region"
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>DISTRITO</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          v-model="editedItem.distrito"
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>MUNICIPIO</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-select
                          v-model="editedItem.c_Municipio"
                          :items="items_municipios"
                          item-text="Descripcion"
                          item-value="c_Municipio"
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
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>LOCALIDAD</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          v-model="editedItem.localidad"
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>SEDE DEL CURSO</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          v-model="editedItem.sedeCurso"
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>DOCENTE</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-select
                          v-model="docenteCedula.idDocente"
                          :items="items_docentes"
                          item-text="fullname"
                          item-value="idDocente"
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
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2><label>RFC</label></v-flex>
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          v-model="docenteCedula.rfc"
                          disabled
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2><label>CURP</label></v-flex>
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          v-model="docenteCedula.curp"
                          disabled
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>PROFESIÓN</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          v-model="docenteCedula.profesion"
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="start">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2>
                      <label>MODALIDAD</label>
                    </v-flex>
                    <v-flex align-self-center xs5>
                      <v-radio-group
                        column
                        :rules="rules"
                        v-model="editedItem.modalidadCurso"
                      >
                        <v-radio
                          label="CURSO DE COMPETENCIA LABORAL"
                          value="CURSO DE COMPETENCIA LABORAL"
                        ></v-radio>
                        <v-radio
                          label="CURSO REGULAR EBC"
                          value="CURSO REGULAR EBC"
                        ></v-radio>
                        <v-radio
                          label="CURSO REGULAR TRADICIONAL"
                          value="CURSO REGULAR TRADICIONAL"
                        ></v-radio>
                        <v-radio
                          label="CURSO DE CAPACITACIÓN ACELERADA ESPECÍFICA A DISTANCIA"
                          value="CURSO DE CAPACITACIÓN ACELERADA ESPECÍFICA A DISTANCIA"
                        ></v-radio>
                        <v-radio
                          label="CURSO DE EXTENSIÓN"
                          value="CURSO DE EXTENSIÓN"
                        ></v-radio>
                        <v-radio
                          label="EVALUACIÓN ROCO"
                          value="EVALUACIÓN ROCO"
                        ></v-radio>
                      </v-radio-group>
                    </v-flex>
                    <v-flex align-self-center xs1> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>TOTAL HORAS</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          type="number"
                          v-model="editedItem.totalHorasCurso"
                          @input="calcular"
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>COSTO HORA</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          type="number"
                          v-model="editedItem.costoHora"
                          @input="calcular"
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>COSTO TOTAL</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          type="number"
                          v-model="editedItem.costoTotal"
                          disabled
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>PERIODO DE INICIO</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-menu
                          ref="menu"
                          v-model="menu"
                          :close-on-content-click="false"
                          :return-value.sync="editedItem.periodoInicio"
                          transition="scale-transition"
                          offset-y
                          min-width="auto"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="editedItem.periodoInicio"
                              label="PERIODO DE INICIO"
                              prepend-icon="mdi-calendar"
                              readonly
                              v-bind="attrs"
                              v-on="on"
                              :rules="rules"
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            v-model="editedItem.periodoInicio"
                            no-title
                            scrollable
                            locale="es-MX"
                            :rules="rules"
                          >
                            <v-spacer></v-spacer>
                            <v-btn text color="primary" @click="menu = false">
                              Cancel
                            </v-btn>
                            <v-btn
                              text
                              color="primary"
                              @click="$refs.menu.save(editedItem.periodoInicio)"
                            >
                              OK
                            </v-btn>
                          </v-date-picker>
                        </v-menu></v-col
                      >
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>PERIODO DE TÉRMINO</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-menu
                          ref="menu2"
                          v-model="menu2"
                          :close-on-content-click="false"
                          :return-value.sync="editedItem.periodoTermino"
                          transition="scale-transition"
                          offset-y
                          min-width="auto"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="editedItem.periodoTermino"
                              label="PERIODO DE TÉRMINO"
                              prepend-icon="mdi-calendar"
                              readonly
                              v-bind="attrs"
                              v-on="on"
                              :rules="rules"
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            v-model="editedItem.periodoTermino"
                            no-title
                            scrollable
                            locale="es-MX"
                            :rules="rules"
                          >
                            <v-spacer></v-spacer>
                            <v-btn text color="primary" @click="menu2 = false">
                              Cancel
                            </v-btn>
                            <v-btn
                              text
                              color="primary"
                              @click="
                                $refs.menu2.save(editedItem.periodoTermino)
                              "
                            >
                              OK
                            </v-btn>
                          </v-date-picker>
                        </v-menu></v-col
                      >
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2><label>TOTAL</label></v-flex>
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          label="DÍAS DE CAPACITACIÓN"
                          type="number"
                          v-model="editedItem.totalDiasCapacitacion"
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="start">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2>
                      <label>ACCIÓN MÓVIL</label>
                    </v-flex>
                    <v-flex align-self-center xs4>
                      <v-radio-group
                        column
                        :rules="rules"
                        v-model="editedItem.accionMovil"
                      >
                        <v-radio
                          label="DESPLAZAMIENTO INSTRUCTOR"
                          value="DESPLAZAMIENTO INSTRUCTOR"
                        ></v-radio>
                        <v-radio
                          label="DESPLAZAMIENTO INSTRUCTOR Y EQUIPO"
                          value="DESPLAZAMIENTO INSTRUCTOR Y EQUIPO"
                        ></v-radio>
                        <v-radio
                          label="DESPLAZAMIENTO INSTRUCTOR Y UNIDAD MÓVIL"
                          value="DESPLAZAMIENTO INSTRUCTOR Y UNIDAD MÓVIL"
                        ></v-radio>
                      </v-radio-group>
                    </v-flex>
                    <v-flex align-self-center xs2> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="start">
                  <v-layout row justify-center style="height: 120px">
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2>
                      <label>HORARIO</label>
                    </v-flex>
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-select
                          v-model="selectDia"
                          :items="items_dias"
                          item-text="nombreDia"
                          item-value="idDia"
                          return-object
                          dense
                          outlined
                          class="bordeRedondoElement"
                          ref="sDia"
                          label="Seleccione un día"
                          clearable
                        ></v-select>
                      </v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2> </v-flex>
                    <v-flex align-self-center xs2>
                      <v-menu
                        ref="menu3"
                        v-model="menu3"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        :return-value.sync="horaInicio"
                        transition="scale-transition"
                        offset-y
                        max-width="290px"
                        min-width="290px"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-model="horaInicio"
                            label="Hora inicio"
                            prepend-icon="mdi-clock-time-four-outline"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                            clearable
                          ></v-text-field>
                        </template>
                        <v-time-picker
                          format="24hr"
                          v-if="menu3"
                          v-model="horaInicio"
                          full-width
                          @click:minute="$refs.menu3.save(horaInicio)"
                        ></v-time-picker>
                      </v-menu>
                    </v-flex>
                    <v-flex align-self-center xs2>
                      <v-menu
                        ref="menu4"
                        v-model="menu4"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        :return-value.sync="horaFin"
                        transition="scale-transition"
                        offset-y
                        max-width="290px"
                        min-width="290px"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-model="horaFin"
                            label="Hora término"
                            prepend-icon="mdi-clock-time-four-outline"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                            clearable
                          ></v-text-field>
                        </template>
                        <v-time-picker
                          format="24hr"
                          v-if="menu4"
                          v-model="horaFin"
                          full-width
                          @click:minute="$refs.menu4.save(horaFin)"
                        ></v-time-picker>
                      </v-menu>
                    </v-flex>
                    <v-flex align-self-center xs2> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2></v-flex>
                    <v-flex align-self-center xs2> </v-flex>
                    <v-flex align-self-center xs2> </v-flex>
                    <v-flex align-self-center xs2> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center" style="height: 65px">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2></v-flex>
                    <v-flex align-self-center xs2>
                      <v-btn text @click="addHorario">
                        <small>Agregar horario</small></v-btn
                      >
                    </v-flex>
                    <v-flex align-self-center xs2> </v-flex>
                    <v-flex align-self-center xs2> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center" style="height: 220px">
                  <v-layout row justify-start>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-start xs6>
                      <v-data-table
                        :headers="headersDia"
                        :items="horariosCedula"
                        item-key="nombreDia"
                        class="elevation-1"
                      >
                        <template v-slot:top>
                          <v-toolbar flat>
                            <v-dialog v-model="dialogDelete2" width="500">
                              <v-card>
                                <v-card-title class="text-h5 white lighten-2">
                                  Eliminar horario
                                </v-card-title>
                                <v-card-text>
                                  ¿Estás seguro que quieres eliminar el horario
                                  seleccionado? Recuerda que no podrás recuperar
                                  la información.
                                </v-card-text>
                                <v-card-actions>
                                  <v-btn
                                    outlined
                                    color="gray"
                                    class="bordeRedondoElement"
                                    @click="dialogDelete2 = false"
                                  >
                                    Cancelar
                                  </v-btn>
                                  <v-btn
                                    outlined
                                    style="
                                      color: #ffffff;
                                      background-color: #2b4c7b;
                                    "
                                    class="bordeRedondoElement"
                                    @click="deleteHorario"
                                    >Continuar</v-btn
                                  >
                                </v-card-actions>
                              </v-card>
                            </v-dialog>
                          </v-toolbar>
                        </template>
                        <template v-slot:[`item.actions`]="{ item }">
                          <v-btn text @click="deleteItem(item)">
                            <v-icon small>mdi-window-close</v-icon
                            ><small>Eliminar</small></v-btn
                          >
                        </template></v-data-table
                      ></v-flex
                    >
                    <v-flex align-self-center xs2> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center" style="height: 200px">
                </v-row>
                <v-row justify="center" align="center" style="height: 120px">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>TOTAL HORAS POR SEMANA</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          type="number"
                          v-model="editedItem.totalHorasSemana"
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>ESPECIALIDAD</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          v-model="especialidad.nombre_especialidad"
                          disabled
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>SUBSECTOR</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          v-model="especialidad.subsector"
                          disabled
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>CAMPO DE FORMACIÓN PROFESIONAL</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          v-model="especialidad.campo_formacion"
                          disabled
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>GRUPO ÉTNICO</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          v-model="editedItem.grupoEtnico"
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>TOTAL PARTICIPANTES HOMBRES</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          type="number"
                          v-model="editedItem.totalHombres"
                          @input="ctotalInscritos"
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>TOTAL PARTICIPANTES MUJERES</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          type="number"
                          v-model="editedItem.totalMujeres"
                          @input="ctotalInscritos"
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-row justify="center" align="center">
                  <v-layout row justify-center>
                    <v-flex align-self-center xs4> </v-flex>
                    <v-flex align-self-center xs2
                      ><label>TOTAL INSCRITOS</label></v-flex
                    >
                    <v-flex align-self-center xs3>
                      <v-col>
                        <v-text-field
                          outlined
                          class="bordeRedondoElement"
                          :rules="rules"
                          type="number"
                          v-model="editedItem.totalInscritos"
                          disabled
                        ></v-text-field
                      ></v-col>
                    </v-flex>
                    <v-flex align-self-center xs3> </v-flex>
                  </v-layout>
                </v-row>
                <v-card-actions>
                  <v-btn
                    outlined
                    color="gray"
                    class="bordeRedondoElement"
                    @click="editCedula(editedItem)"
                    >Guardar cambios</v-btn
                  >
                  <v-btn
                    outlined
                    color="gray"
                    class="bordeRedondoElement"
                    @click="dialogEdit = false"
                  >
                    Cancelar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogValid" width="700">
              <v-card class="p-5">
                <v-row justify="center" align="center">
                  <br />
                  <h2 style="color: #2b4c7b">
                    Validar cédula pre-autorización
                  </h2>
                </v-row>
                <v-card-text>
                  ¿Estás seguro que quiere validar la cédula de pre-autorización
                  seleccionada?
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    outlined
                    color="orangeFooter"
                    class="bordeRedondoElement"
                    @click="enviarValidacionCedula(editedItem.id)"
                    >Validar</v-btn
                  >
                  <v-btn
                    outlined
                    color="gray"
                    class="bordeRedondoElement"
                    @click="dialogValid = false"
                  >
                    Cancelar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" width="500">
              <v-card>
                <v-card-title class="text-h5 white lighten-2">
                  Eliminar cédula de pre-autorización
                </v-card-title>
                <v-card-text>
                  ¿Estás seguro que quieres eliminar la cédula de
                  pre-autorización seleccionada? Recuerda que no podrás
                  recuperar la información.
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    outlined
                    color="gray"
                    class="bordeRedondoElement"
                    @click="dialogDelete = false"
                  >
                    Cancelar
                  </v-btn>
                  <v-btn
                    outlined
                    style="color: #ffffff; background-color: #2b4c7b"
                    class="bordeRedondoElement"
                    @click="deleteCedula()"
                    >Continuar</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-btn text @click="validItem(item)"
              ><v-icon small>mdi-check</v-icon><small>Validar</small></v-btn
            >
            <v-btn text @click="verItem(item)"
              ><v-icon small>mdi-eye-outline</v-icon><small>Ver</small></v-btn
            >
            <v-btn v-if="!item.esValido" text @click="editItem(item)"
              ><v-icon small>mdi-pencil</v-icon><small>Editar</small></v-btn
            >
            <v-btn v-if="!item.esValido" text @click="deleteItem(item)">
              <v-icon small>mdi-window-close</v-icon
              ><small>Eliminar</small></v-btn
            >
          </template></v-data-table
        >
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import AuthService from "@/services/AuthService.js";

export default {
  name: "CedulaCursosRegistradas",

  data: () => ({
    valid: false,
    rules: [(v) => !!v || "Campo requerido"],
    search: "",
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
    items: Array, // <-- La lista de especliades
    datarespuesta: [],
    datarespuestaEdit: [],
    datarespuestaDelete: [],
    dialog: false,
    dialogDelete: false,
    dialogEdit: false,
    dialogValid: false,
    dialogVer: false,
    //Elementos para la tabla
    headers: [
      { text: "Nombre", value: "nombre_curso" },
      {
        text: "Clave",
        align: "start",
        value: "clave_curso",
      },
      { text: "Horas", value: "duracion_horas" },
      { text: "Total inscritos", value: "totalInscritos" },
      { text: "Enviado Validación", value: "esValido" },
      { text: "Aprobado D.A.P.", value: "esValido_DA" },
      { text: "Aprobado D.T.", value: "esValido_DT" },
      { text: " ", value: "actions" },
    ],
    cedulas: [],
    editedItem: "",
    selected: [],
    deleteId: 0,
    editedIndex: -1,
    especialidadValid: false,
    editId: 0,
    menu: false,
    menu2: false,
    user: {
      idUnidad: null,
    },
    items_dias: [
      { idDia: 1, nombreDia: "Lunes" },
      { idDia: 2, nombreDia: "Martes" },
      { idDia: 3, nombreDia: "Miércoles" },
      { idDia: 4, nombreDia: "Jueves" },
      { idDia: 5, nombreDia: "Viernes" },
    ],
    selectDia: {},
    horaInicio: null,
    horaFin: null,
    menu3: false,
    menu4: false,
    dialogDelete2: null,
    headersDia: [
      {
        text: "Día de la semana",
        align: "start",
        sortable: false,
        value: "dia",
      },
      { text: "Hora de Inicio", value: "hora_inicio" },
      { text: "Hora de Término", value: "hora_termino" },
      { text: " ", value: "actions" },
    ],
    especialidad: [],
    horariosCedula: [],
    docenteCedula: [],
    items_municipios: [],
    items_docentes: [],
  }),

  async mounted() {
    try {
      const response = await AuthService.getAllCedulas();
      const response2 = await AuthService.getMunicipios();
      const response3 = await AuthService.getDocentes();
      this.cedulas = response.data;
      this.items_municipios = response2.municipios;
      this.items_docentes = response3.data.map((item) => {
        item.fullname = `${item.nombre} ${item.apellido_paterno} ${item.apellido_materno}`;
        return item;
      });
      console.log("cedulas", this.cedulas);
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    async newForm() {
      try {
        this.$router.push("form-cedula-cursos");
      } catch (error) {
        console.log(error);
      }
    },

    async reloadTable() {
      const response = await AuthService.getAllCedulas();
      this.cedulas = response.data;
      console.log("cedulas", this.cedulas);
    },

    async editCedula(data_item) {
      try {
        console.log("dataEdit", data_item);
        const responseUpdate = await AuthService.updateCedulaPreAutorizacion(
          data_item
        );
        this.datarespuestaEdit = responseUpdate;
        //Aquí debe mandar a la vista de edición
        if (responseUpdate.serverCode == 200) {
          this.dialogEdit = false;
          //this.mostrarAlertEdit = true;
          this.$swal(
            "Editado",
            "Cédula de pre-autorización editada correctamente.",
            "success"
          );
          this.reloadTable();
        } else {
          console.log(responseUpdate.data.errors);
          let error_msg =
            responseUpdate.data.errors[
              Object.keys(responseUpdate.data.errors)[0]
            ][0];
          this.$swal("Error", error_msg, "error");
        }
      } catch (error) {
        console.log(error);
        console.log(error.response.data.errors);
        let error_msg =
          error.response.data.errors[
            Object.keys(error.response.data.errors)[0]
          ][0];
        this.$swal("Error", error_msg, "error");
      }
    },

    async enviarValidacionCedula(idCedula) {
      try {
        let data = {
          id: idCedula,
          esValido: true,
        };
        const responseValid = await AuthService.updateCedulaPreAutorizacion(
          data
        );
        this.datarespuestaEdit = responseValid;
        if (responseValid.serverCode == 200) {
          this.dialogEdit = false;
          this.$swal(
            "Validado",
            "Cédula de pre-autorización validada por el administrador de unidad correctamente.",
            "success"
          );
          this.reloadTable();
          this.dialogValid = false;
        } else {
          let error_msg =
            responseValid.data.errors[
              Object.keys(responseValid.data.errors)[0]
            ][0];
          this.$swal("Error", error_msg, "error");
        }
      } catch (error) {
        let error_msg =
          error.response.data.errors[
            Object.keys(error.response.data.errors)[0]
          ][0];
        this.$swal("Error", error_msg, "error");
      }
    },

    async deleteCedula() {
      try {
        let idDeleteCedula = this.deleteId;
        console.log("confirmDeleteid ", idDeleteCedula);
        const response = await AuthService.deleteCedulaPreAutorizacion(
          idDeleteCedula
        );
        this.datarespuestaDelete = response;
        if (response.serverCode == 200) {
          this.dialogDelete = false;
          //this.mostrarAlertDelete = true;
          this.$swal(
            "Eliminado",
            "Cédula de pre-autorización borrada correctamente.",
            "success"
          );
          this.reloadTable();
        } else {
          let error_msg =
            response.data.errors[Object.keys(response.data.errors)[0]][0];
          this.$swal("Error", error_msg, "error");
        }
      } catch (error) {
        console.log(error);
        console.log(error.response.data.errors);
        let error_msg =
          error.response.data.errors[
            Object.keys(error.response.data.errors)[0]
          ][0];
        this.$swal("Error", error_msg, "error");
      }
    },

    validItem(item) {
      this.editedIndex = this.cedulas.indexOf(item);
      console.log("verIndex ", this.editedIndex);
      this.editedItem = Object.assign({}, item);
      console.log("verItem ", this.editedItem);
      this.dialogValid = true;
      console.log("item ver ", item);
      this.editId = this.editedItem.id;
      console.log("verItem.idCedula ", this.editId);
    },
    verItem(item) {
      this.editedIndex = this.cedulas.indexOf(item);
      console.log("verIndex ", this.editedIndex);
      this.editedItem = Object.assign({}, item);
      this.editedItem.c_Municipio = parseInt(item.c_Municipio, 10);
      console.log("verItem ", this.editedItem);
      this.dialogVer = true;
      console.log("item ver ", item);
      this.editId = this.editedItem.id;
      console.log("verItem.idCedula ", this.editId);
      this.rellenar(this.editedItem);
    },
    editItem(item) {
      this.editedIndex = this.cedulas.indexOf(item);
      console.log("editedIndex ", this.editedIndex);
      this.editedItem = Object.assign({}, item);
      this.editedItem.c_Municipio = parseInt(item.c_Municipio, 10);
      console.log("editedItem ", this.editedItem);
      this.dialogEdit = true;
      console.log("item edit ", item);
      this.editId = this.editedItem.id;
      console.log("editedItem.idCedula ", this.editId);
      this.rellenar(this.editedItem);
    },
    deleteItem(item) {
      this.editedIndex = this.cedulas.indexOf(item);
      console.log("deleteIndex ", this.editedIndex);
      this.editedItem = Object.assign({}, item);
      console.log("deleteItem ", this.editedItem);
      this.deleteId = this.editedItem.id;
      console.log("editedItem.idCedula ", this.deleteId);
      this.dialogDelete = true;
    },

    async rellenar(item_data) {
      const response_es = await AuthService.getEspecialidad(
        item_data.idEspecialidad
      );
      this.especialidad = response_es.data;
      const response_h = await AuthService.getHorarioCedula(item_data.id);
      this.horariosCedula = response_h.data;
      const response_d = await AuthService.getDocente(item_data.idDocente);
      this.docenteCedula = response_d.data;
    },

    async calcular() {
      this.editedItem.costoTotal =
        this.editedItem.totalHorasCurso * this.editedItem.costoHora;
    },

    async ctotalInscritos() {
      this.editedItem.totalInscritos =
        parseInt(this.editedItem.totalMujeres, 10) +
        parseInt(this.editedItem.totalHombres, 10);
    },

    async addHorario() {
      this.editedItem.horario.push({
        dia: this.selectDia.nombreDia,
        hora_inicio: this.horaInicio,
        hora_termino: this.horaFin,
      });
      this.$swal("Guardado", "Horario guardado correctamente.", "success");
    },

    async deleteHorario() {
      if (this.editedItem.horario.length > 0)
        for (var i = 0; i < this.editedItem.horario.length; i++) {
          if (
            this.editedItem.horario[i].dia == this.editedItem.dia &&
            this.editedItem.horario[i].hora_inicio ==
              this.editedItem.hora_inicio &&
            this.editedItem.horario[i].hora_termino ==
              this.editedItem.hora_termino
          ) {
            this.editedItem.horario.splice(i, 1);
            break;
          }
        }

      this.$swal("Borrado", "Horario borrado correctamente.", "success");
      this.dialogDelete = false;
    },

    deleteItemHorario(item) {
      this.editedIndex = this.editedItem.horario.indexOf(item);
      console.log("deleteIndex ", this.editedIndex);
      this.editedItem = Object.assign({}, item);
      console.log("item ", item);
      this.dialogDelete = true;
    },
  },
};
</script>
