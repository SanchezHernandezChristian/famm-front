<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" class="m-0 p-0">
        <div class="indigo darken-4 text-center">
          <p class="white--text pt-3 mb-2">Facilitador para el Acceso a Módulos tecnológicos y Monitoreo educativo</p>
        </div>
      </v-col>
      <v-col cols="12" class="m-0 p-0">
        <div class="text-center">
          <h5>
            <p style="color: #394f79">
              <strong>CÉDULA DE PRE-AUTORIZACIÓN DE CURSOS DE CAPACITACIÓN</strong>
            </p>
            <p style="color: #394f79">
              <strong>FORMATO RUDC-06</strong>
            </p>
          </h5>
        </div>
      </v-col>
      <v-col cols="12" class="m-0 p-0">
        <div class="text-center">
          <p style="color: #aeacac">
            <strong>Rellena todos los campos para completar tu registro.</strong>
          </p>
          <p style="color: #aeacac">
            <strong>*Todos los campos son obligatorios.</strong>
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row
      ><br />
      <p></p
    ></v-row>
    <v-form ref="form_cedula">
      <v-layout row v-if="section1">
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2><label>CURSO SOLICITADO</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col>
                <v-select
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
                ></v-select>
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
              <v-col> <v-text-field outlined class="bordeRedondoElement" :rules="rules" v-model="selectCurso.clave_curso" disabled></v-text-field></v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row>
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2><label>NOMBRE DEL SOLICITANTE O REPRESENTANTE DEL GRUPO</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col> <v-text-field outlined class="bordeRedondoElement" :rules="rules" v-model="form_pre_aut.nombreRepresentante"></v-text-field></v-col>
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
              <v-radio-group column :rules="rules" v-model="form_pre_aut.solicitaCurso">
                <v-radio label="EMPRESA" value="EMPRESA"></v-radio>
                <v-radio label="ORGANIZACIÓN" value="ORGANIZACIÓN"></v-radio>
                <v-radio label="GRUPO PRODUCTIVO" value="GRUPO PRODUCTIVO"></v-radio>
                <v-radio label="DEPENDENCIA" value="DEPENDENCIA"></v-radio>
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
              <v-col> <v-text-field outlined class="bordeRedondoElement" :rules="rules" v-model="form_pre_aut.nombreSolicitaCurso"></v-text-field></v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row>
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2><label>REGIÓN</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col> <v-text-field outlined class="bordeRedondoElement" :rules="rules" v-model="form_pre_aut.region"></v-text-field></v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row>
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2><label>DISTRITO</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col> <v-text-field outlined class="bordeRedondoElement" :rules="rules" v-model="form_pre_aut.distrito"></v-text-field></v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row>
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2><label>MUNICIPIO</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col>
                <v-select
                  v-model="selectMunicipio"
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
            <v-flex align-self-center xs2><label>LOCALIDAD</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col> <v-text-field outlined class="bordeRedondoElement" :rules="rules" v-model="form_pre_aut.localidad"></v-text-field></v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row>
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2><label>SEDE DEL CURSO</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col> <v-text-field outlined class="bordeRedondoElement" :rules="rules" v-model="form_pre_aut.sedeCurso"></v-text-field></v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row>
        <!-- <v-row justify="center" align="center">
        <v-layout row justify-center>
          <v-flex align-self-center xs4> </v-flex>
          <v-flex align-self-center xs2><label>NOMBRE</label></v-flex>
          <v-flex align-self-center xs3>
            <v-col>
              <v-text-field
                outlined
                class="bordeRedondoElement"
                :rules="rules"
              ></v-text-field
            ></v-col>
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
              ></v-text-field
            ></v-col>
          </v-flex>
          <v-flex align-self-center xs3> </v-flex>
        </v-layout>
      </v-row>
      <v-row justify="center" align="center">
        <v-layout row justify-center>
          <v-flex align-self-center xs4> </v-flex>
          <v-flex align-self-center xs2><label>PROFESIÓN</label></v-flex>
          <v-flex align-self-center xs3>
            <v-col>
              <v-text-field
                outlined
                class="bordeRedondoElement"
                :rules="rules"
              ></v-text-field
            ></v-col>
          </v-flex>
          <v-flex align-self-center xs3> </v-flex>
        </v-layout>
      </v-row> -->
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2><label>DOCENTE</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col>
                <v-select
                  v-model="selectDocente"
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
              <v-col> <v-text-field outlined class="bordeRedondoElement" :rules="rules" v-model="selectDocente.rfc" disabled></v-text-field></v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row>
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2><label>CURP</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col> <v-text-field outlined class="bordeRedondoElement" :rules="rules" v-model="selectDocente.curp" disabled></v-text-field></v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row>
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2><label>PROFESIÓN</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col> <v-text-field outlined class="bordeRedondoElement" :rules="rules" v-model="form_pre_aut.profesion"></v-text-field></v-col>
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
              <v-radio-group column :rules="rules" v-model="form_pre_aut.modalidadCurso">
                <v-radio label="CURSO DE COMPETENCIA LABORAL" value="CURSO DE COMPETENCIA LABORAL"></v-radio>
                <v-radio label="CURSO REGULAR EBC" value="CURSO REGULAR EBC"></v-radio>
                <v-radio label="CURSO REGULAR TRADICIONAL" value="CURSO REGULAR TRADICIONAL"></v-radio>
                <v-radio
                  label="CURSO DE CAPACITACIÓN ACELERADA ESPECÍFICA A DISTANCIA"
                  value="CURSO DE CAPACITACIÓN ACELERADA ESPECÍFICA A DISTANCIA"
                ></v-radio>
                <v-radio label="CURSO DE EXTENSIÓN" value="CURSO DE EXTENSIÓN"></v-radio>
                <v-radio label="EVALUACIÓN ROCO" value="EVALUACIÓN ROCO"></v-radio>
              </v-radio-group>
            </v-flex>
            <v-flex align-self-center xs1> </v-flex>
          </v-layout>
        </v-row>
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2><label>TOTAL HORAS</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col>
                <v-text-field
                  outlined
                  class="bordeRedondoElement"
                  :rules="rules"
                  type="number"
                  v-model="form_pre_aut.totalHorasCurso"
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
            <v-flex align-self-center xs2><label>COSTO HORA</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col>
                <v-text-field
                  outlined
                  class="bordeRedondoElement"
                  :rules="rules"
                  type="number"
                  v-model="form_pre_aut.costoHora"
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
            <v-flex align-self-center xs2><label>COSTO TOTAL</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col>
                <v-text-field outlined class="bordeRedondoElement" :rules="rules" type="number" v-model="form_pre_aut.costoTotal" disabled></v-text-field
              ></v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row>
      </v-layout>
      <v-layout row v-if="section2">
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2><label>PERIODO DE INICIO</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col>
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="form_pre_aut.periodoInicio"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="form_pre_aut.periodoInicio"
                      label="PERIODO DE INICIO"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      :rules="rules"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="form_pre_aut.periodoInicio" no-title scrollable locale="es-MX" :rules="rules">
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
                    <v-btn text color="primary" @click="$refs.menu.save(form_pre_aut.periodoInicio)"> OK </v-btn>
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
            <v-flex align-self-center xs2><label>PERIODO DE TÉRMINO</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col>
                <v-menu
                  ref="menu2"
                  v-model="menu2"
                  :close-on-content-click="false"
                  :return-value.sync="form_pre_aut.periodoTermino"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="form_pre_aut.periodoTermino"
                      label="PERIODO DE TÉRMINO"
                      prepend-icon="mdi-calendar"
                      v-bind="attrs"
                      v-on="on"
                      :rules="rules"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="form_pre_aut.periodoTermino" no-title scrollable locale="es-MX" :rules="rules">
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu2 = false"> Cancel </v-btn>
                    <v-btn text color="primary" @click="$refs.menu2.save(form_pre_aut.periodoTermino)"> OK </v-btn>
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
                  v-model="form_pre_aut.totalDiasCapacitacion"
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
              <v-radio-group column :rules="rules" v-model="form_pre_aut.accionMovil">
                <v-radio label="DESPLAZAMIENTO INSTRUCTOR" value="DESPLAZAMIENTO INSTRUCTOR"></v-radio>
                <v-radio label="DESPLAZAMIENTO INSTRUCTOR Y EQUIPO" value="DESPLAZAMIENTO INSTRUCTOR Y EQUIPO"></v-radio>
                <v-radio label="DESPLAZAMIENTO INSTRUCTOR Y UNIDAD MÓVIL" value="DESPLAZAMIENTO INSTRUCTOR Y UNIDAD MÓVIL"></v-radio>
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
                  :rules="rules"
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
                    :rules="rules"
                  ></v-text-field>
                </template>
                <v-time-picker format="24hr" v-if="menu3" v-model="horaInicio" full-width @click:minute="$refs.menu3.save(horaInicio)"></v-time-picker>
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
                    :rules="rules"
                  ></v-text-field>
                </template>
                <v-time-picker format="24hr" v-if="menu4" v-model="horaFin" full-width @click:minute="$refs.menu4.save(horaFin)"></v-time-picker>
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
              <v-btn text @click="addHorario"> <small>Agregar horario</small></v-btn>
            </v-flex>
            <v-flex align-self-center xs2> </v-flex>
            <v-flex align-self-center xs2> </v-flex>
          </v-layout>
        </v-row>
        <v-row justify="center" align="center" style="height: 220px">
          <v-layout row justify-start>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-start xs6>
              <v-data-table :headers="headers" :items="form_pre_aut.horario" item-key="nombreDia" class="elevation-1">
                <template v-slot:top>
                  <v-toolbar flat>
                    <v-dialog v-model="dialogDelete" width="500">
                      <v-card>
                        <v-card-title class="text-h5 white lighten-2"> Eliminar horario </v-card-title>
                        <v-card-text>
                          ¿Estás seguro que quieres eliminar el horario seleccionado? Recuerda que no podrás recuperar la información.
                        </v-card-text>
                        <v-card-actions>
                          <v-btn outlined color="gray" class="bordeRedondoElement" @click="dialogDelete = false"> Cancelar </v-btn>
                          <v-btn outlined style="color: #ffffff; background-color: #2b4c7b" class="bordeRedondoElement" @click="deleteHorario">Continuar</v-btn>
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
        <v-row justify="center" align="center" style="height: 200px"> </v-row>
        <v-row justify="center" align="center" style="height: 120px">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2><label>TOTAL HORAS POR SEMANA</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col>
                <v-text-field outlined class="bordeRedondoElement" :rules="rules" type="number" v-model="form_pre_aut.totalHorasSemana"></v-text-field
              ></v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row>
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2><label>ESPECIALIDAD</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col>
                <v-text-field outlined class="bordeRedondoElement" :rules="rules" v-model="selectCurso.nombre_especialidad" disabled></v-text-field
              ></v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row>
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2><label>SUBSECTOR</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col> <v-text-field outlined class="bordeRedondoElement" :rules="rules" v-model="selectCurso.subsector" disabled></v-text-field></v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row>
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2><label>CAMPO DE FORMACIÓN PROFESIONAL</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col> <v-text-field outlined class="bordeRedondoElement" :rules="rules" v-model="selectCurso.campo_formacion" disabled></v-text-field></v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row>
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2><label>GRUPO ÉTNICO</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col> <v-text-field outlined class="bordeRedondoElement" :rules="rules" v-model="form_pre_aut.grupoEtnico"></v-text-field></v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row>
        <v-row justify="center" align="center">
          <v-layout row justify-center>
            <v-flex align-self-center xs4> </v-flex>
            <v-flex align-self-center xs2><label>TOTAL PARTICIPANTES HOMBRES</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col>
                <v-text-field
                  outlined
                  class="bordeRedondoElement"
                  :rules="rules"
                  type="number"
                  v-model="form_pre_aut.totalHombres"
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
            <v-flex align-self-center xs2><label>TOTAL PARTICIPANTES MUJERES</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col>
                <v-text-field
                  outlined
                  class="bordeRedondoElement"
                  :rules="rules"
                  type="number"
                  v-model="form_pre_aut.totalMujeres"
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
            <v-flex align-self-center xs2><label>TOTAL INSCRITOS</label></v-flex>
            <v-flex align-self-center xs3>
              <v-col>
                <v-text-field outlined class="bordeRedondoElement" :rules="rules" type="number" v-model="form_pre_aut.totalInscritos" disabled></v-text-field
              ></v-col>
            </v-flex>
            <v-flex align-self-center xs3> </v-flex>
          </v-layout>
        </v-row>
      </v-layout>
    </v-form>
    <v-row style="height: 70px"></v-row>
    <v-row v-if="section1">
      <div class="text-center">
        <v-layout row justify-end>
          <v-flex align-self-center xs5></v-flex>
          <v-flex align-self-center xs2>
            <v-btn depressed color="#FFFFFF" elevation="0" class="ma-2" @click="pageSig"
              >Siguiente <i class="fa fa-long-arrow-right" aria-hidden="true"></i
            ></v-btn>
          </v-flex>
          <v-flex align-self-center xs4></v-flex>
          <v-flex align-self-center xs1><label>Página 1 de 2</label></v-flex>
          <!-- <v-flex align-self-center xs1
            ><v-text-field
              value=" 1"
              outlined
              disabled
              style="width: 50px; height: 50px"
            ></v-text-field>
          </v-flex>
          <v-flex align-self-center xs1><label>de 3</label></v-flex> -->
          <!-- <v-flex align-self-center xs1
            ><v-pagination
              prev-icon="mdi-menu-left"
              next-icon="mdi-menu-right"
            ></v-pagination
          ></v-flex> -->
        </v-layout>
      </div>
    </v-row>
    <v-row v-if="section2">
      <div class="text-center">
        <v-layout row justify-end>
          <v-flex align-self-center xs2></v-flex>
          <v-flex align-self-center xs2>
            <v-btn depressed color="#FFFFFF" elevation="0" class="ma-2" @click="pageAnt"
              ><i class="fa fa-long-arrow-left" aria-hidden="true"> Anterior</i></v-btn
            >
          </v-flex>
          <v-flex align-self-center xs2>
            <template>
              <div class="text-center">
                <v-dialog v-model="dialog" width="500">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" v-bind="attrs" v-on="on"> GUARDAR </v-btn>
                  </template>
                  <v-card>
                    <v-card-title class="text-h5 white lighten-2"> ¡ATENCIÓN! </v-card-title>
                    <v-card-text> SI TODOS LOS DATOS SON CORRECTOS DA CLICK EN CONTINUAR </v-card-text>
                    <v-card-actions>
                      <v-btn outlined color="gray" @click="dialog = false"> Cancelar </v-btn>
                      <v-btn outlined style="color: #ffffff; background-color: #2b4c7b" @click="createCedula">Continuar</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>
            </template>
          </v-flex>
          <v-flex align-self-center xs2><v-btn outlined color="gray" @click="clean">LIMPIAR</v-btn></v-flex>
          <v-flex align-self-center xs2><v-btn outlined color="gray" @click="cancel">CANCELAR</v-btn></v-flex>
          <v-flex align-self-center xs1></v-flex>
          <v-flex align-self-center xs1><label>Página 2 de 2</label></v-flex>
          <!-- <v-flex align-self-center xs1
            ><v-text-field
              value=" 1"
              outlined
              disabled
              style="width: 50px; height: 50px"
            ></v-text-field>
          </v-flex>
          <v-flex align-self-center xs1><label>de 3</label></v-flex> -->
          <!-- <v-flex align-self-center xs1
            ><v-pagination
              prev-icon="mdi-menu-left"
              next-icon="mdi-menu-right"
            ></v-pagination
          ></v-flex> -->
        </v-layout>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import AuthService from '@/services/AuthService.js';

export default {
  data() {
    return {
      rules: [(v) => !!v || 'Campo requerido'],
      page: 1,
      menu: false,
      menu2: false,
      section1: true,
      section2: false,
      dialog: false,
      items_municipios: [],
      items_escolaridad: [],
      items_cursos: [],
      items_docentes: [],
      items_especialidades: [],
      form_pre_aut: {
        idCurso: null,
        c_Municipio: null,
        idDocente: null,
        idEspecialidad: null,
        solicitaCurso: null,
        nombreSolicitaCurso: null,
        nombreRepresentante: null,
        region: null,
        distrito: null,
        localidad: null,
        sedeCurso: null,
        modalidadCurso: null,
        totalHorasCurso: null,
        costoHora: null,
        costoTotal: null,
        periodoInicio: null,
        periodoTermino: null,
        totalDiasCapacitacion: null,
        accionMovil: null,
        totalHorasSemana: null,
        grupoEtnico: null,
        totalInscritos: null,
        totalHombres: null,
        totalMujeres: null,
        profesion: null,
        //esValido: null,
        horario: [
          // {
          //     dia: "Lunes",
          //     hora_inicio: "10:00",
          //     hora_termino: "14:00"
          // },
          // {
          //     dia: "Jueves",
          //     hora_inicio: "16:00",
          //     hora_termino: "18:00"
          // },
        ],
      },
      selectMunicipio: {},
      selectCurso: {},
      selectEspecialidad: {},
      selectDocente: {},
      user: {
        idUnidad: null,
      },
      items_dias: [
        { idDia: 1, nombreDia: 'Lunes' },
        { idDia: 2, nombreDia: 'Martes' },
        { idDia: 3, nombreDia: 'Miércoles' },
        { idDia: 4, nombreDia: 'Jueves' },
        { idDia: 5, nombreDia: 'Viernes' },
      ],
      selectDia: {},
      horaInicio: null,
      horaFin: null,
      menu3: false,
      menu4: false,
      dialogDelete: null,
      headers: [
        {
          text: 'Día de la semana',
          align: 'start',
          sortable: false,
          value: 'dia',
        },
        { text: 'Hora de Inicio', value: 'hora_inicio' },
        { text: 'Hora de Término', value: 'hora_termino' },
        { text: ' ', value: 'actions' },
      ],
      editedItem: '',
      editedIndex: -1,
    };
  },

  async mounted() {
    let me = this;
    if (me.$store.getters.isLoggedIn) {
      try {
        const response = await AuthService.getMunicipios();
        const response2 = await AuthService.getEscolaridad();
        //const response6 = await AuthService.getCursos();
        const response4 = await AuthService.getDocentes();
        const response5 = await AuthService.getEspecialidades();
        me.items_municipios = response.municipios;
        me.items_escolaridad = response2.data;
        //me.items_cursos = response3.cursos;
        //me.items_docentes = response4.data;
        me.items_docentes = response4.data.map((item) => {
        item.fullname = `${item.nombre} ${item.apellido_paterno} ${item.apellido_materno}`;
        return item;
      });
        me.items_especialidades = response5.especialidades;
        const response3 = await AuthService.getProfile();
        this.user.idUnidad = response3.idCentro_capacitacion;
        const response6 = await AuthService.getAllAssignUnidad(this.user.idUnidad);
        this.items_cursos = response6.cursos;
        console.log('cursosAsignados', this.items_cursos);
      } catch (error) {
        console.log('Error', error.response);
      }
    }
  },

  methods: {
    async createCedula() {
      let me = this;
      if (me.$refs.form_cedula.validate()) {
        try {
          me.form_pre_aut.c_Municipio = this.selectMunicipio.c_Municipio;
          me.form_pre_aut.idCurso = this.selectCurso.idCurso;
          me.form_pre_aut.idDocente = this.selectDocente.idDocente;
          me.form_pre_aut.idEspecialidad = this.selectCurso.idEspecialidad;
          console.log(me.form_pre_aut);
          if (me.form_pre_aut.periodoInicio > me.form_pre_aut.periodoTermino) {
            me.$swal('Advertencia', 'La fecha de inicio debe ser menor a la fecha de término.', 'warning');
          } else if (me.horaInicio > me.horaFin) {
            me.$swal('Advertencia', 'La hora de inicio debe ser menor a la hora de término.', 'warning');
          } else {
            await AuthService.addCedulaPreAut(me.form_pre_aut);
            Object.assign(me.$data, me.$options.data());
            me.$refs.form_cedula.resetValidation();
            me.$swal('Guardado', 'Información guardada correctamente.', 'success').then(() => {
              me.$router.push('/cedula-pre-autorizada');
            });
          }
        } catch (error) {
          console.log(error.response);
          me.$swal('Error', 'Error al intentar guardar la información.', 'error');
        }
      } else {
        me.s1_valid = false;
        me.$swal('Advertencia', 'No ha completado la información solicitada.', 'warning');
      }
    },

    async pageSig() {
      this.page++;
      console.log('page: ', this.page);
      this.section1 = false;
      this.section2 = true;
    },

    async pageAnt() {
      this.page--;
      console.log('page: ', this.page);
      this.section2 = false;
      this.section1 = true;
    },

    async calcular() {
      this.form_pre_aut.costoTotal = this.form_pre_aut.totalHorasCurso * this.form_pre_aut.costoHora;
    },

    async ctotalInscritos() {
      //parseInt(this.duracion, 10),
      this.form_pre_aut.totalInscritos = parseInt(this.form_pre_aut.totalMujeres, 10) + parseInt(this.form_pre_aut.totalHombres, 10);
    },

    async addHorario() {
      var aux = 0;
      if (this.form_pre_aut.horario.length > 0) {
        for (var i = 0; i < this.form_pre_aut.horario.length; i++) {
          if (
            this.form_pre_aut.horario[i].dia == this.selectDia.nombreDia &&
            this.form_pre_aut.horario[i].hora_inicio == this.horaInicio &&
            this.form_pre_aut.horario[i].hora_termino == this.horaFin
          )
            aux = +1;
        }
      }
      if (aux > 0) this.$swal('Advertencia', 'Ya existe un horario para el mismo día.', 'warning');
      else {
        this.form_pre_aut.horario.push({
          dia: this.selectDia.nombreDia,
          hora_inicio: this.horaInicio,
          hora_termino: this.horaFin,
        });
        this.$swal('Guardado', 'Horario guardado correctamente.', 'success');
      }
      aux = 0;
    },

    async clean() {
      try {
        this.$refs.form_cedula.reset();
      } catch (error) {
        console.log(error);
      }
    },

    async cancel() {
      this.$router.push('/cedula-pre-autorizada');
    },

    deleteItem(item) {
      this.editedIndex = this.form_pre_aut.horario.indexOf(item);
      console.log('deleteIndex ', this.editedIndex);
      this.editedItem = Object.assign({}, item);
      console.log('item ', item);
      this.dialogDelete = true;
    },

    async deleteHorario() {
      if (this.form_pre_aut.horario.length > 0)
        for (var i = 0; i < this.form_pre_aut.horario.length; i++) {
          if (
            this.form_pre_aut.horario[i].dia == this.editedItem.dia &&
            this.form_pre_aut.horario[i].hora_inicio == this.editedItem.hora_inicio &&
            this.form_pre_aut.horario[i].hora_termino == this.editedItem.hora_termino
          ) {
            this.form_pre_aut.horario.splice(i, 1);
            break;
          }
        }

      this.$swal('Borrado', 'Horario borrado correctamente.', 'success');
      this.dialogDelete = false;
    },
  },
};
</script>
